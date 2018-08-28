import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    viewServer(server) {
      this.$emit('server-clicked', server);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
