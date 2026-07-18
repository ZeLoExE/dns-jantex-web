<template>
  <div class="app" :class="{ dark: themeStore.isDark, light: !themeStore.isDark }">
    <AppHeader />
    <main class="main-content">
      <SearchBar v-model="searchQuery" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from './stores/theme'
import AppHeader from './components/AppHeader.vue'
import SearchBar from './components/SearchBar.vue'

const themeStore = useThemeStore()
const searchQuery = ref('')
</script>

<style>
.main-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}
</style>
