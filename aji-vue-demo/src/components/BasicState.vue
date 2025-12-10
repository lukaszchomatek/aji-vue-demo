<template>
    <h1>Basic state - display</h1>
    <p>Counter: {{ store.state.counter }}</p>
    <p>Student name: {{ store.state.student.name }}</p>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in store.state.cart">
                <td>{{ item.name }}</td>
                <td>{{ item.amount }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import store from '../data/basicStore'

    export default {
        setup() {
            return { store } 
        }
    }
</script>