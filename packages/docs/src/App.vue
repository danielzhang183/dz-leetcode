<script setup lang="ts">
import { useCopyCode } from './logics/copyCode'
import { useCodeGroups } from './logics/codeGroups'

// setup global copy code handler
useCopyCode()
// setup global code groups handler
useCodeGroups()
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
