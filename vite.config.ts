import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'titos-art-admin-panel', // name of the fed group...
      filename: 'remoteEntry.js', // default file name
      // Modules to expose
      exposes: { 
        './Button': './src/Button.tsx',
      },
      shared: ['react','react-dom'] // libs/deps to be shared
    })
],
build: {
  target: 'esnext' // needed to final build
},
})
