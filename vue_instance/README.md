## More on the Vue Instance ##

### Vue Instance ###
Every Vue Application has a Vue instance that is created with the `Vue` function. Vue took some inspiration from the **MVVM pattern**, it is often the variable `vm` is used to refer to your `Vue` instance.<br>
The `Vue` function takes in an `options` object.

---

### Data and Methods ###
When you create a new Vue instance, all of the properties found in the `data` object will be added to Vue's **reactivity system**. This means that when one of these properties change, then the view will *react* to update to match the new values. This will only happen though if they existed when the Vue instance was created.<br>
`Object.freeze()` can be used, which will prevent existing properties from being changed. This will mean the reactivity system can't *track* the changes.

```
var person = {
    firstName = 'Bobby'
};

//  freeze person - vue won't track the changes to it
Object.freeze(person);

new Vue({
    el '#app',
    data: obj // vue won't track the changes to this object
})
```

#### Vue Instance Properties ####
When you make a new Vue instance, Vue will expose some useful properties and methods that will be prefixed by the `$`. The example below shows some of these:

```
var person = {
    firstName = 'Bobby',
    age: 28
};
var vm = new Vue({
    el: '#app',
    data: person
});

// $watch is instance method -  Watch when age changes
vm.$watch('age', function(newValue, oldValue){
    // called when vm.age changes
})

// element of this view instance
vm.$el === document.querySelector('#app');
```
---
#### Lifecycle Hooks ####
When a new Vue instance is created Vue must go through some steps. These steps include **data observation**, **compiling the template**, **mount the instance to the DOM** and **update the DOM when data changes**. <br>
Vue gives you **lifecycle hooks** so you have the opportunity to add your own code at specific times. The following are lifecycle hooks.

* created
* mounted
* updated
* destroyed

Here is how you can use them:

```
new Vue({
    data: {
        age = 28
    },
    created: function() {
        // this context will be pointing to the Vue instance invoking it
        console.log('age was initialized to ' + this.age)
    }
})
```

It's important to note what the `this` context is inside of these functions. It is common to use ES6's arrow functions, though you should not use these on a Vue instance options property or callback. This is because the `this` instance on arrow functions are bound to the parent context, so `this` will not be what you expect and could lead to errors.

---

#### Lifecycle Diagram ####
The diagram below is from [Vue's Website][vue-website] and describes the lifecycle of a Vue instance. <br>
![Vue Instance lifecycle Diagram][vue-lifecycle-diagram]

[vue-website]: https://vuejs.org
[vue-lifecycle-diagram]: https://vuejs.org/images/lifecycle.png

