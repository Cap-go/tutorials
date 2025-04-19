---
"title": "Using Capacitor Google Play Services Checker Package",
"description": "This tutorial will guide you on how to implement the capacitor-google-play-services-checker package in your Capacitor project to verify the availability of Google Play services within your Android application.",
"created_at": "2022-01-19",
"published": true,
"slug": "capacitor-google-play-services-checker.git"
---

# Using Capacitor Google Play Services Checker Package

In this tutorial, we will walk through the process of integrating the capacitor-google-play-services-checker package into your Capacitor project to check the availability of Google Play services on your Android application.

## Installation

To get started, install the capacitor-google-play-services-checker package in your Capacitor project by running the following command:

```bash
npm install capacitor-google-play-services-checker
```

## Add the Plugin

After installing the package, add the plugin to your project. For Android applications, ensure that you have an Android device or emulator set up with Google Play services installed.

## Check Google Play Services Availability

You can now utilize the capacitor-google-play-services-checker package in your code to check the availability of Google Play services. This can be particularly useful for apps that rely on Google services like Maps, Location, or Firebase.

```javascript
import { Plugins } from '@capacitor/core';

const { GooglePlayServicesChecker } = Plugins;

// Check for Google Play services availability
GooglePlayServicesChecker.checkServicesAvailability().then(availability => {
  if (availability.available) {
    console.log('Google Play services are available!');
  } else {
    console.log('Google Play services are not available. Please update.');
  }
}).catch(error => {
  console.error('Error checking Google Play services:', error);
});
```

## Conclusion

By following this tutorial, you have successfully integrated the capacitor-google-play-services-checker package into your Capacitor project to verify the presence of Google Play services. This can help ensure a smooth experience for users of your Android application.