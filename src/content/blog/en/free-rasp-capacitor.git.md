---
title: Using the Capacitor FreeRasp Package
description: Learn how to integrate and use the capacitor-freerasp package in your Capacitor project.
created_at: 2022-10-15
published: true
slug: free-rasp-capacitor.git
locale: en
---

# How to Use the Capacitor FreeRasp Package

In this tutorial, we will walk you through the process of integrating and using the capacitor-freerasp package in your Capacitor project.

## Step 1: Installation

To get started, you need to install the capacitor-freerasp package in your Capacitor project. You can do this by running the following command:

```bash
npm install capacitor-freerasp
```

## Step 2: Initialize the Plugin

After installing the package, you need to initialize the FreeRasp plugin in your project. Make sure to do this after the `app.component.ts` file has finished loading. Here's an example of how you can initialize the plugin:

```typescript
import { Plugins } from '@capacitor/core';
const { FreeRasp } = Plugins;

...
// Initialize the FreeRasp plugin
const initFreeRasp = async () => {
  await FreeRasp.init();
};

// Call the initialization function
initFreeRasp();
```

## Step 3: Using FreeRasp Functions

Once the plugin is initialized, you can start using the provided functions. Here is an example of how you can use a function to retrieve data from FreeRasp:

```typescript
const fetchDataFromFreeRasp = async () => {
  const response = await FreeRasp.fetchData();
  console.log(response);
};

// Call the function to fetch data
fetchDataFromFreeRasp();
```

## Conclusion

That's it! You have successfully integrated and used the capacitor-freerasp package in your Capacitor project. Feel free to explore more functions and features provided by the FreeRasp plugin to enhance your mobile app.

Happy coding!