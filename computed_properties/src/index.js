// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// Converts the first character of string to upper case and the remaining to lower case
function capitalize(value) {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

var app = new Vue({
    el: '#app',
    data: {
        question: '',
        answer: "I can't give you answer answer until you ask a question..."
    },
    watch: {
        // this example watches when we are typing a question.
        // Because we don't want to constantly spam the api everytime the question changes we used a debounce function
        // This debounced function will wait to actually trigger the api request until we quit calling invoking the function
        // so we invoke the debounced function every time the question changes.
        // When the question hasn't been changed in the time alloted, then the api request will be made
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to quit typing...'
            this.debouncedGetAnswer()
        }
    },
    created : function() {
        this.debouncedGetAnswer = debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function() {
            // we need a question mark to ask the question
            if(this.question.indexOf('?') === -1){
                this.answer = 'Questions usually contain a question mark...'
                return;
            }

            this.answer = 'thinking...'
            var self = this;
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    self.answer = capitalize(response.data.answer)
                })
                .catch(function(error) {
                    self.asnwer = 'Error! Failed to answer the question with: ' + error
                })
        }
    }
})