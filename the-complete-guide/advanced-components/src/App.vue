<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <Quote/>
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
};
</script>

