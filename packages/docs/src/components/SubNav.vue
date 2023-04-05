<script setup lang="ts">
import type { Module, SubNav } from '../types'
import { easy, getNavs, hard, medium, mode } from '~/composables'

const props = defineProps<{
  module: Module
  navs?: SubNav[]
}>()

const inactiveStyle = 'opacity-20 hover:opacity-50'

const route = useRoute()

const navs: SubNav[] = props.navs || getNavs(props.module)
const { t } = useI18n()
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <div flex="~ gap3">
      <button flex="~ gap1" items-center mb2 op30 text-sm @click="easy = !easy">
        <div :class="easy ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox'" />
        {{ t('easy') }}
      </button>

      <button flex="~ gap1" items-center mb2 op30 text-sm @click="medium = !medium">
        <div :class="medium ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox'" />
        {{ t('medium') }}
      </button>

      <button flex="~ gap1" items-center mb2 op30 text-sm @click="hard = !hard">
        <div :class="hard ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox'" />
        {{ t('hard') }}
      </button>
      <button flex="~ gap1" items-center mb2 op30 text-sm @click="mode = Number(!mode)">
        <div :class="mode ? 'i-carbon:accessibility-color-filled ' : 'i-carbon:accessibility-color'" />
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
        {{ t(`subnav.${item.name}`) }}
      </router-link>
    </div>
  </div>
</template>
