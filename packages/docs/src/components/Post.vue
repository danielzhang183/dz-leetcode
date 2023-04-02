<script setup lang='ts'>
import { formatDate, getDifficultyColor, isEnglish } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()

onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(decodeURIComponent(location.hash))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return

      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })

  navigate()
  setTimeout(navigate, 500)
})
</script>

<template>
  <ClientOnly v-if="frontmatter.plum">
    <Plum />
  </ClientOnly>
  <div v-if="frontmatter.display ?? frontmatter.title" class="prose m-auto mb-8">
    <h1 class="mb-0">
      {{ !isEnglish && frontmatter.titleZh ? frontmatter.titleZh : frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
      {{ formatDate(frontmatter.date) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
    </p>
    <div flex="~ gap3" items-center>
      <span
        v-if="frontmatter.difficulty"
        v-t="`${frontmatter.difficulty}`"
        :style="getDifficultyColor(frontmatter.difficulty)"
      />
      <div v-if="frontmatter.origin" flex="~ gap1" items-center cursor-pointer>
        <i i-ion:ios-share-alt />
        <a
          v-t="'view-source'"
          :href="frontmatter.origin"
          target="_blank"
        />
      </div>
    </div>
    <p v-if="frontmatter.subtitle ?? frontmatter.subtitleZh" class="opacity-50 !-mt-6 italic">
      {{ isEnglish ? frontmatter.subtitle : frontmatter.subtitleZh }}
    </p>
  </div>
  <article ref="content">
    <slot />
  </article>
  <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8">
    <br>
    <router-link
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="font-mono no-underline opacity-50 hover:opacity-75"
    >
      cd ..
    </router-link>
  </div>
</template>
