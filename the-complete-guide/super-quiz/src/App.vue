<template>
  <div id="app">
    <div class="container-fluid">
      <h1 class="text-center">Super Quiz</h1>
      <component :is="mode" @answer="onAnswer" @play-again="onPlayAgain"></component>
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
</style>
