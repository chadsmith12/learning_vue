<template>
  <div id="app" class="container">
    <NewQuote @quote-added="newQuote"/>
    <QuoteGrid :quotes="quotes"/>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ['Just a quote']
    }
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
    }
  },
  components: {
    QuoteGrid,
    NewQuote
  }
}
</script>