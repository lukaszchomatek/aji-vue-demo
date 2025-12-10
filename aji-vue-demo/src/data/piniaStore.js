import { defineStore } from "pinia";

export const useLectureStore = defineStore('lecture', {
    state: () => ({
        message: "Hello",
        counter: 0,
        student: {
            name: "Jan",
            surname: "Kowalski",
            studentId: 300000
        },
        cart: []
    }),
    actions: {
        setMessageAction(newValue) {
        this.message = newValue
        },
        incrementCounter() {
            this.counter++
        },
        resetCounter() {
            this.counter = 0
        },
        addToCart(item) {
            this.cart.push(item)
        }
    }
})