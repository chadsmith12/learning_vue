new Vue({
    el: '#exercise',
    data: {
        name: 'Chad',
        age: 28,
        imgLink: "https://ichef.bbci.co.uk/news/624/cpsprodpb/1EFF/production/_86153970_gastonmaqueda_banffnationalparkgreywolf2011permission.jpg"
    },
    methods: {
        randomNumber: function() {
            return Math.random();
        }
    }
})