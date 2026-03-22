# 🚀 PaginaWebEconomica.org - Landing Page

Código fuente de la landing page principal para la agencia **PaginaWebEconomica.org**, enfocada en la venta de diseño web profesional para negocios locales en Colombia.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Iconos:** Lucide React
- **SEO:** Schema Markup (JSON-LD), Meta tags optimizados
- **Analítica:** Google Analytics (GA4) configurado

## ⚙️ Arquitectura y Despliegue (CI/CD)

Este proyecto cuenta con un sistema de Integración y Despliegue Continuo (CI/CD) configurado con **GitHub Actions**.

Cualquier cambio empujado a la rama `main` activa automáticamente un bot que:

1. Instala las dependencias y compila el proyecto (`npm run build`).
2. Sube únicamente los archivos de producción (carpeta `dist`) al servidor de **Hostinger** vía FTP.
3. Excluye automáticamente carpetas sensibles como `/blog` y el archivo `.htaccess` de WordPress.

## 💻 Desarrollo Local

Para correr este proyecto en tu máquina local:

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
