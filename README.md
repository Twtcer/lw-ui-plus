 

# 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

学习[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档

预览 [详细组件案例文档](https://twtcer.github.io/lw-ui-plus/) 

<p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/twtcer/lw-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/twtcer/lw-ui-plus/badge/star.svg?theme=dark" alt="lw-ui-plus">
  </a>
   <a href="https://github.com/twtcer/lw-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/twtcer/lw-ui-plus.svg" alt="lw-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@twtcer/lw-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@twtcer/lw-ui-plus.svg" />
    </a>
</p>

## 动态效果图

<img src="./README_GIF/TuiPlus__demo.gif">

## npm 方式安装使用

```shell
pnpm i @twtcer/lw-ui-plus
```

## 全局注册使用

> ### 前提条件：使用项目必须全局注册 Element-plus组件库

```js
// 在main.js中按下引入
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import locale from "element-plus/es/locale/lang/zh-cn";
// element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import TuiPlus from '@twtcer/lw-ui-plus'
import '@twtcer/lw-ui-plus/lib/style.css'
const app = createApp(App)
// 注册所有图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  // 注册ElementPlus
  app.use(ElementPlus, {
    locale // 语言设置
    // size: Cookies.get('size') || 'medium' // 尺寸设置
  });
app.use(TuiPlus)
app.mount('#app')
```

## 按需引入

```js
// 在main.js中按下引入
import '@twtcer/lw-ui-plus/lib/style.css'
// 单个.vue文件引入
<script setup lang="ts">
  import {TDetail, TForm} from "@twtcer/lw-ui-plus"
</script>
```
## 全部组件如下
| 组件名称        | 说明                                                                                                                                                       |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TLayoutPage     | 布局页面                                                                                                                                                   |
| TLayoutPageItem | 布局页面子项                                                                                                                                               |
| TAdaptivePage   | [一屏组件](https://twtcer.github.io/lw-ui-plus/components/TAdaptivePage/base.html?_blank)（继承TTable 及 TQueryCondition 组件的所有属性、事件、插槽、方法） |
| TQueryCondition | [条件查询组件](https://twtcer.github.io/lw-ui-plus/components/TQueryCondition/base.html?_blank)                                                             |
| TTable          | [表格组件](https://twtcer.github.io/lw-ui-plus/components/TTable/base.html?_blank)                                                                          |
| TForm           | [表单组件](https://twtcer.github.io/lw-ui-plus/components/TForm/base.html?_blank)                                                                           |
| TSelectTable    | [下拉选择表格组件](https://twtcer.github.io/lw-ui-plus/components/TSelectTable/base.html?_blank)                                                            |
| TSelect         | [下拉选择组件](https://twtcer.github.io/lw-ui-plus/components/TSelect/base.html?_blank)                                                                     |
| TDetail         | [详情组件](https://twtcer.github.io/lw-ui-plus/components/TDetail/base.html?_blank)                                                                         |
| TButton         | [防抖按钮组件](https://twtcer.github.io/lw-ui-plus/components/TButton/base.html?_blank)                                                                     |
| TStepWizard     | [步骤条组件](https://twtcer.github.io/lw-ui-plus/components/TStepWizard/base.html?_blank)                                                                   |
| TTimerBtn       | 定时按钮组件                                                                                                                                               |
| TModuleForm     | [模块表单/详情组件](https://twtcer.github.io/lw-ui-plus/components/TModuleForm/base.html?_blank)                                                            |
| TDatePicker     | [日期选择器组件](https://twtcer.github.io/lw-ui-plus/components/TDatePicker/base.html?_blank)                                                               |
| TRadio          | [单选组件](https://twtcer.github.io/lw-ui-plus/components/TRadio/base.html?_blank)                                                                          |
| TCheckbox       | [多选组件](https://twtcer.github.io/lw-ui-plus/components/TCheckbox/base.html?_blank)                                                                       |
| TChart          | [图表组件](https://twtcer.github.io/lw-ui-plus/components/TChart/base.html?_blank)                                                                          |
| TTabs           | [标签页组件](https://twtcer.github.io/lw-ui-plus/components/TTabs/base.html?_blank)                                                                         |


## Use CDN in Project(暂不支持)

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/@twtcer/lw-ui-plus/lib/style.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="https://unpkg.com/@twtcer/lw-ui-plus@latest"></script>
</head>
```
## lw-ui-plus Volar 组件类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "@twtcer/lw-ui-plus/components.d.ts",
    ],
}

```
## Vue3 + Vite项目中安装引入报如下错误的解决方法
> #### 把项目的vite版本升级到4+

<img src="./README_GIF/error.png">

## 安装依赖
> ### 注意: 本地环境版本最好安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell
npm install -g pnpm

pnpm install

```

## 本地运行 vuepress 中组件文档

```shell
// docs项目(文档demo示例)基于vue3+vite项目
npm run docs:dev

```

## Thanks to all the contributors

<a href="https://github.com/twtcer/lw-ui-plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=twtcer/lw-ui-plus" alt="contributors" />
</a>

## 微信交流群

>目前微信群已超过 200 人，需要加微信好友(请备注 lw-ui-plus)，拉大家进群

|                微信二维码                 |
| :---------------------------------------: |
| <img src="./public/twtcer.jpg" width=170> |

## Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;
