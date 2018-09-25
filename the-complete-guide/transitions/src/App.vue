<template>
  <div id="app">
    <div class="container">
      <div class="col s8 m6">
        <h1>Animations</h1>
        <button class="waves-effect waves-light btn" @click="show = !show">Show Alert</button>
        <hr>
        <transition name="slide" type="animation">
          <div v-if="show" class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Transitions</span>
              <p>I am bound to slide animation. I will run the slide.</p>
            </div>
          </div>
        </transition>
        <div class="input-field col">
          <select class="browser-default" v-model="alertAnimation">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
          </select>
        </div>
        <br>
        <transition :name="alertAnimation">
          <div v-if="show" class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Transitions</span>
              <p>I am binded to the select box above. Choose fade or slide and that is the animation that I will do.</p>
            </div>
          </div>
        </transition>
        <div class="input-field col">
          <select class="browser-default" v-model="customAnimation">
            <option value="bounce">Bounce</option>
            <option value="shake">Shake</option>
            <option value="wobble">Wobble</option>
            <option value="rollIn">Roll In</option>
          </select>
        </div>
        <br>
        <transition enter-class="" v-bind:enter-active-class="animation" leave-class="" leave-active-class="animated shake">
          <div v-if="show" class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Custom Classes</span>
              <p>I am using animate.css. Choose an entrance animation above and that is the animation I will run while entering.</p>
            </div>
          </div>
        </transition>
        <br>
        <transition name="fade" mode="out-in">
          <div v-if="show" class="card blue-grey darken-1" key="first">
            <div class="card-content white-text">
              <span class="card-title">Multiple Element Transitions</span>
              <p>I am a transition that will switch elements. I am the 1st element.</p>
            </div>
          </div>
          <div v-else class="card blue-grey darken-1" key="second">
            <div class="card-content red-text">
              <span class="card-title">Multiple Element Transitions</span>
              <p>I am a transition that will switch elements. I am the 2nd element.</p>
            </div>
          </div>
        </transition>
        <hr>
        <h1>JavaScript Animations</h1>
        <button class="waves-effect waves-light btn" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <transition 
          @before-enter="beforeEnter" 
          @enter="enter" 
          @after-enter="afterEnter" 
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <div v-if="load" style="width: 300px; height: 100px; background-color: lightgreen"></div>
        </transition>
        <hr>
        <button class="waves-effect waves-light btn" @click="swapComponents">Swap Components</button>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="waves-effect waves-light btn" @click="addItem">Add Item</button>
        <ul class="collection">
          <transition-group name="slide">
            <li style="cursor: pointer" class="collection-item" v-for="(number, index) in numbers" v-bind:key="number" @click="removeItem(index)">{{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import DefaultCard from './components/DefaultCard.vue';
import ImageCard from './components/ImageCard.vue';

export default {
  name: 'app',
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: "fade",
      customAnimation: "bounce",
      elementWidth: 100,
      selectedComponent: 'default-card',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    swapComponents() {
      if(this.selectedComponent === 'default-card') {
        this.selectedComponent = "image-card"
      }
      else {
        this.selectedComponent = 'default-card'
      }
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      window.console.log("Before Enter...");
      this.elementWidth = 100;
      el.style.width = this.elementWidth;
    },
    enter(el, done){
      window.console.log("Enter...")
      let round = 1;
      const interval = setInterval(() => {
        var newWidth = this.elementWidth + round * 10;
        el.style.width = newWidth + 'px';
        round++;
        window.console.log("current width: " + newWidth)
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      window.console.log("After enter...")
    },
    enterCancelled() {
      window.console.log("Enter Cancelled")
    },
    beforeLeave(el) {
      window.console.log("Before Leave...")
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      window.console.log("Leave...")
      let round = 1;
      const interval = setInterval(() => {
        var newWidth = this.elementWidth - round * 10;
        el.style.width = newWidth + 'px';
        round++;
        window.console.log("current width: " + newWidth)
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      window.console.log("After Leave...")
    },
    leaveCancelled() {
      window.console.log("Leave Cancelled");
    }
  },
  computed: {
    animation() {
      return "animated " + this.customAnimation;
    }
  },
  components: {
    'default-card': DefaultCard,
    'image-card': ImageCard 
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave{
  
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {

}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {

}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0)
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px)
  }
}

</style>
