---
title: "Using capacitor-reactive-localstorage-vue"
description: "A tutorial on how to use the capacitor-reactive-localstorage-vue package for reactive storage in Vue with Capacitor.js"
created_at: "2022-11-09"
published: true
slug: "capacitor-reactive-localstorage-vue"
---

# Using capacitor-reactive-localstorage-vue

This tutorial will guide you through the process of using the capacitor-reactive-localstorage-vue package to enable reactive storage in your Vue project with Capacitor.js. 

## What is Reactive Storage?

Reactive storage allows you to maintain reactivity in your Vue components when using localStorage. By default, `window.localStorage` is not reactive in Vue, which means that if you change a property in localStorage, it will not automatically reflect the changes in your component. However, with capacitor-reactive-localstorage-vue, you can make localStorage reactive and ensure that changes made in your component are reflected in localStorage.

## Why use capacitor-reactive-localstorage-vue?

- **Reactivity**: With capacitor-reactive-localstorage-vue, you can make localStorage reactive, enabling automatic updates to your Vue components when changes are made in localStorage.
- **Capacitor.js Compatibility**: This package is specifically adapted for use with Capacitor.js, which provides a data storage API that is more reliable and consistent across different platforms. It is especially useful for mobile apps, as mobile operating systems may periodically clear data set in `window.localStorage`. Capacitor's storage API will fall back to using localStorage when running as a Progressive Web App.

## Installation

To get started, you need to install the capacitor-reactive-localstorage-vue package. Open your terminal and run the following command:

```bash
npm i capacitor-reactive-localstorage-vue
```

This will install the package as a dependency in your project.

## Usage

Once you have installed the package, you can start using reactive storage in your Vue components.

1. Import the ReactiveStorage module and set initial values:

```js
import ReactiveStorage from 'vue-reactive-localstorage'

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

2. Define the variables that you want to store and proxy with Vue. Only the variables specified here will be proxied, and any other variables in `window.localStorage` will not be affected.

3. Now, you can access the reactive storage namespace (`storage`) in your Vue components:

```js
new Vue({
  template: ' <div> {{storage.notes}}, {{storage.lang}} ... </div> ',
  created: function () {
    this.storage.lang = 'other value' // This change will be reflected in the component and persisted in the storage.
  },
})
```

In the example above, accessing `this.storage.notes` or `this.storage.lang` will automatically update the corresponding values in the component when they are changed.

## Conclusion

In this tutorial, we learned how to use the capacitor-reactive-localstorage-vue package to enable reactive storage in Vue with Capacitor.js. By making localStorage reactive, we can ensure that changes made in the component are automatically reflected in localStorage, providing a more seamless and reliable data storage solution.

Now you can leverage reactive storage in your Vue projects with Capacitor.js, taking advantage of reactivity and the consistency of Capacitor's storage API.

Happy coding!