---
title: "Using capacitor-jpush package"
description: "In this tutorial, we will learn how to use the capacitor-jpush package to integrate JPush push notifications into your Capacitor project."
created_at: "2022-03-31"
published: true
slug: "capacitor-jpush"
---

# Using capacitor-jpush package

In this tutorial, we will learn how to use the capacitor-jpush package to integrate JPush push notifications into your Capacitor project.

## Prerequisites

Before we get started, make sure you have the following:

- Capacitor project set up
- JPush account and project credentials

## Installation

To install the capacitor-jpush package, run the following command in your Capacitor project directory:

```bash
npm install capacitor-jpush
```

## Android Configuration

### Step 1: Set up JPush SDK

To set up the JPush SDK in your Android project, follow these steps:

1. Open the `android/app/build.gradle` file in your project.
2. Add the following dependencies:

   ```groovy
   implementation 'cn.jiguang.sdk:jpush:3.9.9' // replace with the latest JPush SDK version
   ```

3. Sync your project dependencies.

### Step 2: Configure the Android Manifest

To configure the Android Manifest for JPush, follow these steps:

1. Open the `android/app/src/main/AndroidManifest.xml` file in your project.
2. Add the following permissions:

   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
   <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
   <uses-permission android:name="android.permission.VIBRATE" /> 
   ```

3. Add the JPush receiver, service, and activity:

   ```xml
   <receiver
       android:name="cn.jpush.android.service.PushReceiver"
       android:exported="false" >
       <intent-filter>
           <action android:name="cn.jpush.android.intent.REGISTRATION" />
           <action android:name="cn.jpush.android.intent.UNREGISTRATION" />
           <action android:name="cn.jpush.android.intent.MESSAGE_RECEIVED" />
           <action android:name="cn.jpush.android.intent.NOTIFICATION_RECEIVED_PROXY" />
           <action android:name="cn.jpush.android.intent.NOTIFICATION_OPENED_PROXY" />
           <action android:name="cn.jpush.android.intent.ACTION_RICHPUSH_CALLBACK" />
           <category android:name="${applicationId}" />
       </intent-filter>
   </receiver>

   <service
       android:name="cn.jpush.android.service.PushService"
       android:enabled="true"
       android:exported="false" >
       <intent-filter>
           <action android:name="cn.jpush.android.intent.REGISTER" />
           <action android:name="cn.jpush.android.intent.REPORT" />
           <action android:name="cn.jpush.android.intent.PushService" />
           <category android:name="${applicationId}" />
       </intent-filter>
   </service>

   <activity
       android:name="cn.jpush.android.ui.PushActivity"
       android:exported="false"
       android:theme="@android:style/Theme.Translucent.NoTitleBar" >
       <intent-filter>
           <action android:name="cn.jpush.android.ui.PushActivity" />
           <category android:name="${applicationId}" />
       </intent-filter>
   </activity>
   ```

4. Replace `${applicationId}` with your application package name.

### Step 3: Configure the Application class

To configure the Application class for JPush, follow these steps:

1. Create a new Java class in your project's `android/app/src/main/java` directory, e.g., `MyApp.java`.
2. Add the following code to the class:

   ```java
   package com.example.yourapp;

   import android.app.Application;
   import cn.jpush.android.api.JPushInterface;

   public class MyApp extends Application {

       @Override
       public void onCreate() {
           super.onCreate();
           JPushInterface.setDebugMode(true); // Set to false for production
           JPushInterface.init(this);
       }
   }
   ```

3. Replace `com.example.yourapp` with your application package name.

4. Open the `android/app/src/main/AndroidManifest.xml` file again.
5. Add the following attribute to the `application` tag:

   ```xml
   <application
       ...
       android:name=".MyApp" >
       ...
   </application>
   ```

## iOS Configuration

### Step 1: Set up JPush SDK

To set up the JPush SDK in your iOS project, follow these steps:

1. Open your project in Xcode.
2. Add the JPush SDK to your project by dragging the `JPush-iOS-3.x.x` folder into your Xcode project.
3. Make sure the `Copy items if needed` checkbox is selected and click Finish.

### Step 2: Configure the App Delegate

To configure the App Delegate for JPush, follow these steps:

1. Open the `AppDelegate.m` file in your Xcode project.
2. Import the JPush headers by adding the following line at the top of the file:

   ```objective-c
   #import <JPush/JPUSHService.h>
   ```

3. Add the following code to the `didFinishLaunchingWithOptions` method:

   ```objective-c
   [JPUSHService setupWithOption:launchOptions appKey:@"yourAppKey" channel:@"App Store" apsForProduction:YES];
   ```

4. Replace `"yourAppKey"` with your JPush AppKey.

5. Add the following code to the `didRegisterForRemoteNotificationsWithDeviceToken` method:

   ```objective-c
   [JPUSHService registerDeviceToken:deviceToken];
   ```

6. Add the following code to the `didReceiveRemoteNotification` method:

   ```objective-c
   [JPUSHService handleRemoteNotification:userInfo];
   ```

### Step 3: Configure Capabilities

To enable remote notifications in your iOS project, follow these steps:

1. Open your project in Xcode.
2. Go to the `Signing & Capabilities` tab for your target.
3. Enable the `Push Notifications` capability.

## Usage

To use the capacitor-jpush package in your Capacitor project, follow these steps:

1. Import the `JPush` class at the top of your JavaScript file:

   ```javascript
   import { JPush } from 'capacitor-jpush';
   ```

2. Initialize the JPush module with your JPush AppKey:

   ```javascript
   const jpush = new JPush();
   await jpush.initialize({ appKey: 'yourAppKey' });
   ```

3. Register for JPush push notifications:

   ```javascript
   await jpush.register();
   ```

4. Receive and handle push notifications:

   ```javascript
   JPush.addListener('notificationReceived', (notification) => {
        console.log('Received notification: ', notification);
   });

   JPush.addListener('notificationOpened', (notification) => {
        console.log('Opened notification: ', notification);
   });
   ```

5. Perform other JPush actions as needed, such as setting tags, alias, and more. Refer to the [official JPush documentation](https://docs.jiguang.cn/) for more information.

That's it! You have successfully integrated JPush push notifications into your Capacitor project using the capacitor-jpush package.

Remember to refer to the official JPush documentation for more advanced usage and configuration options.

Happy coding!