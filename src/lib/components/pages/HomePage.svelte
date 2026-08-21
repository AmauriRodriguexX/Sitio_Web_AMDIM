<!-- +page.svelte (Inicio) -->
<script lang="ts">
  import { onMount } from 'svelte';

  let videoElement = $state<HTMLVideoElement | null>(null);

  onMount(() => {
    if (videoElement) {
      videoElement.play().catch(() => {
        console.log('Autoplay blocked, needs user interaction.');
      });
    }
  });
</script>

<section id="inicio" class="content-section">
  <div class="hero-container">
    <!-- Hero Video de Portada -->
    <video bind:this={videoElement} id="hero-video" autoplay loop muted playsinline>
      <source src="https://buckmitsu.s3.us-west-2.amazonaws.com/site/core/home/videos/video-intro.mp4" type="video/mp4">
      <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-car-driving-through-the-city-at-night-40243-large.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay">
      <h1>Asociación Mexicana de Distribuidores Mitsubishi</h1>
      <p>Representando, vinculando y protegiendo a la red de distribuidores de Mitsubishi Motors en México desde 2004.</p>
    </div>
  </div>

  <!-- Información Bienvenidos y Mapa de Ubicación -->
  <div class="home-info">
    <h2>Bienvenidos a AMDIM</h2>
    <p>Somos una organización mexicana sin fines de lucro enfocada en promover y fortalecer el crecimiento de nuestros asociados dentro del sector automotriz, impulsando la excelencia y la cercanía de la marca con sus clientes.</p>
    
    <div class="home-grid">
      <!-- Datos de contacto rápido -->
      <div class="quick-contact glass-card">
        <h3>Contacto AMDIM</h3>
        <p>
          <strong>Dirección de Oficina:</strong>
          Juan Vázquez de Mella 481, Piso 2-203, Los Morales Polanco, Miguel Hidalgo, Ciudad de México, C.P. 11510.
          <br>
          <a href="https://share.google/QtGnfhG1QBZp3ZqRw" target="_blank" rel="noopener noreferrer" class="google-business-link">
            <span class="material-symbols-outlined">location_on</span> Ver en Google Maps
          </a>
        </p>
        <p>
          <strong>Teléfono AMDIM:</strong>
          <a href="tel:5552553904">55 5255 3904</a>
        </p>
        <p>
          <strong>Teléfono Sociedad de Publicidad AMDIM:</strong>
          <a href="tel:5555454381">55 5545 4381</a>
        </p>
        <p>
          <strong>LinkedIn Oficial:</strong>
          <a href="https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/" target="_blank" rel="noopener noreferrer">Asociación Mexicana Distribuidores Mitsubishi, A.C.</a>
        </p>
      </div>

      <!-- Ubicación interactiva de Google Maps -->
      <div class="map-container glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
          <h3 style="margin: 0;">Nuestras oficinas</h3>
        </div>
        <div id="google-map-home">
          <iframe 
            title="Google Maps AMDIM"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7758369687796!2d-99.21140142520352!3d19.433918881848527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20309eb25f4fb%3A0x375d0a721ec0e6e5!2sAsociaci%C3%B3n%20Mexicana%20de%20Distribuidores%20Mitsubishi%2C%20A.C.!5e0!3m2!1ses-419!2smx!4v1722190000000!5m2!1ses-419!2smx" 
            width="100%" 
            height="100%" 
            allowfullscreen 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</section>

