new Vue({
    el: '#color-picker',
    data: {
        color: 'black',
        width: 100,
        height: 100
    },
    computed: {
        style: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
                height: this.height + 'px'
            }
        }
    }
})