---
title: "Tutorial: Using @capacitor-community/firebase-crashlytics Package"
description: "In this tutorial, we will learn how to integrate and use the @capacitor-community/firebase-crashlytics package in your Capacitor project. We will cover installation, configuration, and usage of the Firebase Crashlytics plugin. By following this tutorial, you will be able to effectively handle crash reporting and analytics in your mobile applications."
created_at: "2023-06-15"
published: true
slug: "firebase-crashlytics"
---

# Tutorial: Using @capacitor-community/firebase-crashlytics Package

In this tutorial, we will learn how to integrate and use the **@capacitor-community/firebase-crashlytics** package in your Capacitor project. We will cover installation, configuration, and usage of the Firebase Crashlytics plugin. By following this tutorial, you will be able to effectively handle crash reporting and analytics in your mobile applications.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Handling Uncaught Errors](#handling-uncaught-errors)
  - [Logging Custom Events](#logging-custom-events)
  - [User Identification](#user-identification)
- [Conclusion](#conclusion)

## Installation

To install the **@capacitor-community/firebase-crashlytics** package, run the following command in your project directory:

```
npm install @capacitor-community/firebase-crashlytics
npx cap sync
```

Make sure you have already added Firebase to your project. Refer to the Firebase documentation for [Android setup](https://firebase.google.com/docs/android/setup) and [iOS setup](https://firebase.google.com/docs/ios/setup).

### Android Setup

For Android, you need to add the Firebase Crashlytics plugin to your app. Follow the instructions in the [Firebase Crashlytics documentation](https://firebase.google.com/docs/crashlytics/get-started?platform=android#add-plugin) to configure your app correctly.

#### Variables

The plugin uses the following project variables in your app's `variables.gradle` file:

- `$firebaseCrashlyticsVersion`: The version of `com.google.firebase:firebase-crashlytics` (default: `18.2.8`)

### iOS Setup

For iOS, you need to set up Xcode to automatically upload dSYM files. Follow the instructions in the [Firebase Crashlytics documentation](https://firebase.google.com/docs/crashlytics/get-started?platform=ios#set-up-dsym-uploading) to configure Xcode correctly. Pay attention to the correct path mentioned in section `4.c` of the guide:

```
"${PODS_ROOT}/FirebaseCrashlytics/run"
```

## Configuration

No additional configuration is required for this plugin.

## Usage

### Handling Uncaught Errors

To handle uncaught errors and report them to Firebase Crashlytics, you can use the `capacitorCrash` method. Add the following code to your application's entry file:

```javascript
import { Plugins } from '@capacitor/core';
const { FirebaseCrashlytics } = Plugins;

// ...

// Catch uncaught errors and report to Crashlytics
window.onerror = function(message, source, lineno, colno, error) {
  FirebaseCrashlytics.capacitorCrash({
    message,
    stack: error?.stack || '',
  });
};
```

Using this code, any uncaught errors in your application will be reported to Firebase Crashlytics for analysis.

### Logging Custom Events

You can also log custom events or messages to Firebase Crashlytics. Use the `log` method provided by the plugin. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { FirebaseCrashlytics } = Plugins;

// ...

FirebaseCrashlytics.log('Custom event occurred: User logged in');
```

By logging custom events, you can track specific interactions or occurrences within your application.

### User Identification

To associate specific users with crashes and custom logs, you can set user identifiers. Use the `setUserId` method to set a user identifier as shown below:

```javascript
import { Plugins } from '@capacitor/core';
const { FirebaseCrashlytics } = Plugins;

// ...

FirebaseCrashlytics.setUserId('user123');
```

By setting the user identifier, you can easily filter and track issues specific to individual users.

## Conclusion

In this tutorial, we have covered the installation, configuration, and usage of the **@capacitor-community/firebase-crashlytics** package. By integrating this package into your Capacitor project, you can effectively handle crash reporting and analytics with Firebase Crashlytics. You have learned how to handle uncaught errors, log custom events, and set user identifiers. Now you can enhance the stability and performance of your mobile applications by leveraging the power of Firebase Crashlytics!