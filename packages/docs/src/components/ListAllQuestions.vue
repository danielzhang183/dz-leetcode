<script setup lang="ts">
import type { Module } from '~/types'
import { getModules } from '~/logics'

const props = defineProps<{
  module: Module
}>()

const modules = getModules(props.module)
</script>

<template>
  <div class="flex justify-end items-center">
    <div class="flex gap2 desc text-sm font-normal items-center">
      <i dot bg-green-500 rounded-sm /><span>Done</span>
      <i dot bg-blue-500 rounded-sm /><span>Undone</span>
      <i dot bg-purple-500 rounded-sm /><span>Total</span>
    </div>
  </div>

  <div class="project-grid py-2 -mx-3 gap-2">
    <a
      v-for="item in modules"
      :key="item.key"
      class="item relative flex items-center"
      :href="item.link"
      target="_blank"
      :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
      :title="item.name"
    >
      <div class="pt-4 pr-5">
        <div class="text-3xl opacity-50" i-simple-icons-leetcode />
      </div>
      <div class="flex-auto">
        <div class="mt-0">{{ item.name }}</div>
        <div v-if="item.description" class="text-sm opacity-50 min-h-10">{{ item.description }}</div>
        <div class="flex gap2 desc text-sm font-normal justify-end items-center">
          <i dot bg-green-500 /><span>{{ item.done }}</span>
          <i dot bg-blue-500 /><span>{{ item.undone }}</span>
          <i dot bg-purple-500 /><span>{{ item.total }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.project-grid a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}

.project-grid a.item:hover {
  background: #88888808;
}
</style>
