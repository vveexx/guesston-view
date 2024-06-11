import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';
import VueDevTools from 'vite-plugin-vue-devtools';
import layouts from 'vite-plugin-vue-layouts';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
    strictPort: true,
    port: 4040,
  },
  cacheDir: 'dist',
  plugins: [
    vue(),
    VueDevTools(),
    pages({
      extensions: ['vue'],
      dirs: 'src/pages/',
    }),
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    svgLoader({
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/index.scss";
        `,
      },
    },
  },
});
