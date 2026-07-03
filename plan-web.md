# Plan de Diseño y Desarrollo Web: Sitio Web AMDIM (Frontend Premium)

Este documento define la dirección de diseño, el **UI Kit**, los estilos CSS base, la paleta de colores y los lineamientos de interactividad para el nuevo sitio web de la **Asociación Mexicana de Distribuidores Mitsubishi, A.C. (AMDIM)**.

---

## 1. Identidad de Marca y Concepto Visual
El sitio web debe reflejar la solidez, innovación y deportividad de la marca **Mitsubishi Motors**, combinada con el rol corporativo e institucional de la **AMDIM**. 

* **Estilo General:** Premium, moderno, minimalista, y "tecnológico" (estilo japonés de precisión).
* **Enfoque de Diseño:** *Dark Mode* elegante con acentos en el emblemático **Rojo Mitsubishi** y blanco plateado.
* **Layout:** Limpio, con uso inteligente de espacios en blanco/vacíos para destacar el producto y la información institucional.

### 1.1 Directrices Oficiales del Manual de Marca (Versión 9.1)
Basado en el manual oficial `BrandManual_05_v9.1_English.pdf.pdf`, debemos seguir reglas estrictas para mantener la consistencia de la identidad visual de Mitsubishi Motors:
* **Uso del Logo (Corporate vs. Communication Mark):**
  * El **Communication Mark** (Logo + Tagline *"Drive your Ambition"*) es prioritario para el sitio web y la publicidad.
  * Se debe garantizar el área de aislamiento del logo (mínimo de `0.4A` alrededor del Corporate Mark, donde `A` es su altura total).
* **Contraste de Fondo:**
  * Sobre el fondo oscuro del sitio, utilizaremos la versión **Partial Knockout** del logo (Tres diamantes en Rojo Mitsubishi `#ED0000`, y el texto de marca y la tagline en Blanco `#FFFFFF`).
  * En fondos claros (si se llegan a usar en modales o secciones claras), el logo de tres diamantes es rojo `#ED0000` y las letras son negras `#000000`.
* **Reglas de No Distorsión:**
  * El logotipo no debe ser rotado, inclinado, deformado, ni animado (evitar giros, 3D, destellos u otras animaciones que distorsionen los tres diamantes).

---

## 2. Paleta de Colores Oficial (Design Tokens)

Implementaremos los colores oficiales mediante **Variables CSS** en el archivo `css/styles.css` para asegurar consistencia exacta con la marca:

### A. Colores Primarios (Manual de Marca)
* **MITSUBISHI MOTORS Red:** `#ED0000` (CMYK: 0/100/100/0, RGB: 237/0/0) - Usado para acentos clave, estados hover y botones primarios.
* **MITSUBISHI MOTORS Black:** `#000000` (CMYK: 0/0/0/100) - Usado para textos en fondos claros, y como fondo puro en logos.
* **MITSUBISHI MOTORS White:** `#FFFFFF` (CMYK: 0/0/0/0) - Usado para el cuerpo de texto principal en modo oscuro y logotipos knockout.

### B. Colores Secundarios (Manual de Marca)
* **Anthracite Gray:** `#686D71` (CMYK: 10/0/0/70, RGB: 104/109/113) - Usado para textos secundarios o fondos de tarjetas oscuras.
* **Cold Gray:** `#BFC2C4` (CMYK: 3/0/0/33, RGB: 191/194/196) - Usado para bordes secundarios e iconos.
* **Concrete Gray:** `#E3E5E6` (CMYK: 2/0/0/15, RGB: 227/229/230) - Usado para líneas de división finas e inputs en reposo.

### C. Colores de la Interfaz Web (Contexto AMDIM)
* **Fondo Base (Dark Web):** `#0B0B0B` (Gris casi negro para evitar el cansancio visual del negro puro `#000000` en pantallas OLED/LCD).
* **Fondo de Tarjetas (Cards):** `#161616` (Gris carbón para crear contraste con el fondo base).
* **Bordes / Divisiones Web:** `#262626` (Gris oscuro para separadores discretos).

---

## 3. Tipografía Corporativa
Utilizaremos de manera estricta las fuentes tipográficas oficiales de Mitsubishi provistas en el proyecto (`assets/fonts/`).

```css
@font-face {
    font-family: 'MMCOffice';
    src: url('../assets/fonts/MMCOFFICE-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'MMCOffice';
    src: url('../assets/fonts/MMCOFFICE-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'MMCOffice';
    src: url('../assets/fonts/MMCOFFICE-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}
```

### Jerarquía Tipográfica sugerida:
* **H1 (Hero):** 48px - 64px / `font-weight: 700` (Bold)
* **H2 (Secciones):** 32px - 36px / `font-weight: 700` (Bold)
* **H3 (Tarjetas/Subtítulos):** 20px - 24px / `font-weight: 500` (Medium)
* **Body Text:** 16px / `font-weight: 400` (Regular) / Interlineado `line-height: 1.6`
* **Botones/Navegación:** 14px / `font-weight: 700` (Bold) / `text-transform: uppercase` / Sin itálicas (prohibido por el manual).

---

## 4. UI Kit (Componentes de Interfaz)

### A. Barra de Navegación (Header)
* **Estilo:** *Glassmorphism* (Fondo translúcido con desenfoque).
  * `background: rgba(11, 11, 11, 0.8)` con `backdrop-filter: blur(12px)`.
* **Interacción:** El enlace activo se marcará con una línea roja animada debajo del texto (`transition: width 0.3s ease`).
* **Responsividad:** Menú hamburguesa elegante para dispositivos móviles que se despliega de forma lateral con una transición suave.

### B. Hero Video & Overlay (Sección Inicio)
* **Estilo:** Reproductor de video fluido que abarca todo el ancho de la pantalla (`object-fit: cover`).
* **Overlay:** Gradiente oscuro encima del video para garantizar la legibilidad del texto en blanco.
  * `background: linear-gradient(to bottom, rgba(11,11,11,0.4), rgba(11,11,11,1))`
* **Texto:** Animación de entrada de títulos en cascada (*fade-in up*).

### C. Tarjetas de Modelos (Sección Modelos)
* **Estilo:** Tarjetas con fondo `#161616`, esquinas ligeramente redondeadas (4px) para un look deportivo e industrial.
* **Interacción (Hover):**
  * La imagen del vehículo se escala ligeramente (`transform: scale(1.05)`).
  * Sombra exterior con un resplandor rojo Mitsubishi muy sutil (`box-shadow: 0 10px 20px rgba(226, 0, 26, 0.15)`).
* **Botonera:** Botón de "Ficha Técnica" estilizado como botón delineado (*outlined button*) con animación de relleno rojo en hover.

### E. Buscador e Interfaz de Distribuidores
* **Input de Búsqueda:** Campo de texto minimalista con borde inferior rojo animado al hacer foco (`transition: border-color 0.3s`).
* **Mapa Interactivo:** Contenedor de mapa con estilo oscuro e indicadores (pines) rojos representativos de cada distribuidor.
* **Directorio:** Lista de distribuidores organizada en tarjetas estructuradas que muestran el nombre del distribuidor, dirección y contacto con botones directos para "Cómo llegar" y "Llamar".

### F. Portal e Interfaz de Bolsa de Trabajo
* **Tabs Interactivos:** Botones de switch entre "Candidato" y "Distribuidor" con animación de deslizamiento de fondo.
* **Dashboard del Distribuidor (Simulado):** Interfaz limpia tipo panel administrativo para el alta de vacantes.
* **Formularios & Modales:** Formularios con etiquetas flotantes (*floating labels*), soporte de arrastrar y soltar (*drag & drop*) para cargar CVs y botones de acción principal con retroalimentación visual de "Enviando...".

### G. Formulario de Contacto Premium
* **Inputs Modernos:** Diseñados sin caja completa, sólo una línea inferior gris que cambia a rojo Mitsubishi en el evento `focus`.
* **Mensaje de Éxito:** Modal de éxito simulado en el frontend que aparece de manera flotante (Toast Notification) al enviar la información.

---

## 5. Animaciones y Transiciones (Micro-interacciones)
Las animaciones deben ser sutiles para no saturar la experiencia del usuario, pero perceptibles para brindar dinamismo:

* **Transición SPA (Cambio de Secciones):** 
  Al navegar, las secciones no aparecerán de golpe. Usaremos una transición de opacidad y desplazamiento vertical ligero:
  ```css
  .content-section {
      animation: fadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  
  @keyframes fadeIn {
      from {
          opacity: 0;
          transform: translateY(15px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }
  ```
* **Botones Interactivos:** Efecto de deslizamiento de color de fondo y cambio en el color del texto.
* **Efecto Hover General:** Aumento de escala suave (`scale(1.02)`) para tarjetas informativas y de noticias.

---

## 6. Hoja de Ruta de Implementación

1. **Paso 1: Estructuración del CSS Global (`css/styles.css`)**
   * Definición de `@font-face` para las fuentes `MMCOffice`.
   * Declaración de variables globales (`:root`) para colores, fuentes, espaciados y sombras.
   * Estilo general del cuerpo de la página (`body`), scrollbar personalizado e inicialización del layout base.

2. **Paso 2: Componentes Estructurales (Header y Footer)**
   * Maquetación visual e interactividad responsiva de la barra de navegación.
   * Adaptación del menú móvil.

3. **Paso 3: Secciones Informativas (Inicio, Quiénes Somos, Noticias)**
   * Implementación de la sección *Hero* con el reproductor de video.
   * Grid de estructura organizacional en "Quiénes somos".
   * Estilización del feed simulado de LinkedIn en "Noticias".

4. **Paso 4: Catálogo y Directorio (Modelos, Distribuidores)**
   * Diseño final de la cuadrícula de modelos automotrices.
   * Maquetación del mapa y directorio de distribuidores (con funcionalidad de búsqueda responsiva en tiempo real).

5. **Paso 5: Bolsa de Trabajo e Interactividad Avanzada (JS)**
   * Lógica JS para cambiar entre las vistas de Candidato y Distribuidor.
   * Funcionalidad interactiva de los modales de postulación y el portal de alta de vacantes con persistencia en `localStorage`.

---
