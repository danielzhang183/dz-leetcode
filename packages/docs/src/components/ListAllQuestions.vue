<script setup lang="ts">
import type { Category } from '~/types'
import { getDifficultyColor, getModuleQuestions } from '~/logics'

const props = defineProps<{
  module: Category
}>()

const questions = getModuleQuestions(props.module)
</script>

<template>
  <template v-for="key in Object.keys(questions)" :key="key">
    <h4 class="mt-10 font-bold">
      <a :href="`/${module}/${key}`">{{ key }}</a>
    </h4>
    <div class="project-grid py-2 -mx-3 gap-2">
      <a
        v-for="item, idx in questions[key]"
        :key="idx"
        class="item relative flex items-center"
        :href="item.link"
        target="_blank"
        :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
        :title="item.name"
      >
        <div class="pt-2 pr-5">
          <QuestionNo :no="item.id" />
        </div>
        <div class="flex-auto">
          <div class="text-normal">{{ item.name }}</div>
          <div class="flex gap2 desc text-sm font-normal">
            <div :style="getDifficultyColor(item.difficulty)" v-text="item.difficulty" />
            <a v-if="item.origin" opacity-50 :href="item.origin">view source</a>
          </div>
        </div>
      </a>
    </div>
  </template>
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
