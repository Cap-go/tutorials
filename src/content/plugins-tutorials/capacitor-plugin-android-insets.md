---
title: "Using @emmaus/capacitor-plugin-android-insets"
description: "This tutorial will guide you through the steps of using the @emmaus/capacitor-plugin-android-insets package in your Capacitor project."
created_at: "2021-09-17"
published: true
slug: "capacitor-plugin-android-insets"
---

# Using @emmaus/capacitor-plugin-android-insets

The @emmaus/capacitor-plugin-android-insets package is a Capacitor plugin that allows you to handle Android system UI insets in your app. This is useful when you want to make sure your app's content is properly displayed below the system UI elements like the status bar and navigation bar.

In this tutorial, we will walk through the steps of installing and using the @emmaus/capacitor-plugin-android-insets package in your Capacitor project.

## Prerequisites

Before we begin, make sure you have the following software installed on your machine:

- Node.js and npm (Node Package Manager)
- Capacitor CLI

## Step 1: Create a Capacitor Project

If you don't already have a Capacitor project setup, you can create one by running the following commands in your terminal:

```bash
npm init
npm install @capacitor/core @capacitor/cli
npx cap init [appName] [appId]
```

Replace `[appName]` with the name of your app and `[appId]` with your app's unique identifier.

## Step 2: Install the Plugin

To install the @emmaus/capacitor-plugin-android-insets package, run the following command in your project's root directory:

```bash
npm install @emmaus/capacitor-plugin-android-insets
```

This will download and install the package and update your project's package.json file.

## Step 3: Configure the Plugin

Next, you need to update the plugin configuration in your project. Open the `capacitor.config.json` file and add the following code under the `plugins` section:

```json
{
  "plugins": {
    "@emmaus/capacitor-plugin-android-insets": {
      "someKey": "someValue"
    }
  }
}
```

Replace `"someKey"` and `"someValue"` with the appropriate configuration values for the plugin. Consult the plugin's documentation for more information on available configuration options.

## Step 4: Using the Plugin

Now that the plugin is installed and configured, you can start using it in your app's code. Import the plugin into your TypeScript/JavaScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorPluginAndroidInsets } = Plugins;
```

Then, you can use the plugin's methods to handle Android system UI insets. For example, if you want to get the height of the status bar, you can call the `getStatusbarHeight()` method:

```javascript
CapacitorPluginAndroidInsets.getStatusbarHeight().then((result) => {
  const { height } = result;
  console.log(`Status bar height: ${height}px`);
}).catch((error) => {
  console.error('Failed to get status bar height:', error);
});
```

You can explore other available methods and their usage in the plugin's documentation.

## Step 5: Build and Test

After adding the necessary code to use the plugin, you can build your app and test it on an Android device or emulator. Run the following command to build the app:

```bash
npx cap build android
```

This command will build the Android project for your app using the Capacitor CLI.

Once the build is complete, you can deploy and test your app on an Android device or emulator. Run the following command to run the app on an Android device:

```bash
npx cap run android
```

Make sure your device is connected to your computer via USB and has USB debugging enabled.

## Conclusion

In this tutorial, we learned how to install and use the @emmaus/capacitor-plugin-android-insets package in a Capacitor project. We covered the steps of installing the plugin, configuring it, and using its methods to handle Android system UI insets. Now you can enhance your app's user experience by properly handling the system UI in your Android app.

I hope you found this tutorial helpful. Happy coding!

---

**Note:** This tutorial assumes basic knowledge of Capacitor and Android development. If you're new to Capacitor, I recommend checking out the official Capacitor documentation for more information.