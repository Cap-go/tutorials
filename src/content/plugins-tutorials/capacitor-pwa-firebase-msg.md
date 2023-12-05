---
title: "Tutorial: Using capacitor-pwa-firebase-msg package"
description: "This tutorial provides step-by-step instructions on how to use the capacitor-pwa-firebase-msg package to enable push notifications in Capacitor progressive web apps (PWA) using Firebase as a cloud messaging service."
created_at: "2022-09-21"
published: true
slug: "capacitor-pwa-firebase-msg"
---

# Tutorial: Using capacitor-pwa-firebase-msg package

This tutorial will guide you through the process of setting up and using the capacitor-pwa-firebase-msg package to enable push notifications in Capacitor progressive web apps (PWA) using Firebase as a cloud messaging service.

## Prerequisites

Before you begin, make sure you have the following:

- Capacitor Minimum Version (currently waiting on [pull request in Capacitor project](https://github.com/ionic-team/capacitor/pull/1892))
- Firebase project with a configured web app
- Capacitor project set up

## Step 1: Install the package

To get started, open your terminal and navigate to your Capacitor project directory. Then, run the following command to install the capacitor-pwa-firebase-msg package:

```bash
npm install capacitor-pwa-firebase-msg
```

## Step 2: Set up Firebase

Go to **Project Settings** in the Firebase console and find the **General** section. Copy the web app's Firebase configuration from the **Firebase SDK snippet**.

Next, open your `capacitor.config.json` file in your Capacitor project and find the `plugins` section. Paste the copied Firebase config as `plugins.PWAFirebaseMsg`. Here's an example of how it should look:

```json
{
  "plugins": {
    "PWAFirebaseMsg": {
      "apiKey": "YOUR_API_KEY",
      "authDomain": "YOUR_AUTH_DOMAIN",
      "databaseURL": "YOUR_DATABASE_URL",
      "projectId": "YOUR_PROJECT_ID",
      "storageBucket": "YOUR_STORAGE_BUCKET",
      "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
      "appId": "YOUR_APP_ID",
      "vapidKey": "YOUR_VAPID_KEY"
    }
  }
}
```

Make sure to replace the placeholder values with your actual Firebase config values.

## Step 3: Integrate the service worker

In your `capacitor.config.json` file, under the `serviceWorker` section, add the `capacitor-pwa-firebase-msg-sw.js` to Capacitor's aggregate service worker. If you have other service workers in your app, provide their locations (relative to the `webDir`) in the `serviceWorker.combineWorkers` array.

Here's an example of how it should look:

```json
{
  "serviceWorker": {
    "combineWorkers": ["capacitor-pwa-firebase-msg-sw.js", "ngsw-worker.js"]
  }
}
```

Make sure to adjust the filenames and order according to your project's setup.

## Step 4: Add platform-specific configurations

### Android configuration

Download the `google-services.json` file from the Firebase console and move it to your Capacitor Android project directory (`android/app/`).

Add the following details to your `AndroidManifest.xml` file under the `<application>` tag:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id------" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key------" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL------" />
```

Replace the placeholder values with the appropriate credentials.

### iOS configuration

Download the `GoogleService-Info.plist` from the Firebase console and add it to your Xcode project, ensuring it is added to all targets.

Open the `Info.plist` file in Xcode and add the following details:

```bash
"PLUMB5_ACCOUNT_ID" = "---Account Id------"
"PLUMB5_API_KEY" = "---App Key------"
"PLUMB5_BASE_URL" = "---Base URL------"
```

Replace the placeholder values with the appropriate credentials.

## Step 5: Update the project

To sync the changes with your project, run the following command in your terminal:

```bash
ionic cap sync
```

## Step 6: Run the app

You can now run your Capacitor app to test the push notifications. Use the following command to open your Android project in Android Studio:

```bash
ionic cap open android
```

For iOS, run the following command to add the iOS platform:

```bash
ionic cap add ios
```

Then, open your iOS project in Xcode:

```bash
ionic cap open ios
```

## Conclusion

Congratulations! You have successfully set up and configured the capacitor-pwa-firebase-msg package to enable push notifications in your Capacitor progressive web app using Firebase as a cloud messaging service. You can now send and receive push notifications in your app.

Remember to refer to the official documentation for more information and advanced usage of the capacitor-pwa-firebase-msg package.

Happy coding!
