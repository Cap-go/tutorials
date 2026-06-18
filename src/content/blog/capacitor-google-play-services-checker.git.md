---
"title": "Using Capacitor Google Play Services Checker Package",
"description": "This tutorial will guide you through the process of integrating the Capacitor Google Play Services Checker Package into your Capacitor Android project.",
"created_at": "2022-02-13",
"published": true,
"slug": "capacitor-google-play-services-checker-git"
---

# Capacitor Google Play Services Checker Package Tutorial

In this tutorial, we will learn how to integrate the Capacitor Google Play Services Checker package into your Capacitor Android project.

## Step 1: Installation

To get started, install the Capacitor Google Play Services Checker package by running the following command in your Capacitor project:

```bash
npm install capacitor-google-play-services-checker
```

## Step 2: Import the Package

After installation, import the package into your project. Open your Capacitor Android project and add the required imports.

```java
import com.getcapacitor.community.gpschecker.GpsChecker;
```

## Step 3: Check Google Play Services Availability

You can now use the `GpsChecker` class to check the availability of Google Play Services in your Android project.

```java
GpsChecker.checkGooglePlayServicesAvailable(context, availability -> {
    if (availability == GpsChecker.GooglePlayServicesAvailability.SUCCESS) {
        // Google Play Services are available
    } else {
        // Google Play Services are not available, take necessary action
    }
});
```

## Step 4: Handle Google Play Services Availability

Based on the result of the availability check, you can handle the logic in your Android project accordingly. For example, you can prompt the user to update Google Play Services if they are not available.

And that's it! You have successfully integrated the Capacitor Google Play Services Checker package into your project.

Remember to test your application to ensure that the Google Play Services availability check works as expected.

This concludes our tutorial on using the Capacitor Google Play Services Checker package. Feel free to explore more features and customize the implementation as needed.