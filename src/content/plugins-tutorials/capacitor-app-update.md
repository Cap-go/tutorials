---
title: "Using capacitor-app-update Package"
description: "A step-by-step tutorial on how to use the capacitor-app-update package in your project."
created_at: "2022-01-10"
published: true
slug: "capacitor-app-update"
---

# Using capacitor-app-update Package

In this tutorial, we will learn how to use the `capacitor-app-update` package in your project. The `capacitor-app-update` package provides functionality to easily update your Capacitor apps.

## Step 1: Installation

To get started, install the `capacitor-app-update` package by running the following command:

```bash
npm install capacitor-app-update
```

## Step 2: Importing the Package

After installing the package, you need to import it into your project. Open the file where you want to use the package and add the following line at the top:

```javascript
import { AppUpdate } from 'capacitor-app-update';
```

## Step 3: Check for Updates

Next, let's check for updates in your app. Add the following code snippet to the appropriate location in your project:

```javascript
const checkForUpdates = async () => {
  const { AppUpdatePlugin } = Plugins;

  try {
    const { available } = await AppUpdate.checkForUpdate();
    
    if (available) {
      // Display UI to prompt the user to update the app
    } else {
      // No updates available
    }
  } catch (error) {
    console.error('Error checking for app updates:', error);
  }
};
```

## Step 4: Prompt User to Update

If an update is available, you can prompt the user to update the app. Use the following code:

```javascript
const promptToUpdate = async () => {
  const { AppUpdatePlugin } = Plugins;

  try {
    await AppUpdate.promptUpdate();
  } catch (error) {
    console.error('Error prompting app update:', error);
  }
};
```

## Step 5: Apply the Update

To apply the update and restart the app, use the following code:

```javascript
const applyUpdate = async () => {
  const { AppUpdatePlugin } = Plugins;

  try {
    const { success } = await AppUpdate.restartApp();
    
    if (success) {
      // Restart successful
    } else {
      // Restart failed
    }
  } catch (error) {
    console.error('Error applying app update:', error);
  }
};
```

That's it! You have successfully learned how to use the `capacitor-app-update` package in your project.

Remember to follow the official documentation for more advanced usage and customization options. Happy coding!