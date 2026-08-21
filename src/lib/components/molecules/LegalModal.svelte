<!-- LegalModal.svelte -->
<script lang="ts">
  import { globalState } from '$lib/state.svelte';

  const LEGALES_CONTENT = {
    privacidad: {
      titulo: "Aviso de Privacidad Integral",
      cuerpo: `
        <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">1. Identidad y Domicilio de los Responsables</h4>
        <p style="margin-bottom:15px;">La <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong> (RFC: AMD0404226K6) y sus Distribuidores Autorizados (en adelante, "Los Responsables"), reconocen la importancia del tratamiento legítimo, controlado e informado de sus datos personales conforme a la LFPDPPP.</p>
        <p style="margin-bottom:15px;"><strong>Domicilio de la Asociación:</strong> Juan Vázquez de Mella número 481, Piso 2, Oficina 203, Colonia Los Morales Polanco, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.</p>
        <p style="margin-bottom:15px;"><strong>Domicilio de Distribuidores:</strong> El domicilio de la agencia autorizada seleccionada por el usuario o más cercana a su domicilio, la cual actúa como corresponsable.</p>
        
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">2. Datos Personales Recabados</h4>
        <p style="margin-bottom:15px;">Recabamos datos a través de formularios en el sitio web:</p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
            <li><strong>Identificación y Contacto:</strong> Nombre completo, correo electrónico, teléfono (fijo y móvil, incluyendo WhatsApp).</li>
            <li><strong>Intereses Comerciales:</strong> Modelo de interés, tipo de cotización (compra, arrendamiento, prueba de manejo), y datos de auto a cuenta.</li>
            <li><strong>Tecnológicos:</strong> Dirección IP, tipo de navegador, tiempo de navegación (a través de cookies y web beacons).</li>
        </ul>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">3. Finalidades del Tratamiento</h4>
        <p style="margin-bottom:10px;"><strong>A. Finalidades Primarias (Necesarias):</strong></p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
            <li>Dar seguimiento a solicitudes de cotización, información o citas para prueba de manejo.</li>
            <li>Transferir sus datos al Distribuidor Autorizado de su elección para gestionar su proceso de compraventa.</li>
            <li>Prevenir y detectar actos de fraude, phishing o suplantación de identidad.</li>
        </ul>
        <p style="margin-bottom:10px;"><strong>B. Finalidades Secundarias (No Necesarias):</strong></p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
            <li>Envío de publicidad, ofertas comerciales y promociones sobre productos y servicios de Mitsubishi Motors.</li>
            <li>Encuestas de satisfacción y medición de calidad de servicio.</li>
        </ul>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">4. Transferencia de Datos</h4>
        <p style="margin-bottom:15px;">Sus datos podrán ser transferidos sin necesidad de consentimiento (según Art. 37 LFPDPPP) a: Distribuidores Autorizados (para seguimiento comercial), Proveedores clave de CRM (Milestone, Seekop, SugarCRM) y autoridades competentes.</p>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">5. Derechos ARCO</h4>
        <p style="margin-bottom:15px;">Usted puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos. Para ejercerlos, envíe una solicitud firmada por correo electrónico a: <strong>bit@amdim.com.mx</strong>.</p>
        <p style="margin-bottom:15px;">Cualquier modificación a este aviso será informada en: <strong>informacionamdim@amdim.com.mx</strong>.</p>
      `
    },
    legal: {
      titulo: "Aviso Legal",
      cuerpo: `
        <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">1. Información del Sitio</h4>
        <p style="margin-bottom:15px;">El titular de este portal web es la <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong> (AMDIM), con domicilio de operaciones en Juan Vázquez de Mella número 481, Piso 2, Oficina 203, Colonia Los Morales Polanco, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.</p>
        
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">2. Propiedad Intelectual e Industrial</h4>
        <p style="margin-bottom:15px;">El usuario reconoce que todos los logotipos, marcas comerciales, isotipos (incluyendo los tres diamantes), nombres comerciales, textos y videos exhibidos en este portal son propiedad industrial e intelectual de <strong>Mitsubishi Motors de México, S.A. de C.V.</strong> (MMDM) o de terceros colaboradores que han licenciado su uso.</p>
        <p style="margin-bottom:15px;">Queda estrictamente prohibida la copia, reproducción, distribución, comunicación pública o alteración comercial de dichos elementos sin la previa autorización escrita de MMDM.</p>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">3. Exclusión de Responsabilidad de Precios</h4>
        <p style="margin-bottom:15px;">La información relacionada con modelos de vehículos, equipamiento, precios y promociones es meramente ilustrativa e informativa. Los precios finales, especificaciones técnicas y condiciones de venta oficiales siempre deben validarse directamente de forma presencial o telefónica con el Distribuidor Autorizado de su elección.</p>
      `
    },
    cookies: {
      titulo: "Política de Cookies",
      cuerpo: `
        <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">1. ¿Qué son las Cookies?</h4>
        <p style="margin-bottom:15px;">Las Cookies son pequeños archivos de texto que los sitios web almacenan en su computadora o dispositivo móvil para recordar sus preferencias, historial de navegación o datos de formularios con el fin de optimizar su experiencia de usuario.</p>
        
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">2. Cookies Utilizadas</h4>
        <p style="margin-bottom:15px;">Los portales web de AMDIM y sus distribuidores utilizan cookies con fines funcionales y analíticos:</p>
        <ul style="margin-left: 20px; margin-bottom: 15px; list-style-type: disc;">
            <li><strong>Cookies de Rendimiento y Analítica:</strong> Google Analytics, Milestone y Seekop para recopilar datos anónimos de comportamiento de navegación y tráfico.</li>
            <li><strong>Cookies de Publicidad:</strong> Meta/Facebook Pixel para segmentar audiencias y mostrar publicidad relevante de Mitsubishi Motors.</li>
            <li><strong>Cookies Funcionales:</strong> Para mantener la sesión del usuario, recordar filtros de búsqueda e interacciones del chat.</li>
        </ul>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">3. Aceptación y Desactivación</h4>
        <p style="margin-bottom:15px;">Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies. En cualquier momento, usted puede bloquear, deshabilitar o borrar estas cookies cambiando la configuración de privacidad de su navegador web (Chrome, Edge, Firefox, Safari, etc.). Tenga en cuenta que deshabilitar cookies funcionales podría afectar el correcto funcionamiento de algunas secciones del portal.</p>
      `
    },
    terminos: {
      titulo: "Términos y Condiciones de Uso",
      cuerpo: `
        <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">1. Aceptación y Jurisdicción</h4>
        <p style="margin-bottom:15px;">Al acceder y hacer uso de este portal web, el usuario acepta de manera expresa y sin reservas los presentes Términos y Condiciones, así como el Aviso de Privacidad Integral de Los Responsables.</p>
        <p style="margin-bottom:15px;">Para la resolución de cualquier controversia derivada del uso del sitio, las partes se someten a las leyes aplicables de los Estados Unidos Mexicanos y a la jurisdicción de los Tribunales Competentes de la Ciudad de México, renunciando a cualquier otro fuero.</p>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; font-weight:700;">2. Responsabilidad Legal del Proceso de Venta</h4>
        <p style="margin-bottom:15px;"><strong>El usuario reconoce que la Asociación Mexicana de Distribuidores Mitsubishi, A.C. (AMDIM) actúa única y exclusivamente como un intermediario corporativo facilitador de información técnica y captador de interés (leads).</strong></p>
        <p style="margin-bottom:15px;">La responsabilidad legal definitiva sobre cualquier cotización, apartado de unidades, negociación económica, compraventa, facturación, entrega de vehículos, y garantías comerciales recae exclusiva y directamente en el <strong>Distribuidor Autorizado</strong> que gestione la transacción, deslindando por completo a la AMDIM.</p>

        <h4 style="color:var(--color-red); margin: 20px 0 10px 0; background: rgba(237,0,0,0.1); padding: 10px; border-left: 3px solid var(--color-red); font-weight:700;">3. Advertencia Oficial Anti-Fraude</h4>
        <p style="margin-bottom:15px; font-weight:700; color:var(--color-white);">“TODO DEPÓSITO O TRANSFERENCIA DEBERÁ SER REALIZADO ÚNICAMENTE EN LA CAJA FÍSICA AUTORIZADA DE LA AGENCIA Y/O A UNA CUENTA BANCARIA CORPORATIVA A NOMBRE DE LA COMPAÑÍA DEL DISTRIBUIDOR AUTORIZADO. BAJO NINGUNA CIRCUNSTANCIA SE DEBEN REALIZAR APARTADOS O DEPÓSITOS A NOMBRE DE UNA PERSONA FÍSICA (COMO ASESORES DE VENTAS).”</p>
        <p style="margin-bottom:15px;">La AMDIM y los Distribuidores no se hacen responsables de ninguna pérdida financiera, fraude o perjuicio derivado de transferencias realizadas a cuentas no oficiales o depósitos a cuentas personales.</p>
      `
    }
  };

  let content = $derived(globalState.activeLegalType ? LEGALES_CONTENT[globalState.activeLegalType] : null);
</script>

{#if globalState.activeLegalType && content}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div id="legal-modal" class="modal-apply" style="display: flex;" onclick={(e) => { if (e.target === e.currentTarget) globalState.closeLegal(); }}>
    <div class="modal-content glass-panel" style="max-width: 800px; width: 95%;">
      <button class="modal-close-icon material-symbols-outlined" onclick={() => globalState.closeLegal()}>close</button>
      <h3 id="legal-modal-title" style="display: flex; align-items: center; gap: 10px; font-weight: 700;">
        <span class="material-symbols-outlined" style="color: var(--color-red); font-size:1.6rem; vertical-align:middle; margin-right:8px;">gavel</span>
        {content.titulo}
      </h3>
      <div id="legal-modal-body" style="margin-top: 20px; max-height: 60vh; overflow-y: auto; padding-right: 10px; font-size: 0.9rem; text-align: justify; color: var(--color-text-secondary); line-height: 1.6;">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html content.cuerpo}
      </div>
      <button type="button" id="btn-close-legal-modal" class="btn btn--ghost-light btn-close" onclick={() => globalState.closeLegal()}>Cerrar Documento</button>
    </div>
  </div>
{/if}

