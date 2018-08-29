<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <button class="btn btn-primary" @click="selectedComponent = 'Quote'">Quote</button>
          <button class="btn btn-success" @click="selectedComponent = 'Author'">Author</button>
          <button class="btn btn-info" @click="selectedComponent = 'New'">New</button>
          <hr>
          <p>{{ selectedComponent }}</p>
          <keep-alive>
            <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
          </keep-alive>

          <!-- <Quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p>A wonderful Quote!</p>
          </Quote> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  name: 'app',
  components: {
    Quote,
    Author,
    New
  },
  data: function () {
    return {
      quoteTitle: 'The Quote!',
      selectedComponent: 'Quote'
    }
  }
};
</script>


