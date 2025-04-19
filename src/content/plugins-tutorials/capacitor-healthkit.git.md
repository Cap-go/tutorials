---
"title": "A Guide to Using @perfood/capacitor-healthkit Package"
"description": "Step-by-step tutorial on how to integrate and utilize the @perfood/capacitor-healthkit package in your Capacitor app."
"created_at": "2022-04-05"
"published": true
"slug": "capacitor-healthkit.git"
---

# Using @perfood/capacitor-healthkit Package

To start using the @perfood/capacitor-healthkit package in your Capacitor app, follow these steps:

1. Install the package by running the command:
   ```
   npm install @perfood/capacitor-healthkit
   ```

2. Import the HealthKit plugin in your project:
   ```typescript
   import '@perfood/capacitor-healthkit';
   ```

3. Request permission to access HealthKit data:
   ```typescript
   import { HealthKit } from '@perfood/capacitor-healthkit';

   const { success } = await HealthKit.requestPermissions();
   if (success) {
       console.log('Permission granted!');
   } else {
       console.error('Permission denied.');
   }
   ```

4. Retrieve health data with the desired data types:
   ```typescript
   // Example to retrieve steps count
   const stepsData = await HealthKit.querySampleType({ type: 'stepCount' });
   console.log('Steps data:', stepsData);

   // Replace 'stepCount' with other desired data types like 'heartRate', 'weight', etc.
   ```

5. Utilize the data obtained for your app functionality.

This guide provides a basic overview of integrating and using the @perfood/capacitor-healthkit package in your Capacitor app. Feel free to explore more features and customization options provided by the plugin.
```
```