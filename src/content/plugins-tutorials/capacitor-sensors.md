---
title: "Using @danyalwe/capacitor-sensors Package"
description: "A tutorial on how to use the @danyalwe/capacitor-sensors package to access sensor data in a Capacitor app."
created_at: "2021-10-01"
published: true
slug: "capacitor-sensors"
---

# Using @danyalwe/capacitor-sensors Package

In this tutorial, we will learn how to use the `@danyalwe/capacitor-sensors` package to access sensor data in a Capacitor app.

## Installation

To get started with the `@danyalwe/capacitor-sensors` package, follow these steps:

1. Install the package using npm:

   ```
   npm install @danyalwe/capacitor-sensors --save
   ```

2. Synchronize your Capacitor project:

   ```
   npx cap sync
   ```

## Setting up the Plugin

To make Capacitor aware of the `@danyalwe/capacitor-sensors` plugin in your Android project, you need to modify the `MainActivity` file.

1. Open the `MainActivity.java` file located in the `android/app/src/main/java/your/package/name` directory.

2. Import the `Sensors` class from the `@danyalwe/capacitor-sensors` package:

   ```java
   import com.danyalwe.plugins.Sensors;
   ```

3. Add the `Sensors` plugin to the list of plugins in the `onCreate` method:

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

## Accessing Sensor Data

Once you have set up the plugin, you can start accessing sensor data in your Capacitor app.

1. Import the `Plugins` object and the `SensorData` and `Sensors` types from the `@capacitor/core` and `@danyalwe/capacitor-sensors` packages, respectively:

   ```tsx
   import { Plugins } from '@capacitor/core';
   import { SensorData, Sensors } from '@danyalwe/capacitor-sensors';
   ```

2. Use the `addListener` method from the `Plugins.Sensors` object to listen for sensor data events. For example, let's listen to changes in the magnetometer data:

   ```tsx
   import { useEffect } from 'react';

   useEffect(() => {
     Plugins.Sensors.addListener('magnetometerChange', (res: SensorData) => {
       console.log('Magnetometer Data:', res);
     });

     return () => {
       Plugins.Sensors.removeAllListeners();
     };
   }, []);
   ```

   In the above example, we add a listener for the `magnetometerChange` event and log the received sensor data to the console. You can similarly add listeners for other sensor types like `gyroscopeChange` and `accelerometerChange`.

3. You can now access the sensor data and perform various actions based on the received values.

## Conclusion

In this tutorial, we learned how to use the `@danyalwe/capacitor-sensors` package to access sensor data in a Capacitor app. We covered the installation process, setting up the plugin in the Android project, and accessing sensor data using event listeners. With this knowledge, you can now integrate sensor functionality into your Capacitor apps.

Remember to refer to the official documentation of the `@danyalwe/capacitor-sensors` package for more detailed information and additional features.

Happy coding!