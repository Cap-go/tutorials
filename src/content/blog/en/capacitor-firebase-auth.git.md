---
title: How to Use Capacitor Firebase Auth
description: >-
  Learn how to integrate Capacitor Firebase Auth plugin with Ionic apps for user
  authentication.
created_at: '2022-04-12'
published: true
slug: capacitor-firebase-auth
locale: en
---

## Introduction
Capacitor Firebase Auth is an authentication package that allows you to authenticate users in your Ionic applications using Firebase services. This tutorial will guide you through the process of setting up and using Capacitor Firebase Auth with your Capacitor and Ionic projects.

## Prerequisites
Before getting started, make sure you have the following:
- Capacitor and Ionic project set up
- Firebase project created in the Firebase console
- Basic knowledge of Capacitor and Ionic

## Installation
To begin, install the Capacitor Firebase Auth package in your Ionic project:
```bash
npm install @capacitor-community/firebase-auth
```

## Android Setup
For Android, make sure you have the necessary configurations set up in your Android project.

### Add Android Platform
```bash
ionic cap add android
```

### Update Android Manifest
Add the following information inside the `<application>` tag in your `AndroidManifest.xml` file:
```xml
<meta-data android:name="auth_domain" android:value="YOUR_AUTH_DOMAIN" />
<meta-data android:name="api_key" android:value="YOUR_API_KEY" />
```

### Sync Changes
After updating the Android project, sync the changes:
```bash
ionic cap sync
```

### Run the App
Build and run your application in Android Studio:
```bash
ionic cap open android
```

## iOS Setup
For iOS, follow these steps to configure Capacitor Firebase Auth.

### Integrate Firebase Credentials
Download the `GoogleService-Info.plist` file and move it to your Xcode project.

### Add Info.plist Key-Value Pairs
Inside your `Info.plist` file, add the following key-value pairs:
```bash
"auth_domain" = "YOUR_AUTH_DOMAIN"
"api_key" = "YOUR_API_KEY"
```

### Install Firebase Messaging SDK
Update the Podfile to include the Firebase Messaging SDK:
```bash
target 'App' do
  capacitor_pods
  pod 'Firebase/Auth'
end
```

### Run the App
Build and run your application in Xcode:
```bash
ionic cap open ios
```

## Initialize the Plugin
To use Capacitor Firebase Auth in your Ionic project, initialize the plugin with your Firebase configurations:
```typescript
import '@capacitor-community/firebase-auth';

const auth = CapacitorFirebaseAuth;

auth.initializeFirebase({ projectId: 'YOUR_PROJECT_ID' });
```

## Authenticate Users
You can now authenticate users using various methods provided by Capacitor Firebase Auth, such as email/password, Google Sign-In, Facebook Sign-In, etc.

## Conclusion
In this tutorial, you learned how to integrate Capacitor Firebase Auth plugin with your Ionic applications for user authentication. Implementing user authentication is crucial for many applications, and Capacitor Firebase Auth provides a seamless way to achieve this functionality.

For more detailed documentation, refer to the official Capacitor Firebase Auth documentation.

That's it! You are now ready to add user authentication features to your Ionic app using Capacitor Firebase Auth. Happy coding!
