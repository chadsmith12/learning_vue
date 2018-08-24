Vue.component('materialize-modal', {
    template: '#modal-template',
    props: {
        bottomSheet: {
            type: Boolean,
            default: false
        },
        fixedFooter: {
            type: Boolean,
            default: false
        },
        opacity: {
            type: Number,
            default: 0.5
        },
        inDuration: {
            type: Number,
            default: 250
        },
        outDuration: {
            type: Number,
            default: 250
        },
        preventScrolling: {
            type: Boolean,
            default: true
        },
        dismissible: {
            type: Boolean,
            default: true
        },
        startingTop: {
            type: String,
            default: '4%'
        },
        endingTop: {
            type: String,
            default: '10%'
        }
    },
    mounted: function() {
        // initialize the modal with the correct options
        M.Modal.init(this.$el, this.getOptions());
    },
    computed: {
        instance: function() {
            return M.Modal.getInstance(this.$el);
        },
        modalClasses: function() {
            return {
                'bottom-sheet': this.bottomSheet,
                'modal-fixed-footer': this.fixedFooter
            }
        }
    },
    methods: {
        open: function() {
            this.instance.open();
        },
        close: function() {
            this.instance.close();
        },
        destroyed: function() {
            this.instance.destroy();
        },
        getOptions: function() {
            // returns the options for the modal
            var vm = this;
            return {
                opacity: this.opacity,
                inDuration: this.inDuration,
                outDuration: this.outDuration,
                preventScrolling: this.preventScrolling,
                dismissible: this.dismissible,
                startingTop: this.startingTop,
                endingTop: this.endingTop,
                onOpenStart: function() {
                    vm.$emit('modal::open::start')
                },
                onOpenEnd: function() {
                    vm.$emit('modal::open::end')
                },
                onCloseStart: function() {
                    vm.$emit('modal::close::start')
                },
                onCloseEnd: function() {
                    vm.$emit('modal::close::end')
                }
            }
        }
    }
})

new Vue({
    el: '#app',
    data: {
        message: "Hello Materailize"
    },
    methods: {
        openModal: function() {
            this.$refs.exampleModal.open();
        },
        eventFired: function() {
            console.log("event fired...");
        }
    }
})