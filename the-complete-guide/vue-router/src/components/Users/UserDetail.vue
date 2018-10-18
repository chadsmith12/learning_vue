<template>
    <div>
        <h3> Some user details</h3>
        <p>User Loaded Id: {{ $route.params.id }}</p>
        <router-link tag="button" class="btn btn-info" :to="editLink">Edit User</router-link>
    </div>
</template>

<script>
export default {
    computed: {
        editLink() {
            return {
                name: 'userEdit',
                params: {
                    id: this.$route.params.id
                },
                query: {
                    locale: 'en',
                    q: 100
                },
                hash: '#data'
            }
        }
    }
}
</script>
