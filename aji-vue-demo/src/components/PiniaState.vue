<template>
    <p>store.message: {{ store.message }}</p>
    <p>store.counter: {{ store.counter }}</p>
    <p>store.student.name {{ store.student.name }}</p>
    <p>store.student.surname {{ store.student.surname }}</p>
    <p>store.student.studentId {{ store.student.studentId }}</p>
    <p>Cart:</p>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in store.cart">
                <td>
                    {{item.name}}
                </td>
                <td>
                    {{ item.amount }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { useLectureStore } from '../data/piniaStore';

export default {
    setup() {
        const store = useLectureStore()
        return { store }
    },
}
</script>