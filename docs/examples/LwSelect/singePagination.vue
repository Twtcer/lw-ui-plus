<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <lw-select
        placeholder="请选择工序（单选分页）"
        v-model="selectVlaue"
        :optionSource="stepList"
        labelCustom="materialName"
        valueCustom="id"
        @current-change="currentChange"
        @change="selectChange"
        @input="selectinput"
        @select-input="selectinput1"
        isShowPagination
        :paginationOption="paginationOption"
      />
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts" name="Pagination">
import { onMounted, ref } from "vue"
import data from "./data.json"
import data1 from "./data1.json"
const selectVlaue = ref<any>()
const stepList = ref([])
const paginationOption = ref({
  pageSize: 6, // 每页显示条数
  currentPage: 1, // 当前页
  pagerCount: 7, // 按钮数，超过时会折叠
  total: 0 // 总条数
})
const selectinput = (val: any) => {
  console.log("分页器-input", val)
}
const selectinput1 = (val: any) => {
  console.log("select-input", val)
}
onMounted(() => {
  getList(1)
})
const getList = async pageNum => {
  let res
  if (pageNum === 1) {
    res = await data
  } else {
    res = await data1
  }
  if (res.success) {
    stepList.value = res.data.records
    paginationOption.value.total = res.data.total
    // console.log('获取数据', paginationOption.value)
  }
}
// 切换分页
const currentChange = (val: any) => {
  console.log("切换分页current-change事件", val)
  getList(val)
}
const selectChange = (val: any) => {
  console.log(`change返回值${val};v-model值${selectVlaue.value}`)
}
</script>
