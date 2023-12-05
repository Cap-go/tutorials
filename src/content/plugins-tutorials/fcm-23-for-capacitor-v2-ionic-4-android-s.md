---
title: "FCM 23 for Capacitor V2 Ionic 4 Android Apps"
description: "A tutorial on how to use the @talesmattos/fcm23-for-capacitor2-ionic4-androids-apps package for integrating FCM 23 capabilities into Capacitor V2 Ionic 4 Android apps."
created_at: "2022-02-14"
published: true
slug: "fcm-23-for-capacitor-v2-ionic-4-android-s"
---

# FCM 23 for Capacitor V2 Ionic 4 Android Apps

In this tutorial, we will explore how to use the @talesmattos/fcm23-for-capacitor2-ionic4-androids-apps package to integrate Firebase Cloud Messaging (FCM) capabilities into Capacitor V2 Ionic 4 Android apps. FCM allows you to send push notifications to your app users and engage with them in real-time.

## Step 1: Add the Package

The first step is to add the @talesmattos/fcm23-for-capacitor2-ionic4-androids-apps package to your project. Open your terminal and navigate to your project directory. Then, run the following command:

```bash
npm install @talesmattos/fcm23-for-capacitor2-ionic4-androids-apps
```

This will install the package and its dependencies into your project.

## Step 2: Configure Android Platform

Next, we need to configure the Android platform for our Capacitor app. In your terminal, run the following command:

```bash
npx cap add android
```

This will add the Android platform to your Capacitor project.

## Step 3: Integrating Firebase GoogleService JSON

To enable FCM capabilities, we need to integrate the Firebase GoogleService JSON file into our project. Download the GoogleService JSON file provided by Firebase to your local machine.

Move the downloaded JSON file into your Capacitor Android project directory. Go to the `android/app/` directory of your project and place the JSON file there.

## Step 4: Update the Credentials

We need to update the credentials in the AndroidManifest.xml file of our project. Locate the AndroidManifest.xml file in your project and open it.

Inside the `<application>` tag, add the following metadata tags to set the account ID, API key, and base URL:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="YOUR_ACCOUNT_ID" />
<meta-data android:name="PLUMB5_API_KEY" android:value="YOUR_API_KEY" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="YOUR_BASE_URL" />
```

Replace `YOUR_ACCOUNT_ID`, `YOUR_API_KEY`, and `YOUR_BASE_URL` with your actual account ID, API key, and base URL values.

## Step 5: Update the Changes

After updating the credentials, we need to sync the changes with our Capacitor project. Run the following command in your terminal:

```bash
npx cap sync
```

This will sync the changes and update the Capacitor project with the new configuration.

## Step 6: Run the App

Now we are ready to run the app and test the FCM capabilities. Open Android Studio and navigate to your project. Build and run the app on an Android device or emulator.

Ensure that you have implemented the necessary logic for handling push notifications in your app using the Capacitor Push Notifications plugin API.

## Conclusion

In this tutorial, we learned how to integrate the @talesmattos/fcm23-for-capacitor2-ionic4-androids-apps package into a Capacitor V2 Ionic 4 Android app for enabling FCM 23 capabilities. We configured the Android platform, integrated the Firebase GoogleService JSON file, updated the credentials, synced the changes, and ran the app to test the FCM functionality.

Now you can leverage the power of FCM to send push notifications and engage with your app users in real-time.

Happy coding!

If you have any further questions or need more assistance, feel free to ask.