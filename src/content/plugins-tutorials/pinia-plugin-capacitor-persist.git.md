---
"title": "Using Pinia Plugin for Capacitor Persist",
"description": "Step-by-step tutorial on how to utilize the pinia-plugin-capacitor-persist package to sync Pinia state management with Capacitor's Preferences plugin's storage.",
"created_at": "2023-10-03",
"published": true,
"slug": "pinia-plugin-capacitor-persist.git"
---

# Using Pinia Plugin for Capacitor Persist

In this tutorial, we will walk through the process of integrating and utilizing the `pinia-plugin-capacitor-persist` package to synchronize Pinia state management with Capacitor's Preferences plugin's storage.

## Installation

To get started, install the `pinia-plugin-capacitor-persist` package via npm:

```bash
npm i pinia-plugin-capacitor-persist
```

## Usage

### Initialization

First, ensure the plugin is integrated into your Pinia initialization in your main Vue file. 

```javascript
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

### Persistent State Declaration

Once the plugin is set up, you can enable persistence for specific store properties in your store declarations.

```javascript
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
        // Additional options can be configured here
	},
});
```

## Persist Options

You can further customize the persistence behavior using the following options:

| Option       | Type     | Example           | Description                          |
| ------------ | -------- | ----------------- | ------------------------------------ |
| `include`    | Array    | `['address']`     | Specify properties to persist        |
| `exclude`    | Array    | `['name']`        | Define properties not to persist     |
| `onRestored` | Function | `() => { ... }`   | Callback executed after restoration  |

## Async Restoration

As CapacitorJS utilizes async functions for storage operations, you may need to wait for store hydration before proceeding. You can utilize the `restored` property, added to each persist-enabled store, for this purpose.

```javascript
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

This tutorial provides a comprehensive guide on integrating and utilizing the `pinia-plugin-capacitor-persist` package for seamless synchronization between Pinia and Capacitor's storage. Start persisting your store data effectively with Pinia and Capacitor!