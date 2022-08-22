<script setup lang="ts">
import PageContainer from '../PageContainer.vue'
import TopicHeader from './TopicHeader.vue'

const props = defineProps<{
  title: string
  subTitle: string
}>()
</script>

<template>
  <PageContainer>
    <TopicHeader :title="props.title" :sub="props.subTitle" />
    <div flex="~ wrap" w-full justify-start gap="2.33%" mt-20px>
      <slot />
    </div>
  </PageContainer>
</template>

<style scoped></style>
