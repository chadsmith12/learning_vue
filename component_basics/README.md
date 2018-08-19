## Component Basics ##
Components are Vue instances that are reusable. You can use a component as a custom element inside a root Vue instance that was created with `new Vue`. Take the following base example:

```
// Define a component called "button-counter"
Vue.component('button-counter', {
  data: function() {
    return {
      count: 0;
    }
  },
  template: '<button v-on:click="count++">Button clicked {{ count }} times.</button>'
})
```
You would have a component called `<button-counter>` that can be used as the following:
```
<div id="app">
  <button-counter></button-counter>
</div>
```
Components are just reusuable Vue instances, so they accept the same options that `new Vue` does. So you can use `data`, `computer`, `watch`, `methods` and the lifecycle hooks. There are a few exceptions that are specific only to the root Vue instance, like the `el` option.

### Reusing Components ###
A component can be reused as many times as you want. Each time you use a component a new instance is created. So using the example from above:

```
<div id="app">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```


#### `data` Must be a Function ####
You might have noticed in our example that we defined `data` as a function instead of an object like we do with with the root Vue instance. When you work with components this a rule in Vue. The reason Vue provides this rule is so it can maintain an independent copy of the object that returned from the data function. If not then all instances of a component would share the same data.

---

### Organizing Components ###
It's very common for your app to have a tree of nested components. You could have a component for the header, sidebar, and content areas. Then those components also containing other components. 

To use components they must be registered so that Vue knows about them. You can register them **global** or **local**. Our examples so far have only shown **global** registered components.

Components that are registered globally can be used in the template of any root Vue instance, plus inside of all subcomponents of that Vue instance component tree.

---
### Passing Data to Child Components with Props ###
A lot of components you make would be useless if there was no way to pass data to it. We can do this using props.

Props are custom attributes you can register on a component. Then after a value is passed into a prop attribute, it will become a property on that component instance.

```
Vue.component('header-message', {
  props: ['message'],
  template: '<h2>{{ message }}</h2>'
})
```
Your components can have as many props and can have any value by default.<br>
Now using this component and giving a message is super easy.
```
<header-message title="Learning about Components!"></header-message>
```
---
### Single Root Element ###
When building a component your template will more than likely contain more data than just the one root element we have been using so far. Lets say you were designing a `<blog-post>` component like so:
```
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```
Chances are that you would want to have more than just the title. So you go and add an element after the `<h3>` for the content to go. If you do this then Vue will actually throw an error saying that every component must have a single root element. So you can fix this by wrapping the template in a parent element. Something like this:
```
<div class="post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
```
While we are looking at the `<blog-post>` component we can add more props and start using the component like so:
```
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:author="post.author"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
></blog-post>
```
This works though you might notice this would be very tedious. So you can actually design your component to take in a single object, this time being a simple `post` object.
```
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```
---
### Messages to Parents with Events ###
As we are developing components you may find some features that require communicating to the parent. Maybe in our blog post component we want to enlarge the font of just the post, but leave the rest of the page alone. How would we go about trying to solve this? 

First, lets go ahead and add a `blogFontSize` data property to the root Vue instance.
```
var vm = new Vue({
  el: '#app',
  data: {
    blogPosts: [/*post information*/],
    blogFontSize: 1
  }
})
```
This could be used in the follow simple app:
```
<div id="app">
  <div v-style="{fontSize: postFontSize + 'em'}">
    <blog-post 
      v-for="post in blogPosts"
      v-bind:key="post.id"
      v-bind:post="post">
    </blog-post>
  </div>
</div>
```

Then each post could have a button to enlarge the text. Though that button needs a way to communicate back to the parent, the root instance, that it should go ahead and enlarge the text of all posts. In Vue, you do this by using the built-in method `$emit`. When you using `$emit` you pass in the name of the event. So our button could do the following:
```
<button v-on:click="$emit('increase-font-size')">Increase Size</button>
```

You then listen to this event with `v-on` on every post, just as if it was a native event.
```
    <blog-post 
      v-for="post in blogPosts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:increase-font-size="postFontSize += 0.1">
    </blog-post>
```

#### Emitting a Value with an Event ####
You might want to emit a certain value with an event. Like maybe in a our current example we wanted the select how much we wanted to increase the font size. You can do this by passing in a 2nd parameter to the `$emit` method, it being the value.

```
<button v-on:click="$emit('increase-font-size', 0.2)">Increase Size</button>
```

Now while listening to the event you can access this value by using `$event`.
```
    <blog-post 
      v-for="post in blogPosts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:increase-font-size="postFontSize += $event">
    </blog-post>
  ```
or if you are using a method to handle the event, then it will be the first parameter passed into the method.

#### `v-model` on Components ####
You use a `v-model` on a component. When you do this, what actually happening is the following on the component:
```
<search-box 
    v-bind:value="searchText"
    v-on:input="searchText = $event">
```
Though this won't just work. for this to work you must have the search box input inside the component do the following:
* Bind the `value` attribute to a `value` prop
* On `input`, it should emit its own custom `input` event with the new value.

This gives us the following example:

```
Vue.component('search-box', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
```
---
### Content Distribution with Slots ###
You often will want to pass content to a component. Maybe want to do something like the following:
```
<success-mesasge>User Saved!</success-message>
```

You can easily do this in Vue by using its custom `<slot>` element.
```
Vue.component('success-message', {
  template: `
   <div class="alert-success">
      <slot></slot>
   </div>
  `
})
```

And that is it. You just add a `<slot>` where you want the content to go and the content will replace the `<slot>`.

There are more to slots, though we will get to them later.

---
### Dynamic Components ###
It can be useful to dynamically switch between components. You can do this by using Vue's `<component>` element with the `is` attribute. Vue's [basic components guide][dynamic-components] does a pretty good job explaining this with links to JS Fiddles. 

---
### DOM Template Parsing Caveats ###
HTML has restrictions on some elements on where they can appear and what can appear inside them. This can lead to issues when using components with elements that have such restrictions. For example a table row.

```
<table>
  <todo-item></todo-item>
</table>
```

The `todo-item` row would be hoisted out as inavlid content. This will cause errors in the rendered output. You can solve this in Vue by using the `is` attribute. Example:
```
<table>
  <tr is="todo-item"></tr>
</table>
```
It should be noted that this limitation does NOT apply if you are using string templates from one of the following sources:
* Sring Templates
* Single file components (.vue)
* `<script type="text/x-template">"`

[dynamic-components]:https://vuejs.org/v2/guide/components.html#Dynamic-Components