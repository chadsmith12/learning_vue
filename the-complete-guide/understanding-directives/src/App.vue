<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Hello World from Directive'"></p>
                <p v-html="'<strong>Hello World from Directive</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-app-highlight:background.delayed="{mainColor: 'red'}">Color this</p>
                <p v-app-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'app-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0;
                    if(binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if(binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                if(currentColor === secondColor){
                                    currentColor = mainColor;
                                }
                                else {
                                    currentColor = secondColor;
                                }
                                if(binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                }
                                else {
                                    el.style.color = binding.value;
                                }
                            },binding.value.delay)
                        }, delay)
                    } else {
                        setTimeout(() => {
                            if(binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            }
                            else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay)
                    }
                }
            }
        }
    }
</script>

<style>

</style>
