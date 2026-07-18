import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { dnsProviders, type DNSProvider, type Tag } from '../data/dns-providers'
import { useFavoritesStore } from './favorites'

export const useProvidersStore = defineStore('providers', () => {
  const searchQuery = ref('')
  const selectedTags = ref<Tag[]>([])
  const activeProvider = ref<DNSProvider | null>(null)

  const filteredProviders = computed(() => {
    let result = [...dnsProviders]

    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.primary.includes(query) ||
        p.secondary.includes(query)
      )
    }

    // Filter by tags
    if (selectedTags.value.length > 0) {
      result = result.filter(p =>
        selectedTags.value.some(tag => p.tags.includes(tag))
      )
    }

    return result
  })

  const sortedProviders = computed(() => {
    const favoritesStore = useFavoritesStore()
    const providers = filteredProviders.value

    // Sort: favorites first, then alphabetical
    return [...providers].sort((a, b) => {
      const aFav = favoritesStore.isFavorite(a.id)
      const bFav = favoritesStore.isFavorite(b.id)
      if (aFav && !bFav) return -1
      if (!aFav && bFav) return 1
      return a.name.localeCompare(b.name)
    })
  })

  function setSearch(query: string) {
    searchQuery.value = query
  }

  function toggleTag(tag: Tag) {
    const index = selectedTags.value.indexOf(tag)
    if (index === -1) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  function clearTags() {
    selectedTags.value = []
  }

  function setActive(provider: DNSProvider | null) {
    activeProvider.value = provider
  }

  return {
    searchQuery,
    selectedTags,
    activeProvider,
    filteredProviders,
    sortedProviders,
    setSearch,
    toggleTag,
    clearTags,
    setActive
  }
})
