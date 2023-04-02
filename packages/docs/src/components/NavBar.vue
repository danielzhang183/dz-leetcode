<script setup lang="ts">
import { isDark } from '~/logics'
const { t } = useI18n()
</script>

<template>
  <header class="header z-40">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="isDark" src="/logo-dark.svg?url" alt="logo">
      <img v-show="!isDark" src="/logo.svg?url" alt="logo">
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link to="/structures" title="Structures">
          <span class="lt-md:hidden">{{ t('nav.structure') }}</span>
          <div i-carbon-load-balancer-network md:hidden />
        </router-link>
        <router-link to="/algorithms" title="Algorithms">
          <span class="lt-md:hidden">{{ t('nav.algorithm') }}</span>
          <div i-carbon-calculation md:hidden />
        </router-link>
        <router-link to="/design" title="Design">
          <span class="lt-md:hidden">{{ t('nav.design') }}</span>
          <div i-carbon-cognitive md:hidden />
        </router-link>
        <router-link to="/interview" title="Interview">
          <span class="lt-md:hidden">{{ t('nav.interview') }}</span>
          <div i-carbon-license-third-party-draft md:hidden />
        </router-link>
        <a href="https://github.com/danielzhang183/dz-leetcode" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
