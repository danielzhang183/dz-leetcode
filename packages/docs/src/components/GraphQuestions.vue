<script setup lang="ts">
import type { Data, Node, Options } from 'vis-network'
import { Network } from 'vis-network'
import type { QuestionRelation } from '../composables'
import { getQuestionsRelations } from '../composables'

const container = ref<HTMLElement>()
const colorMode = useColorMode()

const selected = ref<{
  id: string
  relationship: QuestionRelation[]
}>()

const relationships = ref(getQuestionsRelations())

const selectedFilter = ref<QuestionRelation>()

const entries = computed(() => {
  const relations = (relationships.value || [])
  if (selectedFilter.value) {
    const set = new Set<QuestionRelation>()
    relations.find(i => i.id === selected.value?.id)
    function addToSet(rel?: QuestionRelation) {
      if (!rel || set.has(rel))
        return
      set.add(rel)
      rel.deps.forEach(dep => addToSet(relations.find(i => i.id === dep)))
    }
    addToSet(selectedFilter.value)
    return Array.from(set)
  }

  return relations
})

const data = computed<Data>(() => {
  const nodes: Data['nodes'] = entries.value.map((rel): Node | null => {
    const shape = rel.group === 'category'
      ? 'hexagon'
      : rel.group === 'tag'
        ? 'square'
        : 'dot'

    return {
      id: rel.id,
      label: rel.id.split('/').splice(-1)[0],
      group: rel.group,
      shape,
      size: 15 + Math.min(rel.deps.length / 2, 8),
      font: {
        color: colorMode.value === 'dark' ? 'white' : 'black',
      },
      color: selectedFilter.value?.id === rel.id ? '#82c742' : undefined,
      // @ts-expect-error additional data
      extra: {
        id: rel.id,
        relationship: rel,
      },
    }
  }).filter((x): x is Node => !!x)

  const edges: Data['edges'] = entries.value.flatMap(rel => rel.deps.map(dep => ({
    from: rel.id,
    to: dep,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.8,
      },
    },
  })))

  return {
    nodes,
    edges,
  }
})

onMounted(() => {
  const options: Options = {
    nodes: {
      shape: 'dot',
      size: 16,
    },
    physics: {
      repulsion: {
        centralGravity: 0.7,
        springLength: 100,
        springConstant: 0.01,
      },
      maxVelocity: 146,
      solver: 'forceAtlas2Based',
      timestep: 0.35,
      stabilization: {
        enabled: true,
        iterations: 200,
      },
    },
    groups: {
      question: {
        color: '#03ae67',
      },
      tag: {
        color: '#42b2b8',
      },
      category: {
        color: '#4256b8',
      },
    },
  }
  const network = new Network(container.value!, data.value, options)

  network.on('click', (e) => {
    const id = e.nodes?.[0]
    const node = (data.value.nodes as any[])?.find(i => i.id === id)?.extra
    if (node)
      selected.value = node
  })

  watch(data, () => {
    network.setData(data.value)
  })
})
</script>

<template>
  <div relative h-600 w-full>
    <div ref="container" h-full w-full />
  </div>
</template>
