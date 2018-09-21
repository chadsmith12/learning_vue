<template>
  <div id="app">
    <div class="container">
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <hr>
      <button @click="fruits.push('berries')">Add New item</button>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
      <hr>
      <List/>
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'
import {fruitMixin} from './mix-ins/fruitMixins.js'

export default {
  name: 'app',
  data() {
    return {
      text: 'Hello from the other side!',
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    List
  },
  mixins: [fruitMixin]
}
</script>
