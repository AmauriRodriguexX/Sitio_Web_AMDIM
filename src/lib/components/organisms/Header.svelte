<!-- Header.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { globalState } from '$lib/state.svelte';

  let isScrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/quienes-somos', label: 'Quiénes somos' },
    { href: '/modelos', label: 'Modelos' },
    { href: '/distribuidores', label: 'Distribuidores' },
    { href: '/bolsa-trabajo', label: 'Bolsa de Trabajo' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/contacto', label: 'Contacto' }
  ];

  function isActiveLink(href: string) {
    const currentPath = $page.url.pathname.replace(/\/+$/, '') || '/';
    return currentPath === href;
  }
</script>

<header id="site-header" class="glass-panel" class:scrolled={isScrolled}>
  <div class="logo-container">
    <a href="/" onclick={() => globalState.closeMobileMenu()}>
      <!-- Logotipo oficial de AMDIM -->
      <img src="/assets/images/logos/AMIDM_LOGO NUEVO solo rojo.png" alt="AMDIM Logo" class="brand-logo">
    </a>
  </div>
  
  <!-- Botón Menú Hamburguesa para Móvil -->
  <button 
    class="menu-toggle" 
    class:open={globalState.mobileMenuOpen}
    aria-label="Abrir menú de navegación"
    onclick={() => globalState.toggleMobileMenu()}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav id="main-nav" class:open={globalState.mobileMenuOpen}>
    <ul>
      {#each links as link}
        <li>
          <a 
            href={link.href} 
            class="nav-link" 
            class:active={isActiveLink(link.href)}
            onclick={() => globalState.closeMobileMenu()}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<!-- Overlay de navegación móvil -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
  id="nav-overlay" 
  class:open={globalState.mobileMenuOpen}
  onclick={() => globalState.closeMobileMenu()}
></div>

