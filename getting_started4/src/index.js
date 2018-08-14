var app = new Vue({
    el: '#app',
    data: {
        items: [],
        newItem: ""
    },
    methods: {
        addItem: function() {
            this.items.push({text: this.newItem});
            this.newItem = "";
        }
    }
})