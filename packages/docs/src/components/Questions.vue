<script setup lang="ts">
import ListAllQuestions from '~/components/ListAllQuestions.vue'
import GraphQuestions from '~/components/GraphQuestions.vue'
import { useAppSettings } from '~/composables'

const {
  graphView: view,
} = useAppSettings()

function toggleView() {
  view.value = view.value === 'list' ? 'graph' : 'list'
}
</script>

<template>
  <div relative h-500px of-auto>
    <component
      :is="view === 'list' ? ListAllQuestions : GraphQuestions"
      module="structures"
    >
      <div flex-none flex="~ gap4">
        <button
          title="Toggle view"
          @click="toggleView"
        >
          <div v-if="view === 'graph'" i-carbon-list />
          <div v-else i-carbon-network-4 />
        </button>
      </div>
    </component>
  </div>
</template>
