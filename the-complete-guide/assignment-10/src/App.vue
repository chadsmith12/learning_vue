<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <input type="text" v-app-on:input="onInput">
            </div>
        </div>
    </div>
</template>

<script>
import AppOn from "./directives/AppOn.vue";
    export default {
        data() {
            return {
                currentValue: ''
            }
        },
        methods: {
            onInput(event) {
                event.target.value = event.target.value.toUpperCase();
            }
        },
        directives: {
            'app-on': AppOn
        }
    }
</script>

<style>
</style>
