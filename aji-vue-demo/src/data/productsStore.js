// src/data/productsStore.js
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      this.isLoading = true
      this.error = null

      try {
        const res = await fetch('https://dummyjson.com/products?limit=5')

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }

        const data = await res.json()
        this.items = data.products.map(p => ({
          id: p.id,
          title: p.title,
          price: p.price,
        }))
      } catch (err) {
        this.error = err.message || 'Unknown error'
      } finally {
        this.isLoading = false
      }
    },
  },
})