<template>
  <div class="app" :class="{ dark: themeStore.isDark, light: !themeStore.isDark }">
    <h1>DNS Jantex Web</h1>
    <p>Theme: {{ themeStore.isDark ? 'Dark' : 'Light' }}</p>
    <button @click="themeStore.toggle()">Toggle Theme</button>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
</script>
