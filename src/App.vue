<template>
  <div class="app" :class="{ dark: themeStore.isDark, light: !themeStore.isDark }">
    <AppHeader />
    <main class="main-content">
      <!-- Content will be added in later tasks -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from './stores/theme'
import AppHeader from './components/AppHeader.vue'

const themeStore = useThemeStore()
</script>

<style>
.main-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}
</style>
