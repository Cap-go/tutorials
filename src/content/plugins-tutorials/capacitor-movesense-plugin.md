---
title: "Using capacitor-movesense-plugin Package"
description: "A tutorial on how to use the capacitor-movesense-plugin package with Capacitor framework."
created_at: "2022-04-18"
published: true
slug: capacitor-movesense-plugin
---

# Using capacitor-movesense-plugin Package

This tutorial will guide you through the process of using the **capacitor-movesense-plugin** package with the Capacitor framework. The plugin provides easy integration with Movesense devices, allowing you to access sensor data and interact with the device's features.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Installed Capacitor framework in your project.
- Movesense device connected to your development environment.

## Installation

To install the **capacitor-movesense-plugin** package, run the following command in your project directory:

```
npm install capacitor-movesense-plugin
```

## Configuration

After installing the plugin, you need to configure it for your specific platform. Follow the relevant platform-specific instructions below:

### iOS

1. Open your project in Xcode.
2. Navigate to the `AppDelegate.swift` file.
3. Import the plugin by adding the following line at the top of the file:
   ```swift
   import capMovesensePlugin
   ```
4. Add the plugin initialization code in the `application(_:didFinishLaunchingWithOptions:)` method:
   ```swift
   CAPMovesensePlugin.register(with: CAPConfig(), bridge: bridge)
   ```
   
### Android

1. Open your project in Android Studio.
2. Navigate to the `MainActivity.java` or `MainActivity.kt` file.
3. Import the plugin by adding the following line at the top of the file:
   ```java
   import com.capacitorcommunity.movesense.capMovesensePlugin;
   ```
   ```kotlin
   import com.capacitorcommunity.movesense.capMovesensePlugin;
   ```
4. Add the plugin initialization code in the `onCreate` method:
   ```java
   capMovesensePlugin.registerWithBridge(this.$bridge);
   ```
   ```kotlin
   capMovesensePlugin.registerWithBridge(this.bridge);
   ```

## Usage

Once the plugin is installed and configured, you can start using it in your project. Here's an example of how to use the plugin to connect to a Movesense device and read sensor data:

```typescript
import { Plugins } from '@capacitor/core';

const { MovesensePlugin } = Plugins;

async function connectToDevice() {
  try {
    const device = await MovesensePlugin.connect();
    console.log('Connected to device:', device);
    
    MovesensePlugin.subscribe('/Meas/Acc/13', (data) => {
      console.log('Accelerometer data:', data);
    });
  } catch (error) {
    console.error('Error connecting to device:', error);
  }
}

connectToDevice();
```

This example demonstrates how to connect to a Movesense device and subscribe to accelerometer data. You can modify the endpoint path and handle other types of data based on your requirements.

## Conclusion

In this tutorial, you have learned how to install, configure, and use the **capacitor-movesense-plugin** package with the Capacitor framework. You can now integrate Movesense devices into your Capacitor projects and access sensor data for various applications.