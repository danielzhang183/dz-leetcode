<script setup lang="ts">
const props = defineProps<{
  content: string
  bg: string
  color: string
}>()
</script>

<template>
  <div px-2 box-border rounded :style="{ color: props.color, backgroundColor: props.bg }">
    {{ props.content }}
  </div>
</template>

<style scoped></style>
