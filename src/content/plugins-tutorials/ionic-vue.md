---
title: "Using @modus/ionic-vue Package"
description: "A tutorial on how to use the @modus/ionic-vue package for building Vue.js applications."
created_at: "2022-01-01"
published: true
slug: ionic-vue
---

# Using @modus/ionic-vue Package

The `@modus/ionic-vue` package is a powerful tool that allows you to build Vue.js applications with the Ionic framework. In this tutorial, we will guide you through the process of setting up and using this package in your Vue.js project.

## Installation

To get started, you need to install the `@modus/ionic-vue` package along with its peer dependencies. Open your terminal and navigate to your project directory. Run the following command:

```shell
npm install @ionic/core @modus/ionic-vue
```

This command will install the required dependencies for the `@modus/ionic-vue` package.

## Initialization

Once the installation is complete, you can use the package during the initialization step of your Vue.js app. Open your main JavaScript file (e.g., `main.js`) and add the following code:

```js
import Vue from 'vue'
import '@ionic/core/css/ionic.bundle.css'
import Ionic, { IonicVueRouter } from '@modus/ionic-vue'
import Home from './Home.vue'

Vue.use(Ionic)
Vue.use(IonicVueRouter)

new Vue({
  router: new IonicVueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page', component: () => import('./Page.vue') },
    ],
  }),
}).$mount('ion-app')
```

Make sure to import the necessary components and CSS files. The `@ionic/core/css/ionic.bundle.css` file provides the styling for Ionic components.

## Usage

### Using IonicVue Components

The `IonicVue` module in the `@modus/ionic-vue` package abstracts the DOM interaction of Ionic UI components. You can use these components directly in your Vue.js templates. Here's an example of how to use the `alertController` component:

```html
<template>
  <div>
    <button @click="showAlert">Show Alert</button>
  </div>
</template>

<script>
import { alertController } from '@ionic/vue'

export default {
  methods: {
    showAlert() {
      alertController
        .create({
          header: 'Notification',
          message: 'Hello World',
          buttons: ['OK'],
        })
        .then((alert) => alert.present())
        .catch(console.error)
    },
  },
}
</script>
```

In this example, we import the `alertController` from `@ionic/vue` and use it to create and present an alert dialog when the "Show Alert" button is clicked.

### Using IonicVueRouter

The `IonicVueRouter` module binds Ionic transitions and routing functionalities with Vue Router. It is an extended version of the official Vue Router that works seamlessly with Ionic.

To use `IonicVueRouter`, open your main JavaScript file (e.g., `main.js`) and modify the router setup code as follows:

```js
import Vue from 'vue'
import '@ionic/core/css/ionic.bundle.css'
import Ionic, { IonicVueRouter } from '@modus/ionic-vue'
import Home from './Home.vue'

Vue.use(Ionic)
Vue.use(IonicVueRouter)

new Vue({
  router: new IonicVueRouter({
    // Your routes here
  }),
}).$mount('ion-app')
```

Replace the `VueRouter` instance with `IonicVueRouter` from `@modus/ionic-vue`.

## Building and Testing

To build your Vue.js app with `ionic-vue`, you can use the provided build scripts. Open your terminal, navigate to your project directory, and run the following commands:

```shell
npm run dev  # For development build
```

```shell
npm run watch  # For automatic rebuild on changes
```

```shell
npm run prod  # For production build
```

To test your app, make sure you have installed the peer dependencies mentioned above. Run the following command in your terminal:

```shell
npm test
```

## Conclusion

In this tutorial, you learned how to use the `@modus/ionic-vue` package to build Vue.js applications with the Ionic framework. You learned how to install and configure the package, use IonicVue components, and utilize the IonicVueRouter for routing and transitions. You also saw how to build and test your app.

Now, you can leverage the power of Ionic components in your Vue.js projects using the `@modus/ionic-vue` package. Happy coding!