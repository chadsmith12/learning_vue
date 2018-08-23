new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    isVisible: true,
    excercise2: ["highlight"],
    userClass: "",
    userStyle: {
      backgroundColor: 'red'
    },
    progressBar: {
      width: '0px',
        backgroundColor: 'red'
      }
  },
  methods: {
    startEffect: function() {
      var vm = this;
       setInterval(function() {
         vm.effectClasses.highlight = !vm.effectClasses.highlight;
         vm.effectClasses.shrink = !vm.effectClasses.shrink;
       }, 2000)
    },
    startProgress: function() {
      var vm = this;
      var width = 0;

      setInterval(function() {
        width+=10;
        vm.progressBar.width = width + 'px'
      }, 1000);
    }
  }
})