// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({}),

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [icon()],
  
  // Optimizaciones de build para performance
  build: {
    // Inlining small assets to reduce HTTP requests
    inlineStylesheets: 'always'
  },
  
  // Optimizaciones de vite
  vite: {
    build: {
      // Minificación agresiva
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // Optimizar chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar dependencias vendor
            vendor: ['astro'],
            // Separar utilidades
            utils: ['src/utils/intersectionObserver', 'src/utils/animateCount']
          }
        }
      }
    },
    // Optimizar assets
    assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.png']
  },
  
  // Configuración de imagen optimizada
  image: {
    // Habilitar optimización de imágenes
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
