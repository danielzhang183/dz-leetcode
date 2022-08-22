<script setup lang="ts">
const props = defineProps<{
  title: string
  sub: string
}>()
</script>

<template>
  <div text="36px" mt-6 font-bold>
    {{ props.title }}
  </div>
  <div text="28px" mt-6 border="b-1 gray-300" py-5 box-border>
    {{ props.sub }}
  </div>
</template>

<style scoped></style>
