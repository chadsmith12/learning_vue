<template>
  <div id="app">
    <div class="container">
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <hr>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      text: 'Hello from the other side!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
    }
  }
}
</script>
