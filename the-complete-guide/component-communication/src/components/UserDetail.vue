<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge}}</p>
        <button @click="resetName">Reset Name </button>
        <button @click="resetFn()">Reset Name Callback</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("")
        },
        resetName() {
            this.name = "Chad";
            this.$emit('name-changed', this.name);
        }
    },
    created() {
        eventBus.$on("age-was-edited", (age) => {
            this.userAge = age;
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
