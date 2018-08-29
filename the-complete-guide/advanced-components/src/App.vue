<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <Quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p>A wonderful Quote!</p>
          </Quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';

export default {
  name: 'app',
  components: {
    Quote,
  },
  data: function () {
    return {
      quoteTitle: 'The Quote!'
    }
  }
};
</script>


