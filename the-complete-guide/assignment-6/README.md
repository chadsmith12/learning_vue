## Server Status ##
---

This project is an example of a very small and unrealistic "Dashboard." The objective of this project is to demonstrate how we can communicate with different components. This project shows:

* Passing props to child components
* Communicating to sibling components from another component
* Using an event bus to communicate between components

---

### Passing Props ###
The `AppServer` component represents a server component. Each `AppServer` gets a server passed in by a prop.

### Event Bus ###
A small event bus is created in the `main.js` file that represents a bus where we can pass information. This is just another Vue instance with a custom method we can call that just emits on an event.

### Viewing/Editing Server ###
A click event is added to each `AppServer` to show we want to view the server so we can change the status if needed. To do this we call the `viewServer`  method from the `eventBus` and pass in the server. From there the `eventBus` will emit a `server-clicked` event.

As the `server-clicked` event is emitted, we listen to it in the `ServerDetails` using the Vue lifecycle method, `created`. When this is fired we will get the server that was clicked. We can then set the `server` to the the one that was passed in.

### Resetting Status ###
We can click the button on the `ServerDetails` component to reset the status. When this is clicked we take the `server` from `data` and set the status to Normal. From there the server will be udpated. We can do this because objects are reference types in JavaScript. So when we pass in a server we are actually passing in a pointer to that object. So when we change it in `ServerDetails` it will automatically update all references to it.





