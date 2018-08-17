## Conditional Rendering ##
You have seen how we can use the `v-if` directive to achieve conditions. it is also possible to add an else block with `v-else`.
```
<h1 v-if="isActive">Active!</h1>
<h1 v-else>Not Active!</h1>
```

`v-if` is a directive so it only works on one element. What if you need toggle more than one element? It woudn't be good to put it on all the elements. Vue allows you to use the `v-if` on a `template`. This `template` will act as an invisible wrapper.
```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

Vue also brings a `v-else-if` which must immediately follow a `v-if` or `v-else-if`
```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

---

### Controlling Reusable Element with `key` ###
One thing Vue does in attempt to be very fast, is that it tries to reuse elements. The first example in the `index.html` shows this. If you start entering a username, then you move to the email it will keep the input you started typing in. The only thing replaced is the placeholder text. The entire input was not remade or even destroyed. Even the label was reused.

There are times though where we do not want this to happen. You can use the `key` attribute to tell Vue to not re-use them, that two elements are completely separate. The second example in `index.html` shows this.

In these examples type in both username input fields then click "Toggle Login." You will notice that the first input field keeps your text, while the second input field removes your text. This is because the second input field uses the `key` attribute

---

### `v-show` ###
There is also another option to conditionally display an element. You can use the `v-show` directive. This usage is pretty much the same as `v-if`, though with one key difference: `v-show` will ALWAYS be rendered and remain in the DOM. `v-show` will actually toggle the CSS `display` property of the element.

Because of this key difference it's important to note the difference. `v-if` is *real* conditional rendering. The elements and child components in the conditional will be completely removed and destroyed, and be recreated if it is toggled again. `v-if` also will not even process the conditional block until it actually becomes true for the first time. While `v-show` will render it if it won't be shown at the start.

So in general: `v-show` will have higher initial render costs, but lower toggle costs than `v-if`. With this in mind you can then try to pick the one that would be more performant for you depending on your needs.