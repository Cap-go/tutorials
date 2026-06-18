---
title: "Using @ajuarezso/capacitor-native-location-auth Package Tutorial"
description: "Step-by-step guide on how to use the @ajuarezso/capacitor-native-location-auth package in your Capacitor project."
created_at: 2022-01-14
published: true
slug: capacitor-native-location-auth.git
locale: en
---

# Using @ajuarezso/capacitor-native-location-auth Package Tutorial

Learn how to integrate and utilize the @ajuarezso/capacitor-native-location-auth package in your Capacitor project to manage location permissions and authentication.

### Installation

First, install the package in your project:

```bash
npm install @ajuarezso/capacitor-native-location-auth
npx cap sync
```

### Setup

1. **Configuration:**
   
   Update your `android/app/src/main/AndroidManifest.xml` file with the necessary permissions:
   
   ```xml
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
   ```

2. **Initialize the Plugin:**
   
   In your project, initialize the plugin and request location permissions:

   ```typescript
   import { Plugins } from '@capacitor/core';
   const { LocationAuth } = Plugins;

   const checkLocationPermission = async () => {
     const { status } = await LocationAuth.checkStatus();
     // Check permission status and request permissions if needed
   };
   ```

### Usage

1. **Check Location Permission:**

   Use the `checkStatus()` method to check the current location permission status:

   ```typescript
   const { status } = await LocationAuth.checkStatus();
   ```

2. **Request Location Permission:**

   Request location permissions using the `requestPermission()` method:

   ```typescript
   const { status } = await LocationAuth.requestPermission();
   ```

3. **Check and Request Permission Combined:**

   To streamline the process, you can combine both operations in one step:

   ```typescript
   const { status } = await LocationAuth.checkAndRequestPermission();
   ```

### Conclusion

In this tutorial, you learned how to integrate the @ajuarezso/capacitor-native-location-auth package into your Capacitor project. This allows you to manage location permissions and authentication effectively. Experiment with the functionalities provided by this package to enhance your location-based features!
