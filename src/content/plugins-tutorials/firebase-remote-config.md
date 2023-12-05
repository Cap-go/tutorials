---
title: "Using agr-firebase-remote-config Package"
description: "A tutorial on how to use the agr-firebase-remote-config package to integrate Firebase Remote Config in your app."
created_at: "2022-09-26"
published: true
slug: "firebase-remote-config"
---

# Using agr-firebase-remote-config Package

Firebase Remote Config is a cloud service provided by Firebase that allows you to change the behavior and appearance of your app without requiring users to download an update. The `agr-firebase-remote-config` package provides a convenient way to integrate Firebase Remote Config in your app. This tutorial will guide you through the process of using the package in your app.

## Prerequisites

Before getting started, make sure you have the following:

- An existing Capacitor project
- Firebase project setup with Remote Config enabled
- Google-Services.json (for Android) or GoogleService-Info.plist (for iOS) file added to your project
- Capacitor CLI installed globally

## Installation

To install the `agr-firebase-remote-config` package, run the following command in your Capacitor project directory:

```bash
npm install agr-firebase-remote-config
```

## Integrating Firebase Remote Config

### Android Integration

1. Move the `google-services.json` file to your Capacitor Android project directory: `android/app/`.

2. Update the credentials in the `AndroidManifest.xml` file. Add the following details under the `<application>` tag:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id---" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key---" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL---" />
```

3. Run the following command to sync the changes:

```bash
ionic cap sync
```

4. Build and run the Android app:

```bash
ionic cap open android
```

5. To receive notifications when the app is in the foreground, background, or killed, add the following service in the app manifest:

```xml
<service android:name="com.getcapacitor.CapacitorFirebaseMessagingService" android:exported="false">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT" />
  </intent-filter>
</service>
```

### iOS Integration

1. Move the `GoogleService-Info.plist` file to your Capacitor iOS project directory.

2. Add the necessary details in the Information Property List file (Info.plist) of your iOS project. Add the following key-value pairs:

```xml
<key>PLUMB5_ACCOUNT_ID</key>
<string>---Account Id---</string>
<key>PLUMB5_API_KEY</key>
<string>---App Key---</string>
<key>PLUMB5_BASE_URL</key>
<string>---Base URL---</string>
```

3. Open your Xcode project by running the following command:

```bash
ionic cap open ios
```

4. Move the `GoogleService-Info.plist` file into your Xcode project, ensuring it is added to all targets.

5. Add the Firebase SDK via CocoaPods by modifying the Podfile. Add the following lines to your target 'App' section:

```ruby
target 'App' do
  capacitor_pods
  # Add your Pods here
  pod 'Firebase/Core'
  pod 'Firebase/Auth'
end
```

6. Update the project by running the following command:

```bash
ionic cap update ios
```

7. Add Firebase initialization code to your AppDelegate.swift file:

```swift
import Firebase
// ...
FirebaseApp.configure()
```

## Using agr-firebase-remote-config Package

1. Import the `agr-firebase-remote-config` package in your TypeScript file:

```typescript
import { RemoteConfig } from 'agr-firebase-remote-config';
```

2. Initialize the Remote Config instance in your app:

```typescript
const remoteConfig = new RemoteConfig();
```

3. Fetch the remote config parameters before using them:

```typescript
await remoteConfig.fetch(); // Fetch the remote config parameters
await remoteConfig.activate(); // Activate the fetched parameters
```

4. Get the value of a remote config parameter:

```typescript
const paramValue = remoteConfig.getValue(key); // Replace 'key' with the actual parameter key
```

5. Use the remote config parameter in your app:

```typescript
// Example: Update the app's theme based on a remote config parameter
if (paramValue === 'dark') {
  // Apply dark theme
} else {
  // Apply light theme
}
```

That's it! You have successfully integrated the `agr-firebase-remote-config` package and used Firebase Remote Config in your app.

## Conclusion

In this tutorial, we learned how to use the `agr-firebase-remote-config` package to integrate Firebase Remote Config in a Capacitor app. We covered the installation process