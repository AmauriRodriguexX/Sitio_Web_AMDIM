<!-- contacto/+page.svelte -->
<script lang="ts">
  import { globalState } from '$lib/state.svelte';

  let name = $state('');
  let lastname = $state('');
  let email = $state('');
  let phone = $state('');
  let comments = $state('');

  function handleSubmit(e: Event) {
    e.preventDefault();
    globalState.showToast("Enviando mensaje...");
    setTimeout(() => {
      globalState.showToast(`Gracias ${name}. Comentarios enviados a buzonamdim@amdim.com.mx.`);
      // Reset form
      name = '';
      lastname = '';
      email = '';
      phone = '';
      comments = '';
    }, 1500);
  }
</script>

<section id="contacto" class="content-section">
  <div class="section-header">
    <h2>Contacto</h2>
    <p>Déjanos tus comentarios y nos pondremos en contacto contigo a la brevedad.</p>
  </div>

  <div class="contacto-layout">
    <!-- Formulario de contacto -->
    <div class="contacto-form-container glass-card">
      <h3 style="display: flex; align-items: center; gap: 10px; font-weight: 700; margin-bottom: 25px;">
        <span class="material-symbols-outlined" style="color: var(--color-red); font-size: 1.6rem;">mail</span>
        Enviar mensaje
      </h3>
      <form id="form-contacto" onsubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group">
            <label for="contact-name">Nombre:</label>
            <input type="text" id="contact-name" placeholder="Ej. Juan" required bind:value={name}>
          </div>
          <div class="form-group">
            <label for="contact-lastname">Apellido:</label>
            <input type="text" id="contact-lastname" placeholder="Ej. Pérez" required bind:value={lastname}>
          </div>
        </div>

        <div class="form-group">
          <label for="contact-email">Correo Electrónico:</label>
          <input type="email" id="contact-email" placeholder="ejemplo@correo.com" required bind:value={email}>
        </div>

        <div class="form-group">
          <label for="contact-phone">Teléfono:</label>
          <input type="tel" id="contact-phone" placeholder="Ej. 5512345678" required bind:value={phone}>
        </div>

        <div class="form-group">
          <label for="contact-comments">Escriba su comentario:</label>
          <textarea id="contact-comments" rows="5" placeholder="¿En qué podemos ayudarte?" required bind:value={comments}></textarea>
        </div>

        <button type="submit" class="btn btn--primary btn-submit">Enviar mensaje</button>
      </form>
    </div>

    <!-- Info de oficinas de AMDIM -->
    <div class="contacto-info glass-card">
      <h3>Oficinas centrales</h3>
      <p>
        <strong>Dirección:</strong> Juan Vázquez de Mella 481, Piso 2-203, Los Morales Polanco, Miguel Hidalgo, Ciudad de México, C.P. 11510.
        <br>
        <a href="https://www.google.com/maps/place/Asociaci%C3%B3n+Mexicana+de+Distribuidores+Mitsubishi,+A.C./@19.4339139,-99.2088265,17z/data=!3m1!4b1!4m6!3m5!1s0x85d20309eb25f4fb:0x375d0a721ec0e6e5!8m2!3d19.4339139!4d-99.2088265!16s%2Fg%2F11zd6gp9x2" target="_blank" rel="noopener noreferrer" class="maps-link">
          <span class="material-symbols-outlined" style="font-size: 1.05rem;">location_on</span> Ver ubicación en Google Maps
        </a>
      </p>
      <p><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM.</p>
      <p><strong>Correo electrónico directo:</strong> <a href="mailto:buzonamdim@amdim.com.mx" class="direct-link">buzonamdim@amdim.com.mx</a></p>
      <p><strong>Teléfonos:</strong> <br>AMDIM: <a href="tel:5552553904" class="direct-link">55 5255 3904</a> <br>Sociedad de Publicidad AMDIM: <a href="tel:5555454381" class="direct-link">55 5545 4381</a></p>
    </div>
  </div>
</section>

