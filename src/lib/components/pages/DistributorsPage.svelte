<!-- distribuidores/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { globalState } from '$lib/state.svelte';
  import { DISTRIBUIDORES_INICIALES, type Distribuidor } from '$lib/data';

  // Search input and dropdowns
  let searchQuery = $state('');
  let selectedState = $state('');
  let selectedDistId = $state<string | null>(null);
  let showAutocomplete = $state(false);

  // Lists & stats
  let distributors = $state<Distribuidor[]>([]);
  let uniqueStates = $state<string[]>([]);
  let autocompleteMatches = $state<any[]>([]);

  // Leaflet references
  let mapEl = $state<HTMLDivElement | null>(null);
  let map: any = null;
  let markers: Record<string, { marker: any; redIcon: any; activeRedIcon: any }> = {};
  let stateLayersGroup: any = null;
  let stateLayersByName: Record<string, any> = {};

  // Initialize and load from localStorage
  onMount(() => {
    // Check localstorage or save initial list
    const stored = localStorage.getItem('amdim_distribuidores');
    if (stored) {
      distributors = JSON.parse(stored);
    } else {
      distributors = DISTRIBUIDORES_INICIALES;
      localStorage.setItem('amdim_distribuidores', JSON.stringify(DISTRIBUIDORES_INICIALES));
    }

    // Sort unique states
    uniqueStates = [...new Set(distributors.map(d => d.estado))].filter(Boolean).sort();

    // Map initialization
    if (mapEl && typeof window !== 'undefined' && (window as any).L) {
      const L = (window as any).L;
      
      map = L.map(mapEl, {
        center: [23.6345, -102.5528],
        zoom: 5,
        zoomControl: true
      });

      // CartoDB Dark Matter
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Pins divIcon
      const redIcon = L.divIcon({
        className: 'mitsubishi-leaflet-pin',
        html: `<div style="background-color: #E2001A; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #FFFFFF; box-shadow: 0 0 10px rgba(226,0,26,0.8);"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      const activeRedIcon = L.divIcon({
        className: 'mitsubishi-leaflet-pin-active',
        html: `<div style="background-color: #E2001A; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #FFFFFF; box-shadow: 0 0 15px rgba(226,0,26,1); animation: pulsePin 1.5s infinite;"></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      // Draw GeoJSON states
      const geojsonData = (window as any).MEXICO_STATES_GEOJSON;
      if (geojsonData) {
        stateLayersGroup = L.geoJSON(geojsonData, {
          style: () => ({ ...STATE_POLYGON_DEFAULT_STYLE }),
          onEachFeature: (feature: any, layer: any) => {
            const name = feature.properties && feature.properties.name;
            if (name) {
              stateLayersByName[cleanStateName(name)] = layer;
            }
          }
        }).addTo(map);
      }

      // Render markers
      distributors.forEach(dist => {
        if (dist.lat && dist.lng) {
          const marker = L.marker([dist.lat, dist.lng], { icon: redIcon }).addTo(map);
          const popupContent = `
            <div style="font-family: inherit; color: #111; padding: 4px;">
              <strong style="color: #E2001A; font-size: 0.95rem; display: block; margin-bottom: 4px; text-transform: uppercase;">${dist.nombre.toUpperCase()}</strong>
              <span style="font-size: 0.8rem; color: #444; display: block; margin-bottom: 8px; text-transform: uppercase;">${dist.direccion.toUpperCase()}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dist.direccion)}" target="_blank" style="display: inline-block; background: #E2001A; color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; text-decoration: none; font-weight: 600;">CÓMO LLEGAR &rarr;</a>
            </div>
          `;
          marker.bindPopup(popupContent);
          marker.on('click', () => {
            selectDistributor(dist, false);
          });
          markers[dist.id] = { marker, redIcon, activeRedIcon };
        }
      });
    }

    // Click outside handler for autocomplete
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-input-wrapper')) {
        showAutocomplete = false;
      }
    };
    window.addEventListener('click', clickOutside);

    return () => {
      window.removeEventListener('click', clickOutside);
    };
  });

  // State polygon styling
  const STATE_POLYGON_DEFAULT_STYLE = {
    color: '#E2001A',
    weight: 0,
    opacity: 0,
    fill: false,
    fillColor: 'transparent',
    fillOpacity: 0,
    interactive: false
  };

  const STATE_POLYGON_ACTIVE_STYLE = {
    color: '#E2001A',
    weight: 2,
    opacity: 1,
    fill: false,
    fillColor: 'transparent',
    fillOpacity: 0,
    interactive: false
  };

  // String helpers
  function cleanText(text: string) {
    return text.toString().toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function cleanDirNoCP(dir: string) {
    return cleanText(dir)
      .replace(/\bc\.?p\.?\s*\d{4,5}\b/gi, "")
      .replace(/\b\d{4,5}\b/gi, "");
  }

  function cleanStateName(name: string) {
    const clean = cleanText(name || '');
    if (clean === 'cdmx' || clean === 'df' || clean === 'distrito federal') return 'ciudad de mexico';
    if (clean === 'edomex' || clean === 'estado de mexico' || clean === 'mexico') return 'estado de mexico';
    if (clean === 'ags' || clean === 'aguascalientes') return 'aguascalientes';
    if (clean === 'pue' || clean === 'puebla') return 'puebla';
    if (clean === 'ver' || clean === 'veracruz') return 'veracruz';
    if (clean === 'jal' || clean === 'jalisco') return 'jalisco';
    if (clean === 'nl' || clean === 'nuevo leon') return 'nuevo leon';
    if (clean === 'sin' || clean === 'sinaloa') return 'sinaloa';
    if (clean === 'yuc' || clean === 'yucatan') return 'yucatan';
    if (clean === 'qro' || clean === 'queretaro') return 'queretaro';
    if (clean === 'gto' || clean === 'guanajuato') return 'guanajuato';
    if (clean === 'chih' || clean === 'chihuahua') return 'chihuahua';
    if (clean === 'son' || clean === 'sonora') return 'sonora';
    if (clean === 'dgo' || clean === 'durango') return 'durango';
    if (clean === 'bc' || clean === 'baja california') return 'baja california';
    if (clean === 'bcs' || clean === 'baja california sur') return 'baja california sur';
    return clean;
  }

  // Polygon highlighting and camera zoom
  function highlightState(stateName: string | null) {
    if (!stateLayersGroup) return false;

    Object.values(stateLayersByName).forEach(layer => {
      layer.setStyle(STATE_POLYGON_DEFAULT_STYLE);
    });

    if (!stateName) return false;

    const layer = stateLayersByName[cleanStateName(stateName)];
    if (!layer) return false;

    layer.setStyle(STATE_POLYGON_ACTIVE_STYLE);
    layer.bringToFront();

    if (map) {
      map.flyToBounds(layer.getBounds(), { padding: [35, 35], maxZoom: 9, animate: true, duration: 1.1 });
    }
    return true;
  }

  // Geolocation math
  function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // Select distributor and trigger map flyTo
  function selectDistributor(dist: Distribuidor, scrollCard = true) {
    selectedDistId = dist.id;

    if (scrollCard) {
      setTimeout(() => {
        const activeCard = document.querySelector(`.distributor-card[data-id="${dist.id}"]`);
        if (activeCard) {
          activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }

    if (map && dist.lat && dist.lng) {
      map.flyTo([dist.lat, dist.lng], 12, { animate: true, duration: 1.2 });
      
      // Update icons
      Object.keys(markers).forEach(id => {
        const item = markers[id];
        if (id === dist.id) {
          item.marker.setIcon(item.activeRedIcon);
          item.marker.openPopup();
        } else {
          item.marker.setIcon(item.redIcon);
        }
      });
    }
  }

  // Clear query helper
  function clearSearch() {
    resetMap(false);
  }

  // Trigger state selection drop-down filter
  function handleStateChange() {
    selectedDistId = null;
    showAutocomplete = false;

    if (!map || !selectedState) return;

    // Los estados oficiales se enfocan con sus límites GeoJSON. Algunas
    // entradas del directorio son ciudades, por lo que usan sus marcadores.
    if (highlightState(selectedState)) return;

    const L = (window as any).L;
    const stateDistributors = distributors.filter((dist) => dist.estado === selectedState);
    const bounds = L.latLngBounds();

    stateDistributors.forEach((dist) => {
      if (dist.lat && dist.lng) bounds.extend([dist.lat, dist.lng]);
    });

    if (bounds.isValid()) {
      map.flyToBounds(bounds, { padding: [35, 35], maxZoom: 10, animate: true, duration: 1.1 });
    }
  }

  // User location GPS
  function useLocation() {
    globalState.showToast("Solicitando tu ubicación actual...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          globalState.showToast("Buscando distribuidor más cercano...");
          
          setTimeout(() => {
            let closestDist = null;
            let minDistance = Infinity;
            
            distributors.forEach(dist => {
              if (dist.lat && dist.lng) {
                const d = calcularDistancia(userLat, userLng, dist.lat, dist.lng);
                if (d < minDistance) {
                  minDistance = d;
                  closestDist = dist;
                }
              }
            });
            
            if (!closestDist && distributors.length > 0) closestDist = distributors[0];
            
            if (closestDist) {
              selectedDistId = closestDist.id;
              selectedState = "";
              searchQuery = "";
              selectDistributor(closestDist, true);
              globalState.showToast(`Distribuidor más cercano: ${closestDist.nombre} (a ${minDistance.toFixed(1)} km)`);
            }
          }, 500);
        },
        (error) => {
          console.warn("Geolocalización no disponible: ", error);
          globalState.showToast("Ubicación denegada. Usa la barra de búsqueda por ciudad, estado o nombre.");
        }
      );
    } else {
      globalState.showToast("La geolocalización no está soportada por tu navegador.");
    }
  }

  // Reset Map View
  function resetMap(showToast = true) {
    selectedDistId = null;
    searchQuery = "";
    selectedState = "";
    showAutocomplete = false;
    
    if (map) {
      highlightState(null);
      map.flyTo([23.6345, -102.5528], 5, { animate: true, duration: 1.2 });
      Object.keys(markers).forEach(id => {
        const item = markers[id];
        item.marker.setIcon(item.redIcon);
        item.marker.closePopup();
      });
    }
    if (showToast) {
      globalState.showToast("Vista panorámica de la República Mexicana restaurada.");
    }
  }

  // Derived state: check if query is a postal code
  let isPostalCodeQuery = $derived(/^\d{4,5}$/.test(searchQuery.trim()) || /^c\.?p\.?\s*\d{4,5}$/i.test(searchQuery.trim()));

  // Derived state: filtered list of distributors
  let filteredDistributors = $derived.by(() => {
    if (isPostalCodeQuery) return [];

    const fQuery = cleanText(searchQuery);

    return distributors.filter(dist => {
      const matchState = !selectedState || dist.estado === selectedState;
      
      const cleanName = cleanText(dist.nombre);
      const cleanDir = cleanDirNoCP(dist.direccion);
      const cleanSt = cleanText(dist.estado);
      
      const matchSearch = !fQuery || 
                          cleanName.includes(fQuery) || 
                          cleanDir.includes(fQuery) ||
                          cleanSt.includes(fQuery) ||
                          dist.telefono.includes(fQuery);
                          
      return matchState && matchSearch;
    });
  });

  // Autocomplete updates dynamically
  $effect(() => {
    const query = searchQuery.trim();
    if (query.length < 1 || isPostalCodeQuery) {
      autocompleteMatches = [];
      return;
    }

    const cleanQuery = cleanText(query);
    const matches: any[] = [];
    const addedStates = new Set<string>();

    // 1. Match states
    const allStates = [...new Set(distributors.map(d => d.estado))].filter(Boolean);
    allStates.forEach(state => {
      const cleanSt = cleanText(state);
      const aliasSt = cleanStateName(state);
      
      if (cleanSt.includes(cleanQuery) || aliasSt.includes(cleanQuery) || cleanQuery.includes(cleanSt) || cleanQuery.includes(aliasSt)) {
        if (!addedStates.has(cleanSt)) {
          addedStates.add(cleanSt);
          matches.push({
            type: 'state',
            label: state.toUpperCase(),
            subText: 'ESTADO',
            icon: 'map',
            stateValue: state
          });
        }
      }
    });

    // 2. Match distributors
    distributors.forEach(dist => {
      const cleanName = cleanText(dist.nombre);
      const cleanDir = cleanDirNoCP(dist.direccion);
      
      if (cleanName.includes(cleanQuery) || cleanDir.includes(cleanQuery)) {
        matches.push({
          type: 'dealer',
          label: dist.nombre.toUpperCase(),
          subText: dist.estado.toUpperCase(),
          icon: 'storefront',
          distObj: dist
        });
      }
    });

    autocompleteMatches = matches.slice(0, 7);
  });

  // Autocomplete item click
  function selectAutocompleteItem(match: any) {
    if (match.type === 'state') {
      selectedState = match.stateValue;
      searchQuery = match.label;
      selectedDistId = null;
    } else if (match.type === 'dealer') {
      searchQuery = match.label;
      selectedDistId = match.distObj.id;
      // Fly map to item
      selectDistributor(match.distObj, true);
    }
    showAutocomplete = false;
  }

  // React to search filtering to auto zoom state layers if needed
  $effect(() => {
    // If maps is loaded
    if (!map) return;

    if (selectedDistId) {
      const activeDist = filteredDistributors.find(d => d.id === selectedDistId);
      if (activeDist) {
        highlightState(activeDist.estado);
        // Ensure active icon
        Object.keys(markers).forEach(id => {
          const item = markers[id];
          if (id === selectedDistId) {
            item.marker.setIcon(item.activeRedIcon);
          } else {
            item.marker.setIcon(item.redIcon);
          }
        });
      }
    } else if (selectedState) {
      highlightState(selectedState);
      const matchedIds = new Set(filteredDistributors.map(d => d.id));
      Object.keys(markers).forEach(id => {
        const item = markers[id];
        if (matchedIds.has(id)) {
          item.marker.setIcon(item.redIcon);
        } else {
          item.marker.setIcon(item.redIcon);
          item.marker.closePopup();
        }
      });
    } else if (searchQuery.trim() !== "" && !isPostalCodeQuery) {
      const queryText = searchQuery.trim();
      const matchedState = highlightState(queryText);

      if (matchedState) {
        const matchedIds = new Set(filteredDistributors.map(d => d.id));
        Object.keys(markers).forEach(id => {
          const item = markers[id];
          if (matchedIds.has(id)) {
            item.marker.setIcon(item.activeRedIcon || item.redIcon);
          } else {
            item.marker.setIcon(item.redIcon);
            item.marker.closePopup();
          }
        });
      } else if (filteredDistributors.length === 1) {
        highlightState(filteredDistributors[0].estado);
        selectDistributor(filteredDistributors[0], true);
      } else {
        highlightState(null);
        const bounds = (window as any).L.latLngBounds();
        let hasCoords = false;

        filteredDistributors.forEach(dist => {
          if (dist.lat && dist.lng) {
            bounds.extend([dist.lat, dist.lng]);
            hasCoords = true;
          }
        });

        const matchedIds = new Set(filteredDistributors.map(d => d.id));
        Object.keys(markers).forEach(id => {
          const item = markers[id];
          if (matchedIds.has(id)) {
            item.marker.setIcon(item.activeRedIcon || item.redIcon);
          } else {
            item.marker.setIcon(item.redIcon);
            item.marker.closePopup();
          }
        });
        
        if (hasCoords) {
          map.flyToBounds(bounds, { padding: [40, 40], maxZoom: 11, animate: true, duration: 1.1 });
        }
      }
    } else {
      // Normal state, clear highlighting
      highlightState(null);
      Object.keys(markers).forEach(id => {
        const item = markers[id];
        item.marker.setIcon(item.redIcon);
        item.marker.closePopup();
      });
    }
  });
</script>

<section id="distribuidores" class="content-section">
  <div class="section-header">
    <h2>Red de distribuidores</h2>
    <p>Localiza tu distribuidor autorizado Mitsubishi Motors más cercano en México.</p>
  </div>

  <!-- Controles de Búsqueda y Geolocalización -->
  <div class="search-bar-container" style="max-width: 1200px; margin: 0 auto 30px auto; width: 100%; display: flex; flex-direction: column; gap: 12px;">
    <div class="search-bar" style="margin-bottom: 0;">
      <div style="position: relative; flex-grow: 1; display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
        
        <!-- Input con Autocomplete -->
        <div class="search-input-wrapper">
          <input 
            id="distribuidor-search"
            type="text" 
            placeholder="BUSCAR POR CIUDAD, ESTADO O NOMBRE..." 
            autocomplete="off" 
            style="width: 100%; padding-right: 42px;"
            bind:value={searchQuery}
            onfocus={() => showAutocomplete = searchQuery.trim().length >= 1}
            oninput={() => showAutocomplete = searchQuery.trim().length >= 1}
            onkeydown={(e) => { if(e.key === 'Escape') showAutocomplete = false; }}
          />
          {#if searchQuery.trim().length > 0}
            <button type="button" class="search-clear-btn" aria-label="Limpiar búsqueda" onclick={clearSearch}>
              <span class="material-symbols-outlined">close</span>
            </button>
          {/if}

          <!-- Autocomplete Dropdown -->
          {#if showAutocomplete && autocompleteMatches.length > 0}
            <div class="autocomplete-dropdown">
              {#each autocompleteMatches as match}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="autocomplete-item" class:is-state={match.type === 'state'} onclick={() => selectAutocompleteItem(match)}>
                  <span class="material-symbols-outlined autocomplete-item-icon">{match.icon}</span>
                  <span style="font-weight: 600;">{match.label}</span>
                  <span class="autocomplete-item-tag">{match.subText}</span>
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <select class="filter-select" bind:value={selectedState} onchange={handleStateChange}>
          <option value="">TODOS LOS ESTADOS</option>
          {#each uniqueStates as state}
            <option value={state}>{state.toUpperCase()}</option>
          {/each}
        </select>
        
        <button class="btn btn--primary" style="flex-shrink: 0;" onclick={useLocation}>
          Usar ubicación
        </button>
        <button class="btn btn--outline-red" style="flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px;" onclick={() => resetMap()}>
          <span class="material-symbols-outlined" style="font-size: 1.1rem;">public</span>
          Ver Todo México
        </button>
      </div>
    </div>
    
    <div id="search-stats">
      {#if isPostalCodeQuery}
        BÚSQUEDA POR CÓDIGO POSTAL INHABILITADA (BUSCA POR ESTADO O NOMBRE)
      {:else if filteredDistributors.length === 1}
        1 DISTRIBUIDOR ENCONTRADO {selectedState ? `EN ${selectedState.toUpperCase()}` : ''}
      {:else if filteredDistributors.length > 0}
        {filteredDistributors.length} DISTRIBUIDORES ENCONTRADOS {selectedState ? `EN ${selectedState.toUpperCase()}` : ''}
      {:else}
        NO SE ENCONTRARON DISTRIBUIDORES QUE COINCIDAN.
      {/if}
    </div>
  </div>

  <div class="distribuidos-layout">
    <!-- Mapa de distribuidores -->
    <div bind:this={mapEl} id="distribuidores-map" class="map-view">
      <div class="map-placeholder-content">
        <span class="material-symbols-outlined" style="font-size: 3rem; color: var(--color-red); margin-bottom: 15px;">location_on</span>
        <h3>Red de distribuidores Mitsubishi</h3>
        <p>Usa la barra de búsqueda para geolocalizar al distribuidor.</p>
      </div>
    </div>
    
    <!-- Directorio -->
    <div class="directory-container">
      <h3>Directorio</h3>
      <div id="directory-list" class="directory-grid">
        {#if isPostalCodeQuery}
          <p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0; text-transform: uppercase;">
            LAS BÚSQUEDAS POR CÓDIGO POSTAL ESTÁN DESACTIVADAS. POR FAVOR SELECCIONA UN ESTADO O ESCRIBE EL NOMBRE DE TU DISTRIBUIDOR.
          </p>
        {:else if filteredDistributors.length === 0}
          <p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0; text-transform: uppercase;">
            NO SE ENCONTRARON DISTRIBUIDORES QUE COINCIDAN CON "{searchQuery.toUpperCase()}".
          </p>
        {:else}
          {#each filteredDistributors as dist (dist.id)}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div 
              class="distributor-card glass-card" 
              class:active={dist.id === selectedDistId} 
              data-id={dist.id}
              onclick={() => selectDistributor(dist, false)}
            >
              <div class="distributor-card-img">
                <img src="/assets/images/facades/real_facade.png" alt={dist.nombre.toUpperCase()} loading="lazy">
              </div>
              <div class="distributor-card-info">
                <div class="distributor-card-header">
                  <h4>{dist.nombre.toUpperCase()}</h4>
                  <span class="distributor-card-state-badge">{dist.estado.toUpperCase()}</span>
                </div>
                <div class="distributor-card-body">
                  <p style="display: flex; align-items: center; gap: 8px;">
                    <span class="material-symbols-outlined" style="font-size: 0.95rem; color: var(--color-red);">call</span>
                    <strong>TELÉFONO:</strong> 
                    <a href="tel:{dist.telefono.replace(/\s+/g, '')}" style="color: var(--color-text-secondary); text-decoration: none;" onclick={(e) => e.stopPropagation()}>{dist.telefono}</a>
                  </p>
                  <p style="display: flex; align-items: flex-start; gap: 8px;">
                    <span class="material-symbols-outlined" style="font-size: 0.95rem; color: var(--color-red); margin-top: 2px;">location_on</span>
                    <span style="text-transform: uppercase;">{dist.direccion.toUpperCase()}</span>
                  </p>
                </div>
                <div class="distributor-card-actions">
                  <a href={dist.web} target="_blank" onclick={(e) => e.stopPropagation()}>
                    <span class="material-symbols-outlined">language</span> VISITAR SITIO
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(dist.direccion)}" target="_blank" onclick={(e) => e.stopPropagation()}>
                    <span class="material-symbols-outlined">navigation</span> CÓMO LLEGAR
                  </a>
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

