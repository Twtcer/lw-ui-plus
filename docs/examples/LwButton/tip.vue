<template>
  <lw-layout-page class="t_button_demo">
    <lw-layout-page-item>
      <lw-button text style="font-size: 28px" tip="编辑" icon="Edit" />
      <lw-button text tip="删除" icon="Delete" />
      <lw-button link tip="primary" icon="Search" />
      <lw-button text tip="primary" icon="Search" />
      <lw-button text type="primary" tip="primary" icon="Edit" />
      <lw-button text type="success" tip="success" icon="Check" />
      <lw-button text type="info" tip="info" icon="Message" />
      <lw-button text type="warning" tip="warning" icon="Star" />
      <lw-button
        text
        type="danger"
        tip="danger"
        icon="Delete"
        :tipProps="{
          effect: 'light',
          placement: 'bottom'
        }"
      />
    </lw-layout-page-item>
  </lw-layout-page>
</template>
