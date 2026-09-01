<!-- BottomNavBar.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { globalState } from '$lib/state.svelte';

  const bottomLinks = [
    { href: '/', icon: 'home', title: 'Inicio' },
    { href: '/modelos', icon: 'directions_car', title: 'Modelos' },
    { href: '/distribuidores', icon: 'location_on', title: 'Distribuidores' },
    { href: '/bolsa-trabajo', icon: 'work', title: 'Bolsa de Trabajo' },
    { href: '/noticias', icon: 'article', title: 'Noticias' }
  ];

  function isActiveLink(href: string) {
    const currentPath = $page.url.pathname.slice(base.length).replace(/\/+$/, '') || '/';
    return currentPath === href;
  }
</script>

<nav class="mobile-bottom-nav">
  {#each bottomLinks as link}
    <a
      href="{base}{link.href}"
      class="bottom-nav-link"
      class:active={isActiveLink(link.href)}
      title={link.title}
      onclick={() => globalState.closeMobileMenu()}
    >
      <span class="material-symbols-outlined">{link.icon}</span>
    </a>
  {/each}
  
  <button 
    class="menu-toggle bottom-nav-menu-toggle" 
    class:open={globalState.mobileMenuOpen}
    aria-label="Abrir menú" 
    title="Más"
    onclick={() => globalState.toggleMobileMenu()}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>
