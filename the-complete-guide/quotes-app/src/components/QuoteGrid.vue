<template>
    <div class="row">
        <Quote v-for="(quote, index) in quotes" :key="index">
            {{ quote }}
        </Quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    name: 'QuoteGrid',
    props: ['quotes'],
    components: {
        Quote
    }
}
</script>

<style scoped>

</style>

