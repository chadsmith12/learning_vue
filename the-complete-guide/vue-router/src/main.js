import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to) {
    if(to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
