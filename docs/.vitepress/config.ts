import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "TuiPlus基础组件文档",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/lw-ui-plus/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "TuiPlus基础组件文档",
    outline: 3,
    socialLinks: [{ icon: "github", link: "https://github.com/twtcer/lw-ui-plus" }],
    nav: [
      {
        text: "安装指南",
        link: "/components/"
      },
      { text: "基础组件", link: "/components/LwSelect/base.md" },
      {
        text: "GitHub地址",
        link: "https://github.com/twtcer/lw-ui-plus"
      },
      {
        text: "Gitee码云地址",
        link: "https://gitee.com/twtcer/lw-ui-plus"
      },
      {
        text: "博客",
        items: [
          { text: "CSDN", link: "https://blog.csdn.net/cwin8951" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/888061128344087/posts"
          }
        ]
      }
    ],
    sidebar: {
      "/components": [
        {
          text: "常用组件",
          items: [
            { text: "下拉选择组件", link: "/components/LwSelect/base.md" },
            { text: "详情组件", link: "/components/LwDetail/base.md" },
            { text: "Button组件", link: "/components/LwButton/base.md" },
            { text: "Radio组件", link: "/components/LwRadio/base.md" },
            { text: "多选框组组件", link: "/components/LwCheckbox/base.md" },
            { text: "日期组件", link: "/components/LwDatePicker/base.md" },
            { text: "Tabs组件", link: "/components/LwTabs/base.md" },
            { text: "步骤组件", link: "/components/LwStepWizard/base.md" }
          ]
        },
        {
          text: "复杂组件",
          items: [
            {
              text: "TAdaptivePage组件",
              link: "/components/LwAdaptivePage/base.md"
            },
            { text: "Chart图表组件", link: "/components/LwChart/base.md" },
            {
              text: "下拉选择表格组件",
              link: "/components/LwSelectTable/base.md"
            },
            {
              text: "条件查询组件",
              link: "/components/LwQueryCondition/base.md"
            },
            { text: "表单组件", link: "/components/LwForm/base.md" },
            { text: "模块表单组件", link: "/components/LwModuleForm/base.md" },
            { text: "table组件", link: "/components/LwTable/base.md" }
          ]
        }
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  }
})
