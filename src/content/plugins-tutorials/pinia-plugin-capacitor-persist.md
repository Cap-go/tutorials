---
title: "Using pinia-plugin-capacitor-persist in Your Vue.js App"
description: "Learn how to use pinia-plugin-capacitor-persist to persist state in your Vue.js app with Pinia and Capacitor's Preferences plugin."
created_at: "2022-10-31"
published: true
slug: "pinia-plugin-capacitor-persist"
---

# Using pinia-plugin-capacitor-persist in Your Vue.js App

In this tutorial, we will explore how to use the `pinia-plugin-capacitor-persist` package to persist state in your Vue.js app using Pinia and Capacitor's Preferences plugin.

## Installation

To begin, make sure you have the `pinia-plugin-capacitor-persist` package installed in your project. You can install it using npm:

```bash
npm install pinia-plugin-capacitor-persist
```

## Setting Up Pinia and Capacitor

First, let's import the necessary packages and initialize Pinia in your application's entry file (`main.js` or `main.ts`):

```js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { piniaCapacitorPersist } from 'pinia-plugin-capacitor-persist';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaCapacitorPersist);

createApp(App)
  .use(pinia)
  .mount('#app');
```

Here, we create a new Pinia instance and use the `piniaCapacitorPersist` plugin to enable state persistence with Capacitor.

## Enabling Persist for a Store

Next, let's enable persist for a specific store. In this example, we'll use a hypothetical `user` store:

```js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state() {
    return {
      name: '',
      address: '',
      address_2: '',
      city: '',
      country: '',
    };
  },
  persist: {
    enabled: true,
    // Additional options can be specified here
  },
});
```

In the `useUserStore` definition, we set the `persist` option to `enabled: true` to enable state persistence for this store. This means that the store's state will be automatically saved to Capacitor's Preferences storage.

## Persist Options

The `persist` option can also accept additional configuration options to customize the persistence behavior. Here are some of the available options:

| Option       | Type     | Example                | Description                              |
| ------------ | -------- | ---------------------- | ---------------------------------------- |
| `include`    | Array    | `['address']`          | Only persist specified properties        |
| `exclude`    | Array    | `['name']`             | Exclude specified properties from persist |
| `onRestored` | Function | `(store) => { // ... }` | Callback function after restoration       |

These options can be defined within the `persist` object for a store.

## Async Restoration

Since Capacitor uses asynchronous functions for reading/writing storage, there may be times when you need to ensure your store is fully hydrated before performing an action. To handle this, `pinia-plugin-capacitor-persist` adds a `restored` property to each persist-enabled store.

To await the restoration of a store before executing code, you can use the `restored` property:

```js
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '@/router/routes';
import { useUserStore } from '@/stores/user';
import { axiosInstance } from '@/plugins/axios';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async () => {
  const userStore = useUserStore();
  await userStore.restored;

  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${userStore.token}`;
});

export default router;
```

In the above example, we await the `restored` property of the `userStore` before setting the authorization token for an Axios instance. This ensures that the token is only set once the store's state has been fully restored.

## Conclusion

In this tutorial, we have learned how to use `pinia-plugin-capacitor-persist` to persist state in Vue.js applications using Pinia and Capacitor's Preferences plugin. We covered the installation process, enabling persist for a store, and customizing persistence options. We also explored how to handle async restoration to ensure the store's state is fully hydrated before performing actions.

By implementing state persistence, you can provide a seamless user experience and ensure that important data is retained across app launches and device restarts.

Happy coding!