---
title: "Using get-safe-area-capacitor Package"
description: "In this tutorial, we will learn how to use the get-safe-area-capacitor package to determine the safe area insets of a device and adjust the layout accordingly. We will cover installation, importing the package, and accessing the safe area insets in a Capacitor app."
created_at: "2022-05-25"
published: true
slug: "get-safe-area-capacitor"
---

# Using get-safe-area-capacitor Package

In this tutorial, we will learn how to use the `get-safe-area-capacitor` package to determine the safe area insets of a device and adjust the layout accordingly. We will cover installation, importing the package, and accessing the safe area insets in a Capacitor app.

## Getting Started

To use the `get-safe-area-capacitor` package, you need to have a Capacitor project set up. If you don't have one, you can create a new Capacitor app by following the official Capacitor documentation.

## Installation

To install the `get-safe-area-capacitor` package, open your project's terminal and run the following command:

```bash
npm install get-safe-area-capacitor
```

## Importing the Package

Once the package is installed, you can import it in your project's JavaScript or TypeScript file. Open the file where you want to use the `get-safe-area-capacitor` package and add the following import statement:

```javascript
import { SafeAreaInsets } from 'get-safe-area-capacitor';
```

## Accessing Safe Area Insets

To access the safe area insets of a device, you can use the `SafeAreaInsets.get()` method provided by the `get-safe-area-capacitor` package. This method returns an object containing the top, bottom, left, and right insets in pixels.

Here's an example of how you can retrieve the safe area insets and log them to the console:

```javascript
const safeAreaInsets = await SafeAreaInsets.get();
console.log('Safe Area Insets:', safeAreaInsets);
```

You can use the retrieved safe area insets to adjust the layout of your app's UI elements to avoid being obscured by device-specific areas like notches or rounded corners.

## Conclusion

In this tutorial, we have learned how to use the `get-safe-area-capacitor` package to determine the safe area insets of a device in a Capacitor app. We covered the installation, import, and accessing of safe area insets. You can now use this package to create a responsive UI that adapts to different device configurations.

Remember to consult the official documentation of the `get-safe-area-capacitor` package for more detailed usage instructions and additional features.