---
title: "Using capacitor-plugin-pip"
description: "A tutorial on how to use the capacitor-plugin-pip package"
created_at: "2022-02-15"
published: true
slug: capacitor-plugin-pip
---

## Using capacitor-plugin-pip

The capacitor-plugin-pip package allows you to implement Picture-in-Picture (PIP) functionality in your Ionic apps using Capacitor. This tutorial will guide you through the steps to integrate and use this plugin in your project.

### 1. Install Capacitor to global

To get started, make sure you have Capacitor installed globally on your machine. You can do this by running the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

### 2. Add the capacitor-plugin-pip package

Next, you need to add the capacitor-plugin-pip package to your project. Run the following command to install it:

```bash
npm install capacitor-plugin-pip
```

### 3. Import and initialize the plugin

To use the capacitor-plugin-pip package, you first need to import and initialize it in your project. Open the file where you want to use the plugin and add the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { Pip } = Plugins;

// Initialize the plugin
Pip.initialize();
```

### 4. Enter Picture-in-Picture mode

To enter Picture-in-Picture mode using the capacitor-plugin-pip package, you can call the `enterPictureInPicture` method. This method takes no parameters. Here's an example of how to use it:

```javascript
Pip.enterPictureInPicture();
```

### 5. Exit Picture-in-Picture mode

To exit Picture-in-Picture mode, you can call the `exitPictureInPicture` method. This method also takes no parameters. Here's an example:

```javascript
Pip.exitPictureInPicture();
```

### 6. Check if Picture-in-Picture is supported

Before using the capacitor-plugin-pip package, it's a good idea to check if Picture-in-Picture is supported on the device. You can do this by calling the `isPictureInPictureSupported` method. This method returns a boolean value indicating whether PIP is supported or not. Here's an example:

```javascript
const isSupported = await Pip.isPictureInPictureSupported();
if (isSupported) {
  // Picture-in-Picture is supported
} else {
  // Picture-in-Picture is not supported
}
```

That's it! You have successfully integrated the capacitor-plugin-pip package into your Ionic app and learned how to use its basic functionality. Feel free to explore the [official documentation](https://github.com/example/capacitor-plugin-pip) for more advanced features and options.

Remember to import the necessary packages and initialize the plugin before using it in your project.

Happy coding!