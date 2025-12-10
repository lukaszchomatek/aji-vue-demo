<template>
    <h1>Basic state - mutations</h1>
    <input type="button" value="Increment counter" @click="increment"/>
    <div>
        <p>Product name: <input type="text" placeholder="product name" v-model="newProduct.name"/></p>
        <p>Amount: <input type="number" min="1" v-model="newProduct.amount"/></p>
        <input type="button" value="Add to cart" @click="addToCart"/>
    </div>
</template>

<script>
    import store from '../data/basicStore'

    const defaultItem = () => {
        return {
            name: "",
            amount: 1
        }
    }
    export default {
        setup() {
            return { store } 
        },
        data() {
            return {
                newProduct: defaultItem()
            }
        },
        methods: {
            increment() {
                this.store.increment()
            },
            addToCart() {
                let newProduct = {...this.newProduct }
                this.store.state.cart.push(newProduct)
                this.newProduct = defaultItem()
            }
        }
    }
</script>