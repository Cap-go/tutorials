---
title: "Using capacitor-plugin-test package"
description: "A tutorial on how to use the capacitor-plugin-test package"
created_at: "2021-10-20"
published: true
slug: "testcapacitor"
---

# Using capacitor-plugin-test package

This tutorial will guide you through the process of using the capacitor-plugin-test package in your Capacitor project.

## Prerequisites

Before getting started, make sure you have the following installed on your development machine:

- Node.js and npm
- Capacitor
- Your preferred code editor

## Step 1: Install the plugin

To start using the capacitor-plugin-test package, you'll need to install it in your Capacitor project. Open your project folder in a terminal and run the following command:

```bash
npm install capacitor-plugin-test
```

This command will download and install the package from npm.

## Step 2: Import the plugin

After installing the package, you need to import it into your project. Open the file where you want to use the plugin and add the following import statement:

```typescript
import { TestPlugin } from 'capacitor-plugin-test';
```

## Step 3: Initialize the plugin

Next, you'll need to initialize the plugin before using its functionality. Add the following code inside your component's constructor or any other appropriate initialization method:

```typescript
const testPlugin = new TestPlugin();
```

## Step 4: Use the plugin

You can now use the plugin's methods to perform various tasks. Here's an example of how to call a method:

```typescript
testPlugin.exampleMethod().then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
```

Replace `exampleMethod` with the actual method provided by the capacitor-plugin-test package.

## Step 5: Build and run the app

Once you've integrated the capacitor-plugin-test package into your app, you need to build and run the app to see the plugin in action. Use the following commands to build and run your app on the desired platform:

```bash
npx cap add android
npx cap open android
```

Replace `android` with `ios` if you're targeting iOS.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-plugin-test package in your Capacitor project. You should now be able to leverage the plugin's functionality to enhance your app.

Happy coding!