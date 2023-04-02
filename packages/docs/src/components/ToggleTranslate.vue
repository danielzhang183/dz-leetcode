<script setup lang='ts'>
import { isEnglish } from '~/logics'
import { setI18nLanguage } from '~/modules/i18n'

function toggleTranslate() {
  isEnglish.value = !isEnglish.value
  setI18nLanguage(isEnglish.value ? 'en' : 'zh-CN')
}
</script>

<template>
  <a class="select-none" title="Toggle Translate" @click="toggleTranslate">
    <mdi:translate v-show="isEnglish" />
    <mdi:translate-off v-show="!isEnglish" />
  </a>
</template>
