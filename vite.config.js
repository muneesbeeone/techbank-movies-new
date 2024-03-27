import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/techbank-movies-new/', // Set the base URL to match your GitHub Pages repository path
  plugins: [vue()],
});
