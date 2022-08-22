<script setup lang="ts">
import ItemContainer from './ItemContainer.vue'

const props = defineProps<{
  path: string
  name: string
}>()
</script>

<template>
  <item-container :path="props.path" h-60px>
    <div dark="text-gray-800" w-full h-full flex="~ col" justify="between" items="start">
      <div text-18px w-full truncate>
        {{ props.name }}
      </div>
    </div>
  </item-container>
</template>
