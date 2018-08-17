// Define a new component called todo-item
// the todo-item component accepts a "prop", which is like a custom attribute
// this prop is called "todo"
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app = new Vue({
    el: '#app',
    data: {
        items: [],
        newItem: "",
        styles: {
            color: 'red'
        }
    },
    methods: {
        addItem: function() {
            var currentNumberItems = this.items.length;
            this.items.push({
                id: ++currentNumberItems, 
                text: this.newItem
            });
            this.newItem = "";
        }
    }
})