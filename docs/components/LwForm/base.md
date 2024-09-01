# LwForm 表单组件

---

### 基础用法

::: demo
LwForm/base
:::

### 继承 Element-plus 组件的事件使用

::: demo
LwForm/eventHandle
:::

### el-input 去除前后空格（type=password 除外）

::: demo
LwForm/isTrim
:::

### 对齐方式

:::demo 通过设置 `formOpts.labelPosition` 属性可以改变表单域标签的位置，可选值为 `top`、`left`、`right`，默认`right`
LwForm/labelPosition
:::

### 每行展示多少项

:::demo 通过设置 `widthSize` 属性可以改变表单域每行显示项，可选值为 `1`、`2`、`3`、`4`、`5`、`6`，默认`2`————即每行显示两项；**若某一项需要单独显示一行（通常是备注或者文本域）需要在 fieldList 中设置 `widthSize` 为 1**
LwForm/widthSize
:::

### 表单校验规则

:::demo `LwForm` 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `Form-Item` 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator);可以`自定义校验规则`可以参考`email`方式来写
LwForm/rules
:::

### 自定义 label jsx 渲染

:::demo 第一种：`tsx`方式—————配置`labelRender`**当`labelRender`与`label`同时存在时：优先渲染`labelRender`**；第二种：使用`labelSlotName`插槽
LwForm/labelRender
:::

### 输入框插槽使用

:::demo `LwForm`组件提供了自定义 `输入框插槽`或下拉选择的`option插槽`的功能输入框插槽：配置`slotName`option 插槽：配置`childSlotName`
LwForm/slotName
:::

### 文本展示

:::demo `LwForm`组件提供了`文本展示`的功能设置 `textShow: true`; `textValue`——显示的文本
LwForm/textShow
:::

### 结合自己封装组件使用

:::demo
LwForm/comUse
:::

### 赋值回显数据

:::demo
LwForm/echo
:::

### 联动选择

:::demo
LwForm/linkage
:::

### 弹窗显示表单

:::demo
LwForm/isHideItem
:::

### LwForm 参数配置

---

### 1. 简介：基于 Element-plus Form 表单组件的二次封装，着重于数据层面，HTML 一行代码

> LwForm 表单组件 **代码示例：**

```html
<t-form v-model="formOpts.ref" :formOpts="formOpts" :widthSize="2" @handleEvent="handleEvent" />
```

### 2. 配置参数

| 参数                | 说明                                                                                                             | 类型              | 默认值 |
| :------------------ | :--------------------------------------------------------------------------------------------------------------- | :---------------- | :----- |
| className           | 自定义类名                                                                                                       | String            | -      |
| labelPosition       | 改变表单项 label 与输入框的布局方式(`right,left,top`)                                                            | String            | ''     |
| widthSize           | 每行显示几个输入项（默认两项） 最大值 6                                                                          | Number            | 2      |
| isTrim              | 全局是否开启清除前后空格(comp 为 el-input 且 type 不等于'password')                                              | Boolean           | true   |
| formOpts            | 表单配置项                                                                                                       | Object            | -      |
| ---ref              | 当前TForm实例                                                                                                    | Object            | -      |
| ---labelPosition    | 改变表单项 label 与输入框的布局方式(默认：right) /top （优先展示组件`labelPosition`）                            | String            | right  |
| ---listTypeInfo     | 下拉选择数据源（type:'select'有效）                                                                              | Object            | -      |
| ---fieldList        | form 表单每项 list                                                                                               | Array             | -      |
| ------isHideItem    | 某一项不显示                                                                                                     | Boolean           | false  |
| ------slotName      | 自定义表单某一项输入框                                                                                           | slot              | -      |
| ------childSlotName | 自定义表单某一下拉选择项子组件插槽（el-option）                                                                  | slot              | -      |
| ------comp          | 表单每一项组件名称（可使用第三方 UI 如 el-select/el-input 也可以使用自定义组件）                                 | String/components | -      |
| ------bind          | 继承第三方 UI 的 Attributes,function 传出 formData                                                               | Object/funnction  | -      |
| ------isSelfCom     | 是否使用自己封装的组件（即不需要嵌套 el-option 等）                                                              | Boolean           | false  |
| ------isTrim        | 是否不清除前后空格(comp 为 el-input 且 type 不等于'password')                                                    | Boolean           | false  |
| ------type          | 某一项类型(目前只有checkbox/radio/select-arr/select-obj)此值只有组件内嵌组件才设置（如：el-select内嵌el-option） | String            | -      |
| ------widthSize     | form 表单某一项所占比例(如果占一整行则设置 1)                                                                    | Number            | -      |
| ------width         | form 表单某一项所占实际宽度                                                                                      | String            | -      |
| ------arrLabel      | type=select-arr 时，每个下拉显示的中文                                                                           | String            | label  |
| ------arrKey        | type=select-arr 时，每个下拉显示的中文传后台的数字                                                               | String            | key    |
| ------label         | form 表单每一项 title                                                                                            | String            | -      |
| ------labelRender   | 自定义某一项 title                                                                                               | function          | -      |
| ------labelSlotName | 自定义某一项 title（插槽名：就是 labelSlotName 值                                                                | slot              | -      |
| ------value         | form 表单每一项传给后台的参数                                                                                    | String            | -      |
| ------rules         | 每一项输入框的表单校验规则（可参考 element-plus el-form-item方式配置）                                           | Object/Array      | -      |
| ------list          | 下拉选择数据源（仅仅对 type:'select'有效）                                                                       | String            | -      |
| ------event         | 表单每一项事件标志（即是：handleEvent 事件第一个参数值）                                                         | String            | -      |
| ------eventHandle   | 继承 comp 组件的事件                                                                                             | Object            | -      |
| ------ref           | 当前使用组件的 ref 标识（可以通过 getRefs 事件返回）                                                             | String            | -      |
| ---formData         | 表单提交数据(对应 fieldList 每一项的 value 值)                                                                   | Object            | -      |
| ---labelWidth       | label 宽度                                                                                                       | String            | 120px  |
| ---rules            | 校验规则（可参考 element-plus el-form 方式配置）                                                                 | Object/Array      | -      |
| ---operatorList     | 操作按钮 list                                                                                                    | Array             | -      |
| -------bind         | 继承 el-button 所有 Attributes(默认值{ type:'primary',size:'small',})                                            | Object            | -      |
| -------fun          | 事件名                                                                                                           | function          | -      |

### 3. events 继承 element-plus el-form 的 events

| 事件名      | 说明                      | 返回值                                                   |
| :---------- | :------------------------ | :------------------------------------------------------- |
| handleEvent | 单个查询条件触发事件      | fieldList 中 type/查询条件输入的值/fieldList 中 event 值 |
| getRefs     | 获取 LwForm 使用组件的 ref | fieldList 中 最好需要传 ref 标识来区分是哪个组件的 ref   |

### 4. Methods 继承 element-plus el-form 的 methods

| 事件名          | 说明                                             | 返回值                        |
| :-------------- | :----------------------------------------------- | :---------------------------- |
| selfValidate    | 自定义校验                                       | valid:Boolean;formData:object |
| selfResetFields | 自定义重置方法（主要清空使用 LwSelectTable 组件） | -                             |

