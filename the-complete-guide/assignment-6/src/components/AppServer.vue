<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="editServerStatus">
        Server #{{ server.id }}
    </li>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['server'],
    methods: {
        editServerStatus() {
            eventBus.viewServer(this.server);
        }
    }
}
</script>

<style>

</style>
