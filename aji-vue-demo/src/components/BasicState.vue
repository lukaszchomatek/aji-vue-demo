<template>
    <p>sharedState.message: {{ sharedState.message }}</p>
    <p>sharedState.counter: {{ sharedState.counter }}</p>
    <p>sharedState.student.name {{ sharedState.student.name }}</p>
    <p>sharedState.student.surname {{ sharedState.student.surname }}</p>
    <p>sharedState.student.studentId {{ sharedState.student.studentId }}</p>
    <p>Cart:</p>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in sharedState.cart">
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
import { shallowReactive } from 'vue';
import store from '../data/basicStore'

export default {
    data() {
        return {
            sharedState : store.state
        }
    }
}
</script>