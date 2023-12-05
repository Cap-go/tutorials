---
title: "Using the capacitor-deezer package"
description: "A tutorial on how to use the capacitor-deezer package in your Capacitor app"
created_at: "2022-06-23"
published: true
slug: "capacitor-deezer"
---

# Using the capacitor-deezer package

This tutorial will guide you through the process of using the capacitor-deezer package in your Capacitor app. The capacitor-deezer package provides a set of APIs and functionalities that allow you to integrate Deezer music streaming services into your app.

## Installation

To get started, install the capacitor-deezer package by running the following command in your project directory:

```
npm install capacitor-deezer
```

## Integrating the Deezer SDK

Before using the capacitor-deezer package, you need to integrate the Deezer SDK into your app. Follow these steps to do so:

1. Register your app on the [Deezer Developer Portal](https://developers.deezer.com/) and obtain your App ID.

2. Add the following lines of code to your `index.html` file to load the Deezer SDK:

   ```html
   <script src="https://cdn.deezer.com/js/min.js"></script>
   <script>
     DZ.init({
       appId: 'YOUR_APP_ID',
       channelUrl: '<YOUR_CHANNEL_URL>',
     });
   </script>
   ```

   Replace `'YOUR_APP_ID'` with your actual Deezer App ID and `<YOUR_CHANNEL_URL>` with the URL of your channel.html file.

3. Run the following command to sync the iOS and Android platforms with Capacitor:

   ```
   npx cap sync
   ```

4. For iOS, open your generated iOS project in Xcode and navigate to the `AppDelegate.swift` file. Add the following import statement at the top of the file:

   ```swift
   import DeezerSDK
   ```

   And add the following code inside the `didFinishLaunchingWithOptions` method:

   ```swift
   DZRSession.default().initialize(withApplicationId: "YOUR_APP_ID", for: DZRRequestManager.default(), didBecomeAuhenticatedBlock: nil)
   ```

   Replace `'YOUR_APP_ID'` with your actual Deezer App ID.

5. For Android, open your generated Android project in Android Studio and navigate to the `MainActivity.java` file. Add the following import statements at the top of the file:

   ```java
   import com.deezer.sdk.Deezer;
   import com.deezer.sdk.DeezerConnect;
   ```

   And add the following code inside the `onCreate` method:

   ```java
   DeezerConnect deezerConnect = new DeezerConnect(getApplicationContext(), "YOUR_APP_ID");
   Deezer.initialize(deezerConnect, null);
   ```

   Replace `'YOUR_APP_ID'` with your actual Deezer App ID.

6. You are now ready to use the capacitor-deezer package!

## Using the capacitor-deezer package

To use the capacitor-deezer package in your Capacitor app, follow these steps:

1. Import the `capacitor-deezer` module into your TypeScript or JavaScript file:

   ```javascript
   import { Deezer } from 'capacitor-deezer';
   ```

2. Use the `Deezer` object to access the available methods and functionalities. For example, you can authenticate the user with Deezer using the `Deezer.login()` method:

   ```javascript
   Deezer.login().then(result => {
     console.log('User logged in:', result);
   }).catch(error => {
     console.error('Error logging in:', error);
   });
   ```

   Explore the [capacitor-deezer documentation](https://github.com/jepiqueau/capacitor-deezer) to discover more methods and functionalities provided by the package.

## Conclusion

In this tutorial, you learned how to integrate the capacitor-deezer package into your Capacitor app and use its functionalities to interact with Deezer services. You can now enhance your app by incorporating music streaming capabilities provided by Deezer. Enjoy coding and have fun building amazing apps with Capacitor and capacitor-deezer!

Remember to check out the official [capacitor-deezer documentation](https://github.com/jepiqueau/capacitor-deezer) for more detailed information and examples.

*Please note that the capacitor-deezer package is maintained by a third-party contributor. For any issues or feature requests, refer to the package's GitHub repository.*