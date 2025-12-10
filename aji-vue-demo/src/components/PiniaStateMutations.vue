<template>
    <p>Modify counter (using methods): 
        <input type="button" value="Increase" v-on:click="increase"/>
        <input type="button" value="Reset" v-on:click="reset"/>
    </p>
    <p>Modify properties (directly):
        <div>
            v-model=store.student.name
            <input type="text" v-model="store.student.name"/>
        </div>
    </p>
    <p>Add to cart:
        <input type="text" v-model="newCartItem.name"/>
        <input type="number" min="1" v-model="newCartItem.amount"/>
        <input type="button" @click="addItemToCart" value="Add to cart"/>
    </p>
</template>

<script>
import { useLectureStore } from '../data/piniaStore'

const defaultItem = () => ({
  name: "",
  amount: 1
})

export default {
  data() {
    return {
      store: useLectureStore(),
      newCartItem: defaultItem(),
    }
  },
  methods: {
    increase() {
      this.store.incrementCounter()
    },
    reset() {
      this.store.resetCounter()
    },
    addItemToCart() {
      this.store.addToCart({
        name: this.newCartItem.name,
        amount: this.newCartItem.amount,
      })
      this.newCartItem = defaultItem()
    },
  },
}
</script>