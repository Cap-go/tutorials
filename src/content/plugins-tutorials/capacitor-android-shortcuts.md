---
title: "Using the capacitor-android-shortcuts Package"
description: "A tutorial on how to use the capacitor-android-shortcuts package to add dynamic and pinned shortcuts in Android apps."
created_at: "2022-03-15"
published: true
slug: "capacitor-android-shortcuts"
---

# Using the capacitor-android-shortcuts Package

This tutorial will guide you through the process of using the **capacitor-android-shortcuts** package to add dynamic and pinned shortcuts in your Android apps. These shortcuts provide a convenient way for users to access specific functionalities of your app directly from the home screen.

The **capacitor-android-shortcuts** package integrates with Capacitor, a cross-platform app development framework. It allows you to create shortcuts that can be dynamically generated or pinned to the home screen programmatically.

## Installation

To get started, make sure you have Capacitor installed in your project. If you haven't, you can install it using the following command:

```bash
npm install -g @capacitor/cli
```

Next, install the **capacitor-android-shortcuts** package:

```bash
npm install capacitor-android-shortcuts
```

Sync the Capacitor project with the Android platform:

```bash
npx cap sync android
```

## Usage

Import the **AndroidShortcuts** module from the **capacitor-android-shortcuts** package into your app:

```javascript
import { AndroidShortcuts } from 'capacitor-android-shortcuts';
```

### Set Dynamic Shortcuts

To add dynamic shortcuts to your app, you can use the `setDynamic` method provided by the **AndroidShortcuts** module. This method allows you to define an array of dynamic shortcuts and their properties.

Here's an example of how to set dynamic shortcuts:

```javascript
AndroidShortcuts.isDynamicSupported().then(({ result }) => {
    if (result) {
        AndroidShortcuts.setDynamic({
            items: [
                {
                    id: "myfirstid",
                    shortLabel: "My first short label",
                    longLabel: "My first long label",
                    icon: {
                        type: "Bitmap",
                        name: "<base64-string>"
                    },
                    data: "I am a simple string",
                },
                {
                    id: "mysecondid",
                    shortLabel: "My second short label",
                    longLabel: "My second long label",
                    icon: {
                        type: "Resource",
                        name: "<vector-asset-name>"
                    },
                    data: JSON.stringify({
                        myProperty: "Pass a stringified JSON object",
                    }),
                },
            ],
        });
    }
});
```

In the above example, the `setDynamic` method is called after checking if the device supports dynamic shortcuts. It defines an array of two dynamic shortcuts, each with a unique `id`, `shortLabel`, `longLabel`, `icon`, and `data` properties.

### Add Pinned Shortcut

To add a pinned shortcut programmatically inside your app, you can use the `pin` method provided by the **AndroidShortcuts** module. This method allows you to define the properties of the pinned shortcut.

Here's an example of how to add a pinned shortcut:

```javascript
AndroidShortcuts.isPinnedSupported().then(({ result }) => {
    if (result) {
        AndroidShortcuts.pin({
            id: "mypinnedid",
            shortLabel: "My pinned short label",
            longLabel: "My pinned long label",
            icon: {
                type: "Bitmap",
                name: "<base64-string>"
            },
            data: "I am a simple string",
        });
    }
});
```

In the above example, the `pin` method is called after checking if the device supports pinned shortcuts. It defines the properties of the pinned shortcut, including the `id`, `shortLabel`, `longLabel`, `icon`, and `data` properties.

### Listening to Shortcut Tap Action

You can also listen to the tap action of a shortcut by adding an event listener using the `addListener` method provided by the **AndroidShortcuts** module.

Here's an example of how to listen to a shortcut tap action:

```javascript
AndroidShortcuts.addListener('shortcut', (response) => {
    // Handle the shortcut tap action
    console.log(response.data);
});
```

In the above example, the `addListener` method is called with the event name `'shortcut'`. When a shortcut is tapped, the callback function will be triggered, and the `response.data` property will contain the content of the `data` property of the tapped shortcut.

## Conclusion

In this tutorial, you have learned how to use the capacitor-android-shortcuts package to add dynamic and pinned shortcuts in your Android apps. You have seen how to set dynamic shortcuts, add pinned shortcuts, and listen to shortcut tap actions.

By leveraging these shortcuts, you can enhance the user experience of your app by providing quick and convenient access to specific features or content directly from the home screen.

Explore the possibilities of the capacitor-android-shortcuts package and make your Android app even more accessible and user-friendly!