new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timeout: 5000
        },
        computed: {
            result: function() {
                return this.value < 37 ? 'not there yet' : 'done';
            }
        },
        watch: {
            result: function(newValue) {
                var vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, this.timeout);
            }
        }
    });