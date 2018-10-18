<template>
    <div>
        <h1>This is the Users Page!</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/')
        }
    }
}
</script>
