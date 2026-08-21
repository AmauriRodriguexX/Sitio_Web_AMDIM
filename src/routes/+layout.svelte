<!-- +layout.svelte -->
<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/organisms/Header.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import BottomNavBar from '$lib/components/organisms/BottomNavBar.svelte';
  import LegalModal from '$lib/components/molecules/LegalModal.svelte';
  import Toast from '$lib/components/molecules/Toast.svelte';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-[#060606] text-white">
  <Header />
  
  <main class="flex-1 pt-[100px]">
    {@render children()}
  </main>
  
  <Footer />
  <BottomNavBar />
  <LegalModal />
  <Toast />
</div>
