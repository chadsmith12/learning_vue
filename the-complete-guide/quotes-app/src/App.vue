<template>
  <div id="app" class="container">
    <AppHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
    <NewQuote @quote-added="newQuote"/>
    <QuoteGrid :quotes="quotes" @quote-deleted="removeQuote"/>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a quote to delete it.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from './components/Header.vue'

export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ['Just a quote']
    }
  },
  methods: {
    newQuote(quote) {
      if(this.quotes.length >= this.maxQuotes) {
        return alert('You have reached the maximum quotes. Please delete some quotes.')
      }
      this.quotes.push(quote);
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    QuoteGrid,
    NewQuote,
    AppHeader: Header
  }
}
</script>