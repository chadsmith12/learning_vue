<script>
export default {
    bind(el, binding, vNode) {
        let eventType = binding.arg;
        el.addEventListener(eventType, binding.value);
    }
}
</script>
