<script setup lang="ts">
interface Interview {
  path: string
  company: string
  title: string
  origin: string
  icon: string
}

type InterviewNav = Pick<Interview, 'company' | 'icon'>

const companyIconMap = new Map<string, string>([
  ['ali', 'i-simple-icons:alibabadotcom'],
  ['huawei', 'i-simple-icons:huawei'],
  ['netease', 'i-ri:netease-cloud-music-line'],
  ['tesla', 'i-simple-icons:tesla'],
  ['didi', 'i-ri:taxi-line'],
  ['meituan', 'i-arcticons:sankuaimeituan'],
  ['bytedance', 'i-icon-park-solid:bytedance'],
  ['tencent', 'i-icon-park-outline:tencent-qq'],
  ['baidu', 'i-simple-icons:baidu'],
  ['small', 'i-emojione-monotone:sleeping-face'],
])

const router = useRouter()
const routes: Interview[] = router.getRoutes()
  .filter(i => i.path.startsWith('/interview') && i.meta.frontmatter.company && !i.path.endsWith('.html'))
  .sort((a, b) => (a.meta.frontmatter.company - b.meta.frontmatter.company))
  .map(i => ({
    path: i.path,
    company: i.meta.frontmatter.company,
    title: i.meta.frontmatter.title,
    origin: i.meta.frontmatter.origin,
    icon: companyIconMap.get(i.meta.frontmatter.company)!,
  }))

const company = ref<string>('')
const interviews = computed(
  () => company.value
    ? routes.filter(i => i.company === company.value)
    : routes,
)
const navs = [...new Set(routes.map(i => i.company))]
  .map(i => ({ icon: companyIconMap.get(i), company: i }))
  .concat([{ icon: 'i-ic:baseline-format-list-bulleted', company: '' }]) as InterviewNav[]
</script>

<template>
  <ul class="nav" flex="~ wrap">
    <li
      v-for="(item, index) in navs"
      :key="index"
      :class="item.icon"
      text-xl px-3
      :title="item.company"
      @click="company = item.company"
    />
  </ul>
  <div class="project-grid -mx-3 gap-2">
    <a
      v-for="item in interviews"
      :key="item.title"
      class="item relative flex items-center block"
      :href="item.path"
      target="_blank"
      :class="!item.origin ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
      :title="item.title"
    >
      <div class="pr-5">
        <div class="text-3xl opacity-50" :class="item.icon" />
      </div>
      <div class="flex-auto">
        <div class="mt-0">{{ item.title }}</div>
        <div v-if="item.company" class="text-sm opacity-50 min-h-10">{{ item.company }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.nav {
  cursor: pointer;
  transition: opacity 0.2s ease;
  opacity: 0.6;
}

.nav li:hover {
  opacity: 1;
  color: #329672;
}

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
