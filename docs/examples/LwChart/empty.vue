<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <client-only>
      <h3>Boolean类型</h3>
      <el-button @click="isEmptyBn = !isEmptyBn">切换状态</el-button>
      <lw-chart :options="options" :isEmpty="isEmptyBn" style="width: 100%; height: 500px" />
      <el-button @click="addData()">增加数据</el-button>
      <h3>Function类型</h3>
      <lw-chart
        :options="options"
        :isEmpty="isEmptyFn"
        image="/lw-ui-plus/img/hero.jpg"
        :image-size="400"
        description="empty 组件的描述信息"
        style="width: 100%; height: 500px"
      />
      <h3>空状态插槽</h3>
      <lw-chart :options="options" :isEmpty="isEmptyFn" style="width: 100%; height: 500px">
        <template #empty>
          <div style="text-align: center; margin-top: 100px; font-size: 32px">自定义空状态插槽</div>
        </template>
      </lw-chart>
    </client-only>
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const options = ref({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [],
      type: "line"
    }
  ]
})

const addData = () => {
  options.value.xAxis.data.push("test" + Math.random().toString(36).substring(2, 8))
  options.value.series[0].data.push(Math.random() * 200)
}

const isEmptyBn = ref(false)
const isEmptyFn = options => {
  return options.series[0].data.length === 0
}
</script>
