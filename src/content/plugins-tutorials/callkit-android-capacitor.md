---
title: "Using Callkit-android Package"
description: "This tutorial will guide you through the process of using the callkit-android package in your Capacitor project."
created_at: "2022-04-03"
published: true
slug: "callkit-android-capacitor"
---

# Using Callkit-android Package

In this tutorial, we will walk you through the steps of using the callkit-android package in your Capacitor project. The callkit-android package allows you to integrate call functionality into your Android application, providing features such as incoming call notifications, call handling, and more.

## Prerequisites

Before getting started, make sure you have the following installed:

- Capacitor v2 or higher
- Android Studio
- Node.js and NPM


## Step 1: Install the callkit-android package

To install the callkit-android package, run the following command in your Capacitor project's root folder:

```shell
npm install callkit-android
```

## Step 2: Sync the project

After installing the package, you need to sync the project to update the Android project files. Run the following command:

```shell
npx cap sync android
```

## Step 3: Import the package

Next, you need to import the callkit-android package in your Android project.

Open your Android project in Android Studio.

Navigate to your project's `android/app/src/main/java/<package-name>/MainActivity.java` file.

Add the following import statement at the top of the file:

```java
import io.stewan.capacitor.callkitandroid.CallKitAndroid;
```

Inside the `init` method of the `MainActivity` class, add the following line to initialize the callkit-android plugin:

```java
add(CallKitAndroid.class);
```

## Step 4: Register the plugin in your Capacitor project

To register the callkit-android plugin in your Capacitor project, open the `capacitor.config.json` file in your project's root folder.

Under the `plugins` section, add the following entry:

```json
{
  "name": "CallKitAndroid"
}
```

## Step 5: Using the Callkit-android API

You can now use the callkit-android API in your Capacitor project to handle call-related functionality.

For example, to show an incoming call notification, you can use the `showIncomingCallNotification` method:

```typescript
import { Plugins } from '@capacitor/core';

const { CallKitAndroid } = Plugins;

// ...

CallKitAndroid.showIncomingCallNotification({
  callerName: 'John Doe',
  callerNumber: '+1234567890',
  callId: '123456'
});
```

This will display an incoming call notification with the caller's name and number.

## Conclusion

In this tutorial, you learned how to integrate the callkit-android package into your Capacitor project. You installed the package, synced the project, imported the package in your Android project, registered the plugin in your Capacitor project, and used the callkit-android API to handle call-related functionality. Now you can enhance your Android application with call features using the callkit-android package.

Feel free to explore the package's documentation for more advanced usage and customization options.

Happy coding!