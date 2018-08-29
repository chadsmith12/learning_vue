<template>
  <div id="app" class="container">
    <QuoteGrid :quotes="quotes"/>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";

export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ['Just a quote']
    }
  },
  components: {
    QuoteGrid
  }
}
</script>