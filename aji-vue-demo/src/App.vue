<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import DemoVue from './components/Demo.vue'
import BasicState from './components/BasicState.vue'  
import BasicStateMutations from './components/BasicStateMutations.vue'
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
    <BasicState/>
    <BasicStateMutations/>
  </main>
</template>
