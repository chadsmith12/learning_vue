<template>
<div>
  <span>Using filters: {{ msg | reverseString | string-length }}</span><p/>
  <span>Using computed properties: {{ msgReversed }} {{ stringLength }}</span> <p/>
  <span>Using Mixins: {{ reversed }} {{ length }}</span>
</div>
</template>

<script>
import { stringMixin } from '../mix-ins/stringMixin.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: ""
  },
  computed: {
    msgReversed() {
      return this.msg.split("").reverse().join("");
    },
    stringLength() {
      var stringLength = this.msg.length;
      return this.msg + " (" + stringLength + ")";
    }
  },
  filters: {
    reverseString(value) {
      return value.split("").reverse().join("");
    }
  },
  mixins: [stringMixin]
}
</script>

