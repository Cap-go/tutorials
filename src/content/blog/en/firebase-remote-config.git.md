---
title: Guide on Using @dghathway/firebase-remote-config Package
description: >-
  This tutorial will guide you on how to use the
  @dghathway/firebase-remote-config package with Capacitor in your Ionic
  applications. It includes step-by-step instructions on integrating Firebase
  Remote Config on both Android and iOS platforms.
created_at: '2022-10-08'
published: true
slug: firebase-remote-config-git
locale: en
---

# Using @dghathway/firebase-remote-config Package with Capacitor

This tutorial will walk you through the process of integrating the @dghathway/firebase-remote-config package with your Capacitor-based Ionic applications to enable Firebase Remote Config functionality on both Android and iOS platforms.

## Installation

Before you begin, make sure you have the @dghathway/firebase-remote-config package installed in your project. You can install it using npm:

```bash
npm install @dghathway/firebase-remote-config
```

## Integrating with Capacitor Android Project

1. Download the google-services.json file to your local machine.
2. Move the file into your Capacitor Android project directory, specifically under android/app/.
3. Update the credential details by adding the necessary meta-data elements in your AndroidManifest.xml file under the <application> tag.

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id---" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key---" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL---" />
```

4. Update the changes by running the following command:

```bash
ionic cap sync
```

5. Run the App in Android Studio:

```bash
ionic cap open android
```

6. Make sure to add the required service in your app manifest to receive notifications in different app states.

```xml
<service android:name="com.getcapacitor.CapacitorFirebaseMessagingService" android:exported="false">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT" />
  </intent-filter>
</service>
```

## Integrating with Capacitor iOS Project

1. Add Information Property List Files under Xcode project by updating the Info.plist.
2. Download the GoogleService-Info.plist file and move it into your Xcode project.
3. Add the Firebase SDK via CocoaPods. Modify the Podfile in Xcode under Pods and add Firebase/Messaging to your target 'App' section.
4. Update the project by running:

```bash
ionic cap update ios
```

5. Add Firebase initialization code to your AppDelegate.swift file to connect to Firebase when your iOS app starts up.

## Additional Configurations

- Make sure your Android package name and iOS bundle ID match the appId in your Capacitor configuration file.
- Follow Google-specific configurations and enabling Google Sign-In in the Firebase console.

By following these steps, you'll be able to successfully integrate the @dghathway/firebase-remote-config package with Capacitor in your Ionic applications and leverage the power of Firebase Remote Config for dynamic app configuration.
```
