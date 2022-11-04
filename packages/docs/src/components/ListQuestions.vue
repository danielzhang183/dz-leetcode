<script setup lang="ts">
import type { Category, Tag } from '~/types'
import { easy, getDifficultyColor, getTagQuestions, hard, medium } from '~/logics'

const props = defineProps<{
  module: Category
  tag: Tag
}>()

const difficulty = computed(() => Object.entries({
  easy: easy.value,
  hard: hard.value,
  medium: medium.value,
}).map(([key, val]) => val && key).filter(Boolean))

const questions = computed(() => {
  const questions = getTagQuestions(props.module, props.tag)
  return difficulty.value.length
    ? questions.filter(i => difficulty.value.includes(i.difficulty.toLowerCase()))
    : questions
})
</script>

<template>
  <div class="project-grid py-2 -mx-3 gap-2">
    <a
      v-for="item, idx in questions"
      :key="idx"
      class="item relative flex items-center"
      :href="item.link"
      target="_blank"
      :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
      :title="item.name"
    >
      <div class="pt-2 pr-5">{{ item.id }}</div>
      <div class="flex-auto">
        <div cla ss="text-normal">{{ item.name }}</div>
        <div class="flex gap4 desc text-sm font-normal">
          <div :style="getDifficultyColor(item.difficulty)" v-text="item.difficulty" />
          <a v-if="item.origin" opacity-50 :href="item.origin">source</a>
        </div>
      </div>
    </a>
    <div v-if="!questions.length">
      Content is comming soon~
    </div>
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
