<script setup lang="ts">
interface SubNav {
  name: string
  link: string
}

defineProps<{
  navs: SubNav[]
}>()

const inactiveStyle = 'opacity-20 hover:opacity-50'

const route = useRoute()
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <!-- <button flex="~ gap1" items-center mb2 op30 text-sm @click="englishOnly = !englishOnly">
      <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
      English Only
    </button> -->

    <div mb-0 flex="~ gap2 sm:gap3 wrap" text-xl sm:text-3xl>
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
