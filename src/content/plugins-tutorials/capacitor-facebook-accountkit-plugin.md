---
title: "Using capacitor-facebook-accountkit-plugin"
description: "A tutorial on how to use the capacitor-facebook-accountkit-plugin package in your Capacitor projects."
created_at: "2021-12-12"
published: true
slug: "capacitor-facebook-accountkit-plugin"
---

# Using capacitor-facebook-accountkit-plugin

In this tutorial, we will walk through the steps to use the capacitor-facebook-accountkit-plugin package in your Capacitor projects.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Capacitor installed globally on your machine.
- An existing Capacitor project.

## Installation

To install the capacitor-facebook-accountkit-plugin package, run the following command in your Capacitor project directory:

```shell
npm install --save capacitor-facebook-accountkit-plugin
```

## Android Integration

### Configure AccountKit SDK in your Android project

1. Open the `android/app/src/main/java/your/package/MainActivity.java` file in your Capacitor Android project.

2. Add the following import statement at the top of the file:

   ```java
   import com.your.package.capacitorfacebookaccountkit.CapacitorFacebookAccountKit;
   ```

3. Inside the `init` method of the `MainActivity` class, add the following line:

   ```java
   add(CapacitorFacebookAccountKit.class);
   ```

   This will register the plugin with Capacitor.

4. Build and run your Android project.

### Usage in your TypeScript code

1. Import the capacitor-facebook-accountkit-plugin package into your TypeScript file:

   ```ts
   import { Plugins } from '@capacitor/core';
   import 'capacitor-facebook-accountkit-plugin';

   const { CapacitorFacebookAccountKit } = Plugins;
   ```

2. Use the `startAuthentication` method to initiate the AccountKit authentication process:

   ```ts
   async function startAuthentication() {
     try {
       const result = await CapacitorFacebookAccountKit.startAuthentication();
       console.log('Authentication result:', result);
     } catch (error) {
       console.error('Authentication error:', error);
     }
   }
   ```

3. Call the `startAuthentication` function whenever you want to start the authentication process.

## iOS Integration

### Configure AccountKit SDK in your iOS project

1. Open your Capacitor iOS project in Xcode.

2. In the Project Navigator, right-click the `Podfile` and select "Open As" -> "Source Code".

3. Add the following line to the `Podfile`:

   ```ruby
   pod 'AccountKit', :git => 'https://github.com/facebook/facebook-ios-sdk.git', :tag => 'v5.0.0'
   ```

4. Save the `Podfile` and run the following command in the Terminal:

   ```shell
   pod install
   ```

5. Close Xcode and open the `*.xcworkspace` file for your project.

### Usage in your TypeScript code

1. Import the capacitor-facebook-accountkit-plugin package into your TypeScript file:

   ```ts
   import { Plugins } from '@capacitor/core';
   import 'capacitor-facebook-accountkit-plugin';

   const { CapacitorFacebookAccountKit } = Plugins;
   ```

2. Use the `startAuthentication` method to initiate the AccountKit authentication process:

   ```ts
   async function startAuthentication() {
     try {
       const result = await CapacitorFacebookAccountKit.startAuthentication();
       console.log('Authentication result:', result);
     } catch (error) {
       console.error('Authentication error:', error);
     }
   }
   ```

3. Call the `startAuthentication` function whenever you want to start the authentication process.

## Conclusion

In this tutorial, we have learned how to install and use the capacitor-facebook-accountkit-plugin package in your Capacitor projects. You now have the capability to integrate AccountKit authentication in both Android and iOS platforms.

Remember to consult the official documentation and check for updates or additional functionality provided by the capacitor-facebook-accountkit-plugin package. Happy coding!

>Note: The capacitor-facebook-accountkit-plugin package may require additional configuration or setup depending on your specific use case. Please refer to the official documentation of the package for detailed instructions and examples.

For more information, check out the [capacitor-facebook-accountkit-plugin](https://github.com/example/capacitor-facebook-accountkit-plugin) repository on GitHub.