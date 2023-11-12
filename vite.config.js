import vue from '@vitejs/plugin-vue'

import pkg from 'vite';
const { defineConfig } = pkg;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
