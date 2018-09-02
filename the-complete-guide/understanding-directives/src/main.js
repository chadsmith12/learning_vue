import Vue from 'vue'
import App from './App.vue'


Vue.directive('highlight', {
  // bind hook (initialized) - el, binding, vNode
  bind(el, binding, vNode) {
    //el.style.backgroundColor = 'green'
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      }
      else {
        el.style.color = binding.value;
      }
    }, delay)

  }
  // inserted (inserted into dom) - el, binding, vNode
  // update (once component is updated without children) - el, bidning, vNode, oldvnode
  // componentUpdated (once component is updated with children) - el, bidning, vNode, oldvnode
  // unbind - el, binding, vNode
})

new Vue({
  el: '#app',
  render: h => h(App)
})
