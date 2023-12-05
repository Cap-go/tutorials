---
title: "Using Capacitor Swipe Back Plugin"
description: "Learn how to integrate and use the Capacitor Swipe Back Plugin in your Ionic applications."
created_at: "2022-09-20"
published: true
slug: "capacitor-plugin-swipe-back"
---

# Using Capacitor Swipe Back Plugin

In this tutorial, we will learn how to integrate and use the Capacitor Swipe Back Plugin in your Ionic applications. The Capacitor Swipe Back Plugin allows you to enable swipe back gesture navigation in your app, allowing users to navigate back by swiping from the left edge of the screen.

## Prerequisites

Before we get started, make sure you have the following prerequisites:

- Ionic framework and Capacitor installed in your development environment.
- An existing Ionic project.

## Step 1: Install the Plugin

To install the Capacitor Swipe Back Plugin, open your terminal and navigate to your Ionic project's root directory. Run the following command:

```shell
npm install capacitor-swipe-back-plugin
```

## Step 2: Configure the Plugin

Next, we need to configure the Capacitor Swipe Back Plugin in our Ionic project. Open the `capacitor.config.json` file in the root directory of your project. Add the following configuration to the `plugins` section:

```json
{
  "plugins": {
    "SwipeBack": {
      "enabled": true
    }
  }
}
```

This configuration enables the Swipe Back Plugin in your project.

## Step 3: Import and Use the Plugin

Now that the plugin is installed and configured, we can import and use it in our Ionic code.

Open the file where you want to enable swipe back gesture navigation. Import the `SwipeBack` plugin from Capacitor:

```typescript
import { Plugins } from '@capacitor/core';

const { SwipeBack } = Plugins;
```

Next, add the following code where you want to enable swipe back gesture navigation:

```typescript
SwipeBack.enable();
```

This code enables swipe back gesture navigation in your Ionic app.

## Step 4: Test the Swipe Back Gesture

Now, build and run your Ionic app on a device or simulator. Navigate to a page where you want to test the swipe back gesture. Swipe from the left edge of the screen towards the right. You should see the previous page animating in from the left, indicating that the swipe back gesture was successful.

Congratulations! You have successfully integrated and used the Capacitor Swipe Back Plugin in your Ionic application.

## Conclusion

In this tutorial, we learned how to integrate and use the Capacitor Swipe Back Plugin in an Ionic application. By enabling swipe back gesture navigation, you can enhance the user experience of your Ionic app. Experiment with different settings and customize the plugin to fit your app's requirements.

Thank you for reading!