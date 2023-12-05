---
title: "Using the cloud-sdk-capacitor-plugin Package"
description: "A tutorial on how to use the cloud-sdk-capacitor-plugin package to integrate cloud services with your Capacitor project."
created_at: "2022-09-15"
published: true
slug: "cloud-sdk-capacitor-plugin"
---

# Using the cloud-sdk-capacitor-plugin Package

In this tutorial, we will go through the steps to integrate cloud services into your Capacitor project using the cloud-sdk-capacitor-plugin package. This plugin allows you to easily connect your app to popular cloud services such as Salesforce Marketing Cloud, making it easier to send push notifications, track analytics, and more.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed globally: `npm install -g @capacitor/cli`
- A Capacitor project set up: `npx cap init`
- Access to the cloud service you want to integrate (e.g., Salesforce Marketing Cloud)

## Installation

To install the cloud-sdk-capacitor-plugin package, run the following command in your Capacitor project's root directory:

```bash
npm install @okode/cloud-sdk-capacitor-plugin
```

Next, sync the plugin with your project:

```bash
npx cap sync
```

## Configuration

Depending on the cloud service you are integrating, there may be additional configuration steps. Consult the documentation provided by the cloud service provider for the specific setup instructions.

## iOS Configuration

To configure the cloud-sdk-capacitor-plugin for iOS, you need to make some changes to your iOS project's AppDelegate.swift file.

1. Open the AppDelegate.swift file in your Xcode project.
2. Import the cloud-sdk-capacitor-plugin module at the top of the file:

   ```swift
   import cloud_sdk_capacitor_plugin
   ```

3. Initialize the cloud service in the `application(_:didFinishLaunchingWithOptions:)` method:

   ```swift
   func application(_ application: UIApplication,
                    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
       // Replace the placeholders with your actual configuration values
       let appId = "YOUR_APP_ID"
       let token = "YOUR_TOKEN"
       let serverUrl = "YOUR_SERVER_URL"
       let isAnalyticsEnabled = true

       CloudSDKCapacitorPlugin.initialize(appId, token, serverUrl, isAnalyticsEnabled)
   
       // ...
   
       return true
   }
   ```

4. If the cloud service requires a push notification token, you can send it in the `application(_:didRegisterForRemoteNotificationsWithDeviceToken:)` method:

   ```swift
   func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
       // Pass the device token to the cloud service
       CloudSDKCapacitorPlugin.setPushToken(deviceToken)
   
       // ...
   }
   ```

5. Build and run your iOS project.

## Android Configuration

To configure the cloud-sdk-capacitor-plugin for Android, you need to make changes to your Android project.

1. Open your Android project in Android Studio.
2. Open the `MyApp.java` (or your custom application class) file.
3. Import the cloud-sdk-capacitor-plugin module at the top of the file:

   ```java
   import io.okode.cloudsdk.capacitor.plugin.CloudSDKCapacitorPlugin;
   ```

4. Initialize the cloud service in the `onCreate()` method:

   ```java
   public class MyApp extends Application {
   
       @Override
       public void onCreate() {
           super.onCreate();
   
           // Replace the placeholders with your actual configuration values
           String appId = "YOUR_APP_ID";
           String token = "YOUR_TOKEN";
           String serverUrl = "YOUR_SERVER_URL";
           boolean isAnalyticsEnabled = true;
   
           CloudSDKCapacitorPlugin.initialize(getApplicationContext(), appId, token, serverUrl, isAnalyticsEnabled, initializationStatus -> Unit.INSTANCE);
   
           // ...
       }
   }
   ```

5. Build and run your Android project.

## Usage

With the cloud-sdk-capacitor-plugin integrated into your Capacitor project, you can now make use of the cloud service's features. Consult the documentation provided by the cloud service provider for the specific API calls and functionality.

## Conclusion

In this tutorial, we have learned how to integrate cloud services into your Capacitor project using the cloud-sdk-capacitor-plugin package. By following the installation and configuration steps, you can easily connect your app to popular cloud services and leverage their features in your mobile app development.

Remember to consult the documentation of your chosen cloud service for more detailed information on using their APIs and features with the cloud-sdk-capacitor-plugin.

Happy coding!
