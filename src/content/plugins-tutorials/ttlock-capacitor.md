---
title: "Using the ttlock-capacitor Package"
description: "A tutorial on how to use the ttlock-capacitor package in your app"
created_at: "2021-12-10"
published: true
slug: "ttlock-capacitor"
---

# Using the ttlock-capacitor Package

In this tutorial, we will learn how to use the ttlock-capacitor package in your Capacitor app. 

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and NPM
- Capacitor CLI

## Step 1: Install the Package

Start by installing the ttlock-capacitor package in your project. Open a terminal and navigate to your project directory. Then, run the following command:

```bash
npm install ttlock-capacitor
```

## Step 2: Import the Plugin

Next, import the ttlock-capacitor plugin in your project. Open the `src/app.ts` file and add the following line at the top:

```typescript
import { Plugins } from '@capacitor/core';
const { TtlockCapacitor } = Plugins;
```

This will import the necessary plugin for accessing the ttlock-capacitor functionality.

## Step 3: Use the Plugin

Now, you can use the ttlock-capacitor plugin in your app. Below is an example of how to use the plugin's methods:

```typescript
async function unlockDoor() {
  try {
    const result = await TtlockCapacitor.unlockDoor({ doorId: 'your-door-id' });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

unlockDoor();
```

In this example, we are calling the `unlockDoor` method provided by the ttlock-capacitor plugin. It takes an object with a `doorId` property as a parameter. Make sure to replace `'your-door-id'` with the actual ID of the door you want to unlock.

## Conclusion

Congratulations! You have learned how to use the ttlock-capacitor package in your Capacitor app. You can now integrate ttlock functionality into your app and interact with smart locks using the plugin. 

Remember to refer to the official documentation for more information on the available methods and their parameters.

If you encounter any issues or have any questions, feel free to reach out to the ttlock-capacitor community for support. Happy coding!