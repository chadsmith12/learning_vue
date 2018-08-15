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
        newItem: ""
    },
    created: function () {
        // vue instance was created. This examble could be you getting data from the server
        this.items.push({id: 1, text: 'First Initial Item'});
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

// watch when items changes
app.$watch('newItem', function(newValue, oldValue) {
    console.log('Old Value: ' + oldValue);
    console.log('New : ' + newValue);
})