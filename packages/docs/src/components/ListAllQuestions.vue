<script setup lang="ts">
import type { Category } from '~/types'
import { capitalize, getModuleQuestions } from '~/logics'

const props = defineProps<{
  module: Category
}>()

const DESCRIPTION_MAP: Record<string, Record<string, string>> = {
  structures: {
    'array': 'A linear data structure with contiguous memory.',
    'linked-list': 'A linear data structure with random memory.',
    'stack': 'A linear data structure which follows FILO.',
    'queue': 'A linear data structure which follows FIFO.',
    'heap': 'A special Tree-based data structure - a complete binary tree.',
    'tree': 'A non-linear data structure, there is only one path to go from any of its nodes to any other node.',
    'hash-table': 'An index or location for the storage of an item in a data structure.',
    'string': 'It can be interpreted as an array of characters.',
    'graph': 'A non-linear data structure consisting of a finite set of vertices(or nodes) and a set of edges that connect a pair of nodes. ',
  },
  algorithms: {
    'sort': 'Rearrange a given array or list elements according to a comparison operator on the elements.',
    'divide-conquer': 'It breaks problem into parts, then solves each part and merges the solved subtasks until problem solved.',
    'greedy': 'The problems where choosing locally optimal also leads to the global solutions are best fit for Greedy.',
    'recursion': 'It uses the concept of code reusability and repeated usage of the same piece of code.',
  },
}

const questions = Object.entries(getModuleQuestions(props.module))
  .map(([key, list]) => {
    const total = list.length
    const done = list.filter(i => i.done).length
    return {
      key: capitalize(key),
      description: DESCRIPTION_MAP[props.module]?.[key] || '',
      total,
      done,
      undone: total - done,
      link: `${props.module}/${key}`,
    }
  })
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="text-2xl font-normal">
      progress
    </div>
    <div class="flex gap2 desc text-sm font-normal items-center">
      <i dot bg-green-500 rounded-sm /><span>Done</span>
      <i dot bg-blue-500 rounded-sm /><span>Undone</span>
      <i dot bg-purple-500 rounded-sm /><span>Total</span>
    </div>
  </div>

  <div class="project-grid py-2 -mx-3 gap-2">
    <a
      v-for="item in questions"
      :key="item.key"
      class="item relative flex items-center"
      :href="item.link"
      target="_blank"
      :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
      :title="item.key"
    >
      <div class="pt-4 pr-5">
        <div class="text-3xl opacity-50" i-simple-icons-leetcode />
      </div>
      <div class="flex-auto">
        <div class="mt-0">{{ item.key }}</div>
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

/* .dot {
  min-width: 29px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.dot::before {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #a1b53f;
  border-radius: 50%;
  content: '';
  margin-right: 4px;
}

.dot.green::before {
  background-color: #a1b53f;
}

.dot.yellow::before {
  background-color: #e0a569;
}

.dot.red::before {
  background-color: #cb7676;
} */
</style>
