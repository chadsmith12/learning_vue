import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('string-length', function(value){
  var stringLength = value.length;
  return value + " (" + stringLength + ")";
});

new Vue({
  render: h => h(App)
}).$mount('#app')
