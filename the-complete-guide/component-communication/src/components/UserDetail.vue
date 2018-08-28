<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name </button>
        <button @click="resetFn()">Reset Name Callback</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFn: Function
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("")
        },
        resetName() {
            this.name = "Chad";
            this.$emit('name-changed', this.name);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
