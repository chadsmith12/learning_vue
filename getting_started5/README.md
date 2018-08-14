## Getting Started - 5 ##

### Vue Components ###
The component system in Vue is an important concept, as it is an abstraction that allows you build large-scale applications composed of small, self-contained, and often reusable components. Most of the time any application interface can be abstracted into a tree of components.

A **component** is essentially a Vue instance with pre-defined options. The `index.js` creates a `todo-item` component. Then we use this component inside of the Vue instance in `index.html`.

We can pass data into this component by adding a `prop`. With this we can pass the todo into each component using `v-bind`.

In this example we took the previous example which created a basic todo list application and seperates it out. You can see how easy it is to seperate our your applications logic into smaller components. You can also see how easy it would be to reuse the `todo-item` component somewhere else if 
needed.

---

### Relation to Custom Elements ###
Vue components are similar to **Custom Elements**, which are apart of the  **Web Components Spec**, and are loosley modeled after the spec. The Vue components implement the Slot API and the `is` attribute, though with some key differences:

1. Web Components are not natively implemented in every browser as it is still in draft status. Vue Components work consistently in supported browsers (IE9 and above).

2. Vue Components provide cross-component data flow, custom event communication, and build tool integrations.


