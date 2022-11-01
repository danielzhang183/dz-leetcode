<script setup lang="ts">
import type { Category, SubNav } from '../types'
import { easy, getNavs, hard, medium } from '~/logics'

const props = defineProps<{
  module: Category
}>()

const inactiveStyle = 'opacity-20 hover:opacity-50'

const route = useRoute()

const navs: SubNav[] = getNavs(props.module)
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <div flex="~ gap3">
      <button flex="~ gap1" items-center mb2 op30 text-sm @click="easy = !easy">
        <div :i="easy ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
        Easy
      </button>

      <button flex="~ gap1" items-center mb2 op30 text-sm @click="medium = !medium">
        <div :i="medium ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
        Medium
      </button>

      <button flex="~ gap1" items-center mb2 op30 text-sm @click="hard = !hard">
        <div :i="hard ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
        Hard
      </button>
    </div>

    <div mb-0 flex="~ gap4 sm:gap3 wrap" text-xl sm:text-3xl>
      <router-link
        v-for="item in navs"
        :key="item.name"
        :to="item.link"
        class="!border-none !font-400"
        :class="route.path === item.link ? '' : inactiveStyle"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>
