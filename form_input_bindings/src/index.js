var app = new Vue({
    el: '#app',
    data: {
        eventName: "",
        eventDescription: "",
        maxParticipants: 1,
        selectedState: "",
        checkedFeatures: [],
        formValues: ""
    },
    methods: {
        submitEvent: function(){
            this.formValues = JSON.stringify({
                eventName: this.eventName,
                eventDescription: this.eventDescription,
                maxParticipants: this.maxParticipants,
                selectedState: this.selectedState,
                checkedFeatures: this.checkedFeatures
            })
        }
    }
})