---
title: How to Use capacitor-android-shortcuts Plugin in Your Android App
description: >-
  This blog post will guide you through the process of using the
  capacitor-android-shortcuts plugin in your Android app to add dynamic and
  pinned shortcuts.
created_at: '2022-01-05'
published: true
slug: capacitor-android-shortcuts.git
locale: en
---

# Using capacitor-android-shortcuts Plugin

The capacitor-android-shortcuts plugin allows you to effortlessly add dynamic and pinned shortcuts to your Android app. This tutorial will walk you through the steps to integrate this feature into your app.

## Installation

To start using the capacitor-android-shortcuts plugin, you first need to install it in your Capacitor project. Run the following command in your project directory:

```bash
npm install capacitor-android-shortcuts
npx cap sync android
```

## Adding Dynamic Shortcuts

Dynamic shortcuts appear when a user taps and holds the app icon. You can set these dynamic shortcuts using the `setDynamic` method. Here's an example of how you can set dynamic shortcuts:

```javascript
import { AndroidShortcuts } from 'capacitor-android-shortcuts';

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
                    shortLabel: "My first short label",
                    longLabel: "My first long label",
                    icon: {
                        type: "Resource",
                        name: "<vector-asset-name>"
                    },
                    data: JSON.stringify({
                        myProperty: "Pass a strin.gified JSON object",
                    }),
                },
            ],
        });
    }
});
```

## Adding Pinned Shortcuts

Pinned shortcuts allow users to add favorites to the home screen. You can programmatically add a pinned shortcut using the `pin` method. Here's an example:

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

## Listening for Shortcut Tap Actions

You can listen to shortcut tap actions within your app using an event listener. Here's how you can do it:

```javascript
AndroidShortcuts.addListener('shortcut', (response: any) => {
    // Handle the shortcut tap action here
});
```

By following these steps, you can enhance your Android app by adding dynamic and pinned shortcuts using the capacitor-android-shortcuts plugin.
```
