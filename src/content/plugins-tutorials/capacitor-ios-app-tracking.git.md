---
"title": "Using Capacitor iOS App Tracking Package"
"description": "This tutorial will guide you through the process of using the capacitor-ios-app-tracking package to track events in your iOS application."
"created_at": "2023-06-14"
"published": true
"slug": "capacitor-ios-app-tracking.git"
---

# Using Capacitor iOS App Tracking Package

In this tutorial, we will walk through the steps to integrate and utilize the capacitor-ios-app-tracking package to track events in your iOS application.

## Step 1: Installation

To begin, install the capacitor-ios-app-tracking package by running the following command in your Capacitor project directory:

```bash
npm install @capacitor/ios-app-tracking
```

## Step 2: Configuring Info.plist

You will need to make changes to your `Info.plist` file. Add the following keys with their respective descriptions:

- **Privacy - Tracking Usage Description**: This is a brief description of why you need to track the user.
- **NSUserTrackingUsageDescription**: Another description for tracking usage.

Here's an example of how you can add these keys in your `Info.plist`:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>We use tracking to improve user experience.</string>
<key>Privacy - Tracking Usage Description</key>
<string>Allow tracking to provide personalized recommendations.</string>
```

## Step 3: Initialize the Package

In your Swift files, import the package using the following line at the top:

```swift
import Capacitor
import AppTrackingTransparency
```

## Step 4: Requesting Tracking Authorization

You need to request user authorization before tracking their data. This can be done using the `requestTrackingAuthorization` method. Here's an example of how it can be implemented:

```swift
if #available(iOS 14, *) {
    ATTrackingManager.requestTrackingAuthorization { status in
        // Handle authorization status
    }
}
```

## Step 5: Tracking Events

Once the user has granted authorization, you can start tracking events in your application. Use the provided methods from the package to track specific events based on your app's requirements.

## Conclusion

Congratulations! You have successfully integrated the capacitor-ios-app-tracking package into your iOS application and can now track user events effectively.

This concludes our tutorial on using the Capacitor iOS App Tracking Package. Happy tracking!
