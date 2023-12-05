# How to Use the Capacitor Zeroconf Package

## Introduction

In this tutorial, we will learn how to use the capacitor-zeroconf package in a Capacitor app. `capacitor-zeroconf` is a Capacitor plugin that allows you to discover devices on a local network using the Zeroconf networking protocol.

## Prerequisites

Before we get started, make sure you have the following:

- Node.js installed on your machine
- Capacitor installed globally (`npm install -g capacitor`)

## Step 1: Create a new Capacitor project

First, let's create a new Capacitor project by running the following command:

```bash
npx @capacitor/cli create MyApp
```

Replace `MyApp` with your preferred project name.

## Step 2: Install the capacitor-zeroconf package

Next, navigate to your project's root directory and install the capacitor-zeroconf package:

```bash
cd MyApp
npm install capacitor-zeroconf
```

## Step 3: Add the plugin to your project

To add the capacitor-zeroconf plugin to your Capacitor project, run the following command:

```bash
npx cap add ios          # for iOS
npx cap add android      # for Android
```

This will add the necessary native dependencies for the plugin to work.

## Step 4: Configure the plugin

Now, open the `capacitor.config.json` file in your project's root directory and add the following configuration under the `plugins` section:

```json
"CapacitorZeroconf": {
  "enabled": true
}
```

This enables the capacitor-zeroconf plugin in your project.

## Step 5: Use the Zeroconf API

To use the Zeroconf API, import it in your code:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorZeroconf } = Plugins;
```

Now, you can use the various methods provided by the CapacitorZeroconf API to discover devices on the local network.

For example, to discover all available services, use the `start` method:

```typescript
CapacitorZeroconf.start().then((result) => {
  console.log(result.services);
}).catch((error) => {
  console.error(error);
});
```

## Step 6: Build and run your app

Finally, build your app and run it on the desired platform:

```bash
npx cap copy          # copies the web assets to the native project
npx cap sync          # syncs the native project
npx cap open ios      # opens the iOS project in Xcode
npx cap open android  # opens the Android project in Android Studio
```

That's it! You have successfully integrated the capacitor-zeroconf plugin into your Capacitor app.

## Conclusion

In this tutorial, we learned how to use the capacitor-zeroconf package to discover devices on a local network in a Capacitor app. We covered the installation and configuration of the plugin and showed an example of how to use the Zeroconf API.

Now you can leverage the power of Zeroconf networking in your Capacitor apps! Happy coding!

---

title: "Using the Capacitor Zeroconf Package"
description: "Learn how to use the capacitor-zeroconf package to discover devices on a local network in a Capacitor app."
created_at: "2022-10-10"
published: true
slug: capacitor-zeroconf