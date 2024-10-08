import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueSetupExtend from "vite-plugin-vue-setup-extend" // 设置neme属性
export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend()],
  server: {
    host: "0.0.0.0",
    port: 8888,
    open: true,
    https: false
  },
  ssr: {
    noExternal: [
      'vue-echarts',
       'echarts',
        'zrender', 
        'resize-detector',
        'sass',
        'search-insights',
        'client-search',
        'node'
      ],
  }
})
