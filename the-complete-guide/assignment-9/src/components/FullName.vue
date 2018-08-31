<template>
    <input
        type="text"
        id="fullname"
        class="form-control"
        :value="value"
        @input="changedInput">
</template>

<script>
export default {
    name: 'FullName',
    props: ['value'],
    data() {
        return {
            currentValue: this.value
        }  
    },
    methods: {
        changedInput(event) {
            this.currentValue = event.target.value;
            this.$emit('input', this.currentValue);
        }
    }
}
</script>

