---
title: "Using the spoken-keyboard package"
description: "A tutorial on how to use the spoken-keyboard package for keyboard control in your app."
created_at: "2021-09-15"
published: true
slug: "spoken-keyboard"
---

# Using the spoken-keyboard package

The spoken-keyboard package is a fork of the @capacitor/keyboard package that provides additional functionality for keyboard control in your app. In this tutorial, we will walk through the installation, usage, and configuration of the spoken-keyboard package.

## Installation

To install the spoken-keyboard package, open your terminal and run the following command:

```bash
npm install @capacitor/keyboard
npx cap sync
```

## Usage

After installing the spoken-keyboard package, you can import it into your code and start using its features. Here is an example of how to listen for keyboard events:

```typescript
import { Keyboard } from '@capacitor/keyboard';

Keyboard.addListener('keyboardWillShow', info => {
  console.log('keyboard will show with height:', info.keyboardHeight);
});

Keyboard.addListener('keyboardDidShow', info => {
  console.log('keyboard did show with height:', info.keyboardHeight);
});

Keyboard.addListener('keyboardWillHide', () => {
  console.log('keyboard will hide');
});

Keyboard.addListener('keyboardDidHide', () => {
  console.log('keyboard did hide');
});
```

In the example above, we use the `addListener` method to listen for keyboard events such as `keyboardWillShow`, `keyboardDidShow`, `keyboardWillHide`, and `keyboardDidHide`. When an event is triggered, we log the relevant information or perform any desired action.

## Configuration

The spoken-keyboard package provides configuration options for iOS. These options allow you to customize the behavior and style of the keyboard:

| Prop                     | Type                                                      | Description                                                                                                                                                                                                                                                                                                       | Default             | Since |
| ------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----- |
| **`resize`**             | <code><a href="#keyboardresize">KeyboardResize</a></code> | Configure the way the app is resized when the Keyboard appears. Only available on iOS.                                                                                                                                                                                                                            | <code>native</code> | 1.0.0 |
| **`style`**              | <code><a href="#keyboardstyle">KeyboardStyle</a></code>   | Override the keyboard style if your app doesn't support dark/light theme changes. If not set, the keyboard style will depend on the device appearance. Only available on iOS.                                                                                                                                     |                     | 1.0.0 |
| **`resizeOnFullScreen`** | <code>boolean</code>                                      | There is an Android bug that prevents the keyboard from resizing the WebView when the app is in full screen (i.e. if StatusBar plugin is used to overlay the status bar). This setting, if set to true, add a workaround that resizes the WebView even when the app is in full screen. Only available for Android |                     | 1.1.0 |

To configure the spoken-keyboard package, you can pass these options when calling the appropriate methods.

That's it! You have now learned how to use the spoken-keyboard package for keyboard control in your app. Happy coding!