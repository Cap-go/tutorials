---
title: "Using the check-play-services Package"
description: "A tutorial on how to use the check-play-services package for checking Google Play Services availability in an Android app."
created_at: "2022-03-22"
published: true
slug: "check-play-services"
---

# Using the check-play-services Package

The check-play-services package provides a simple way to check the availability of Google Play Services in an Android app. This can be useful in scenarios where your app relies on specific Google Play Services features and you want to ensure that they are available on the user's device.

## Installation

To use the check-play-services package in your Android app, follow these steps:

1. Open your app's `build.gradle` file.
2. Add the following dependency to the `dependencies` block:

   ```gradle
   implementation 'com.google.android.gms:play-services-basement:XX.X.X'
   ```

   Replace `XX.X.X` with the desired version of Google Play Services. You can find the latest version in the [Google Play services release notes](https://developers.google.com/android/guides/releases).

3. Sync your project to download the required dependencies.

## Checking Google Play Services Availability

Once you have installed the check-play-services package, you can use it to check the availability of Google Play Services in your app. Here's how:

1. Import the necessary classes in your Java or Kotlin file:

   ```java
   import com.google.android.gms.common.GoogleApiAvailability;
   ```

2. Inside the desired method, create an instance of `GoogleApiAvailability`:

   ```java
   GoogleApiAvailability googleApiAvailability = GoogleApiAvailability.getInstance();
   ```

3. Use the `isGooglePlayServicesAvailable()` method to check if Google Play Services is available:

   ```java
   int resultCode = googleApiAvailability.isGooglePlayServicesAvailable(context);
   ```

4. Check the `resultCode` to determine the availability status:

   ```java
   if (resultCode == com.google.android.gms.common.ConnectionResult.SUCCESS) {
       // Google Play Services is available
   } else {
       // Google Play Services is not available or needs an update
   }
   ```

That's it! You have successfully used the check-play-services package to check the availability of Google Play Services in your Android app.

## Conclusion

In this tutorial, we learned how to use the check-play-services package to check the availability of Google Play Services in an Android app. By following the installation steps and implementing the necessary code, you can ensure that your app can properly utilize Google Play Services features.