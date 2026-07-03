# Reglas del Proyecto - Sitio Web AMDIM (Frontend Only)

Este archivo define las reglas de comportamiento, alcance y diseño para el agente de desarrollo en este espacio de trabajo.

## Alcance del Proyecto
1. **Enfoque Exclusivo en Frontend:**
   * El desarrollo se centrará únicamente en la interfaz de usuario (Frontend).
   * No se construirá código de servidor (Backend), base de datos de producción ni infraestructura de servidor.
   * Cualquier funcionalidad dinámica (como la simulación del Dashboard de Bolsa de Trabajo, carga de vacantes y envíos de formularios) se simulará en el Frontend utilizando **mock APIs**, **LocalStore** o estados locales de JavaScript.
2. **Tecnologías Autorizadas:**
   * HTML5 estructurado de forma semántica y accesible.
   * JavaScript (ES6+) para la interactividad y lógica del lado del cliente.
   * CSS Vanilla (puro) estructurado con variables personalizadas para la gestión del diseño del manual de marca de Mitsubishi.

## Pautas de Diseño y Estética Premium
1. **Paleta de Colores Corporativos (Mitsubishi):**
   * Extraer y aplicar los colores exactos definidos en el Manual de Marca:
     * Rojo Mitsubishi: `#E2001A` (o el equivalente exacto del PDF de marca).
     * Negro, grises oscuros y blancos premium.
2. **Tipografía:**
   * Cargar y utilizar exclusivamente la tipografía provista en `/assets/fonts/`:
     * `MMCOFFICE-Regular.ttf`
     * `MMCOFFICE-Medium.ttf`
     * `MMCOFFICE-Bold.ttf`
3. **Animaciones y Efectos:**
   * Incluir micro-animaciones en botones, enlaces y tarjetas.
   * Implementar un reproductor de video fluido para el *Hero Video* de la página de Inicio.
   * Crear layouts interactivos y responsivos (Mobile-First).

## Lineamientos del Manual de Marca AMDIM (Versión 3.0)
Este manual define las reglas específicas para la identidad del logotipo e isotipo de la Asociación:
1. **Composición del Logotipo:**
   * La palabra **AMDIM** utiliza la tipografía **EpocaClassic W01 Medium Italic** con trackings asimétricos específicos: A-M (-50pt), M-D (-39pt), D-I (-25pt), I-M (-63pt).
   * La frase *"ASOCIACIÓN MEXICANA DE DISTRIBUIDORES MITSUBISHI, A.C."* utiliza la tipografía **Arial Narrow Bold** en escala proporcional `100 : 13.57` respecto al logo superior.
2. **Colores del Logotipo de la Asociación:**
   * **Rojo AMDIM (Romboide):** `#E12727` (Pantone 485 C | RGB: 255, 39, 39 | CMYK: 2/94/87/0).
   * **Textos del Logotipo:** Blanco Puro `#FFFFFF`.
   * **Variante Oscura:** `#010101` (Pantone Black 6 C).
   * **Variante Clara:** `#FFFFFF`.
3. **Restricciones del Logotipo:**
   * Prohibido rotar, deformar, cambiar colores, delinear, o colocar sobre fondos degradados que afecten su legibilidad.
   * Respetar un área de seguridad equivalente a **3 CM perimetrales** a los lados del logotipo.
