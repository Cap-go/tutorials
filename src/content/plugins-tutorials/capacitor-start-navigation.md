---
title: "How to Use @proteansoftware/capacitor-start-navigation Package"
description: "A tutorial on how to use the @proteansoftware/capacitor-start-navigation package for Capacitor"
created_at: "2023-10-12"
published: true
slug: "capacitor-start-navigation"
---

# How to Use @proteansoftware/capacitor-start-navigation Package

In this tutorial, we will learn how to use the `@proteansoftware/capacitor-start-navigation` package in Capacitor to implement navigation in your app. 

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor

## Step 1: Installation

To start using the `@proteansoftware/capacitor-start-navigation` package, you need to first install it in your Capacitor project.

```bash
npm install @proteansoftware/capacitor-start-navigation
```

## Step 2: Configuration

Once the package is installed, you need to configure it in your project. Open the `capacitor.config.json` file in your project root directory and add the following under the `plugins` section:

```json
"Plugins": {
  "StartNavigation": {
    "navigationUrl": "https://example.com"
  }
}
```

Replace `https://example.com` with the URL or path you want to navigate to when using the package.

## Step 3: Usage

Now that the package is installed and configured, you can start using it in your app. Import the package in your JavaScript file:

```javascript
import { StartNavigation } from '@proteansoftware/capacitor-start-navigation';
```

To navigate to the URL or path specified in the configuration, use the `startNavigation` function:

```javascript
StartNavigation.startNavigation()
  .then(() => {
    console.log('Navigation successful');
  })
  .catch((error) => {
    console.error('Navigation failed', error);
  });
```

## Step 4: Running the App

You can now build and run your Capacitor app to test the navigation functionality. Make sure you have your app running on a device or simulator.

```bash
npx cap open ios
```

or

```bash
npx cap open android
```

## Conclusion

In this tutorial, we have learned how to use the `@proteansoftware/capacitor-start-navigation` package in Capacitor to implement navigation in your app. By following the steps outlined above, you should now be able to navigate to a specified URL or path in your Capacitor app.

Remember to refer to the package documentation for more advanced usage and customization options. Happy coding!