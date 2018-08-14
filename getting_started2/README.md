## Getting Started - 2 ##

### Binding ###
Vue can of course do more than just text interpolation. We can also bind element attributes.
Inside of the `index.html` you will see a `v-bind`. this attribute is called a **directive**, and they will be prefixed with `v-`. This indicates that they are special attributes provided by Vue and will apply special reactive behavior to the rendered DOM.

Our example `v-bind:title="message"` says that we should keep the title attribute up to date with the `message` property.

If you open up the developer tools console in your browser and enter `app.message = 'hello world'`, then you would see the title change to this new message.

