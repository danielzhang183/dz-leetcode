<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1
    text="36px gray-700"
    dark="text-gray-200" box-border
    border="b-1 gray-300" mb-6 h-auto w-full leading-20
  >
    {{ props.title }}
  </h1>
  <div w-full flex="~ wrap" justify-start gap="2%">
    <slot />
  </div>
</template>

<style scoped></style>
