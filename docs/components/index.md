### 快速上手

::: tip 提示

@twtcer/lw-ui-plus 基于 vue3 + ts + Element-plus 再次封装的基础组件

:::

### 安装

```bash:no-line-numbers
pnpm add @twtcer/lw-ui-plus -S
&
npm install @twtcer/lw-ui-plus -S
```

### 全局使用

> #### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// main.ts
import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import LwUiPlus from "@twtcer/lw-ui-plus"
import "@twtcer/lw-ui-plus/lib/style.css"
const app = createApp(App)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册ElementPlus
app.use(ElementPlus, {
  locale // 语言设置
  // size: Cookies.get('size') || 'medium' // 尺寸设置
})
app.use(LwUiPlus)
app.mount("#app")
```
### 按需引入

```js
// 在main.js中按下引入
import '@twtcer/lw-ui-plus/lib/style.css'
// 单个.vue文件引入
<script setup lang="ts">
  import {LwDetail, LwForm} from "@twtcer/lw-ui-plus"
</script>
```
### 全部组件如下
| 组件名称        | 说明                                                                                                                                                       |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LwLayoutPage     | 布局页面                                                                                                                                                   |
| LwLayoutPageItem | 布局页面子项                                                                                                                                               |
| LwAdaptivePage   | [一屏组件](https://twtcer.github.io/lw-ui-plus/components/LwAdaptivePage/base.html?_blank)（继承TTable 及 LwQueryCondition 组件的所有属性、事件、插槽、方法） |
| LwQueryCondition | [条件查询组件](https://twtcer.github.io/lw-ui-plus/components/LwQueryCondition/base.html?_blank)                                                             |
| LwTable          | [表格组件](https://twtcer.github.io/lw-ui-plus/components/LwTable/base.html?_blank)                                                                          |
| LwForm           | [表单组件](https://twtcer.github.io/lw-ui-plus/components/LwForm/base.html?_blank)                                                                           |
| LwSelectTable    | [下拉选择表格组件](https://twtcer.github.io/lw-ui-plus/components/LwSelectTable/base.html?_blank)                                                            |
| LwSelect         | [下拉选择组件](https://twtcer.github.io/lw-ui-plus/components/LwSelect/base.html?_blank)                                                                     |
| LwDetail         | [详情组件](https://twtcer.github.io/lw-ui-plus/components/LwDetail/base.html?_blank)                                                                         |
| LwButton         | [防抖按钮组件](https://twtcer.github.io/lw-ui-plus/components/LwButton/base.html?_blank)                                                                     |
| LwStepWizard     | [步骤条组件](https://twtcer.github.io/lw-ui-plus/components/LwStepWizard/base.html?_blank)                                                                   |
| LwTimerBtn       | 定时按钮组件                                                                                                                                               |
| LwModuleForm     | [模块表单/详情组件](https://twtcer.github.io/lw-ui-plus/components/LwModuleForm/base.html?_blank)                                                            |
| LwDatePicker     | [日期选择器组件](https://twtcer.github.io/lw-ui-plus/components/LwDatePicker/base.html?_blank)                                                               |
| LwRadio          | [单选组件](https://twtcer.github.io/lw-ui-plus/components/LwRadio/base.html?_blank)                                                                          |
| LwCheckbox       | [多选组件](https://twtcer.github.io/lw-ui-plus/components/LwCheckbox/base.html?_blank)                                                                       |
| LwChart          | [图表组件](https://twtcer.github.io/lw-ui-plus/components/LwChart/base.html?_blank)                                                                          |
| LwTabs           | [标签页组件](https://twtcer.github.io/lw-ui-plus/components/LwTabs/base.html?_blank)                                                                         |

### lw-ui-plus 组件 Volar 类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "@twtcer/lw-ui-plus/components.d.ts",
    ],
}

```

### 🔨 Vue3 + Vite 项目中安装引入报如下错误的解决方法

> #### 把项目的 vite 版本升级到 4+

<img src="../public/img/error.png">

### docs 文档结构目录

```
├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件
├─ components             # .md文件
├─ public                 # 静态资源文件
├─ .vitepress
│  ├─ config              # 插件配置
|  │  ├─ global.ts        # 全局变量定义
|  │  └─ plugins.ts       # 自定义.md文件渲染
│  ├─ theme               # 主题配置
│  ├─ utils               # 文档展开隐藏代码高亮
│  ├─ vitepress
|  │  ├─ vp-demo          # VPDemo组件源码
|  │  ├─ style            # VPDemo组件样式
|  │  └─ index.ts         # 暴露VPDemo组件
│  └─ config.ts           # vitepress配置文件
├─ index.md               # 文档home页面
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件（支持tsx）
```

### Git 提交规范（PR 提交规范）
 
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

### vue2 基础组件

> 基于 vue2 + Element-ui 和 ant-design-vue 二次封装的基础组件

---

#### [Vue2 基础组件文档地址](https://twtcer.github.io/t-ui/)

---

#### [Vue2 基础组件码云地址](https://gitee.com/twtcer/t-ui)

---

#### [Vue2 基础组件 GitHub 地址](https://github.com/twtcer/t-ui)
