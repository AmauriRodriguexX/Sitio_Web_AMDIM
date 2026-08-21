<!-- bolsa-trabajo/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { globalState } from '$lib/state.svelte';
  import { VACANTES_INICIALES, type Vacante } from '$lib/data';

  let selectedState = $state('');
  let vacancies = $state<Vacante[]>([]);
  let uniqueStates = $state<string[]>([]);
  
  // Modal active state
  let activeJob = $state<Vacante | null>(null);
  let showModal = $state(false);

  // Form bindings
  let applyName = $state('');
  let applyEmail = $state('');
  let applyPhone = $state('');
  let fileInputEl = $state<HTMLInputElement | null>(null);
  let cvFile = $state<File | null>(null);
  let isDragOver = $state(false);

  onMount(() => {
    const stored = localStorage.getItem('amdim_vacantes');
    if (stored) {
      vacancies = JSON.parse(stored);
    } else {
      vacancies = VACANTES_INICIALES;
      localStorage.setItem('amdim_vacantes', JSON.stringify(VACANTES_INICIALES));
    }
    uniqueStates = [...new Set(vacancies.map(job => job.estado).filter(Boolean))].sort();
  });

  let filteredVacancies = $derived(
    selectedState 
      ? vacancies.filter(job => job.estado === selectedState) 
      : vacancies
  );

  function openApplyModal(job: Vacante) {
    activeJob = job;
    showModal = true;
    // reset form
    applyName = '';
    applyEmail = '';
    applyPhone = '';
    cvFile = null;
  }

  function closeModal() {
    showModal = false;
    activeJob = null;
  }

  function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      validateAndSetFile(target.files[0]);
    }
  }

  function validateAndSetFile(file: File) {
    const allowed = ['.pdf', '.doc', '.docx'];
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowed.includes(ext)) {
      alert('Solo se permiten archivos PDF, DOC o DOCX.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('El archivo supera el tamaño máximo permitido de 5 MB.');
      return;
    }
    cvFile = file;
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    isDragOver = true;
  }

  function handleDragLeave() {
    isDragOver = false;
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    isDragOver = false;
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  }

  function removeFile(e: Event) {
    e.stopPropagation();
    cvFile = null;
    if (fileInputEl) fileInputEl.value = '';
  }

  function handleApplySubmit(e: Event) {
    e.preventDefault();
    if (activeJob) {
      closeModal();
      globalState.showToast(`Postulación enviada. Tu CV se ha remitido al distribuidor.`);
    }
  }
</script>

<section id="bolsa-trabajo" class="content-section">
  <div class="section-header">
    <h2>Bolsa de trabajo</h2>
    <p class="nowrap-desktop">Encuentra tu próximo reto profesional en la red de distribuidores autorizados Mitsubishi.</p>
  </div>

  <!-- VISTA CANDIDATOS -->
  <div id="jobs-candidato-view" class="job-view-panel">
    <div class="search-bar" style="margin-bottom: 25px; max-width: 400px; width: 100%; display: flex;">
      <select class="filter-select" style="width: 100%;" bind:value={selectedState}>
        <option value="">TODOS LOS ESTADOS</option>
        {#each uniqueStates as state}
          <option value={state}>{state.toUpperCase()}</option>
        {/each}
      </select>
    </div>
    
    <h3 class="vacantes-title">Vacantes disponibles</h3>
    
    <div id="vacantes-list" class="vacantes-grid">
      {#if filteredVacancies.length === 0}
        <p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">
          No hay vacantes disponibles para el estado seleccionado.
        </p>
      {:else}
        {#each filteredVacancies as job (job.id)}
          <div class="vacante-card glass-card">
            <h4>{job.titulo}</h4>
            <p class="vacante-distribuidor">{job.distribuidor} ({job.estado || 'México'})</p>
            <p class="vacante-desc">{job.descripcion}</p>
            <button class="btn btn--primary" onclick={() => openApplyModal(job)}>
              Postularse
            </button>
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <!-- MODAL APLICACIÓN (POSTULACIÓN CANDIDATO) -->
  {#if showModal && activeJob}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div id="apply-job-modal" class="modal-apply" style="display: flex;" onclick={(e) => { if(e.target === e.currentTarget) closeModal(); }}>
      <div class="modal-content glass-panel">
        <button type="button" class="modal-close-icon material-symbols-outlined" onclick={closeModal}>close</button>

        <h3>Postularse a la vacante</h3>
        <h4 id="apply-job-title">{activeJob.titulo}</h4>
        <p id="apply-job-desc" style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 20px;">{activeJob.distribuidor}</p>

        <form id="form-aplicar-vacante" onsubmit={handleApplySubmit}>
          <input type="hidden" id="apply-job-id" value={activeJob.id}>
          
          <div class="form-group">
            <label for="apply-name">Nombre Completo:</label>
            <input type="text" id="apply-name" placeholder="Ej. Juan Pérez López" required bind:value={applyName}>
          </div>

          <div class="form-group">
            <label for="apply-email">Correo Electrónico:</label>
            <input type="email" id="apply-email" placeholder="juan@correo.com" required bind:value={applyEmail}>
          </div>

          <div class="form-group">
            <label for="apply-phone">Teléfono de Contacto:</label>
            <input type="tel" id="apply-phone" placeholder="Ej. 55 1234 5678" required bind:value={applyPhone}>
          </div>

          <div class="form-group">
            <label for="apply-cv">CV (PDF o Word)</label>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div 
              class="cv-dropzone" 
              class:has-file={cvFile !== null}
              class:drag-over={isDragOver}
              id="cv-dropzone"
              onclick={() => { if(!cvFile) fileInputEl?.click(); }}
              ondragover={handleDragOver}
              ondragleave={handleDragLeave}
              ondrop={handleDrop}
            >
              <input 
                bind:this={fileInputEl}
                type="file" 
                id="apply-cv" 
                accept=".pdf,.doc,.docx" 
                required={cvFile === null}
                style="display:none;"
                onchange={handleFileSelect}
              >
              
              {#if !cvFile}
                <span class="material-symbols-outlined cv-dropzone__icon">file_upload</span>
                <p class="cv-dropzone__text">Arrastra tu CV aquí o <span class="cv-dropzone__link">selecciona un archivo</span></p>
                <p class="cv-dropzone__hint">PDF, DOC o DOCX · Máx. 5 MB</p>
              {:else}
                <div class="cv-dropzone__preview" id="cv-preview" style="display: flex;">
                  <span class="material-symbols-outlined" style="color:var(--color-red);font-size:1.2rem;">description</span>
                  <span id="cv-filename">{cvFile.name}</span>
                  <button type="button" class="cv-dropzone__remove" id="cv-remove" title="Quitar archivo" onclick={removeFile}>
                    <span class="material-symbols-outlined" style="font-size:1rem;">close</span>
                  </button>
                </div>
              {/if}
            </div>
          </div>

          <button type="submit" class="btn btn--primary btn-submit">Enviar Postulación</button>
        </form>
      </div>
    </div>
  {/if}
</section>

