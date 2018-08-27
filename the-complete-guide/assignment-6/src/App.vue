<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import AppServers from "./components/AppServers.vue";
import ServerDetails from "./components/ServerDetails.vue"
import Footer from "./components/Footer.vue";

export default {
    components: {
        'app-header': Header,
        'app-servers': AppServers,
        'app-server-details': ServerDetails,
        'app-footer': Footer
    }
}

</script>

<style>

</style>
