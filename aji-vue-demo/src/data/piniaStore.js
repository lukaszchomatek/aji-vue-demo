import { defineStore } from "pinia";

export const useLectureStore = defineStore('lecture', {
    state: () => ({
        message: "hello",
        counter: 0,
        student: {
            name: "John",
            surname: "Brown",
            studentId: 300000
        },
        cart: []
    }),
    actions: {
        increment() {
                    this.counter++
        },
        addToCart(newProduct) {
                this.cart.push({...newProduct})
        }
    }
})