---
title: "Using the cap-plugin-swift Package"
description: "A tutorial on how to use the cap-plugin-swift package for Capacitor."
created_at: "2022-10-15"
published: true
slug: "ionic-native"
---

# Using the cap-plugin-swift Package

In this tutorial, we will learn how to use the cap-plugin-swift package in your Capacitor project. The cap-plugin-swift package allows you to easily integrate Swift code into your Capacitor app.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [Capacitor](https://capacitorjs.com/docs/getting-started)

You should also have a basic understanding of Capacitor and Swift programming.

## Step 1: Create a Capacitor Project

If you haven't already, create a new Capacitor project by running the following commands:

```bash
npm init
npm install --save @capacitor/core
npx cap init [appName] [appId]
```

Replace `[appName]` with the name of your app and `[appId]` with the unique identifier for your app.

## Step 2: Install the cap-plugin-swift Package

To install the cap-plugin-swift package, run the following command:

```bash
npm install --save @capacitor/swift
```

## Step 3: Sync the Capacitor Project

After installing the package, sync your Capacitor project by running the following command:

```bash
npx cap sync
```

This will update the native iOS project with the necessary configuration for the cap-plugin-swift package.

## Step 4: Add Swift code to your Capacitor Plugin

Now, let's add some Swift code to your Capacitor plugin. Open the iOS project in Xcode by running the following command:

```bash
npx cap open ios
```

In Xcode, navigate to the `App` folder and locate your Capacitor plugin. Add your Swift code files to this folder.

## Step 5: Import and Use the Swift Code in your Capacitor Plugin

In order to use the Swift code in your Capacitor plugin, you need to import it and use it in your JavaScript code.

In your JavaScript file (`my-plugin.ts`), import the Swift code as follows:

```typescript
import { Plugins } from '@capacitor/core';

const { MyPluginSwift } = Plugins;
```

You can now use the Swift code by calling the corresponding functions. For example, if you have a function named `myFunction` in your Swift code, you can call it like this:

```typescript
MyPluginSwift.myFunction().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
```

## Step 6: Build and Run the App

After adding and using the Swift code in your Capacitor plugin, you can build and run your app on iOS devices or simulators.

To build and run the app on an iOS simulator, run the following command:

```bash
npx cap open ios
```

In Xcode, select the desired simulator from the dropdown menu and click the "Run" button.

Congratulations! You have successfully used the cap-plugin-swift package in your Capacitor app.

## Conclusion

In this tutorial, we learned how to use the cap-plugin-swift package to integrate Swift code into a Capacitor project. The cap-plugin-swift package provides a seamless way to leverage the power of Swift in your Capacitor apps. Now you can explore more advanced features and functionalities by incorporating Swift code into your plugins.

I hope you found this tutorial helpful. Happy coding with Capacitor and Swift!