```markdown
---
"title": "Using Pinia Plugin Capacitor Persist Package",
"description": "Learn how to utilize Pinia Plugin Capacitor Persist package to sync with Capacitor's Preferences plugin's storage",
"created_at": "2022-01-20",
"published": true,
"slug": "pinia-plugin-capacitor-persist.git"
---

# Pinia Plugin Capacitor Persist Tutorial

Pinia Plugin Capacitor Persist is a powerful tool that allows seamless synchronization with Capacitor's Preferences plugin storage. In this tutorial, we will guide you on how to integrate and leverage the capabilities of this package within your Vue.js applications.

## Installation

To get started, install the Pinia Plugin Capacitor Persist package using npm:

```bash
npm i pinia-plugin-capacitor-persist
```

## Usage

1. **Initialize the Plugin**: Include the plugin in your Pinia initialization process.

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

2. **Enable Persistence**: Define which properties of your store should be persisted.

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
        // Additional options can be added as needed
	},
});
```

## Additional Configuration Options

You can fine-tune the persistence behavior by utilizing options such as `include`, `exclude`, and `onRestored`. Refer to the table in the package documentation for more details.

## Async Restoration

Since CapacitorJS uses asynchronous functions for storage operations, it's essential to handle restoration properly. Utilize the `restored` property available in each persist-enabled store for seamless synchronization.

```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import { axiosInstance } from "@/plugins/axios";

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

By following these steps, you can effectively utilize the Pinia Plugin Capacitor Persist package in your Vue.js applications and ensure seamless synchronization with Capacitor's Preferences plugin storage.
```