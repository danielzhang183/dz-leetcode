---
layout: page
---

<script setup lang="ts">
import Container from '../.vitepress/theme/components/Topic/TopicPageContainer.vue'
import LeetcodeItem from '../.vitepress/theme/components/List/LeetcodeItem.vue'
import { getDataByTopicName } from '../.vitepress/theme/data'

const props = {
  title: "Leetcode CN",
  subTitle: "Solved Problems"
}

const leetcodeData = getDataByTopicName("leetcode")
console.log(leetcodeData)
</script>

<Container v-bind="props">
  <LeetcodeItem v-for="item in leetcodeData" v-bind="item" />
</Container>
