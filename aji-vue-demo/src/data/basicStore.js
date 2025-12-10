import { reactive } from "vue";

export default {
    state: reactive({
        message: "hello",
        counter: 0,
        student: {
            name: "John",
            surname: "Brown",
            studentId: 300000
        },
        cart: []
    }),
    increment() {
                console.log(this)
                this.state.counter++
    },
    addToCart(newProduct) {
            this.state.cart.push({...newProduct})
    }
}