## Getting Started - 3 ##

### Conditionals ###
You can easily toggle the presence of an element. 
Inside the `index.html` we have `v-if="seen"` which shows we can hide or show DOM elements with a conditional.<br>
You can enter `app.seen = false` in the console and you will see the message disappear.

Vue will also provide a powerful transition effect ssytem taht can automatically apply transition effects when elements are inserted/updated/removed by Vue.

### Looping ###
The `v-for` directive can be used for displaying a list of items using data from an array. In our example we display a to-do list in an `ol`.  <br>
if you add another item to the `items` array using `app.items.push({text: 'New item'})` then you can see a new item appended to the list.

