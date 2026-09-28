import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Chemins relatifs : la maquette fonctionne depuis n'importe quel sous-dossier d'hébergement
  base: './',
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
