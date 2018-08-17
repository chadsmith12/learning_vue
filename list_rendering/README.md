## List Rendering ##
You can use `v-for` directive to render a list of items based on an array. This directive does require special syntax.

```
<ul>
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```
As you can see from the example above, the form is `item in items`. `items` is the data array from the Vue instance and `item` is an alias for them item currently being iterated. `v-for` also has another special syntax, where you can get the current index of an item. This is done with: <br> 
`v-for="(item, index) in items"`.

You can also use `of` instead of `in`. This is closer to JavaScript's syntax for iterators. They both do the same thing.

### On an Object ###
`v-for` is not only meant to iterate through an array. You can also iterate through the properties of an object. Example:

```
<ul id="app">
  <li v-for="value in person">
    {{ value }}
  </li>
</ul>

new Vue({
  el: '#app',
  data: {
    person: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```
This will print out the values for all the properties in the `person` object. If you pass in a second parameter for the key, then you will also get the current key you are on in the object. That's not it though, you can also go even further and pass in a thrid parameter for the current index.

```
<ul id="app">
  <li v-for="(value, key, index) in person">
    {{ index }}. {{ key }}: {{ value }}
  </li>
</ul>

new Vue({
  el: '#app',
  data: {
    person: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```
---

### Rendering with `v-for` and `key` ###
By default when Vue needs to update a list of items rendered, it will use an in-place patch strategy. What this means is that if Vue sees the order of your items has changed, it will actually just patch each element in-place and make sure it reflects what should be rendered at that position.

While this is efficent, it is only suitable when your list render does not rely on child component state or a temporary DOM state. 

You can tell Vue that it should track each item's identity, which will reuse and reorder the existing elements. You can provide the `key` attribute for each item, which we could set a unique value, like the id of the item.

```
<div v-for="item in items" v-bind:key="item.id">...</div>
```
---

### Array Change Detection ###
Vue wraps the array's mutation methods so they will also trigger updates. The methods are:

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `sort()`
* `reverse()`

The example in this directory shows using these items.

As you know there are also methods that you can call on an array that actually do not mutate the original aray, but they actually always return a new array. When you use these you can replace the old array with the new one. Vue is actually smart enough to know to not cause a complete re-render of the list. Vue implements some very smart heuistrics to maximize DOM element reuse. What this means is that replacing an array with another array containing some overlapping objects is very efficient.

---

### Displaying Filtered/Sorted Results ###
There are times where you want to display filtered/sorted data without actually mutating or resetting the original data. You can use a computed property that returns the filtered or sorted array from the original array.

```
<li v-for="n in evenNumbers">{{ n }}</li>

data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

If a computed property will not work, you can also use a method.

```
<li v-for="n in even(numbers)">{{ n }}</li>

data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```
---

### `v-for` with a Range ###
`v-for` can also take in an integer instead of an array. If you do this, then it will repeat that many times.

```
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
---

### `v-for` on a template ###
Just like how `v-if` can do a condition on multiple elements using a `<template>` tag, `v-for` will do the same thing and render a block of multiple elements.

```
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

---

### `v-for` and `v-if` Together ###
`v-for` has a higer priorty when it exists on the same node as a `v-if`. This means for each iteration of the loop, `v-if` will run. If you only want to render some of thems, then this will be useful.

```
<li v-for="user in users" v-if="user.isActive">
  {{ user.name }}
</li>
```

If you are actually trying to skip the loop based on a condition, then you can just put the `v-if` on a `<template>` or some other wrapper element.

```
<ul v-if="users.length">
  <li v-for="user in users">
    {{ user.name }}
  </li>
</ul>
<p v-else>No Users!</p>
```

---

### `v-for` with a Component ###
You can also use `v-for` on a custom component like you would on a normal element. Though it won't actually automatically pass any data into the component. We need to use props to pass the iterated data into the component. Like so:
```
<todo-item
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></todo-item>
```
Vue does not automatically inject the data into the component because it would make the component tightly coupled in how v-for works. Being explicit about where its data comes from makes the component reusable.

The example is this directory has a basic complete example of using this.