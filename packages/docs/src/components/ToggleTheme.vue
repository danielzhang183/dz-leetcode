<script setup lang='ts'>
import { isDark } from '~/composables'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <ri-moon-line v-show="isDark" />
    <ri-sun-line v-show="!isDark" />
  </a>
</template>
