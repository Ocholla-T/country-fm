import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/components/views'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
    },
  },
})
