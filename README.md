# Sitio Web AMDIM - Svelte 5 + Tailwind CSS v4 Migration

Este proyecto es la migración fiel del sitio institucional y la Bolsa de Trabajo de la **Asociación Mexicana de Distribuidores Mitsubishi, A.C. (AMDIM)**.

## 🚀 Estructura del Proyecto

Se ha migrado la SPA legacy (Single Page Application) a una arquitectura moderna basada en **SvelteKit (v2.x) con Svelte 5** y **Tailwind CSS v4.0** (procesamiento nativo ultra rápido a través de Vite).

* **`legacy/`**: Respaldo completo del proyecto original (HTML/CSS/JS tradicionales).
* **`src/`**: Código fuente de la aplicación en Svelte 5.
  * **`src/lib/`**: Componentes reutilizables, tipos de datos y gestión de estado reactivo.
  * **`src/routes/`**: Páginas del sitio estructuradas en rutas SvelteKit (prerenderizadas estáticamente).
* **`static/`**: Recursos estáticos (imágenes oficiales, fuentes corporativas, GeoJSON de estados, fichas técnicas y PDFs de marcas).

## 🛠️ Tecnologías Utilizadas

* **Svelte 5** (`$state`, `$derived`, runes)
* **SvelteKit** (Prerendering estático)
* **Tailwind CSS v4.0**
* **Vite** (Empaquetador y servidor de desarrollo)
* **Leaflet.js** (Mapa interactivo de distribuidores de la República Mexicana)

## 💻 Comandos Útiles

Ejecuta los siguientes comandos desde el directorio raíz del proyecto:

### Instalar dependencias
```bash
npm install
```

### Servidor de Desarrollo
Inicia el servidor local con recarga rápida (HMR):
```bash
npm run dev
```
Acceso local en: `http://localhost:5173`

### Construir para Producción (Build Estático)
Compila y prerenderiza el sitio completo en archivos HTML/JS/CSS estáticos de alto rendimiento:
```bash
npm run build
```
Los archivos de distribución listos para subir a cualquier hosting estático se generan en la carpeta **`build/`**.

### Previsualizar la Construcción
Prueba la build de producción de manera local:
```bash
npm run preview
```
