---
title: "Using the @unicorns-and-unicorns/capacitor-sensors-v2 package"
description: "A tutorial on how to use the @unicorns-and-unicorns/capacitor-sensors-v2 package to access sensors in Capacitor apps."
created_at: "2021-10-15"
published: true
slug: capacitor-sensors-v2
---

# Using the @unicorns-and-unicorns/capacitor-sensors-v2 package

The @unicorns-and-unicorns/capacitor-sensors-v2 package is a Capacitor plugin that provides access to sensors in Capacitor apps. This tutorial will guide you through the process of installing and using the package to access sensor data.

## Installation

To use the @unicorns-and-unicorns/capacitor-sensors-v2 package in your Capacitor app, follow these steps:

1. Install the package using npm:

   ```
   npm install @unicorns-and-unicorns/capacitor-sensors-v2 --save
   ```

2. Sync the project with Capacitor:

   ```
   npx cap sync
   ```

3. In your Ionic Android project, add the following code to make Capacitor aware of the plugin:

   ```java
   import com.ctss.sensors.Sensors;

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

## Usage

You can use the @unicorns-and-unicorns/capacitor-sensors-v2 package in your app like this:

1. Import the necessary classes and methods:

   ```tsx
   import { Plugins } from '@capacitor/core';
   import { SensorData, Sensors } from 'sensors';
   ```

2. Add listeners for the sensor data you want to track. For example, if you want to track magnetometer, gyroscope, and accelerometer data, you can do the following:

   ```tsx
   useEffect(() => {
     Plugins.Sensors.addListener('magnetometerChange', (res: SensorData) => {
       setMangetometerX(res.x);
       setMangetometerY(res.y);
       setMangetometerZ(res.z);
     });
     Plugins.Sensors.addListener('gyroscopeChange', (res: SensorData) => {
       setGyroscopeX(res.x);
       setGyroscopeY(res.y);
       setGyroscopeZ(res.z);
     });
     Plugins.Sensors.addListener('accelerometerChange', (res: SensorData) => {
       setAccelerometerX(res.x);
       setAccelerometerY(res.y);
       setAccelerometerZ(res.z);
     });

     return () => {
       Plugins.Sensors.removeAllListeners();
     }
   }, []);
   ```

   In this example, we are using the `addListener` method to listen for changes in magnetometer, gyroscope, and accelerometer data. The sensor data is then set to state variables using `setMangetometerX`, `setMangetometerY`, `setMangetometerZ`, `setGyroscopeX`, `setGyroscopeY`, `setGyroscopeZ`, `setAccelerometerX`, `setAccelerometerY`, and `setAccelerometerZ`. You can replace these calls with your own logic to handle the sensor data.

## Conclusion

In this tutorial, you learned how to install and use the @unicorns-and-unicorns/capacitor-sensors-v2 package to access sensor data in your Capacitor app. By following the steps outlined in this tutorial, you should now be able to integrate sensor functionality into your app and start tracking various sensor data.

Remember to consult the package's documentation for more details on available sensors and methods. Happy coding!