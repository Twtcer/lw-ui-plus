<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <div>
        <lw-checkbox v-model="value" :options="options" size="large" border />
      </div>
      <div style="margin-top: 20px">
        <lw-checkbox v-model="value" :options="options" size="default" border />
      </div>
      <div style="margin-top: 20px">
        <lw-checkbox v-model="value" :options="options" size="small" border />
      </div>
      <div style="margin-top: 20px">
        <lw-checkbox v-model="value" :options="options" size="small" disabled border />
      </div>
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref([])
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 }
])
</script>
