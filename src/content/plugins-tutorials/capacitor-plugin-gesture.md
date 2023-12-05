---
title: "Using @mufan/capacitor-plugin-gesture Package"
description: "A tutorial on how to use the @mufan/capacitor-plugin-gesture package to handle gestures in your Capacitor app."
created_at: "October 15, 2021"
published: true
slug: "capacitor-plugin-gesture"
---

# Using @mufan/capacitor-plugin-gesture Package

The @mufan/capacitor-plugin-gesture package is a useful Capacitor plugin that allows you to handle and respond to various gestures in your Capacitor app. In this tutorial, we will walk through the steps of installing and using this package to implement gesture functionality in your app.

## Installation

To get started, you will need to install the @mufan/capacitor-plugin-gesture package in your Capacitor project. Open your project's terminal and run the following command:

```bash
npm install @mufan/capacitor-plugin-gesture
```

This will install the package and its dependencies in your project.

## Configuration

Next, you need to configure the plugin in your Capacitor project. Open the `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
{
  "plugins": {
    "@mufan/capacitor-plugin-gesture": {}
  }
}
```

This will register the plugin with Capacitor and allow you to use its functionality in your app.

## Usage

Once the package is installed and configured, you can start using it to handle gestures in your app. Here is an example of how to listen for a swipe gesture:

```javascript
import { Plugins } from "@capacitor/core";

const { CapacitorPluginGesture } = Plugins;

CapacitorPluginGesture.addListener("onSwipe", (event) => {
  // Handle swipe gesture here
  console.log("Swipe direction:", event.direction);
});
```

In this example, we import the `Plugins` object from `@capacitor/core` and access the `CapacitorPluginGesture` plugin. We then use the `addListener` method to register a callback function that will be called when a swipe gesture occurs. Inside the callback function, you can handle the swipe gesture as needed. In this case, we simply log the swipe direction to the console.

You can similarly listen for other types of gestures such as tap, pinch, rotate, etc. by using the appropriate event names and corresponding callback functions.

## Conclusion

In this tutorial, we have covered the basic steps of installing and using the @mufan/capacitor-plugin-gesture package to handle gestures in a Capacitor app. By following these steps, you can easily incorporate gesture functionality into your app and provide a better user experience.

Remember to refer to the official documentation of the @mufan/capacitor-plugin-gesture package for more details and advanced usage. Happy coding!