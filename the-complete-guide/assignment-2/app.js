new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Button Clicked!!")
            },
            updateValue: function(event) {
                this.value = event.target.value;
            }
        }
    });