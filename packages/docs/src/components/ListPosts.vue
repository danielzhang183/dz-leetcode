<script setup lang="ts">
import { useRouter } from 'vue-router'
import { englishOnly, formatDate } from '~/composables'
import type { Post } from '~/types'

const props = defineProps<{
  type?: string
  posts?: Post[]
}>()

const router = useRouter()
const routes: Post[] = router.getRoutes()
  .filter(i => i.path.startsWith('/design') && i.meta.frontmatter.date && !i.path.endsWith('.html'))
  .sort((a, b) => (a.meta.frontmatter.type - b.meta.frontmatter.type) || (+new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date)))
  .map(i => ({
    path: i.path,
    type: i.meta.frontmatter.type,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    lang: i.meta.frontmatter.lang,
    duration: i.meta.frontmatter.duration,
  }))
const posts = computed(() => (props.posts || routes).filter(i => !englishOnly.value || i.lang !== 'zh'))

const isSameType = (a: string | undefined, b: string | undefined) => a && b && a === b
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>

    <template v-for="route, idx in posts" :key="route.path">
      <div v-if="!isSameType(route.type, posts[idx - 1]?.type)" relative h20 pointer-events-none>
        <span text-5em op10 absolute left--1rem top---1rem font-bold>{{ route.type }}</span>
      </div>
      <AppLink
        class="item block font-normal mb-6 mt-2 no-underline"
        :to="route.path"
      >
        <li class="no-underline">
          <div class="title text-lg leading-1.2em">
            <span
              v-if="route.lang === 'zh'"
              align-middle
              class="text-xs border border-current rounded px-1 pb-0.2 md:ml--10.5 mr2"
            >
              中文
            </span>
            <span align-middle>{{ route.title }}</span>
          </div>

          <div class="time opacity-50 text-sm">
            {{ formatDate(route.date) }}
            <span v-if="route.duration" op80>· {{ route.duration }}</span>
          </div>
        </li>
      </AppLink>
    </template>
  </ul>
</template>
