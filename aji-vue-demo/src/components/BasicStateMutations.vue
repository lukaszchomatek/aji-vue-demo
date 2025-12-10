<template>
    <p>Modify counter (using methods): 
        <input type="button" value="Increase" v-on:click="increase"/>
        <input type="button" value="Reset" v-on:click="reset"/>
    </p>
    <p>Modify properties (directly):
        <div>
            v-model=store.state.student.name
            <input type="text" v-model="store.state.student.name"/>
        </div>
    </p>
    <p>Add to cart:
        <input type="text" v-model="newCartItem.name"/>
        <input type="number" min="1" v-model="newCartItem.amount"/>
        <input type="button" @click="addItemToCart" value="Add to cart (copying properties)"/>
        <input type="button" @click="addItemToCartWithoutManualAssignment" value="Add to cart (spread operator)"/>
        <input type="button" @click="addItemToCartTidy" value="Add to cart (tidy)"/>
        

    </p>
</template>

<script>
import { toRaw } from 'vue';
import store from '../data/basicStore'

const defaultItem = () => ({
  name: "",
  amount: 1
})

export default {
    setup() {
        return { store }
    },
    data() {
        return {

            newCartItem: defaultItem()
        }
    },
    methods: {
        increase() {
            store.incrementCounter()
        },
        reset() {
            store.resetCounter()
        },
        addItemToCart() {
            store.addToCart({
                name: this.newCartItem.name,
                amount: this.newCartItem.amount
            })
            this.newCartItem.name = ""
            this.newCartItem.amount = 1
        },
        addItemToCartWithoutManualAssignment() {
            store.addToCart({
                ...toRaw(this.newCartItem)
            })
            this.newCartItem.name = ""
            this.newCartItem.amount = 1
        },
        addItemToCartTidy() {
            store.addToCart({
                ...toRaw(this.newCartItem)
            })
            this.newCartItem = defaultItem()
        }
    }
}
</script>