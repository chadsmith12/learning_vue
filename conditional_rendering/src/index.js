var app = new Vue({
    el: '#app',
    data: {
        loginType: 'username'
    },
    methods: {
        toggleLogin: function() {
            if(this.loginType === 'username'){
                this.loginType = 'email'
            }
            else {
                this.loginType = 'username'
            }
        }
    }
})