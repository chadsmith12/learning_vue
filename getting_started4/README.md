## Getting Started - 4 ##

### Handling User Input ###
In this example we show how we can quickly let users interact with your app. We use the `v-on` directive to attach event listeners that can invoke methods on your Vue instance. It is important to note that in the method we use to update the state of our app we should not touch the DOM. All DOM manipulations should be handled by Vue. Your code should only focus on the underlying logic.

Vue also provides a `v-model` directive that makes two-way binding between the form input and the app easy.

Our example combines the power of these two directives and creates a very simple to-do list. We first use the `v-model` on the `input` element to gather input for the new item. We bind the `addItem()` method to the `v-on` directive on the `button` element. This method is very simple and shows the power of the two-way binding by taking the current value of the `newItem` and pushing it to the end of the `items` array.<br>
Notice that we do not touch the DOM at all in this method. Vue handles that for you.


