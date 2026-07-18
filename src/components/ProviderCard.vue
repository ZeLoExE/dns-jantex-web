<template>
  <div class="provider-card" :class="{ active: isActive }" @click="$emit('select', provider)" @keydown.enter="$emit('select', provider)" @keydown.space.prevent="$emit('select', provider)" tabindex="0" role="button">
    <div class="card-header">
      <div class="provider-info">
        <h3 class="provider-name">{{ provider.name }}</h3>
        <div class="ip-addresses">
          <span class="ip primary">{{ provider.primary }}</span>
          <span class="ip secondary">{{ provider.secondary }}</span>
        </div>
      </div>
      <button
        class="favorite-btn"
        :class="{ favorited: isFavorite }"
        @click.stop="$emit('toggleFavorite', provider.id)"
        :title="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
      >
        {{ isFavorite ? '★' : '☆' }}
      </button>
    </div>
    <div class="card-tags">
      <span v-for="tag in provider.tags" :key="tag" class="tag">
        {{ tagLabels[tag] }}
      </span>
    </div>
    <div v-if="latency" class="latency" :class="latencyClass">
      {{ latency }}ms
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { tagLabels, type DNSProvider } from '../data/dns-providers'

const props = defineProps<{
  provider: DNSProvider
  isFavorite: boolean
  isActive: boolean
  latency?: number
}>()

defineEmits<{
  select: [provider: DNSProvider]
  toggleFavorite: [id: string]
}>()

const latencyClass = computed(() => {
  if (!props.latency) return ''
  if (props.latency < 50) return 'fast'
  if (props.latency < 100) return 'medium'
  return 'slow'
})
</script>

<style scoped>
.provider-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

.provider-card:hover {
  border-color: var(--border-color-hover);
  box-shadow: var(--shadow-md);
}

.provider-card.active {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-alpha);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.provider-info {
  flex: 1;
}

.provider-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.ip-addresses {
  display: flex;
  gap: var(--spacing-sm);
}

.ip {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.ip.primary::before {
  content: 'P: ';
  color: var(--text-muted);
}

.ip.secondary::before {
  content: 'S: ';
  color: var(--text-muted);
}

.favorite-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--text-muted);
  transition: color var(--transition-fast);
}

.favorite-btn:hover,
.favorite-btn.favorited {
  color: var(--color-warning);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
}

.tag {
  font-size: var(--font-size-xs, 0.75rem);
  padding: 2px var(--spacing-sm);
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
}

.latency {
  position: absolute;
  top: var(--spacing-md);
  right: 3rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.latency.fast { color: var(--color-success); }
.latency.medium { color: var(--color-warning); }
.latency.slow { color: var(--color-error); }
</style>
