<template>
  <div id="app">
    <div class="container">
      <h1>Routing</h1>
      <hr>
      <router-view name="header-top"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
      <router-view name="header-bottom"></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0)
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-30pc)
  }
}

@keyframes slide-in {
    0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-30pc)
  }
}
</style>
