import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss'; // Importa el plugin correcto

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss], // Usa el plugin actualizado de PostCSS
    },
  },
});
