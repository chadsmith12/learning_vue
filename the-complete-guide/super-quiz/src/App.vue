<template>
  <div id="app">
    <div class="container-fluid">
      <h1 class="text-center">Super Quiz</h1>
      <transition name="flip" mode="out-in">
          <component :is="mode" @answer="onAnswer" @play-again="onPlayAgain"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue'
import Answer from './components/Answer.vue'

export default {
  name: 'app',
  data() {
    return{
      mode: 'question'
    }
  },
  methods: {
    onAnswer(isCorrect) {
      if(isCorrect) {
        this.mode = 'answer'
      }
      else {
        window.alert("I'm sorry, that is wrong!");
      }
    },
    onPlayAgain() {
      this.mode = 'question'
    }
  },
  components: {
    Question,
    Answer
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

.flip-enter-active {
  animation: flip-in 0.3s ease-out forwards;
}

.flip-leave-active {
  animation: flip-out 0.3s ease-out forwards;
}

@keyframes flip-out {
  from {
    /* start at not rotated at all */
    transform: rotateY(0deg); 
  }
  to {
    /* flip 90 degrees until we get to the new component */
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    /* flip back in from 90 degrees*/
    transform: rotateY(90deg);
  }
  to {
    /* flip until it's back to 0 degrees */
    transform: rotateY(0deg);
  }
}
</style>
