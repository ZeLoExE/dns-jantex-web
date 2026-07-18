<template>
  <div class="app" :class="{ dark: isDark }">
    <h1>DNS Jantex Web</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
</script>