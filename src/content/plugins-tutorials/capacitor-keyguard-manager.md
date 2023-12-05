---
title: "Using the capacitor-keyguard-manager Package"
description: "A tutorial on how to use the capacitor-keyguard-manager package in your app"
created_at: "2023-07-15"
published: true
slug: "capacitor-keyguard-manager"
---

# Using the capacitor-keyguard-manager Package

In this tutorial, we will learn how to use the `capacitor-keyguard-manager` package to manage the keyguard functionality in your Capacitor app.

## Installation

To install the `capacitor-keyguard-manager` package, run the following command in your project directory:

```bash
npm install capacitor-keyguard-manager
```

## Setup

Once the package is installed, you need to configure it in your project.

### Android

In your Android project, open the `MainActivity.java` file and import the `CapacitorKeyguardManager` class:

```java
import com.getcapacitor.plugin.keyguard.CapacitorKeyguardManager;
```

Then, inside the `init` method, add the following line to register the plugin:

```java
// Initialize the CapacitorKeyguardManager plugin
this.registerPlugin(CapacitorKeyguardManager.class);
```

### iOS

For iOS, there is no additional setup required. The plugin will automatically be registered.

## Usage

With the `capacitor-keyguard-manager` package installed and configured, you can now use its functionality in your app.

### Check Keyguard State

To check the state of the keyguard (locked or unlocked), you can use the `isKeyguardLocked` method. Here's an example of how to use it:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorKeyguardManager } = Plugins;

const checkKeyguardState = async () => {
  const result = await CapacitorKeyguardManager.isKeyguardLocked();
  console.log('Keyguard locked:', result.locked);
};
```

### Show Keyguard Prompt

You can show a keyguard prompt to the user by using the `showConfirmDeviceCredential` method. This method will display a system dialog asking the user to authenticate:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorKeyguardManager } = Plugins;

const showKeyguardPrompt = async () => {
  const result = await CapacitorKeyguardManager.showConfirmDeviceCredential();
  if (result.success) {
    console.log('Authentication successful');
  } else {
    console.log('Authentication failed');
  }
};
```

### Request Unlock Device

If the keyguard is locked, you can request to unlock the device programmatically using the `requestUnlock` method:

```javascript
import { Plugins } from '@capacitor/core';

const { CapacitorKeyguardManager } = Plugins;

const requestUnlockDevice = async () => {
  const result = await CapacitorKeyguardManager.requestUnlock();
  if (result.success) {
    console.log('Device unlocked');
  } else {
    console.log('Failed to unlock device');
  }
};
```

## Conclusion

In this tutorial, we have learned how to install and use the `capacitor-keyguard-manager` package in a Capacitor app. We explored methods for checking the keyguard state, showing a keyguard prompt, and programmatically requesting to unlock the device. Now you can enhance the security of your app by utilizing keyguard functionality.

Remember to import the necessary modules from '@capacitor/core' and utilize the provided methods available in CapacitorKeyguardManager.

Happy coding!