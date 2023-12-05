---
title: "Using the cap-home-button Package"
description: "This tutorial will guide you through the process of using the cap-home-button package in your app."
created_at: "2022-02-14"
published: true
slug: "cap-home-button"
---

# Using the cap-home-button Package

In this tutorial, we will learn how to use the cap-home-button package in your Capacitor app.

## Step 1: Install the Package

To get started, first, we need to install the cap-home-button package. Open your terminal and navigate to your project's root directory. Then, run the following command:

```bash
npm install cap-home-button
```

This will install the cap-home-button package and add it as a dependency to your project.

## Step 2: Import and Initialize the Plugin

Once the package is installed, we can import and initialize the plugin in our app. Open the file where you want to use the cap-home-button package and add the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { CapHomeButton } = Plugins;
```

This code imports the necessary dependencies and initializes the CapHomeButton plugin to be used in our app.

## Step 3: Use the Plugin Methods

Now that the plugin is imported and initialized, we can start using its methods. The cap-home-button package provides the following methods:

### `isEnabled()`

This method allows you to check if the home button is enabled. You can use it to determine whether the app is in fullscreen mode or not. Here is an example of how to use this method:

```javascript
const checkHomeButton = async () => {
  const isEnabled = await CapHomeButton.isEnabled();
  console.log('Home Button Enabled:', isEnabled);
}
```

### `enable()`

This method enables the home button. It can be used to enable the home button when needed. Here is an example:

```javascript
const enableHomeButton = async () => {
  await CapHomeButton.enable();
  console.log('Home Button Enabled');
}
```

### `disable()`

This method disables the home button. It can be used to disable the home button temporarily. Here is an example:

```javascript
const disableHomeButton = async () => {
  await CapHomeButton.disable();
  console.log('Home Button Disabled');
}
```

## Conclusion

In this tutorial, we have learned how to use the cap-home-button package in a Capacitor app. We covered the installation process, importing and initializing the plugin, as well as using its methods. Now you can incorporate the cap-home-button functionality into your app to control the behavior of the home button.