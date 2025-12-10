<template>
  <section>
    <h2>API use</h2>

    <p>
      <button @click="fetchProducts">Fetch products</button>
    </p>

    <p v-if="store.isLoading">Loading...</p>
    <p v-if="store.error">Error: {{ store.error }}</p>

    <ul v-if="!store.isLoading && !store.error">
      <li v-for="item in store.items" :key="item.id">
        {{ item.title }} – {{ item.price }}$
      </li>
    </ul>
  </section>
</template>

<script>
import { useProductsStore } from '../data/productsStore'

export default {
  data() {
    return {
      store: useProductsStore(),
    }
  },
  methods: {
    fetchProducts() {
      this.store.fetchProducts()
    },
  },
}
</script>