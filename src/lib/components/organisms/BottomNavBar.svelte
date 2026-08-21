<!-- BottomNavBar.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { globalState } from '$lib/state.svelte';

  const bottomLinks = [
    { href: '/', icon: 'home', title: 'Inicio' },
    { href: '/modelos', icon: 'directions_car', title: 'Modelos' },
    { href: '/distribuidores', icon: 'location_on', title: 'Distribuidores' },
    { href: '/bolsa-trabajo', icon: 'work', title: 'Bolsa de Trabajo' },
    { href: '/noticias', icon: 'article', title: 'Noticias' }
  ];
</script>

<nav class="mobile-bottom-nav">
  {#each bottomLinks as link}
    <a 
      href={link.href} 
      class="bottom-nav-link" 
      class:active={$page.url.pathname === link.href}
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

