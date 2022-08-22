<script setup lang="ts">
import { useRouter } from 'vitepress'

const props = defineProps<{
  path: string
  leetcode?: boolean
}>()

const router = useRouter()

const goTo = () => {
  router.go(props.path)
}
</script>

<template>
  <div
    w="100%" sm="w-31%" rounded bg-gray-200 dark="bg-gray-300"
    hover="translate-y--2px" transition="duration-200" cursor="pointer"
    relative p-4 box-border text-12px
    mb-20px
    @click="goTo"
  >
    <slot />
    <img v-if="props.leetcode" src="../../img/leetcode.png" w-50px absolute right-0 bottom-0>
  </div>
</template>

<style scoped></style>
