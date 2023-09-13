# Vue Reactive Storage for Capacitor.js

Reactive layer for interacting with localStorage from Vue 2 for Capacitor.js
This project is a fork from https://github.com/AlexDicy/vue-reactive-localstorage#readme but adapted to Capacitor Storage API

### Quick install

`npm i capacitor-reactive-localstorage-vue`

### Why do you need it

### Reactivity

`window.localStorage` is not reactive if you use it directly with Vue, for example
if you want to use `localStorage` in `data` and you change a property it will not reflect
changes in your component.

### Capacitor.js

According to Capacitor docs https://capacitorjs.com/docs/v3/guides/storage#data-storage-in-capacitor
Mobile OS’s may periodically clear data set in window.localStorage`, so this API should be used instead. `
This API will fall back to using localStorage when running as a Progressive Web App.

Compatible with Capacitor 3 starting from 2.0.0

### How to use Vue Reactive Storage

```js
import ReactiveStorage from 'vue-reactive-localstorage'
// Set initial values
Vue.use(ReactiveStorage, {
  notes: 'foo',
  lang: 'foo',
  name: 'foo',
  count: 1,
  userConfig: {
    age: 10,
    name: 'fred',
  },
})
```

Define vars that will be stored and proxied by `Vue` (any other var in `window.localStorage` that is not on this array will not be proxied).

Now you can acess the namespace <code>storage</code> in Vue.

```js
new Vue({
  template: ' <div> {{storage.notes}}, {{storage.lang}} ... </div> ',
  created: function () {
    this.storage.lang = 'other value' // will react on the view and on real localStorage (web) and persistent storage on mobile.
  },
})
```
