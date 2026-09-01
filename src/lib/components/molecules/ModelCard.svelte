<!-- ModelCard.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  interface Props {
    id: string;
    name: string;
    price: string;
    badge: string;
    description: string;
    category: string;
    techDocUrl: string;
    catalogUrl: string;
    financeUrl: string;
    sequence: string[];
  }

  let { 
    id, 
    name, 
    price, 
    badge, 
    description, 
    category, 
    techDocUrl, 
    catalogUrl, 
    financeUrl, 
    sequence 
  }: Props = $props();

  let activeIdx = $state(0);
  let rotateInterval = $state<any>(null);
  let isMouseDown = $state(false);
  let startX = $state(0);
  let startFrameIdx = $state(0);
  let isHovering = $state(false);
  let hasDragged = $state(false);
  let containerEl = $state<HTMLDivElement | null>(null);

  // Auto-play / Preload images
  onMount(() => {
    // Preload sequence
    sequence.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const handleGlobalMouseUp = () => {
      if (isMouseDown) {
        isMouseDown = false;
        if (containerEl) containerEl.style.cursor = 'grab';
        if (isHovering) {
          startAutoRotate();
        } else {
          setActiveFrame(0);
        }
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      stopAutoRotate();
    };
  });

  function setActiveFrame(newIdx: number) {
    if (newIdx !== activeIdx) {
      activeIdx = newIdx;
    }
  }

  function startAutoRotate() {
    if (rotateInterval) clearInterval(rotateInterval);
    rotateInterval = setInterval(() => {
      if (!isMouseDown) {
        const nextIdx = (activeIdx + 1) % sequence.length;
        setActiveFrame(nextIdx);
      }
    }, 950); // Pausada y elegante
  }

  function stopAutoRotate() {
    if (rotateInterval) {
      clearInterval(rotateInterval);
      rotateInterval = null;
    }
  }

  function onMouseEnter() {
    isHovering = true;
    if (!isMouseDown) {
      startAutoRotate();
    }
  }

  function onMouseLeave() {
    isHovering = false;
    stopAutoRotate();
    if (!isMouseDown) {
      setActiveFrame(0);
    }
  }

  function onMouseDown(e: MouseEvent | TouchEvent) {
    // Support mouse main click only
    if ('button' in e && e.button !== 0) return;
    isMouseDown = true;
    hasDragged = false;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    startX = clientX;
    startFrameIdx = activeIdx;
    stopAutoRotate();
    if (containerEl) containerEl.style.cursor = 'grabbing';
  }

  function onMouseMove(e: MouseEvent | TouchEvent) {
    if (!isMouseDown || !containerEl) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;

    if (Math.abs(deltaX) > 5) {
      hasDragged = true;
    }

    if (hasDragged) {
      const width = containerEl.getBoundingClientRect().width || 300;
      const frameShift = Math.floor((deltaX / width) * sequence.length * 1.3);
      let targetIdx = (startFrameIdx + frameShift) % sequence.length;
      if (targetIdx < 0) targetIdx += sequence.length;
      setActiveFrame(targetIdx);
    }
  }

  function onCardClick(e: MouseEvent) {
    // If the click is on the card buttons, ignore redirect
    if ((e.target as HTMLElement).closest('.model-card-buttons')) return;
    
    if (hasDragged) {
      hasDragged = false;
      return;
    }
    
    // Redirect to distributors page
    goto(`${base}/distribuidores`);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
  class="model-card glass-card" 
  data-model={id} 
  data-category={category}
  onclick={onCardClick}
>
  <span class="model-badge">{badge}</span>
  
  <!-- Contenedor 360° -->
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <div 
    bind:this={containerEl}
    class="model-image-container"
    style="cursor: grab;"
    onmouseenter={onMouseEnter}
    onmouseleave={onMouseLeave}
    onmousedown={onMouseDown}
    onmousemove={onMouseMove}
    ontouchstart={onMouseDown}
    ontouchmove={onMouseMove}
  >
    {#each sequence as src, idx}
      <img 
        src={src} 
        alt={`${name} vista 360 ${idx + 1}`}
        class="three-sixty-image"
        class:active-360={idx === activeIdx}
      />
    {/each}
  </div>

  <h3 style="cursor: pointer;">{name}</h3>
  <div class="model-price">{price}</div>
  <p>{description}</p>
  
  <div class="model-card-buttons">
    <a href={techDocUrl} target="_blank" download={`${name}-Ficha-Tecnica.pdf`} class="btn btn--primary btn-download btn-full">
      Descargar Ficha Técnica
    </a>
    <a href={catalogUrl} target="_blank" class="btn btn--ghost-light btn-download btn-half">
      Ver Catálogo
    </a>
    <a href={financeUrl} target="_blank" class="btn btn--outline-red btn-download btn-half">
      Financiamiento
    </a>
  </div>
</div>
