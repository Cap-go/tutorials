---
title: "Getting Started with capacitor-android-bluetoothmanager"
description: "A tutorial on how to use the capacitor-android-bluetoothmanager package for Bluetooth management in Capacitor"
created_at: "2021-11-03"
published: true
slug: "capacitor-android-bluetoothmanager"
---

# Getting Started with capacitor-android-bluetoothmanager

This tutorial will guide you through the process of using the `capacitor-android-bluetoothmanager` package to manage Bluetooth functionality in your Capacitor app.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor project set up and configured
- Android development environment

## Installation

To install the `capacitor-android-bluetoothmanager` package, run the following command in your Capacitor project directory:

```bash
yarn add capacitor-android-bluetoothmanager
```

## Android Plugin Integration

To integrate the plugin into your Capacitor Android project, you need to modify the `MainActivity.java` file. Follow these steps:

1. Open the `MainActivity.java` file located in `android/app/src/main/java/{your-package-name}/MainActivity.java`.

2. Import the `BluetoothManagerPlugin` class:

```java
import com.jbaysolutions.capacitor.bluetooth.capacitorandroidbluetoothmanager.BluetoothManagerPlugin;
```

3. In the `onCreate` method, add the `BluetoothManagerPlugin` to the list of plugins:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  // Initializes the Bridge
  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Additional plugins you've installed go here
    // Ex: add(TotallyAwesomePlugin.class);
    
    // Add the BluetoothManagerPlugin
    add(BluetoothManagerPlugin.class);
  }});
}
```

4. Save the file and rebuild your Android project.

## Usage

Once the package is installed and integrated, you can start using the `BluetoothManagerPlugin` methods:

### Initializing

The first method you should call is `initialize()`. This method handles the necessary permissions and initializes the Bluetooth adapter. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-android-bluetoothmanager';

const { BluetoothManagerPlugin } = Plugins;

BluetoothManagerPlugin.initialize()
  .then(() => {
    console.log('Bluetooth manager initialized successfully');
    // Start performing Bluetooth operations
  })
  .catch(() => {
    console.log('Failed to initialize Bluetooth manager');
    // Handle initialization failure
  });
```

### Additional Methods

The `capacitor-android-bluetoothmanager` package provides various other methods for interacting with Bluetooth devices. Visit the [documentation website](https://jbaysolutions.github.io/capacitor-android-bluetoothmanager/) for more details on these methods.

## Conclusion

In this tutorial, you learned how to install and integrate the `capacitor-android-bluetoothmanager` package into your Capacitor app. You also saw an example of how to initialize the Bluetooth manager and use its methods. With this knowledge, you can now easily incorporate Bluetooth functionality into your Capacitor projects.

Happy coding!