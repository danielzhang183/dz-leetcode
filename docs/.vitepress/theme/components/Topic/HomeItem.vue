<script setup lang="ts">
import { useRouter } from 'vitepress'

const props = defineProps<{
  name: string
  link: string
}>()

const router = useRouter()

const goToLink = () => {
  router.go(props.link)
}
</script>

<template>
  <div
    w-full
    md:w="23.5%"
    h-80px
    flex="~"
    items="center"
    justify="flex-start"
    px-2
    box-border
    rounded-md
    hover="translate-y--0.6"
    transition="all"
    cursor="pointer"
    mb="20px"
    @click="goToLink()"
  >
    <div w-full truncate>
      {{ props.name }}
    </div>
  </div>
</template>

<style scoped></style>
