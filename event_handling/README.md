## Event Handling ##


### Event Listening ###
You have seen the use of the `v-on` directive to listen to DOM events and run something when they are triggered. This can either be inline Javascript or bind it directly to a method name.

```
<div id="app">
  <button v-on:click="increment">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>

var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increment: function() {
      counter+=1;
    }
  }
})
```

When binding to a function you can either call the function yourself, or when triggered by the event you will also get the native DOM event passed into your function.

### Inline Methods ###
Instead of just directly binding to the method you can also just use inline Javascript and call the method. You can even use the special `$event` variable to pass in the native DOM event to your function.

```
<div id="app">
  <button v-on:click="increment(1, $event)">Add 1</button>
  <button v-on:click="increment(2, $event)">Add 2</button>
  <p>The buttons above have been clicked {{ counter }} times.</p>
</div>

var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increment: function(value, event) {
      // we have an event parameter, was called from a DOM event
      if(event){
        event.preventDefault();
      }
      counter+=value;
    }
  }
})
```
---
### Event Modifiers ###
A common thing to do in event handlers is to call `e.preventDefault()` or `e.stopPropagation()`. While you can easily do this inside of your methods this makes your function taking care of event logic and data logic. To take of this Vue provides us with **event modifiers** that you can use with `v-on`. You use modifiers as a postfix denoted by the `.`. We can use:

* `.stop` - Event's propgation stopped
* `.prevent` - Stop the event's default behavior
* `.capture` - Capture Mode
* `.self` - Only trigger handler if the event target is the element itself
* `.once` - event will be triggered at most once
* `.passive` - communicates to the browser that you *don't* want to prevent the event's default behavior

### Key Modifiers ###
Vue also allows key modifiers with `v.on` when you are listening for key events.

```
<input v-on:keyup.13="submit">
```
Though no one wants to remember all the key codes. So Vue gives you aliases for the most common used keys. So we could just do:

`<input v-on:keyup.enter="submit">`

You can find a full list of key modifier aliases on Vue's guide by [clicking here][vue-key-aliases].
You can also create your own custom key modifier aliases by a global `config.keyCodes` object.
```
Vue.config.keyCodes.f1 = 112
```

#### Automatic Key Modifiers ####
You can also use valid key names from `KeyboardEvent.key` as modifiers that are converted to kebab-case.
`<input @keyup.page-down="onPageDown">`

### System Modifier Keys ###
Vue also provides modifiers to trigger mouse or keyboard events **only** when the corresponding modifier key is pressed. The modifier keys are:

* `.ctrl`
* `.alt`
* `shift`
* `meta` - On Macs, this is the Command Key, on Windows this is the Windows Key

here is an example to allow `Ctrl + Click`:
`<div @click.ctrl="select">Select Me</div>`

You can use the `.exact` modifier to allow control of the exact combination of system modifers to trigger a certain event.

```
<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```

#### Mouse Button Modifiers ####
There are also modifiers to restrict the handler to events triggered by a specific mouse button
* `.left`
* `.right`
* `.middle`

---

### Listeners In HTML? ###
It's possible to think that providing even listners in HTML isn't really separation of concerns, though using `v-on` provides several benefits. All Vue handler functions are expressions are bound to the ViewModel that is currently handling that view, giving us these benefits:

1. It's easier to locate the handler implementations in JS by skimming an HTML template.
2. Your ViewModel cose is actually pure logic and DOM free - Easy to test
3. You don't need to worry about cleaning these up yourself. All event listeners are automatically removed when the ViewModel is destroyed.


[vue-key-aliases]:https://vuejs.org/v2/guide/events.html#Key-Modifiers