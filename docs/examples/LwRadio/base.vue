<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <lw-radio v-model="value" :options="options" />
    </lw-layout-page-item>
  </lw-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref("1")
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 }
])
</script>
