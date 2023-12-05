---
title: "Using the Native Motion Package with Capacitor"
description: "A tutorial on how to use the native-motion package in a Capacitor project"
created_at: "2022-11-11"
published: true
slug: "capacitor-native-motion-plugin"
---

# Using the Native Motion Package with Capacitor

In this tutorial, we will learn how to integrate and use the native-motion package in a Capacitor project. The native-motion package provides a set of APIs for accessing device motion and orientation data.

## Installation

To get started, first install the native-motion package in your Capacitor project. Open a terminal and navigate to your project directory. Then run the following command:

```bash
npm install capacitor-native-motion-plugin
```

## Configuration

Once the package is installed, we need to configure it for our project. Open your project's `capacitor.config.json` file and add the following code under the `plugins` section:

```json
"Plugins": {
  "NativeMotion": {
    "enabled": true
  }
}
```

## Accessing Device Motion Data

Now that the native-motion package is installed and configured, we can start accessing device motion data. Import the `NativeMotion` module into your project's JavaScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { NativeMotion } = Plugins;
```

To get the device's current motion data, use the `getCurrentMotion` method:

```javascript
NativeMotion.getCurrentMotion().then(result => {
  const { alpha, beta, gamma } = result;
  console.log(`Alpha: ${alpha}`);
  console.log(`Beta: ${beta}`);
  console.log(`Gamma: ${gamma}`);
}).catch(error => {
  console.error(error);
});
```

The `getCurrentMotion` method returns an object with `alpha`, `beta`, and `gamma` properties, representing the device's rotation around the x, y, and z axes respectively.

## Listening for Motion Updates

In addition to getting the current motion data, we can also listen for motion updates in real-time. To do this, use the `startMotionUpdates` method:

```javascript
NativeMotion.startMotionUpdates((result) => {
  const { alpha, beta, gamma } = result;
  console.log(`Alpha: ${alpha}`);
  console.log(`Beta: ${beta}`);
  console.log(`Gamma: ${gamma}`);
}, (error) => {
  console.error(error);
});
```

The `startMotionUpdates` method takes two callbacks as arguments. The first callback is invoked when motion data is available, and the second callback is invoked if an error occurs.

Don't forget to stop motion updates when no longer needed. Use the `stopMotionUpdates` method:

```javascript
NativeMotion.stopMotionUpdates().then(() => {
  console.log('Motion updates stopped');
}).catch(error => {
  console.error(error);
});
```

## Summary

In this tutorial, we learned how to integrate and use the native-motion package in a Capacitor project. We covered installation, configuration, accessing device motion data, and listening for motion updates.

By utilizing the native-motion package, you can add motion-based interactions and features to your Capacitor app, providing a more immersive and engaging user experience.

For more information and detailed documentation, refer to the [official native-motion plugin documentation](https://github.com/your-plugin-repository).

Happy coding!