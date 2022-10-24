import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path" 
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 3008
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
      "com":path.resolve(__dirname,"src/components")
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
