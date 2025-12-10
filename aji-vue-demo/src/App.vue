<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import DemoVue from './components/Demo.vue'
import BasicState from './components/BasicState.vue'  
import BasicStateMutations from './components/BasicStateMutations.vue'
import PiniaState from './components/PiniaState.vue' 
import PiniaStateMutations from './components/PiniaStateMutations.vue'
import Products from './components/Products.vue'

function displayNewItemsCount(newCount) {
    alert(newCount)
  }

</script>

<template>
  <main>
    <!--
    <HelloWorld msg="asdfasd" counter="2"/>
    <DemoVue @itemsNumberChanged="displayNewItemsCount" />
  -->
<h1>Basic state</h1>
  <BasicState/>
    <BasicStateMutations/>

<h1>Pinia state</h1>
    <PiniaState/>
    <PiniaStateMutations/>
    <Products/>
  </main>
</template>
