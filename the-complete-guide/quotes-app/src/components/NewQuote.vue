<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label for="quote">Quote</label>
                <textarea id="quote" class="form-control" cols="30" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button type="submit" class="btn btn-success" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            quote: ''
        }
    },
    methods: {
        createNew() {
            this.$emit('quote-added', this.quote);
            this.quote = '';
        }
    }
}
</script>
