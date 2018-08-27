<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-servers></app-servers>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import AppServers from "./components/AppServers.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        'app-header': Header,
        'app-servers': AppServers,
        'app-footer': Footer
    }
}

</script>

<style>

</style>
