<template>
  <header class="app-header">
    <div class="logo">
      <span class="logo-icon">🌐</span>
      <h1>DNS Jantex</h1>
      <span class="version">Web v1.0</span>
    </div>
    <div class="actions">
      <button class="theme-toggle" @click="themeStore.toggle()" :title="themeStore.isDark ? 'Switch to Light' : 'Switch to Dark'">
        <span v-if="themeStore.isDark">☀️</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.logo-icon {
  font-size: 1.5rem;
}

.logo h1 {
  font-size: var(--font-size-xl);
  font-weight: 600;
}

.version {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  background: var(--bg-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.actions {
  display: flex;
  gap: var(--spacing-sm);
}

.theme-toggle {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  font-size: 1.25rem;
  transition: all var(--transition-fast);
}

.theme-toggle:hover {
  background: var(--bg-hover);
  border-color: var(--border-color-hover);
}
</style>
