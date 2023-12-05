---
title: "Using the capacitor-plugin-qonversion Package"
description: "A tutorial on how to use the capacitor-plugin-qonversion package in your Capacitor project"
created_at: "October 20, 2021"
published: true
slug: capacitor-plugin-qonversion
---

# Using the capacitor-plugin-qonversion Package

In this tutorial, we will learn how to integrate the capacitor-plugin-qonversion package into your Capacitor project. The capacitor-plugin-qonversion package allows you to easily implement subscription and in-app purchase functionality in your mobile apps built with Capacitor.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI
- Capacitor project set up

## Step 1: Install the capacitor-plugin-qonversion package

To install the capacitor-plugin-qonversion package, open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-plugin-qonversion
```

## Step 2: Set up Qonversion

Before we can start using the capacitor-plugin-qonversion package, we need to set up our Qonversion account and obtain the necessary credentials.

1. Sign up for a free account on the [Qonversion website](https://qonversion.io/).
2. Create a new app in your Qonversion dashboard.
3. Once the app is created, go to the "App Settings" tab and copy the `QONVERSION_API_KEY` and `QONVERSION_PROJECT_ID` values.

## Step 3: Configuring capacitor-plugin-qonversion

Next, we need to configure the capacitor-plugin-qonversion package with the credentials obtained from Qonversion.

1. In your Capacitor project, open the `capacitor.config.json` file.
2. Add the following configuration under the `plugins` section:

```json
"Qonversion": {
  "QONVERSION_API_KEY": "YOUR_QONVERSION_API_KEY",
  "QONVERSION_PROJECT_ID": "YOUR_QONVERSION_PROJECT_ID"
}
```

Make sure to replace `YOUR_QONVERSION_API_KEY` and `YOUR_QONVERSION_PROJECT_ID` with the values copied from the Qonversion dashboard.

## Step 4: Import and Initialize capacitor-plugin-qonversion

Now, we can import and initialize the capacitor-plugin-qonversion package in our project.

1. Import the plugin at the top of your main `app.ts` file:

```typescript
import 'capacitor-plugin-qonversion';
```

2. Initialize the plugin by calling the `initializePlugin` method. This should be done before any other usage of the Qonversion package.

```typescript
import { Plugins } from '@capacitor/core';

const { Qonversion } = Plugins;

...

// Initialize Qonversion plugin
Qonversion.initializePlugin();
```

## Step 5: Using Qonversion Features

With the capacitor-plugin-qonversion package set up and initialized, you can now start using the different features provided by Qonversion, such as:

- Checking user entitlements
- Requesting product information
- Validating subscriptions
- Accessing user properties

Please refer to the [capacitor-plugin-qonversion documentation](https://github.com/qonversion/capacitor-plugin-qonversion) for more detailed usage examples and API references.

## Conclusion

In this tutorial, we have learned how to integrate the capacitor-plugin-qonversion package into a Capacitor project. By following the steps outlined above, you can now easily implement subscription and in-app purchase functionality in your mobile apps. Remember to refer to the official documentation for further guidance and examples.

Happy coding!