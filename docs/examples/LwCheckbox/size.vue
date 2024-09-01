<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <div>
        <t-checkbox v-model="value" :options="options" size="large" />
      </div>
      <div style="margin-top: 20px">
        <t-checkbox v-model="value" :options="options" size="default" />
      </div>
      <div style="margin-top: 20px">
        <t-checkbox v-model="value" :options="options" size="small" />
      </div>
      <div style="margin-top: 20px">
        <t-checkbox v-model="value" :options="options" size="small" disabled />
      </div>
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref([])
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 }
])
</script>
