<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="d-tip d-tip-base">
    <slot name="icon">
      <DIcon v-if="icon" :icon="icon" class="d-tip-icon" />
    </slot>
    <div>
      <slot />
    </div>
  </div>
</template>
