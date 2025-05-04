import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../backend/dist'), // Chemin de sortie du build
    emptyOutDir: true, // Vide le dossier avant le build
  },
});
