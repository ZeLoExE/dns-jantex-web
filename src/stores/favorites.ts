import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<string[]>(JSON.parse(localStorage.getItem('favorites') || '[]'))

  watch(favorites, (val) => {
    localStorage.setItem('favorites', JSON.stringify(val))
  }, { deep: true })

  function isFavorite(id: string): boolean {
    return favorites.value.includes(id)
  }

  function toggle(id: string) {
    const index = favorites.value.indexOf(id)
    if (index === -1) {
      favorites.value.push(id)
    } else {
      favorites.value.splice(index, 1)
    }
  }

  return { favorites, isFavorite, toggle }
})
