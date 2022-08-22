<script setup lang="ts">

</script>

<template>
  <div class="container" px-4 md:px-0 box-border m="0 auto">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: calc(var(--vp-layout-max-width) - 64px);
  margin-bottom: 40px;
}
</style>
