---
title: "Using pcuscela-capacitor-firebase-auth Package"
description: "A tutorial on how to use the pcuscela-capacitor-firebase-auth package to integrate Firebase Authentication in your Capacitor project."
created_at: "2021-10-13"
published: true
slug: "capacitor-firebase-auth"
---

# Using pcuscela-capacitor-firebase-auth Package

In this tutorial, we will learn how to use the `pcuscela-capacitor-firebase-auth` package to integrate Firebase Authentication into a Capacitor project. Firebase Authentication provides an easy way to authenticate users using email and password, phone number, or external providers like Google, Facebook, or Twitter.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- A Capacitor project set up
- Firebase project with Authentication enabled
- Capacitor CLI installed

## Installation

To install the `pcuscela-capacitor-firebase-auth` package, run the following command in your Capacitor project directory:

```bash
npm install pcuscela-capacitor-firebase-auth
```

## Configuration

### Android Configuration

#### Step 1: Add Firebase Configuration File

Download the `google-services.json` file from your Firebase project and place it in the `android/app` directory of your Capacitor project.

#### Step 2: Update AndroidManifest.xml

Open the `AndroidManifest.xml` file located at `android/app/src/main` and add the following meta-data entries under the `<application>` tag:

```xml
<meta-data
  android:name="com.google.firebase.auth.API_KEY"
  android:value="YOUR_API_KEY" />
<meta-data
  android:name="com.google.firebase.auth.CLIENT_ID"
  android:value="YOUR_CLIENT_ID" />
```

Replace `YOUR_API_KEY` and `YOUR_CLIENT_ID` with the corresponding values from your Firebase project.

### iOS Configuration

#### Step 1: Add Firebase Configuration File

Download the `GoogleService-Info.plist` file from your Firebase project and place it in the root directory of your Xcode project.

#### Step 2: Update Info.plist

Open the `Info.plist` file located in your Xcode project and add the following key-value pairs:

```xml
<key>FirebaseApiKey</key>
<string>YOUR_API_KEY</string>
<key>FirebaseClientId</key>
<string>YOUR_CLIENT_ID</string>
```

Replace `YOUR_API_KEY` and `YOUR_CLIENT_ID` with the corresponding values from your Firebase project.

## Usage

Now that we have installed and configured the `pcuscela-capacitor-firebase-auth` package, let's see how to use it.

### Import the Package

Import the package in your JavaScript file:

```javascript
import { CapacitorFirebaseAuth } from 'pcuscela-capacitor-firebase-auth';
```

### SignIn with Email and Password

To sign in with email and password, use the `signInWithEmailAndPassword` method:

```javascript
async function signIn(email, password) {
  try {
    const result = await CapacitorFirebaseAuth.signInWithEmailAndPassword(email, password);
    console.log('User signed in:', result);
  } catch (error) {
    console.error('Sign in failed:', error);
  }
}
```

### SignOut

To sign out the current user, use the `signOut` method:

```javascript
async function signOut() {
  try {
    await CapacitorFirebaseAuth.signOut();
    console.log('User signed out');
  } catch (error) {
    console.error('Sign out failed:', error);
  }
}
```

### Additional Methods

The `pcuscela-capacitor-firebase-auth` package provides several other methods for authentication, such as `createUserWithEmailAndPassword`, `sendPasswordResetEmail`, and `verifyPasswordResetCode`. Refer to the package documentation for more details on using these methods.

## Conclusion

In this tutorial, we have learned how to integrate Firebase Authentication into a Capacitor project using the `pcuscela-capacitor-firebase-auth` package. We have seen how to install and configure the package and how to use it to perform sign-in and sign-out operations. Firebase Authentication provides a powerful and secure way to authenticate users in Capacitor applications.

Happy coding!