<script>
export default {
    data() {
        return {
            name: "Lucas",
            items : [5,3,6,3],
            person: {
                name: "Mark",
                age: 24
            },
            people: [
                {
                name: "Mark",
                age: 24
                },
                {
                name: "Mary",
                age: 26
                }
            ],
            checkedFruits: [],
            newName: "",
            newAge: 20,
            counter: 1,
            avg: 1
        } 
    },
    emits: ['itemsNumberChanged'],
    computed: {
        calculateAverage() {
            let sum = 0
            this.items.forEach(element => {
                sum += element
            });
            console.log("items changed")
            return sum/this.items.length
        },
        calculateAverageAge() {
            let sum = 0
            this.people.forEach(element => {
                sum += element.age
            });
            console.log("people changed")
            return sum/this.people.length
        }
    },
    methods: {
        addPerson() {
            this.people.push({
                name: this.newName,
                age: this.newAge
            })
        },
        calculateAvg() {
            let sum = 0
            this.items.forEach(element => {
                sum += element
            });
            this.avg = sum/this.items.length
            
        },
        greet(event) {
            alert(`hello ${this.name}`)
            console.log(event)
        },
        greet2(greetingType) {
            alert(greetingType + " " + this.name)
        }


    },
    created() {
        console.log("Items:"+this.items)
    }
}
</script>

<template>
    <h1>Demo {{ name }}</h1>
    <input type="text" v-model="name" @keyup="counter++"/><input type="button" @click="greet" />
    <div>
        <p>Items count: {{ items.length }}</p>
        <p>Average value: {{ avg }}</p>
        <p>Average value via computed: {{ calculateAverage }}</p>
        <input type="button" value="Add element" @click="items.push(0); calculateAvg(); $emit('itemsNumberChanged', items.length)"/>
    </div>

    <div>
        <p>Computed in complex objects</p>
        <input type="text" placeholder="Name here" v-model="newName"/>
        <input type="number" v-model="newAge"/>
        <input type="button" @click="addPerson"/>
        <p>Average age via computed {{ calculateAverageAge }}</p>
        <table>
            <thead>
                <th>
                    <td>Name</td>
                    <td>Age</td>
                </th>
                
            </thead>
            <tbody>
                    <tr v-for="p in people">
                        <td>{{ p.name }}</td>
                        <td>{{ p.age }}</td>
                    </tr>
                </tbody>
        </table>
    </div>
    <div>
        <p>{{ checkedFruits }}</p>
        <input type="checkbox" id="banana" value="banana" v-model="checkedFruits"/>
        <label for="banana">banana</label>
        <input type="checkbox" id="apple" value="apple" v-model="checkedFruits"/>
        <label for="apple">apple</label>
        <input type="checkbox" id="pear" value="pear" v-model="checkedFruits"/>
        <label for="pear">pear</label>
    </div>
    <div>
        <input type="button" value="Hello" @click="greet2('hello')"/>
        <input type="button" value="Hi" @click="greet2('hi')"/>
        <input type="button" value="Hi" @click="name = ''"/>        
        <p>{{ counter }}</p>
    </div>
    <ul>
        <li v-for="item in items">
            {{ item }}
        </li>
    </ul>
</template>