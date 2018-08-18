var app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        increment: function(value, event) {
            this.counter += value;
            console.log(event);
        },
        resetCounter: function() {
            this.counter = 0;
        }
    }
})