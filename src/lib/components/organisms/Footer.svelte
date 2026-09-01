<!-- Footer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { globalState } from '$lib/state.svelte';
</script>

<footer id="site-footer">
  <div class="footer-content">
    <p>&copy; 2026 Asociación Mexicana de Distribuidores Mitsubishi, A.C. Todos los derechos reservados.</p>
    <p>Juan Vázquez de Mella 481, Piso 2-203, Los Morales Polanco, C.P. 11510, Ciudad de México.</p>
    
    <div class="footer-social">
      <a href="https://www.google.com/maps/place/Asociaci%C3%B3n+Mexicana+de+Distribuidores+Mitsubishi,+A.C./@19.4339139,-99.2088265,17z/data=!3m1!4b1!4m6!3m5!1s0x85d20309eb25f4fb:0x375d0a721ec0e6e5!8m2!3d19.4339139!4d-99.2088265!16s%2Fg%2F11zd6gp9x2" target="_blank" class="footer-social-link">
        <span class="material-symbols-outlined" style="font-size: 1.1rem; vertical-align: middle;">location_on</span>
        <span>Ubicación en Google Maps</span>
      </a>
      <a href="https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/" target="_blank" class="footer-social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink: 0; vertical-align: middle; display: inline-block;">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
        <span>LinkedIn Oficial AMDIM</span>
      </a>
      <a href="https://www.mitsubishi-motors.mx/" target="_blank" class="footer-social-link">
        <span class="material-symbols-outlined" style="font-size: 1.1rem; vertical-align: middle;">language</span>
        <span>Mitsubishi Motors de México</span>
      </a>
    </div>

    <div class="footer-links">
      <a href="{base}/">Inicio</a> |
      <a href="{base}/quienes-somos">Nosotros</a> |
      <a href="{base}/contacto">Contacto</a> |
      <br class="mobile-break" style="display: none;">
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="javascript:void(0)" class="legal-link" onclick={() => globalState.openLegal('privacidad')}>Aviso de Privacidad</a> | 
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="javascript:void(0)" class="legal-link" onclick={() => globalState.openLegal('legal')}>Aviso Legal</a> | 
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="javascript:void(0)" class="legal-link" onclick={() => globalState.openLegal('cookies')}>Cookies</a> | 
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="javascript:void(0)" class="legal-link" onclick={() => globalState.openLegal('terminos')}>Términos y Condiciones</a>
    </div>
  </div>
</footer>
