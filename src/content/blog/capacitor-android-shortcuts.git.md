---
"title": "Using capacitor-android-shortcuts Package",
"description": "Learn how to use the capacitor-android-shortcuts package to add dynamic and pinned shortcuts in Android apps.",
"created_at": "2022-01-26",
"published": true,
"slug": "capacitor-android-shortcuts.git"
---

# Using capacitor-android-shortcuts Package

This tutorial will guide you through using the capacitor-android-shortcuts package to add dynamic and pinned shortcuts in Android apps. This feature allows you to enhance user experience by enabling users to access specific app functionalities directly from the home screen.

## Installation

To get started, install the capacitor-android-shortcuts package using npm and sync it with your Android project:

```bash
npm install capacitor-android-shortcuts
npx cap sync android
```

## Usage

1. **Set Dynamic Shortcuts:** 
    - Use the `setDynamic` method to set an array of dynamic shortcuts. These shortcuts will be displayed when the user taps and holds the app icon.
    
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

2. **Add Pinned Shortcut:**
    - You can add a pinned shortcut programmatically inside your app using the `pin` method. This allows users to add quick access to specific items on their home screen.
    
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

3. **Listening to Shortcut Tap Actions:**
    - You can listen to shortcut tap actions by adding an event listener. This allows you to react to specific actions triggered by the shortcuts.
    
    ```javascript
    AndroidShortcuts.addListener('shortcut', (response: any) => {
        // response.data contains the content of the 'data' property of the created shortcut
    });
    ```

By following these steps, you can enhance your Android app by enabling dynamic and pinned shortcuts using the capacitor-android-shortcuts package. Happy coding!