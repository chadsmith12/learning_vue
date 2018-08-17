## Class and Style Bindings ##
Something you will find that you will need to commonly do, is a need for data binding and manipulating an element's class list or styles. Because these are just attributes `v-bind` will work and handle them just fine and you just have to calculate the final string with the expression. The issue is that working with strings in that way is cumbersome and error-prone. Vue recognizes this and made some special enhancements when `v-bind` is used with `class` or `style` attributes. Vue added the ability for you to also use objects or arrays with `class` or `style`.

---

### Binding to Classes ###
You can pass an object to `v-bind:class` to toggle classes. Example:
`<span v-bind:class="{'text-danger': isError}"></span>`

This means that if `isError` evaluates to true, then `text-danger` will be added to the class list. Otherwise it will not show up in the class list. 

You can also use the `v-bind:class` with the normal `class` attribute. Like so:
```
<span class="item" v-bind:class="{'text-danger': isError}"></span>
```
With this, you will always have the `item` class.

We've been making this objects all inline. You actually do not have to. you can use an object defined in the `data` of your Vue instance.

You can also pass an array to `v-bind:class` to apply a list of classes. Assmume we have the following in our `data`:
```
data: {
    activeClass: 'active',
    errorClass: 'error'
}
```
And using it like following:
`<div v-bind:class="[activeClass, errorClass]"></div>`


#### Classes with Components ####
On custom components that you make you can also apply classes. Even if that component has some classes already on it, you can add more classes directly to to the component and they will be added to the class list.

---

### Inline Styles ###
for inline styles with `v-bind:style` it's pretty simple to just use the object syntax. It actually looks just like CSS. Just make a Javascript object and use your CSS property names.

```
data: {
    styles: {
        activeColor: 'red',
        fontSize: 28
    }
}

<div v-bind:style="styles">...</div>
```

You can also just pass in an array to apply multiple style objects.


#### Auto-prefixing ####
If you by chance use a CSS property that needs vendor prefixes, vue will automatically detect this and add the prefixes to the style.

```
<span v-if="isShown">Yep, you can see me!</span>
```
##### Arguments #####
If a directive takes an argument you use the colon after the directive name. We have seen this in the `v-bind` directive to reactively update an HTML attribute. In the following example the `title` attribute is the argument and tells the directive the attribute to bind to.

`<span v-bind:title="msg">Content goes here!</span>`

`v-on` is another common example of a directive that takes an argument. This directive listens to DOM events.

`<button v-on:click="submit">Submit</button>`

##### Modifiers #####
Modifiers are postfixes on a directive denoted by a `.`, which can be used to indicate that the directive should be bound in a special way. An example of this is being able to apply `e.preventDefault()` in an event handler. You would use the `.prevent` modifier with the `v-on` directive to call `e.preventDefault`.

---

#### Shorthands ####
You have been able to use the `v-` prefix to apply dynamic behavior to your markup. This is useful if you are just using it for dynamic behavior and are not yet currently developing a full SPA. Though Vue does provide shorthand for two common directives: `v-bind` and `v-on`. <br>

The `v-bind` shorthand gets rid of the `v-bind` fully and the `v-on` shorthand gets rid fo the `v-on` fully. Example:
```
<!-- full syntax for v-bind -->
<span v-bind:title="msg"></span>
<!-- shorthand for v-bind -->
<span :title="msg"></span>

<!-- full syntax for v-on -->
<button v-on:click="submit">Submit</button>
<!-- shorthand for v-bind -->
<button @click="submit">Submit</button>
```

While this does look different than the normal HTML, though `:` and `@` are valid for attribute names and all the browsers Vue supports will parse it. They also will not appaer in the final markup.

While the shorthand is completely opptional, it is appreciated later on.
