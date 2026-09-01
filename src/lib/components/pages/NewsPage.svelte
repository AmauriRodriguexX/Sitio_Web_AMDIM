<!-- noticias/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { globalState } from '$lib/state.svelte';

  let activeTab = $state<'linkedin' | 'blog'>('linkedin');

  const fallbackPosts = [
    {
      fecha: "Hace 2 semanas • Editado • 🌐",
      texto: "Un pequeño gesto puede hacer una gran diferencia. 🐾❤️\n\nNos sumamos a la difusión de Operación Patitas 2026, una iniciativa de Mitsubishi Motors de México y Zadrigman que busca recaudar alimento para perritos en situación vulnerable.\n\nCada donativo cuenta. Si tienes la oportunidad, súmate llevando croquetas nuevas y selladas a los distribuidores participantes.\n\nMás información: https://lnkd.in/gS3ECScN\n\n#AMDIM #DistribuidoresMitsubishi #MitsubishiMotorsMéxico",
      imagen: "https://media.licdn.com/dms/image/v2/D5622AQECb_l9Qme_Gw/feedshare-shrink_800/B56Z9D4lqUGcAc-/0/1783550335882?e=1786579200&v=beta&t=t6XkDHYoT24rES_fPCeKDVM4Ahlz34S8N58uet9rK8Y",
      avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
      enlace: "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/",
      likes: 18,
      comentarios: 4
    },
    {
      fecha: "Hace 3 semanas • 🌐",
      texto: "El futuro de la movilidad se vive hoy con Mitsubishi Outlander PHEV. 🚗⚡\n\nCon su tecnología híbrida enchufable, amplio espacio y equipamiento, este modelo ofrece una conducción eficiente sin renunciar al confort y desempeño.\n\nAcércate a tu distribuidor autorizado Mitsubishi Motors y conoce las condiciones comerciales vigentes.\n\n#AMDIM #MitsubishiMotorsMéxico #OutlanderPHEV",
      imagen: "https://media.licdn.com/dms/image/v2/D5622AQFLzaZyegEWtA/feedshare-shrink_800/B56Z8VQW0IJoAc-/0/1782768037356?e=1786579200&v=beta&t=NAZw4W6PKkHZ50wPyxAfvhqSCAZyrgWV2PT4O4EeKmk",
      avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
      enlace: "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/",
      likes: 24,
      comentarios: 5
    },
    {
      fecha: "Hace 1 mes • 🌐",
      texto: "Fortaleciendo la presencia institucional y operativa en México. 🏢🇲🇽\n\nEn la Asociación Mexicana de Distribuidores Mitsubishi impulsamos el trabajo coordinado entre la marca y nuestra Red de Distribuidores a nivel nacional.\n\nSeguimos construyendo proyectos estratégicos en beneficio de nuestros asociados y clientes.\n\n#AMDIM #OficinasCentrales #RedDeDistribuidores #MitsubishiMéxico",
      imagen: `${base}/assets/images/facades/real_facade.jpg`,
      avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
      enlace: "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/",
      likes: 31,
      comentarios: 8
    },
    {
      fecha: "Hace 1 mes • 🌐",
      texto: "Reconocemos el compromiso y profesionalismo de cada uno de los distribuidores que integran la red en el país. 🏆👏\n\nGracias a su dedicación diaria seguimos consolidando la excelencia en servicio, ventas y posventa para cada cliente en la República Mexicana.\n\n#AMDIM #ExcelenciaMitsubishi #RedDeDistribuidores #OrgulloAMDIM",
      imagen: `${base}/assets/images/facades/facade_showroom.jpg`,
      avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
      enlace: "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/",
      likes: 42,
      comentarios: 12
    },
    {
      fecha: "Hace 2 meses • 🌐",
      texto: "Impulsando el desarrollo profesional en la industria automotriz. 💼🏢\n\nEn AMDIM trabajamos en sinergia con la red para promover la capacitación constante de asesores comerciales y técnicos de posventa.\n\n¿Quieres formar parte de la Red Mitsubishi? Revisa nuestra Bolsa de Trabajo.\n\n#AMDIM #BolsaDeTrabajo #TalentoAutomotriz #DesarrolloProfesional",
      imagen: `${base}/assets/images/facades/facade_day.jpg`,
      avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
      enlace: "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/",
      likes: 29,
      comentarios: 6
    },
    {
      fecha: "Hace 2 meses • 🌐",
      texto: "Más de 20 años acompañando a los distribuidores Mitsubishi en México. 🌟🤝\n\nTrabajamos continuamente para ofrecer el mejor soporte institucional, representando a los distribuidores de la marca y fortaleciendo su presencia en el mercado nacional.\n\n#AMDIM #Trayectoria #AsociaciónAutomotriz #MitsubishiMotors",
      imagen: `${base}/assets/images/facades/real_facade.jpg`,
      avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQGTp5LaNbXKEQ/company-logo_100_100/B4EZzTWD7LIMAQ-/0/1773072302143/asociacin_mexicana_distribuidores_mitsubishi_logo?e=1786579200&v=beta&t=V3HrtQXdCXPlvyIrtYDWAyoIOzWqG0aY6hPH1ojIfY4",
      enlace: "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/",
      likes: 35,
      comentarios: 7
    }
  ];

  const BLOG_POSTS = [
    {
      titulo: "La evolución de Mitsubishi Motors en México: Más de 20 años de historia",
      autor: "Francisco Vargas",
      fecha: "Hace 1 semana • 🌐",
      resumen: "Un repaso detallado por la historia de Mitsubishi Motors en México, desde sus inicios en 2004 hasta la consolidación como marca independiente y parte de la Alianza.",
      imagen: `${base}/assets/images/news_convention.jpg`,
      likes: 15,
      comments: 3
    },
    {
      titulo: "Outlander PHEV: El SUV Híbrido Enchufable definitivo",
      autor: "Barbara Ibarguen",
      fecha: "Hace 3 semanas • 🌐",
      resumen: "Descubre por qué Outlander PHEV sigue siendo el híbrido enchufable más galardonado a nivel global y cómo optimiza tus viajes diarios.",
      imagen: `${base}/assets/images/news_l200.jpg`,
      likes: 22,
      comments: 6
    },
    {
      titulo: "Consejos para el mantenimiento de tu Mitsubishi L200",
      autor: "José Volantín",
      fecha: "Hace 1 mes • 🌐",
      resumen: "Mantén tu Pick-up L200 en las mejores condiciones con estos sencillos consejos de posventa de nuestros distribuidores autorizados.",
      imagen: `${base}/assets/images/news_jobs.jpg`,
      likes: 18,
      comments: 4
    }
  ];

  const LOCAL_POST_IMAGES = [
    `${base}/assets/images/news_convention.jpg`,
    `${base}/assets/images/news_l200.jpg`,
    `${base}/assets/images/news_jobs.jpg`,
    `${base}/assets/images/facades/real_facade.jpg`,
    `${base}/assets/images/facades/facade_showroom.jpg`,
    `${base}/assets/images/facades/facade_day.jpg`
  ];

  function resolveImagePath(image: string | undefined, index: number) {
    if (!image) return LOCAL_POST_IMAGES[index % LOCAL_POST_IMAGES.length];

    // Los datos heredados usan rutas relativas. En una ruta como /noticias/
    // éstas apuntan a /noticias/assets/... y producen 404. En GitHub Pages
    // además hace falta anteponer el base path del sitio (/Sitio_Web_AMDIM).
    return image.startsWith('assets/') ? `${base}/${image}` : image;
  }

  function replaceBrokenImage(event: Event, index: number) {
    const image = event.currentTarget as HTMLImageElement;
    if (image.dataset.fallbackApplied === 'true') {
      image.style.display = 'none';
      return;
    }

    image.dataset.fallbackApplied = 'true';
    image.src = LOCAL_POST_IMAGES[index % LOCAL_POST_IMAGES.length];
  }

  let linkedinPosts = $state<any[]>(fallbackPosts);

  onMount(() => {
    // Attempt to load dynamic posts
    fetch(`${base}/assets/data/linkedin_posts.json`)
      .then(res => {
        if (!res.ok) throw new Error("Local fallback");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          linkedinPosts = data.map((post, index) => ({
            ...post,
            imagen: resolveImagePath(post.imagen, index)
          }));
        }
      })
      .catch(() => {
        // Silent catch: uses fallbackPosts
      });
  });

  function handlePostClick(link: string) {
    window.open(link || "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/", '_blank');
  }

  function handleBlogClick(titulo: string) {
    globalState.showToast(`Artículo: ${titulo}. Próximamente disponible en formato completo en nuestro nuevo Blog AMDIM.`);
  }
</script>

<section id="noticias" class="content-section">
  <div class="section-header">
    <h2>Últimas noticias</h2>
    <p class="nowrap-desktop">Explora nuestras publicaciones oficiales de la Asociación Mexicana de Distribuidores Mitsubishi en LinkedIn.</p>
  </div>

  <!-- Feed de Noticias y Blog -->
  <div class="feed-container">
    {#if activeTab === 'linkedin'}
      <div id="linkedin-feed-placeholder" style="display: grid;">
        {#each linkedinPosts as post, index}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="mock-linkedin-post glass-card" onclick={() => handlePostClick(post.enlace)}>
            <div class="post-header">
              <div class="post-author-info">
                <div class="post-avatar" style="background: url('{post.avatar || `${base}/assets/images/logos/AMIDM_LOGO NUEVO solo rojo.png`}') center/cover no-repeat #111; border: 1px solid rgba(225,39,39,0.3);"></div>
                <div class="post-author-meta">
                  <strong class="post-author-name">Asociación Mexicana Distribuidores Mitsubishi, A.C.</strong>
                  <span class="post-date">{post.fecha || 'Reciente • 🌐'}</span>
                </div>
              </div>
              <span class="material-symbols-outlined linkedin-icon-link">open_in_new</span>
            </div>
            
            <div class="post-content">
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              <p class="post-text">{@html (post.texto || '').replace(/\n/g, '<br>')}</p>
              {#if post.imagen}
                <div class="post-image-container">
                  <img
                    src={resolveImagePath(post.imagen, index)}
                    alt="Noticia AMDIM LinkedIn"
                    class="post-image"
                    onerror={(event) => replaceBrokenImage(event, index)}
                  >
                </div>
              {/if}
            </div>

            <div class="post-footer" style="display: flex; flex-direction: column; gap: 14px;">
              <div class="post-actions">
                <span class="post-action-item">
                  <span class="material-symbols-outlined" style="color:#0A66C2;">thumb_up</span> {post.likes || 6} Reacciones
                </span>
                <span class="post-action-item">
                  <span class="material-symbols-outlined">chat_bubble_outline</span> {post.comentarios || 2} Comentarios
                </span>
              </div>
              
              <a 
                href={post.enlace || "https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/"} 
                target="_blank" 
                class="btn btn--outline-red btn-linkedin-link" 
                style="width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.82rem; padding: 10px 16px; border-radius: 8px; text-decoration: none;" 
                onclick={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink: 0; display: inline-block; vertical-align: middle;">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                Ver publicación en LinkedIn
              </a>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div id="blog-feed-placeholder" style="display: grid;">
        {#each BLOG_POSTS as post}
          <article class="mock-linkedin-post glass-card" style="height: 100%; display: flex; flex-direction: column;">
            <div class="post-header">
              <div class="post-author-info">
                <div class="post-avatar" style="background-color: var(--color-red); font-size: 0.8rem; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 50%;">AD</div>
                <div class="post-author-meta">
                  <span class="post-author-name">{post.autor}</span>
                  <span class="post-date">{post.fecha}</span>
                </div>
              </div>
              <span class="material-symbols-outlined" style="color: var(--color-red);">rss_feed</span>
            </div>
            
            <div class="post-content" style="flex-grow: 1; display: flex; flex-direction: column;">
              <h4 style="color: var(--color-white); font-size: 1.05rem; line-height: 1.4; margin-bottom: 10px; font-family: var(--font-main); font-weight: 700;">
                {post.titulo}
              </h4>
              <p class="post-text" style="margin-bottom: 15px; flex-grow: 1;">
                {post.resumen}
              </p>
              <div class="post-image-container" style="height: 160px; overflow: hidden; border-radius: 4px;">
                <img src={post.imagen} alt={post.titulo} class="post-image" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>

            <div class="post-footer">
              <div class="post-actions">
                <span class="post-action-item">
                  <span class="material-symbols-outlined">thumb_up</span> {post.likes}
                </span>
                <span class="post-action-item">
                  <span class="material-symbols-outlined">comment</span> {post.comments}
                </span>
              </div>
              <button class="btn btn--ghost-light" style="padding: 4px 10px; font-size: 0.72rem; border-color: rgba(255,255,255,0.15);" onclick={() => handleBlogClick(post.titulo)}>
                Leer más
              </button>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Botón para ver perfil oficial -->
  <div style="text-align: center; margin-top: 35px;">
    <a href="https://www.linkedin.com/company/asociaci%C3%B3n-mexicana-distribuidores-mitsubishi/" target="_blank" rel="noopener noreferrer" id="btn-linkedin-oficial" class="btn btn--primary" style="display: inline-flex; align-items: center; gap: 10px; text-decoration: none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: middle; display: inline-block;">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
      Ver LinkedIn Oficial
    </a>
  </div>
</section>
