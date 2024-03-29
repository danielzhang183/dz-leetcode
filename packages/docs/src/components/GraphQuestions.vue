<script setup lang="ts">
import type { Data, Node, Options } from 'vis-network'
import { Network } from 'vis-network'
import type { QuestionRelation } from '../composables'
import { getQuestionsRelations, useAppSettings } from '../composables'

const container = ref<HTMLElement>()
const colorMode = useColorMode()

const selected = ref<{
  id: string
  relationship?: QuestionRelation[]
}>()

const {
  graphShowStructures: showStructures,
  graphShowAlgorithms: showAlgorithms,
  graphShowSeries: showSeries,
} = useAppSettings()

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
      size: 15 + Math.min(rel.deps.size / 2, 8),
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

  const edges: Data['edges'] = entries.value.flatMap(rel => Array.from(rel.deps).map(dep => ({
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

function setFilter() {
  selectedFilter.value = selected.value?.relationship
  selected.value = undefined
}
</script>

<template>
  <Navbar ref="navbar" absolute left-0 right-0 top-0>
    <template #search>
      <!-- <NCheckbox v-model="showStructures" n="primary sm">
        <span op75>Show structures</span>
      </NCheckbox>
      <NCheckbox v-model="showAlgorithms" n="primary sm">
        <span op75>Show algorithms</span>
      </NCheckbox>
      <NCheckbox v-model="showSeries" n="primary sm">
        <span op75>Show series</span>
      </NCheckbox> -->
      <button v-if="selectedFilter" flex="~ gap-1" items-center rounded-full bg-gray:20 py1 pl3 pr2 text-xs op50 hover:op100 @click="selectedFilter = undefined">
        Clear filter <div i-carbon-close />
      </button>
      <div flex-auto />
      <slot />
    </template>
  </Navbar>

  <div relative h-full w-full>
    <div ref="container" h-full w-full />
    <!-- <DrawerRight
      :model-value="!!(selected && selected.component)"
      :navbar="navbar"
      w-80
      @close="selected = undefined"
    >
      <div v-if="selected && selected.component" p4 pr10 pt4 flex="~ col gap4">
        <ComponentDetails :component="selected.component" />
        <div>
          <NButton n="primary solid" @click="setFilter()">
            Filter to this component
          </NButton>
        </div>
      </div>
    </DrawerRight> -->
  </div>
</template>
