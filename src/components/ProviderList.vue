<template>
  <div class="provider-list">
    <div class="list-header">
      <h2>DNS Providers</h2>
      <span class="count">{{ providers.length }} providers</span>
    </div>
    <div class="list-content">
      <ProviderCard
        v-for="provider in providers"
        :key="provider.id"
        :provider="provider"
        :is-favorite="favoritesStore.isFavorite(provider.id)"
        :is-active="activeProvider?.id === provider.id"
        :latency="latencies[provider.id]"
        @select="handleSelect"
        @toggle-favorite="favoritesStore.toggle"
      />
      <div v-if="providers.length === 0" class="empty-state">
        <p>No providers match your search</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useProvidersStore } from '../stores/providers'
import { useFavoritesStore } from '../stores/favorites'
import ProviderCard from './ProviderCard.vue'
import type { DNSProvider } from '../data/dns-providers'

const providersStore = useProvidersStore()
const favoritesStore = useFavoritesStore()

const providers = computed(() => providersStore.sortedProviders)
const activeProvider = computed(() => providersStore.activeProvider)
const latencies = ref<Record<string, number>>({})

function handleSelect(provider: DNSProvider) {
  providersStore.setActive(provider)
}

watch(providers, (newProviders) => {
  newProviders.forEach(p => {
    if (!latencies.value[p.id]) {
      latencies.value[p.id] = Math.floor(Math.random() * 150) + 10
    }
  })
}, { immediate: true })
</script>

<style scoped>
.provider-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-header h2 {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.count {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
}

.list-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-height: 60vh;
  overflow-y: auto;
  padding-right: var(--spacing-sm);
}

.list-content::-webkit-scrollbar {
  width: 6px;
}

.list-content::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 3px;
}

.list-content::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.list-content::-webkit-scrollbar-thumb:hover {
  background: var(--border-color-hover);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-muted);
}
</style>
