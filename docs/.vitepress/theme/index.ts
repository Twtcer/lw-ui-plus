import DefaultTheme from "vitepress/theme"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import * as echarts from "echarts" // 引入echarts
import TVHtml from "../components/TVHtml.vue"
import TIcon from "../components/TIcon.vue"
import { VPDemo } from "../vitepress"
// 基于element-plus二次封装基础组件
import LwUiPlus from "../../../packages"
import "../../public/css/index.css"

export default {
  ...DefaultTheme,
  enhanceApp: async (ctx) => {
    let { app } = ctx
    DefaultTheme.enhanceApp(ctx)
    // app.mixin({
    //   async mounted() {
    //      await import ('echarts').then(m=>{
    //        app.use(m.default)
    //      }) 
    //   },
    // })
    app.config.globalProperties.$echarts = echarts // 全局使用
    // 注册ElementPlus
    app.use(ElementPlus, {
      locale // 语言设置
    })

    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // 全局注册基础组件
    app.use(LwUiPlus)

    app.component("Demo", VPDemo)
    app.component("TVHtml", TVHtml)
    app.component("TIcon", TIcon)

  }
}
