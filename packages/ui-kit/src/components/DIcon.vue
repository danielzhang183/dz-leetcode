<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="d-icon" :class="icon" />
</template>
