## Vuex ##
---
### Central Store ###
First we have a central store. The central store gets adjusted by mutations.

### Mutations ###
Mutations must by sync. They are what change the state of the store. Because mutations must by sync, we often use actions to commit our mutations.

### Actions ### 
Actions are dispatched by our components. It is good practice to use them even for things that are not async, but you do not have too.

### Getters ###
We not only want to change the state, we often need to get it. Getters allow you to access your state in different components.

---

### Example ###
In our example project we setup a store for the counter. So we make a store that has a state of the counter. In order to use this we setup some getters.
This allows you to have reuseable code in the different components.

In order to adjust or change the state, mutations are used. Mutations get the state as a parameter and optionally the payload (the data passed when mutating the state).
We can comit this mutations from the component but we often use actions for this. Actions then allow you to take in a context and an optional payload. These actions can then be async if needed and can commit the mutations.

---
### Seperating Files ###

#### Modules ####
Idea behind modules is that you may have different parts that belong to certain parts of an application. 
