<template>
  <div class="app" :class="{ dark: themeStore.isDark, light: !themeStore.isDark }">
    <AppHeader />
    <main class="main-content">
      <div class="left-panel">
        <SearchBar v-model="providersStore.searchQuery" />
        <TagFilter
          :selected-tags="providersStore.selectedTags"
          @toggle="providersStore.toggleTag"
          @clear="providersStore.clearTags"
        />
        <ProviderList />
      </div>
      <div class="right-panel">
        <NetworkDashboard />
        <SmartConnect />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from './stores/theme'
import { useProvidersStore } from './stores/providers'
import AppHeader from './components/AppHeader.vue'
import SearchBar from './components/SearchBar.vue'
import TagFilter from './components/TagFilter.vue'
import ProviderList from './components/ProviderList.vue'
import NetworkDashboard from './components/NetworkDashboard.vue'
import SmartConnect from './components/SmartConnect.vue'

const themeStore = useThemeStore()
const providersStore = useProvidersStore()
</script>

<style>
.main-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.left-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.right-panel {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (max-width: 900px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}
</style>
