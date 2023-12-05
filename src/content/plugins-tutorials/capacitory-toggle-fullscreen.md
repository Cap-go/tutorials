---
title: "Using capacitor-plugin-toggle-fullscreen"
description: "A tutorial on how to use the capacitor-plugin-toggle-fullscreen package in your Capacitor project."
created_at: "2022-09-26"
published: true
slug: "capacitor-toggle-fullscreen"
---

# Using capacitor-plugin-toggle-fullscreen

In this tutorial, we will learn how to use the `capacitor-plugin-toggle-fullscreen` package in a Capacitor project. This plugin allows you to toggle the fullscreen mode of your app and set different screen orientations.

## Installation

To install the `capacitor-plugin-toggle-fullscreen` package, you can use npm or yarn. Open your terminal and run one of the following commands:

Using npm:

```
npm install --save capacitor-plugin-toggle-fullscreen
```

Using yarn:

```
yarn add capacitor-plugin-toggle-fullscreen
```

## Register the plugin

To use the plugin in your Capacitor project, you need to register it in your activity file. Open your `MainActivity.java` file in your Android project and import the `ToggleFullScreen` class from the `capacitor-plugin-toggle-fullscreen` package:

```java
import com.lianlf.capacitoryfullscreen.ToggleFullScreen;
```

In the `onCreate` method of your `MainActivity` class, add the `ToggleFullScreen.class` to the list of plugins:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        add(ToggleFullScreen.class);
    }});
}
```

## Usage

Now that the plugin is registered, you can use it in your JavaScript code to toggle the fullscreen mode and set screen orientations.

### Toggle fullscreen

To toggle the fullscreen mode, you can use the `toggle()` method. Here's an example of how to use it in your JavaScript code:

```javascript
import { Plugins } from '@capacitor/core';

const { ToggleFullScreen } = Plugins;

// Toggle fullscreen
ToggleFullScreen.toggle();
```

### Set screen orientation

You can also use the `toggle()` method to set different screen orientations. Simply pass the `orientation` option with the desired value. Here are examples of how to set the screen orientation to landscape and portrait:

```javascript
// Set landscape orientation
ToggleFullScreen.toggle({ orientation: 'LANDSCAPE' });

// Set portrait orientation
ToggleFullScreen.toggle({ orientation: 'PORTRAIT' });
```

Note: The screen orientation change may not work on all devices depending on system and device settings.

## Conclusion

In this tutorial, we learned how to install and use the `capacitor-plugin-toggle-fullscreen` package in a Capacitor project. We saw how to toggle the fullscreen mode and set screen orientations using the provided methods. Feel free to explore more features and options available in the package documentation.

Happy coding!