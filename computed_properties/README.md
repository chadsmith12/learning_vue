## Computed Properties ##
While template expressions are powerful, it is not good to put too much logic in the templates. Doing so can make them hard to maintain and can also provide issues if you want to provide issue if you want to provide that functionality elsewhere in the template. You should aim to try to keep your templates simple and declarative. So for any complex logic Vue gives you **computer properties**.

```
<div id="app">
    <p>Current Message: {{ message }}</p>
    <p>Reversed Message: {{ reversedMessage }}</p>
</div>

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello World'
    },
    computed: {
        // this creates a computed getter property
        // this function is used to calcualte the property
        reversedMessage: function() {
            return this.message.split("").reverse().join("");
        }
    }
})
```

The cool thing about computed properties is that Vue is fully aware what the computed property depends on. So it will update any bindings that that depend on the computed property when something it depends on changes. So in our example above, when `message` changes, `reversedMessage` will automatically change also.

---

### Caching ###
It's important to note that we didn't just write a function in the `methods` object in the Vue instance. While this would give us the same result by invoking the function there is one significant difference. **Computed properties are cached based on their dependencies.** This means that that a computed property will **only** re-evaluate when one of its dependencies changes. So we can use `reversedMessage` multiple times in the template, and if `message` never changes then it would only need to be evaluated once. A method would required to re-evaluate each time it is invoked. While for this simple operation that is not a big deal, if you're doing something that be computational heavy then this could be a big performance increase with it only needing to evaluate when one of its dependencies changes.

---

### Computed vs. Watched ###
If you are computed from an AngularJS background then it might be tempting to overuse `watch`. `watch` provides a generic way to observe and react to data changes. While this works, it is often better to just use a computed property. The example below shows an example of watching two properties to set another property.

```
<div id="app">{{ fullName }}</div>

var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Bobby',
    lastName: 'Jones',
    fullName: 'Bobby Jones'
  },
  // we will be watching the firstName and lastName properties. When they change, update the fullName property in the instance
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

This same example above though can be done by using a computed property.
```
var vm = new Vue({
    el: '#app',
    data: {
        firstName: 'Bobby',
        lastName: 'Jones'
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    }
})
```

#### Computed Setters ####
Computed properties don't only have to be getter-only properties, even though they are by default. You can also give a setter for the property.

```
// ... shortned for space and brevity
computed: {
    fullName: {
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },
        set: function(newName) {
            var names = newName.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
}
```

So now you can easily set `vm.fullName` and the setter will be called. `vm.firstName` and `vm.lastName` will be updated. This would also cascade back down and automatically update any binding using the getter for `vm.fullName`.


---
### Watchers ###
Computed properties are most of time better to use, though sometimes a custom watcher wil be necessary. This is why Vue provides it. The example app in this directory shows a good example of this. We use it to preform an async request to change data. The relevent code is shown below:
```
// ...
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
```
