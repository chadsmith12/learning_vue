export const stringMixin = {
    data() {
        return {
            message: 'Hello'
        }
    },
    computed: {
        reversed() {
          return this.message.split("").reverse().join("");
        },
        length() {
          var stringLength = this.message.length;
          return this.message + " (" + stringLength + ")";
        }
      },
    created() {
        window.console.log("hello world");
    },
}