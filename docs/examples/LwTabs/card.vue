<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <lw-tabs :tabs="tabs" type="card" @tab-click="tabsChange">
        <template #tab1>
          <div>订单数据</div>
        </template>
        <template #tab2>
          <div>用户数据</div>
        </template>
        <template #tab3>
          <div>商品数据</div>
        </template>
        <template #tab4>
          <div>页面数据</div>
        </template>
      </lw-tabs>
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const tabs = ref([
  {
    key: "tab1",
    title: "订单数据"
  },
  {
    key: "tab2",
    title: "用户数据"
  },
  {
    key: "tab3",
    title: "商品数据"
  },
  {
    key: "tab4",
    title: "页面数据"
  }
])
const tabsChange = (key: string) => {
  console.log("tabsChange", key)
}
</script>
