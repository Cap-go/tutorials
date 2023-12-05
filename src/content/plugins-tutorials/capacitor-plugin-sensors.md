---
title: "Using Capacitor Plugin Sensors"
description: "A tutorial on how to use the capacitor-plugin-sensors package for tracking sensor data in Ionic apps."
created_at: "2021-11-15"
published: true
slug: "capacitor-plugin-sensors"
---

# Using Capacitor Plugin Sensors

In this tutorial, we will learn how to use the `capacitor-plugin-sensors` package to track sensor data in Ionic apps. This package provides access to various sensors like magnetometer, gyroscope, and accelerometer, allowing you to monitor device movements and orientation.

## Installation

To get started, we need to install the `capacitor-plugin-sensors` package. Open your terminal and run the following command:

```shell
npm install @unicorns-and-unicorns/capacitor-sensors-v2 --save
```

Next, sync the Capacitor project to fetch the latest changes:

```shell
npx cap sync
```

## Adding Plugins to Capacitor

To make Capacitor aware of the `capacitor-plugin-sensors` package, we need to add it to our Ionic Android project. Open the file `MainActivity.java` located in your project's `android` directory.

In the `MainActivity` class, import the `Sensors` plugin:

```java
import com.ctss.sensors.Sensors;
```

Inside the `onCreate` method, initialize the bridge and add the `Sensors` plugin to the list of plugins:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(Sensors.class);
    }});
  }
}
```

## Using the Sensors

Now that we have installed and added the `capacitor-plugin-sensors` package to our project, let's see how we can use it to track sensor data.

First, import the necessary plugins and types in your TypeScript file:

```tsx
import { Plugins } from '@capacitor/core';
import { SensorData, Sensors } from 'sensors';
```

Inside a component or a hook, we can use the `useEffect` hook to listen for sensor data changes:

```tsx
useEffect(() => {
  Plugins.Sensors.addListener('magnetometerChange', (res: SensorData) => {
    // Handle magnetometer data
    // Use res.x, res.y, res.z to access the sensor data
    // Example: setMangetometerX(res.x);
  });

  Plugins.Sensors.addListener('gyroscopeChange', (res: SensorData) => {
    // Handle gyroscope data
    // Use res.x, res.y, res.z to access the sensor data
    // Example: setGyroscopeX(res.x);
  });

  Plugins.Sensors.addListener('accelerometerChange', (res: SensorData) => {
    // Handle accelerometer data
    // Use res.x, res.y, res.z to access the sensor data
    // Example: setAccelerometerX(res.x);
  });

  // Clean up listeners when the component is unmounted or the hook is disposed
  return () => {
    Plugins.Sensors.removeAllListeners();
  };
}, []);
```

In the above code, we use the `useEffect` hook to set up listeners for the `magnetometerChange`, `gyroscopeChange`, and `accelerometerChange` events. Whenever there is a change in the sensor data, the corresponding callback function will be called. You can use the sensor data to perform any necessary actions or update the state in your component.

Remember to remove the listeners when the component is unmounted or the hook is disposed to avoid memory leaks.

That's it! You have successfully integrated the `capacitor-plugin-sensors` package into your Ionic app and can now track sensor data using the various sensors.

In this tutorial, we learned how to install the `capacitor-plugin-sensors` package, add it to Capacitor plugins, and use it to track sensor data in Ionic apps. You can now explore different use cases and leverage the sensor data for your specific app requirements.