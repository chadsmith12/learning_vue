new Vue({
    el: '#app',
    data: {
        title: 'VueJS Instance'
    },
    beforeCreate: function() {
        console.log("Before create...");
    },
    created: function() {
        console.log("Created...")
    },
    beforeMount: function() {
        console.log("before mount...")
    },
    mounted: function() {
        console.log("mounted...")
    },
    beforeUpdate: function() {
        console.log("before update...")
    },
    updated: function() {
        console.log("Updated...")
    },
    beforeDestroy: function() {
        console.log("before destroyed...")
    },
    destroyed: function() {
        console.log("destroyed...")
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }
});