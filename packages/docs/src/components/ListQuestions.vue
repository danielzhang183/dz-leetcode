<script setup lang="ts">
import type { Module, Tag } from '~/types'
import { getQuestions } from '~/logics/questions'

const props = defineProps<{
  module: Module
  tag: Tag
}>()

console.log(props)
const questions = await getQuestions(props.module, props.tag)
console.log(questions)
</script>

<template>
  123
  <!-- <div class="project-grid py-2 -mx-3 gap-2">
    <a
      v-for="item, idx in questions"
      :key="idx"
      class="item relative flex items-center"
      :href="item.link"
      target="_blank"
      :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
      :title="item.name"
    >
      <div class="pt-2 pr-5">
        <div class="text-3xl opacity-50" i-carbon-3d-curve-auto-colon />
      </div>
      <div class="flex-auto">
        <div cla ss="text-normal">{{ item.name }}</div>
        <div class="desc text-sm opacity-50 font-normal" v-html="item.rank" />
      </div>
    </a>
  </div> -->
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
