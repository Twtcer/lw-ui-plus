<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <lw-select
        placeholder="自定义显示下拉项label"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueCustom="label"
        customLabel="`${_item.label}（${_item.id}）`"
        @change="selectChange"
      ></lw-select>
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const selectVlaue = ref<any>()
const stepList = ref([
  { label: "开始", id: 1 },
  { label: "POSUI", id: 2 },
  { label: "11", id: 3 },
  { label: "GX123", id: 4 },
  { label: "烘干破碎", id: 5 },
  { label: "车间仓库", id: 6 },
  { label: "ui3333", id: 7 },
  { label: "hhh333", id: 8 }
])
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>
