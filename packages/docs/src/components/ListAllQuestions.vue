<script setup lang="ts">
import type { Module } from '~/types'
import { MODE, getModules, mode } from '~/composables'

const props = defineProps<{
  module: Module
}>()

const modules = getModules(props.module)
const done = modules.reduce((a, b) => a + b.done, 0)
const easy = modules.reduce((a, b) => a + b.Easy, 0)
const medium = modules.reduce((a, b) => a + b.Medium, 0)
const total = modules.reduce((a, b) => a + b.total, 0)
const isViewMode = computed(() => mode.value === MODE.VIEW)
const { t } = useI18n()
</script>

<template>
  <div class="flex justify-end items-center">
    <div class="flex gap2 desc text-sm font-normal items-center">
      <template v-if="isViewMode">
        <i dot bg-green-500 rounded-sm opacity-50 /><span>{{ t('done') }}: {{ done }}</span>
        <i dot bg-blue-500 rounded-sm opacity-50 /><span>{{ t('undo') }}: {{ total - done }}</span>
        <i dot bg-purple-500 rounded-sm opacity-50 /><span>{{ t('total') }}: {{ total }}</span>
      </template>
      <template v-else>
        <i class="bg-[#a1b53f]" dot rounded-sm opacity-50 />
        <span>{{ t('easy') }}: {{ easy }}</span>
        <i class="bg-[#e0a569]" dot rounded-sm opacity-50 />
        <span>{{ t('medium') }}: {{ medium }}</span>
        <i class="bg-[#cb7676]" dot rounded-sm opacity-50 />
        <span>{{ t('hard') }}: {{ total - easy - medium }}</span>
      </template>
      <button op50 @click="mode = Number(!mode)">
        <div :class="mode ? 'i-carbon:accessibility-color-filled ' : 'i-carbon:accessibility-color'" />
      </button>
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
        <div class="mt-0">{{ t(`${item.key}`) ?? item.name }}</div>
        <div v-if="item.description" class="text-sm opacity-50 min-h-10">
          {{ t(`${item.key}-desc`) ?? item.description }}
        </div>
        <div class="flex gap2 desc text-sm font-normal justify-end items-center">
          <template v-if="isViewMode">
            <i dot bg-green-500 /><span>{{ item.done }}</span>
            <i dot bg-blue-500 /><span>{{ item.undone }}</span>
            <i dot bg-purple-500 /><span>{{ item.total }}</span>
          </template>
          <template v-else>
            <i class="dot bg-[#a1b53f]" /><span>{{ item.Easy }}</span>
            <i class="dot bg-[#e0a569]" /><span>{{ item.Medium }}</span>
            <i class="dot bg-[#cb7676]" /><span>{{ item.Hard }}</span>
          </template>
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
