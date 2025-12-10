import { reactive } from "vue"

export default {
    state: reactive({
        message: "Hello",
        counter: 0,
        student: {
            name: "Jan",
            surname: "Kowalski",
            studentId: 300000
        },
        cart: []
    }
    ),
    setMessageAction(newValue) {
        this.state.message = newValue
    },
    incrementCounter() {
        this.state.counter++
    },
    resetCounter() {
        this.state.counter = 0
    },
    addToCart(item) {
        this.state.cart.push(item)
    }
}

