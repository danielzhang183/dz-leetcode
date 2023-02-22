<script setup lang="ts">
import type { Module, Tag } from '~/types'
import { easy, getDifficultyColor, getTagQuestions, hard, medium } from '~/logics'

const props = defineProps<{
  module: Module
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

function padZero(num: string | number, len = 3) {
  if (!num)
    return

  num = `${num}`
  return num.length < len
    ? new Array(len - num.length).fill(0).join('') + num
    : num
}
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
      <div class="pt-2 pr-4 box-content min-w-8 text-center">
        <a
          :style="getDifficultyColor(item.difficulty)"
          :href="item.origin"
          target="_blank"
        >
          {{ padZero(item.id) }}
        </a>
      </div>
      <div class="flex-auto">
        <div cla ss="text-normal">{{ item.name }}</div>
        <div v-if="item.tags" class="flex gap-2 text-sm font-normal pt1">
          <span
            v-for="t in item.tags"
            :key="t"
            bg-light
            rounded-3
            text-black
            px-2 py-0.5
          >
            {{ t }}
          </span>
        </div>
      </div>
      <div
        v-if="item.done"
        class="absolute bottom-3 right-4 text-2xl opacity-50"
        i-ion-checkmark-done-outline
        style="color: #a1b53f"
      />
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
