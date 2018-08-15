## Template Syntax ##
As you have seen, Vue uses HTML template syntax that allows you to bind the rendered DOM to your Vue instance data. The Vue template are valid HTML that can be parsed by browsers and HTML parsers.

Vue will compile the template into a virtaul DOM. When this is combined with Vue's reactivity system, Vue is able to figure out the minimal number of DOM manipulations when the app state changes.

You can also use the power of the virtual DOM and use JSX and write directly to the render functions.

---

### Interpolations ###
You can use Mustache syntax text interpolation for data binding
```
<span>Number of items: {{ numberItems }}</span>
```
In the previous example the `numberItems` property will replace the mustache tag. It will also be apart of Vues reactivity system and will update when the property changes.

if you do not want an element node to always be updated when the property changes, then you can use the `v-once` directive.
```
<!-- this span node will only be interpolated and not updated if property changes -->
<span v-once>Number of items: {{ numberItems }}</span>
```

It's important to note that the mustache syntax will be interpreted as plain text and HTML will not render. You will have to use the `v-html` directive. <br>
**NOTE: This can be dangerous and can bring is XSS vulnerabilities. Only use on trusted sources, NEVER user content.**

---

### Attributes ###
You can use the `v-bind` directive to bind a property to an HTML attribute.

```
<span v-bind:title="tooltipTitle"></span>
```

When a boolean is used then `v-bind` will only add the attribute to the element if it resolves to `true`. A value of `null`, `undefined`, or `false` then the attribute won't be rendered.
```
<button v-bind:disabled="isDisabled">Submit</button>
```

#### Expressions ####
You can not only bind to simple properties, but also use expressions in JavaScript in your data bindings.

```
<span>Sum = {{ num1 + num2 }}</span>
```
It's important to note that one restriction is that only one single expression will work. Statements will not work.

---
#### Directives ####
Special attributes with the prefix of `v-` is a directive. A directive is meant to reactively apply side effects to the DOM when the value of the expression changes. In the following example the  `span` will be rendered if `isShown` evaluates to true, otherwise the `span` will not be rendered.

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
