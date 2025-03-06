```markdown
---
"title": "How to Use capacitor-android-shortcuts Plugin in Your Android App",
"description": "Learn how to integrate and utilize the capacitor-android-shortcuts plugin in your Android app to add dynamic and pinned shortcuts.",
"created_at": "2022-04-21",
"published": true,
"slug": "capacitor-android-shortcuts.git"
---

# Using capacitor-android-shortcuts

This tutorial will guide you through integrating and utilizing the `capacitor-android-shortcuts` plugin in your Android app. This plugin allows you to add dynamic and pinned shortcuts to enhance the user experience.

## Installation

To get started, install the `capacitor-android-shortcuts` package by running the following command:

```bash
npm install capacitor-android-shortcuts
npx cap sync android
```

## Usage

First, ensure you import the necessary modules in your code:

```javascript
import { AndroidShortcuts } from 'capacitor-android-shortcuts';
```

### Setting Dynamic Shortcuts

You can create dynamic shortcuts that appear when the user taps and holds the app icon. Here's how you can set dynamic shortcuts:

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
                    shortLabel: "My first short label",
                    longLabel: "My first long label",
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

### Adding Pinned Shortcuts

Pinned shortcuts allow users to add favorites to the home screen. Use the following method to add pinned shortcuts:

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

### Listening to Shortcut Events

You can listen for when the app is launched by a shortcut by adding an event listener as shown below:

```javascript
AndroidShortcuts.addListener('shortcut', (response: any) => {
  // Handle the shortcut tap action here
});
```

That's it! You've now successfully integrated the `capacitor-android-shortcuts` plugin into your Android app to provide dynamic and pinned shortcuts.
```