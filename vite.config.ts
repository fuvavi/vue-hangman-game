import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
    ]
  }
})
