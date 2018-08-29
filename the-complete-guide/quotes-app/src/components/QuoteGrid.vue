<template>
    <div class="row">
        <Quote v-for="(quote, index) in quotes" :key="index" @click.native="removeQuote(index)">
            {{ quote }}
        </Quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    name: 'QuoteGrid',
    props: ['quotes'],
    methods: {
        removeQuote(index) {
            this.$emit('quote-deleted', index)
        }
    },
    components: {
        Quote
    }
}
</script>

<style scoped>

</style>

