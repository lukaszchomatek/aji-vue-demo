<template>
    <h1>Pinia state - display</h1>
    <p>Counter: {{ store.counter }}</p>
    <p>Student name: {{ store.student.name }}</p>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in store.cart">
                <td>{{ item.name }}</td>
                <td>{{ item.amount }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { useLectureStore } from '@/data/piniaStore';

    export default {
        setup() {
            const store = useLectureStore()
            return { store } 
        }
    }
</script>