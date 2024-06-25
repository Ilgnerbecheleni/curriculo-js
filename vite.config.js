import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório de saída da build
    assetsDir: '.', // Diretório base para os ativos
    emptyOutDir: true, // Limpa o diretório de saída antes de cada build
  },
});
