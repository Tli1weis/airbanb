import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

import { VantResolver } from 'unplugin-vue-components/resolvers';


import pxtovw from 'postcss-px-to-viewport'

const my_pxtovw=pxtovw({
  viewportWidth:375,
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions:['.js','.json','.ts','.mjs']
  },
  css: {
    postcss: {
      plugins: [my_pxtovw]
    }
  },
})
