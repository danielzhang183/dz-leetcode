<script setup lang="ts">
import type { Module, Question, Tag } from '~/types'
import { easy, getDifficultyColor, getTagQuestions, hard, medium, mode } from '~/logics'

const props = defineProps<{
  module: Module
  tag: Tag
}>()

const difficulty = computed(() => Object.entries({
  easy: easy.value,
  hard: hard.value,
  medium: medium.value,
}).map(([key, val]) => val && key).filter(Boolean))

const rawQuestions = getTagQuestions(props.module, props.tag) || []
const modeQuestions = normalizeModeQuestions(rawQuestions)

const questions = computed(() => {
  const qas = mode.value ? Object.assign({}, modeQuestions) : { unsort: rawQuestions }

  if ([1, 2].includes(difficulty.value.length)) {
    for (const key of Object.keys(qas)) {
      qas[key] = qas[key].filter(i => difficulty.value.includes(i.difficulty.toLowerCase()))
      if (!qas[key].length)
        delete qas[key]
    }
  }

  return qas
})

function normalizeModeQuestions(questions: Question[]) {
  const map: Record<string, Question[]> = {}
  for (const question of questions) {
    const series = question.series ?? 'other'
    if (!map[series])
      map[series] = []

    map[series].push(question)
  }

  return map
}

function normalizeSolution(link: string, solution: string) {
  return `${link}#${solution.replace(' ', '').replace(/\+/g, '-').toLowerCase()}`
}

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
  <template v-for="series in Object.keys(questions)" :key="series">
    <div v-if="series !== 'unsort'" h15 pointer-events-none>
      <span text-3em op10 font-bold>{{ series }}</span>
    </div>
    <div class="project-grid py-2 -mx-3 gap-2">
      <a
        v-for="item, idx in questions[series]"
        :key="idx"
        class="item relative flex items-center"
        :href="item.link"
        target="_blank"
        :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
        :title="item.name"
      >
        <div class="pt-2 pr-4 box-content min-w-8 text-center">
          <a
            :href="item.origin"
            title="View Source"
            :style="getDifficultyColor(item.difficulty)"
            target="_blank"
          >
            {{ padZero(item.id) }}
          </a>
        </div>
        <div class="flex-auto">
          <div cla ss="text-normal">{{ item.name }}</div>
          <div v-if="item.tags" class="tags flex gap-2 text-sm font-normal pt1">
            <a
              v-for="t in item.tags"
              :key="t"
              :href="normalizeSolution(item.link, t)"
              :title="t"
              class="rounded-3 badge-square-blue text-sm px-2 py-0.5"
              target="_blank"
            >
              {{ t }}
            </a>
          </div>
        </div>
        <div
          v-if="item.done"
          class="absolute bottom-3 right-4 text-2xl opacity-50"
          i-ion-checkmark-done-outline
          style="color: #a1b53f"
        />
      </a>
    </div>
  </template>
  <div v-if="!rawQuestions.length">
    Content is comming soon~
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.project-grid a {
  border-bottom: unset;
}

.project-grid a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}

.project-grid a.item:hover {
  background: #88888808;
}

.tags a {
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
  color: rgba(59,130,246,var(--un-text-opacity));
  border-bottom: unset;
}

.tags a:hover {
  opacity: 1;
  text-decoration-color: unset;
  border-bottom: unset;
}
</style>
