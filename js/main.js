// Lógica principal e interactividad premium del Sitio Web AMDIM
// Enfoque: Single Page Application (SPA), persistencia en LocalStorage y simulación interactiva.

// --- 1. DATOS INICIALES DE PRUEBA (MOCK DATA) ---
const DISTRIBUIDORES_INICIALES = [
    {
        id: "d1",
        nombre: "Mitsubishi Polanco",
        telefono: "55 5255 3904",
        web: "https://www.mitsubishi-motors.mx",
        direccion: "Av. Ejército Nacional 843, Granada, Miguel Hidalgo, Ciudad de México, C.P. 11520",
        lat: 19.4395,
        lng: -99.2010
    },
    {
        id: "d2",
        nombre: "Mitsubishi Guadalajara",
        telefono: "33 3333 3333",
        web: "https://www.mitsubishi-motors.mx",
        direccion: "Av. Patria 1201, Villa Universitaria, Zapopan, Jalisco, C.P. 45110",
        lat: 20.6975,
        lng: -103.4150
    },
    {
        id: "d3",
        nombre: "Mitsubishi Monterrey",
        telefono: "81 8181 8181",
        web: "https://www.mitsubishi-motors.mx",
        direccion: "Av. Lázaro Cárdenas 2400, Valle Oriente, San Pedro Garza García, Nuevo León, C.P. 66269",
        lat: 25.6420,
        lng: -100.3295
    }
];

const VACANTES_INICIALES = [
    {
        id: "v1",
        titulo: "Asesor de Ventas Digitales",
        distribuidor: "Mitsubishi Polanco",
        email: "reclutamiento@mitspolanco.com.mx",
        descripcion: "Atención a leads de medios digitales, seguimiento en CRM y cierre de ventas de unidades nuevas. Experiencia mínima de 2 años en el ramo automotriz.",
        vigencia: "manual"
    },
    {
        id: "v2",
        titulo: "Técnico Mecánico Certificado",
        distribuidor: "Mitsubishi Guadalajara",
        email: "servicio@mitsgdl.com.mx",
        descripcion: "Realización de diagnósticos mecánicos, mantenimientos preventivos y correctivos bajo estándares de Mitsubishi Motors. Certificación técnica deseable.",
        vigencia: "1-mes"
    }
];

// --- 2. INICIALIZACIÓN DEL SITIO ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar bases de datos locales si no existen
    if (!localStorage.getItem('amdim_distribuidores')) {
        localStorage.setItem('amdim_distribuidores', JSON.stringify(DISTRIBUIDORES_INICIALES));
    }
    if (!localStorage.getItem('amdim_vacantes')) {
        localStorage.setItem('amdim_vacantes', JSON.stringify(VACANTES_INICIALES));
    }

    initNavigation();
    initHeaderScroll();
    initMobileMenu();
    initDistribuidores();
    initBolsaTrabajo();
    initContacto();
    initLinkedInFeed();
    initLegales();
});

// --- 3. NAVEGACIÓN Y COMPORTAMIENTO GENERAL ---

/**
 * Controla la barra de navegación del sitio (SPA)
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeSection = document.getElementById(targetId);
        if (activeSection) {
            activeSection.style.display = 'flex'; // Usar flex para mantener layout de la sección
            
            // Auto-play del Hero Video si se activa la sección de inicio
            if (targetId === 'inicio') {
                const video = activeSection.querySelector('#hero-video');
                if (video) {
                    video.play().catch(() => console.log('El auto-play requiere interacción previa.'));
                }
            }
            
            // Hacer scroll hacia arriba suave
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            window.location.hash = targetId;

            // Cerrar menú móvil al hacer click
            const mainNav = document.getElementById('main-nav');
            const menuToggle = document.querySelector('.menu-toggle');
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                menuToggle.classList.remove('open');
            }
        });
    });

    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showSection(hash);
        } else {
            showSection('inicio');
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Ejecución inicial
}

/**
 * Añade sombra y reduce altura del Header al hacer scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Controla el menú responsivo móvil
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
        });
    }
}

// --- 4. SECCIÓN DISTRIBUIDORES ---

function initDistribuidores() {
    const searchInput = document.getElementById('distribuidor-search');
    const directoryList = document.getElementById('directory-list');
    const btnUseLocation = document.getElementById('btn-use-location');
    const btnOpenAdmin = document.getElementById('btn-open-admin-portal');
    const btnCloseAdmin = document.getElementById('btn-close-admin-portal');
    const adminPortal = document.getElementById('distribuidor-admin-portal');
    const formAlta = document.getElementById('form-alta-distribuidor');

    function getDistribuidores() {
        return JSON.parse(localStorage.getItem('amdim_distribuidores')) || [];
    }

    function renderDistribuidores(filterText = "") {
        const list = getDistribuidores();
        directoryList.innerHTML = "";

        const filteredList = list.filter(dist => {
            const matchName = dist.nombre.toLowerCase().includes(filterText.toLowerCase());
            const matchDir = dist.direccion.toLowerCase().includes(filterText.toLowerCase());
            return matchName || matchDir;
        });

        if (filteredList.length === 0) {
            directoryList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No se encontraron distribuidores.</p>`;
            return;
        }

        filteredList.forEach(dist => {
            const card = document.createElement('div');
            card.className = 'distributor-card glass-card';
            card.innerHTML = `
                <div class="distributor-img-placeholder">
                    <span class="material-symbols-outlined" style="font-size: 2.5rem; color: var(--color-red);">directions_car</span>
                </div>
                <div class="distributor-info">
                    <div>
                        <h4>${dist.nombre}</h4>
                        <p><strong>Teléfono:</strong> <a href="tel:${dist.telefono.replace(/\s+/g, '')}">${dist.telefono}</a></p>
                        <p><strong>Dirección:</strong> ${dist.direccion}</p>
                    </div>
                    <div class="card-actions">
                        <a href="${dist.web}" target="_blank" class="btn-link">
                            <span class="material-symbols-outlined icon-align" style="font-size: 0.9rem;">language</span> Visitar Sitio
                        </a>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dist.direccion)}" target="_blank" class="btn-link">
                            <span class="material-symbols-outlined icon-align" style="font-size: 0.9rem;">navigation</span> Cómo llegar
                        </a>
                    </div>
                </div>
            `;
            directoryList.appendChild(card);
        });

        // Actualizar el mapa con los pines
        actualizarMapaDistribuidores(filteredList);
    }

    function actualizarMapaDistribuidores(list) {
        const mapContainer = document.getElementById('distribuidores-map');
        if (!mapContainer) return;

        if (list.length > 0) {
            const firstDist = list[0];
            mapContainer.innerHTML = `
                <iframe 
                    src="https://maps.google.com/maps?q=${encodeURIComponent(firstDist.direccion)}&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            `;
        } else {
            mapContainer.innerHTML = `
                <div class="map-placeholder-content">
                    <span class="material-symbols-outlined" style="font-size: 3rem; color: var(--color-red); margin-bottom: 15px;">location_off</span>
                    <h3>Red de Distribuidores Mitsubishi</h3>
                    <p>Selecciona o busca un distribuidor para visualizar su ubicación.</p>
                </div>
            `;
        }
    }

    // Buscador interactivo
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderDistribuidores(e.target.value);
        });
    }

    // Geolocalización simulada
    if (btnUseLocation) {
        btnUseLocation.addEventListener('click', () => {
            showToast("Buscando distribuidor más cercano a tu ubicación...");
            
            setTimeout(() => {
                const list = getDistribuidores();
                if (list.length > 0) {
                    const cercano = list[0]; // Mitsubishi Polanco
                    if (searchInput) {
                        searchInput.value = cercano.nombre;
                        renderDistribuidores(cercano.nombre);
                    }
                    showToast(`Distribuidor más cercano encontrado: ${cercano.nombre}`);
                }
            }, 1200);
        });
    }

    // Portales Administrativos (Modal)
    if (btnOpenAdmin && adminPortal) {
        btnOpenAdmin.addEventListener('click', () => {
            adminPortal.style.display = 'flex';
        });
    }

    if (btnCloseAdmin && adminPortal) {
        btnCloseAdmin.addEventListener('click', () => {
            adminPortal.style.display = 'none';
        });
    }

    // Alta de Distribuidor
    if (formAlta) {
        formAlta.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('dist-nombre').value;
            const telefono = document.getElementById('dist-telefono').value;
            const web = document.getElementById('dist-web').value;
            const direccion = document.getElementById('dist-direccion').value;

            const nuevoDist = {
                id: "d_" + Date.now(),
                nombre,
                telefono,
                web,
                direccion,
                lat: 19.43, 
                lng: -99.13
            };

            const actualLista = getDistribuidores();
            actualLista.push(nuevoDist);
            localStorage.setItem('amdim_distribuidores', JSON.stringify(actualLista));

            formAlta.reset();
            if (adminPortal) adminPortal.style.display = 'none';
            
            renderDistribuidores();
            showToast("Distribuidor registrado exitosamente.");
        });
    }

    // Carga inicial de distribuidores
    renderDistribuidores();
}

// --- 5. SECCIÓN BOLSA DE TRABAJO ---

function initBolsaTrabajo() {
    const tabCandidatos = document.getElementById('tab-candidatos');
    const tabDistribuidores = document.getElementById('tab-distribuidores');
    const viewCandidatos = document.getElementById('jobs-candidato-view');
    const viewDistribuidores = document.getElementById('jobs-distribuidor-view');

    const formAltaVacante = document.getElementById('form-alta-vacante');
    const vacantesList = document.getElementById('vacantes-list');
    const myVacanciesList = document.getElementById('my-vacancies-list');
    
    const applyModal = document.getElementById('apply-job-modal');
    const formAplicar = document.getElementById('form-aplicar-vacante');
    const btnCloseApply = document.getElementById('btn-close-apply-modal');
    const applyJobTitle = document.getElementById('apply-job-title');
    const applyJobDesc = document.getElementById('apply-job-desc');
    const applyJobId = document.getElementById('apply-job-id');

    const descTextarea = document.getElementById('vacante-descripcion');
    const charCounter = document.getElementById('char-counter');

    function getVacantes() {
        return JSON.parse(localStorage.getItem('amdim_vacantes')) || [];
    }

    // Control de Tabs
    if (tabCandidatos && tabDistribuidores) {
        tabCandidatos.addEventListener('click', () => {
            tabCandidatos.classList.add('active');
            tabDistribuidores.classList.remove('active');
            viewCandidatos.style.display = 'block';
            viewDistribuidores.style.display = 'none';
            renderVacantesPublicas();
        });

        tabDistribuidores.addEventListener('click', () => {
            tabDistribuidores.classList.add('active');
            tabCandidatos.classList.remove('active');
            viewDistribuidores.style.display = 'block';
            viewCandidatos.style.display = 'none';
            renderVacantesDistribuidor();
        });
    }

    // Contador de Caracteres
    if (descTextarea && charCounter) {
        descTextarea.addEventListener('input', () => {
            const restantes = 300 - descTextarea.value.length;
            charCounter.textContent = `${restantes} caracteres restantes`;
        });
    }

    // Render de Vacantes Públicas (Vista Candidato)
    function renderVacantesPublicas() {
        const list = getVacantes();
        vacantesList.innerHTML = "";

        if (list.length === 0) {
            vacantesList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No hay vacantes disponibles en este momento.</p>`;
            return;
        }

        list.forEach(job => {
            const card = document.createElement('div');
            card.className = 'vacante-card glass-card';
            card.innerHTML = `
                <h4>${job.titulo}</h4>
                <p class="vacante-distribuidor">${job.distribuidor}</p>
                <p class="vacante-desc">${job.descripcion}</p>
                <p class="vacante-vigencia">Vigencia: ${job.vigencia === '1-mes' ? '1 Mes' : 'Permanente / Manual'}</p>
                <button class="btn-apply-trigger" data-id="${job.id}">
                    <span class="material-symbols-outlined icon-align" style="font-size: 1rem;">send</span> Postularse
                </button>
            `;
            vacantesList.appendChild(card);
        });

        // Configurar botones de aplicar
        const applyButtons = vacantesList.querySelectorAll('.btn-apply-trigger');
        applyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const jobId = btn.getAttribute('data-id');
                const job = list.find(j => j.id === jobId);
                if (job) {
                    abrirModalAplicacion(job);
                }
            });
        });
    }

    // Render de Vacantes Propias (Vista Dashboard)
    function renderVacantesDistribuidor() {
        const list = getVacantes();
        myVacanciesList.innerHTML = "";

        // Asumimos que el distribuidor activo es "Mitsubishi Polanco"
        const misVacantes = list.filter(job => job.distribuidor === "Mitsubishi Polanco");

        if (misVacantes.length === 0) {
            myVacanciesList.innerHTML = `<p style="text-align: center; color: var(--color-text-muted); padding: 20px 0;">Aún no has publicado vacantes.</p>`;
            return;
        }

        misVacantes.forEach(job => {
            const item = document.createElement('div');
            item.className = 'my-vacancy-item glass-panel';
            item.innerHTML = `
                <div>
                    <h5>${job.titulo}</h5>
                    <p style="margin-top: 4px;">Recibe CVs en: ${job.email}</p>
                </div>
                <button class="btn-deactivate" data-id="${job.id}">
                    <span class="material-symbols-outlined icon-align" style="font-size: 0.95rem;">delete</span> Quitar
                </button>
            `;
            myVacanciesList.appendChild(item);
        });

        // Configurar botones de desactivar
        const deactivateButtons = myVacanciesList.querySelectorAll('.btn-deactivate');
        deactivateButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const jobId = btn.getAttribute('data-id');
                desactivarVacante(jobId);
            });
        });
    }

    // Desactivar Vacante
    function desactivarVacante(id) {
        const actualLista = getVacantes();
        const nuevaLista = actualLista.filter(job => job.id !== id);
        localStorage.setItem('amdim_vacantes', JSON.stringify(nuevaLista));
        renderVacantesDistribuidor();
        showToast("Vacante desactivada y retirada de la bolsa de trabajo.");
    }

    // Alta de Vacante en el Dashboard
    if (formAltaVacante) {
        formAltaVacante.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('vacante-email').value;
            const titulo = document.getElementById('vacante-titulo').value;
            const descripcion = descTextarea.value;
            const vigencia = document.getElementById('vacante-vigencia').value;

            const nuevaVacante = {
                id: "v_" + Date.now(),
                titulo,
                distribuidor: "Mitsubishi Polanco", 
                email,
                descripcion,
                vigencia
            };

            const actualLista = getVacantes();
            actualLista.push(nuevaVacante);
            localStorage.setItem('amdim_vacantes', JSON.stringify(actualLista));

            formAltaVacante.reset();
            if (charCounter) charCounter.textContent = '300 caracteres restantes';
            
            renderVacantesDistribuidor();
            showToast("Vacante publicada de manera exitosa en el portal.");
        });
    }

    // Modal de Aplicación
    function abrirModalAplicacion(job) {
        applyJobTitle.textContent = job.titulo;
        applyJobDesc.textContent = `Distribuidor: ${job.distribuidor} | Correo: ${job.email}`;
        applyJobId.value = job.id;
        applyModal.style.display = 'flex';
    }

    if (btnCloseApply) {
        btnCloseApply.addEventListener('click', () => {
            applyModal.style.display = 'none';
        });
    }

    if (formAplicar) {
        formAplicar.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('apply-name').value;
            applyModal.style.display = 'none';
            formAplicar.reset();
            showToast(`Postulación enviada. Tu CV se ha remitido al distribuidor.`);
        });
    }

    // Render inicial
    renderVacantesPublicas();
}

// --- 6. SECCIÓN NOTICIAS (LINKEDIN FEED) ---

function initLinkedInFeed() {
    const feedContainer = document.getElementById('linkedin-feed-placeholder');
    if (!feedContainer) return;

    const posts = [
        {
            fecha: "Hace 2 días",
            texto: "Celebramos la convención nacional anual 2026 de la AMDIM. Un espacio donde nuestros 71 distribuidores autorizados de Mitsubishi Motors en México compartieron estrategias e innovación para seguir ofreciendo el mejor servicio del sector.",
            likes: 48,
            comentarios: 6
        },
        {
            fecha: "Hace 1 semana",
            texto: "¡Orgullosos del lanzamiento de la nueva L200 2026! Robustez, durabilidad y tecnología al servicio de los caminos mexicanos. Visita tu distribuidor autorizado Mitsubishi más cercano para agendar tu prueba de manejo.",
            likes: 92,
            comentarios: 15
        },
        {
            fecha: "Hace 3 semanas",
            texto: "AMDIM reafirma su compromiso con el desarrollo automotriz del país. Abrimos nuevas vacantes en nuestra bolsa de trabajo para integrar talento especializado en las áreas de ventas y servicio técnico certificado.",
            likes: 34,
            comentarios: 2
        }
    ];

    feedContainer.innerHTML = "";
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'mock-linkedin-post glass-card';
        postCard.innerHTML = `
            <div class="post-header">
                <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong>
                <span>${post.fecha}</span>
            </div>
            <div class="post-content">
                <p>${post.texto}</p>
            </div>
            <div style="display: flex; gap: 20px; margin-top: 15px; font-size: 0.8rem; color: var(--color-text-muted); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 10px;">
                <span style="display: flex; align-items: center; gap: 6px;">
                    <span class="material-symbols-outlined" style="font-size: 1.05rem;">thumb_up</span> ${post.likes} Reacciones
                </span>
                <span style="display: flex; align-items: center; gap: 6px;">
                    <span class="material-symbols-outlined" style="font-size: 1.05rem;">comment</span> ${post.comentarios} Comentarios
                </span>
            </div>
        `;
        feedContainer.appendChild(postCard);
    });
}

// --- 7. SECCIÓN CONTACTO ---

function initContacto() {
    const formContacto = document.getElementById('form-contacto');
    if (!formContacto) return;

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('contact-name').value;
        
        showToast("Enviando mensaje...");
        
        setTimeout(() => {
            formContacto.reset();
            showToast(`Gracias ${nombre}. Comentarios enviados a buzonamdim@amdim.com.mx.`);
        }, 1500);
    });
}

// --- 8. HELPER: TOAST NOTIFICATIONS ---

/**
 * Muestra un Toast flotante en pantalla con soporte de iconos de Google Fonts
 * @param {string} message Mensaje a mostrar
 */
function showToast(message) {
    const oldToast = document.querySelector('.toast-notification');
    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <span class="material-symbols-outlined" style="color: var(--color-red); font-size: 1.5rem;">notifications</span>
        <div style="font-size: 0.9rem; font-weight: 500; line-height: 1.3;">${message}</div>
    `;
    
    document.body.appendChild(toast);

    // Auto-descarte
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}

// --- 9. SECCIÓN DOCUMENTOS LEGALES (MODALES INTERACTIVOS) ---

const LEGALES_CONTENT = {
    privacidad: {
        titulo: "Aviso de Privacidad Integral",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. Identidad y Domicilio de los Responsables</h4>
            <p style="margin-bottom:15px;">La <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong> (RFC: AMD0404226K6) y sus Distribuidores Autorizados (en adelante, "Los Responsables"), reconocen la importancia del tratamiento legítimo, controlado e informado de sus datos personales conforme a la LFPDPPP.</p>
            <p style="margin-bottom:15px;"><strong>Domicilio de la Asociación:</strong> Juan Vázquez de Mella número 481, Piso 2, Oficina 203, Colonia Los Morales Polanco, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.</p>
            <p style="margin-bottom:15px;"><strong>Domicilio de Distribuidores:</strong> El domicilio de la agencia autorizada seleccionada por el usuario o más cercana a su domicilio, la cual actúa como corresponsable.</p>
            
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Datos Personales Recabados</h4>
            <p style="margin-bottom:15px;">Recabamos datos a través de formularios en el sitio web:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Identificación y Contacto:</strong> Nombre completo, correo electrónico, teléfono (fijo y móvil, incluyendo WhatsApp).</li>
                <li><strong>Intereses Comerciales:</strong> Modelo de interés, tipo de cotización (compra, arrendamiento, prueba de manejo), y datos de auto a cuenta.</li>
                <li><strong>Tecnológicos:</strong> Dirección IP, tipo de navegador, tiempo de navegación (a través de cookies y web beacons).</li>
            </ul>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">3. Finalidades del Tratamiento</h4>
            <p style="margin-bottom:10px;"><strong>A. Finalidades Primarias (Necesarias):</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Dar seguimiento a solicitudes de cotización, información o citas para prueba de manejo.</li>
                <li>Transferir sus datos al Distribuidor Autorizado de su elección para gestionar su proceso de compraventa.</li>
                <li>Prevenir y detectar actos de fraude, phishing o suplantación de identidad.</li>
            </ul>
            <p style="margin-bottom:10px;"><strong>B. Finalidades Secundarias (No Necesarias):</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li>Envío de publicidad, ofertas comerciales y promociones sobre productos y servicios de Mitsubishi Motors.</li>
                <li>Encuestas de satisfacción y medición de calidad de servicio.</li>
            </ul>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">4. Transferencia de Datos</h4>
            <p style="margin-bottom:15px;">Sus datos podrán ser transferidos sin necesidad de consentimiento (según Art. 37 LFPDPPP) a: Distribuidores Autorizados (para seguimiento comercial), Proveedores clave de CRM (Milestone, Seekop, SugarCRM) y autoridades competentes.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">5. Derechos ARCO</h4>
            <p style="margin-bottom:15px;">Usted puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos. Para ejercerlos, envíe una solicitud firmada por correo electrónico a: <strong>bit@amdim.com.mx</strong>.</p>
            <p style="margin-bottom:15px;">Cualquier modificación a este aviso será informada en: <strong>informacionamdim@amdim.com.mx</strong>.</p>
        `
    },
    legal: {
        titulo: "Aviso Legal",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. Información del Sitio</h4>
            <p style="margin-bottom:15px;">El titular de este portal web es la <strong>Asociación Mexicana de Distribuidores Mitsubishi, A.C.</strong> (AMDIM), con domicilio de operaciones en Juan Vázquez de Mella número 481, Piso 2, Oficina 203, Colonia Los Morales Polanco, Alcaldía Miguel Hidalgo, C.P. 11510, Ciudad de México.</p>
            
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Propiedad Intelectual e Industrial</h4>
            <p style="margin-bottom:15px;">El usuario reconoce que todos los logotipos, marcas comerciales, isotipos (incluyendo los tres diamantes), nombres comerciales, textos y videos exhibidos en este portal son propiedad industrial e intelectual de <strong>Mitsubishi Motors de México, S.A. de C.V.</strong> (MMDM) o de terceros colaboradores que han licenciado su uso.</p>
            <p style="margin-bottom:15px;">Queda estrictamente prohibida la copia, reproducción, distribución, comunicación pública o alteración comercial de dichos elementos sin la previa autorización escrita de MMDM.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">3. Exclusión de Responsabilidad de Precios</h4>
            <p style="margin-bottom:15px;">La información relacionada con modelos de vehículos, equipamiento, precios y promociones es meramente ilustrativa e informativa. Los precios finales, especificaciones técnicas y condiciones de venta oficiales siempre deben validarse directamente de forma presencial o telefónica con el Distribuidor Autorizado de su elección.</p>
        `
    },
    cookies: {
        titulo: "Política de Cookies",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. ¿Qué son las Cookies?</h4>
            <p style="margin-bottom:15px;">Las Cookies son pequeños archivos de texto que los sitios web almacenan en su computadora o dispositivo móvil para recordar sus preferencias, historial de navegación o datos de formularios con el fin de optimizar su experiencia de usuario.</p>
            
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Cookies Utilizadas</h4>
            <p style="margin-bottom:15px;">Los portales web de AMDIM y sus distribuidores utilizan cookies con fines funcionales y analíticos:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px;">
                <li><strong>Cookies de Rendimiento y Analítica:</strong> Google Analytics, Milestone y Seekop para recopilar datos anónimos de comportamiento de navegación y tráfico.</li>
                <li><strong>Cookies de Publicidad:</strong> Meta/Facebook Pixel para segmentar audiencias y mostrar publicidad relevante de Mitsubishi Motors.</li>
                <li><strong>Cookies Funcionales:</strong> Para mantener la sesión del usuario, recordar filtros de búsqueda e interacciones del chat.</li>
            </ul>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">3. Aceptación y Desactivación</h4>
            <p style="margin-bottom:15px;">Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies. En cualquier momento, usted puede bloquear, deshabilitar o borrar estas cookies cambiando la configuración de privacidad de su navegador web (Chrome, Edge, Firefox, Safari, etc.). Tenga en cuenta que deshabilitar cookies funcionales podría afectar el correcto funcionamiento de algunas secciones del portal.</p>
        `
    },
    terminos: {
        titulo: "Términos y Condiciones de Uso",
        cuerpo: `
            <p style="margin-bottom:15px; font-weight:700;">Última actualización: 11 de noviembre de 2025.</p>
            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">1. Aceptación y Jurisdicción</h4>
            <p style="margin-bottom:15px;">Al acceder y hacer uso de este portal web, el usuario acepta de manera expresa y sin reservas los presentes Términos y Condiciones, así como el Aviso de Privacidad Integral de Los Responsables.</p>
            <p style="margin-bottom:15px;">Para la resolución de cualquier controversia derivada del uso del sitio, las partes se someten a las leyes aplicables de los Estados Unidos Mexicanos y a la jurisdicción de los Tribunales Competentes de la Ciudad de México, renunciando a cualquier otro fuero.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0;">2. Responsabilidad Legal del Proceso de Venta</h4>
            <p style="margin-bottom:15px;"><strong>El usuario reconoce que la Asociación Mexicana de Distribuidores Mitsubishi, A.C. (AMDIM) actúa única y exclusivamente como un intermediario corporativo facilitador de información técnica y captador de interés (leads).</strong></p>
            <p style="margin-bottom:15px;">La responsabilidad legal definitiva sobre cualquier cotización, apartado de unidades, negociación económica, compraventa, facturación, entrega de vehículos, y garantías comerciales recae exclusiva y directamente en el <strong>Distribuidor Autorizado</strong> que gestione la transacción, deslindando por completo a la AMDIM.</p>

            <h4 style="color:var(--color-red); margin: 20px 0 10px 0; background: rgba(237,0,0,0.1); padding: 10px; border-left: 3px solid var(--color-red);">3. Advertencia Oficial Anti-Fraude</h4>
            <p style="margin-bottom:15px; font-weight:700; color:var(--color-white);">“TODO DEPÓSITO O TRANSFERENCIA DEBERÁ SER REALIZADO ÚNICAMENTE EN LA CAJA FÍSICA AUTORIZADA DE LA AGENCIA Y/O A UNA CUENTA BANCARIA CORPORATIVA A NOMBRE DE LA COMPAÑÍA DEL DISTRIBUIDOR AUTORIZADO. BAJO NINGUNA CIRCUNSTANCIA SE DEBEN REALIZAR APARTADOS O DEPÓSITOS A NOMBRE DE UNA PERSONA FÍSICA (COMO ASESORES DE VENTAS).”</p>
            <p style="margin-bottom:15px;">La AMDIM y los Distribuidores no se hacen responsables de ninguna pérdida financiera, fraude o perjuicio derivado de transferencias realizadas a cuentas no oficiales o depósitos a cuentas personales.</p>
        `
    }
};

function initLegales() {
    const legalLinks = document.querySelectorAll('.legal-link');
    const legalModal = document.getElementById('legal-modal');
    const legalModalTitle = document.getElementById('legal-modal-title');
    const legalModalBody = document.getElementById('legal-modal-body');
    const btnCloseLegal = document.getElementById('btn-close-legal-modal');

    if (!legalModal || !legalModalTitle || !legalModalBody || !btnCloseLegal) return;

    legalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const docType = link.getAttribute('data-type');
            const docContent = LEGALES_CONTENT[docType];

            if (docContent) {
                // Configurar contenido del modal
                legalModalTitle.innerHTML = `
                    <span class="material-symbols-outlined" style="color: var(--color-red); font-size:1.6rem; vertical-align:middle; margin-right:8px;">gavel</span>
                    ${docContent.titulo}
                `;
                legalModalBody.innerHTML = docContent.cuerpo;
                
                // Mostrar Modal con animación
                legalModal.style.display = 'flex';
                legalModalBody.scrollTop = 0; // Reset scroll
            }
        });
    });

    btnCloseLegal.addEventListener('click', () => {
        legalModal.style.display = 'none';
    });

    // Cerrar modal al hacer click fuera del contenido
    legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) {
            legalModal.style.display = 'none';
        }
    });
}
