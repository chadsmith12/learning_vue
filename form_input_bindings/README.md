## Form Input Bindings ##
Using the `v-model` directive will create a two-way data bind on the form input. Based on the input type it will automatically pick the correct way to update the element. While it may seem magical, `v-model` is actually just syntax sugar for updating data on input events (with the edge cases).

It's important to note that `v-model` will ignore the initial `value`, `checked`, `selected` attributes found on any form elements. So the Vue instance will actually be the source of truth.

### Text ###
`v-model` works easily with simple text input fields and event multiline text areas.

```
<input v-model="name" placeholder="Enter your name">
<p>Your Name is: {{ name }}</p>

<span>Aboout Me:</span>
<p style="white-space: pre-line;">{{ aboutMe }}</p>
<br>
<textarea v-model="aboutMe" placeholder="about me..."></textarea>
```

Though one thing to note about `<textarea>` is that iterpolation wil not work. You should use `v-model`.

### Checkboxes ###
A single checkbox is just a single boolean value:
```
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">Current Value: {{ checked }}</label>
```

Multiple checkboxes are bound to the same array.
```
<div id='app'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkPermissions">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkPermissions">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkPermissions">
  <label for="mike">Mike</label>
  <br>
  <span>Current Permissions: {{ checkPermissions }}</span>
</div>

new Vue({
  el: '#app',
  data: {
    checkPermissions: []
  }
})
```

### Radio Buttons ###
```
<input type="radio" id="basic" value="Basic" v-model="package">
<label for="basic">Basic</label>
<br>
<input type="radio" id="premium" value="Premium" v-model="package">
<label for="premium">Premium</label>
<br>
<span>Select Package: {{ package }}</span>
```

### Selects ###
Single Select: 
```
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>
```

It's important to note that if the initial value of the `v-model` expression does not match any of the options in the `<select>` then the element will render in an unselected state. On iOS this will be an issue because the user won't be able to select the first item as iOS will not fire a change event. Therefor you should provide a disabled option with an empty value.

Multiple selects (Bound to array):
```
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected }}</span>
```

And it's just as easy to combine a `<select>` with `v-for` to render dynamic options

```
<div id="app">
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
</div>

new Vue({
  el: '#app',
  data: {
    selected: 'A',
    options: [
      { text: 'A', value: 'A' },
      { text: 'B', value: 'B' },
      { text: 'C', value: 'C' }
    ]
  }
})
```
---

### Value Bindings ###
There are times you want to bind the value to a dynamic property. `v-bind` can be used for this, which also allows you to to bind input value to non-string values.

#### Checkbox ####
```
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>

// when checked:
vm.toggle === 'yes'
// when unchecked:
vm.toggle === 'no'

```

The `true-value` and `false-value` attributes will not affect the input's `value`, because browsers will not include unchecked boxes in a form submission. to guarantee that one of two values are submitted in a form, radio buttons should be used.

#### Radio Buttons ####
```
<input type="radio" v-model="pick" v-bind:value="a">
// when picked
vm.pick === vm.a
```

#### Select Options ####
```
<select v-model="selected">
  <!-- inline object literal -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>

// When selected
vm.selected.number === 123
```
---

### Modifiers ###
Vue provides some modifers you can use on the inputs.

#### `.lazy` ####
A `v-model` will sync the input with the data after every input event be default. Adding the `.lazy` modifier will instead cause the syn to happen after `change` events
```
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" >
```

#### `.number` ####
There are times you may need your input values to be a number. You can use the `.number` modifier to automatically typecast as a number.
`<input v-model.number="age" type="number">`
This is useful because the value of HTML input elements always return a string, even if you have a `type=number`.

#### `.trim` ####
You can automatically have all user input trimmed automatically with the `.trim` modifier

`<input v-model.trim="userName">`

---
### `v-model` with Components ###
Vue components allow you to build reusable inputs with completely customized behavior, and these work with `v-model`.