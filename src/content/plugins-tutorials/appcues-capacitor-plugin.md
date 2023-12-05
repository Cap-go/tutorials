---
title: "Using @appcues/capacitor Package Tutorial"
description: "A step-by-step guide on how to use the @appcues/capacitor package to integrate Appcues experiences into your Ionic apps."
created_at: "2021-10-15"
published: true
slug: "appcues-capacitor-plugin"
---

# Using @appcues/capacitor Package Tutorial

In this tutorial, we will learn how to integrate Appcues experiences into your Ionic apps using the @appcues/capacitor package. Appcues Capacitor Plugin is a bridge between the native Appcues SDKs in an Ionic application, which allows you to send user properties and events to the Appcues API and retrieve and render Appcues content based on those properties and events.

## Prerequisites
Before we begin, make sure you have the following prerequisites:

- For Android, your application's `build.gradle` must have a `compileSdkVersion` of 33+ and `minSdkVersion` of 21+.

```groovy
android {
    compileSdkVersion 33

    defaultConfig {
        minSdkVersion 21
    }
}
```

- For iOS, your application must target iOS 11+ to install the SDK, and iOS 13+ to render Appcues content. Update the iOS project `xcodeproj` to set the deployment target if needed. In the application's `Podfile`, include at least this minimum version.

```ruby
# Podfile
platform :ios, '11.0'
```

## Installation
To install the @appcues/capacitor package, follow these steps:

1. Open your app's root directory and run the following command:

```sh
npm install @appcues/capacitor
```

2. Sync the project with Capacitor:

```sh
npx cap sync
```

Note: You do not need to manually update your Podfile to add Appcues.

## One Time Setup
### Initializing the SDK
An instance of the Appcues SDK should be initialized when your app launches. Follow the steps below:

1. Import the Appcues module in your application:

```javascript
import { Appcues } from '@appcues/capacitor';

// Initialize the SDK
Appcues.initialize({ accountId: 'APPCUES_ACCOUNT_ID', applicationId: 'APPCUES_APPLICATION_ID' });
```

2. To initialize the SDK, you need to provide two values: your Appcues account ID and your Appcues mobile application ID. You can obtain these values from your [Appcues settings](https://studio.appcues.com/settings/account). Refer to the help documentation on [Registering your mobile app in Studio](https://docs.appcues.com/article/848-registering-your-mobile-app-in-studio) for more information.

### Supporting Builder Preview and Screen Capture
To enable Builder Preview and Screen Capture, add the following code to your application:

```javascript
Appcues.enableDebug()
```

This allows you to preview and test your Appcues experiences during development.

## Identifying Users
To identify your users in Appcues, use the `identify` method. You can pass additional user properties as a second argument:

```javascript
Appcues.identify('USER_ID', { email: 'user@example.com', name: 'John Doe' });
```

Replace `USER_ID` with the unique identifier for your user in your application.

## Tracking Screens and Events
To track screens and events in Appcues, use the `trackScreen` and `trackEvent` methods, respectively:

```javascript
Appcues.trackScreen('SCREEN_NAME');

Appcues.trackEvent('EVENT_NAME', { property1: 'value1', property2: 'value2' });
```

Replace `SCREEN_NAME` with the name of the screen you want to track, and `EVENT_NAME` with the name of the event you want to track. You can also pass additional event properties as a second argument.

---

Congratulations! You have successfully integrated the Appcues experiences into your Ionic app using the @appcues/capacitor package. Now you can create interactive user onboarding and engagement experiences with Appcues. Happy coding!
