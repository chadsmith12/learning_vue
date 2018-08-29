<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <br>
                <button @click="selectedTemplate = 'Blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedTemplate = 'Green'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedTemplate = 'Red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedTemplate">
                  The Template!
                </component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'
import Red from './components/Red.vue'

export default {
  name: 'app',
  components: {
    Blue,
    Green,
    Red
  },
  data() {
    return {
      selectedTemplate: 'Blue'
    }
  }
}
</script>