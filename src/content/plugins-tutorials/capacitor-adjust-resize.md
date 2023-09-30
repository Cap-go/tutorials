# Tutorial: Using capacitor-adjust-resize Package

## Introduction

In this tutorial, we will explore how to use the `capacitor-adjust-resize` package in your Capacitor project. The `capacitor-adjust-resize` plugin provides an observer for layout changes on the native layer, making it easier to handle keyboard events and adjust the layout accordingly.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- npm or yarn package manager

## Step 1: Install the Package

To get started, let's install the `capacitor-adjust-resize` package. Open your terminal and navigate to your Capacitor project directory. Then, run the following command:

```bash
npm install capacitor-adjust-resize
```

This command will install the package and its dependencies into your project.

## Step 2: Sync the Plugin

After installing the package, we need to sync the plugin with your project. Run the following command in your terminal:

```bash
npx cap sync android
```

This command will update the Android project with the necessary plugin configuration.

## Step 3: Implement the Plugin

Now that we have installed and synced the `capacitor-adjust-resize` plugin, we can start using it in our project. Open your project's code editor and locate the file where you want to implement the plugin.

First, we need to import the plugin at the beginning of the file. Add the following line at the top:

```javascript
import 'capacitor-adjust-resize';
```

Next, we can start using the plugin's functionality within our code. The plugin is automatically activated on load, so we don't need to explicitly initialize it.

For example, if you want to adjust the layout when the keyboard opens, you can add bottom padding to the Android layout. Here's an example code snippet:

```javascript
import { Plugins } from '@capacitor/core';

const { AdjustResizePlugin } = Plugins;

// Listen for keyboard events and adjust layout
window.addEventListener('keyboardDidShow', () => {
  AdjustResizePlugin.addBottomPadding();
});

window.addEventListener('keyboardDidHide', () => {
  AdjustResizePlugin.removeBottomPadding();
});
```

In the above code, we import the `AdjustResizePlugin` from the `@capacitor/core` package. Then, we listen for the `keyboardDidShow` and `keyboardDidHide` events and call the `addBottomPadding` and `removeBottomPadding` methods from the `AdjustResizePlugin` respectively.

Feel free to customize the event listeners according to your specific use case.

## Step 4: Build and Run

Once you have implemented the plugin in your code, you can build and run your Capacitor project to see the changes in action.

For example, if you are using an Android device, run the following command:

```bash
npx cap open android
```

This command will open your Android project in Android Studio. From there, you can build and run your app on an emulator or a connected device.

Make sure to test the functionality on a device that triggers the keyboard events, such as a physical device with a soft keyboard.

## Conclusion

Congratulations! You have successfully implemented the `capacitor-adjust-resize` package in your Capacitor project. You have learned how to install the package, sync the plugin, and use its functionality to handle keyboard events and adjust the layout accordingly.

Feel free to explore more about the `capacitor-adjust-resize` package by referring to its official documentation and experiment with different features to suit your project's requirements.