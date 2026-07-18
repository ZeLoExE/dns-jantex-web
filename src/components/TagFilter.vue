<template>
  <div class="tag-filter">
    <div class="tag-chips">
      <button
        v-for="tag in tags"
        :key="tag"
        class="tag-chip"
        :class="{ active: selectedTags.includes(tag) }"
        :aria-pressed="selectedTags.includes(tag)"
        @click="$emit('toggle', tag)"
      >
        {{ tagLabels[tag] }}
      </button>
    </div>
    <button v-if="selectedTags.length > 0" class="clear-all" @click="$emit('clear')">
      Clear all
    </button>
  </div>
</template>

<script setup lang="ts">
import { allTags, tagLabels, type Tag } from '../data/dns-providers'

defineProps<{
  selectedTags: Tag[]
}>()

defineEmits<{
  toggle: [tag: Tag]
  clear: []
}>()

const tags = allTags
</script>

<style scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
}

.tag-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag-chip {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full, 9999px);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tag-chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tag-chip.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.clear-all {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  cursor: pointer;
  text-decoration: underline;
}

.clear-all:hover {
  color: var(--color-error);
}
</style>
