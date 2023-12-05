---
title: "iOS Tracking Transparency - A Guide for App Developers"
description: "Learn how to integrate and use the ios-tracking-transparency package in your iOS app to handle tracking authorization requests."
created_at: "2022-10-07"
published: true
slug: ios-tracking-transparency
---

# iOS Tracking Transparency - A Guide for App Developers

Tracking transparency has become an essential aspect of iOS app development since the introduction of iOS 14. With the ios-tracking-transparency package, developers can easily integrate tracking authorization requests and handle user consent in their apps. In this tutorial, we will explore how to install and use the ios-tracking-transparency package in your iOS app.

## Prerequisites

Before getting started, ensure that you have the following prerequisites:

- Node.js and npm or Yarn installed on your machine
- Xcode with a valid iOS development setup
- Capacitor integrated into your Ionic or React Native project

## Installation

To begin, open your project's terminal and navigate to the root directory. Then, run the following command to install the ios-tracking-transparency package:

```bash
npm install ios-tracking-transparency
```

or

```bash
yarn add ios-tracking-transparency
```

Next, synchronize the Capacitor project with the installed package by running:

```bash
npx cap sync
```

## Usage

Once the ios-tracking-transparency package is installed, you can start using its API in your app code. The package provides two main methods: `requestTrackingAuthorization` and `trackingAuthorizationStatus`. Let's explore how to use them.

### Request Tracking Authorization

The `requestTrackingAuthorization` method is used to request user consent for tracking. Here's an example of how to use it:

```typescript
import { AppTrackingTransparency } from 'ios-tracking-transparency';

// ...

AppTrackingTransparency.requestTrackingAuthorization()
  .then((response) => {
    // Handle the tracking authorization request response
    console.log(response.status); // authorized, denied, notDetermined, restricted, or null
    console.log(response.code); // Authorization code
  })
  .catch((error) => {
    // Handle any error that occurs during the request
    console.error('Error requesting tracking authorization:', error);
  });
```

### Tracking Authorization Status

The `trackingAuthorizationStatus` method is used to check the current tracking authorization status. Here's an example of how to use it:

```typescript
import { AppTrackingTransparency } from 'ios-tracking-transparency';

// ...

AppTrackingTransparency.trackingAuthorizationStatus()
  .then((response) => {
    // Handle the tracking authorization status response
    console.log(response.status); // authorized, denied, notDetermined, restricted, or null
    console.log(response.code); // Authorization code
  })
  .catch((error) => {
    // Handle any error that occurs while checking the status
    console.error('Error checking tracking authorization status:', error);
  });
```

### Example App Code

Here's an example code snippet showing how to integrate the ios-tracking-transparency package into your app:

```typescript
import { useEffect } from 'react';
import { AppTrackingTransparency } from 'ios-tracking-transparency';
import { Capacitor } from '@capacitor/core';

function App() {
  useEffect(() => {
    try {
      if (Capacitor.getPlatform() === 'ios') {
        AppTrackingTransparency.trackingAuthorizationStatus()
          .then((trackStat) => {
            if (trackStat.status !== 'authorized') {
              AppTrackingTransparency.requestTrackingAuthorization().then((response) => {
                // Handle the tracking authorization request response
                console.log(response.status); // authorized, denied, notDetermined, restricted, or null
                console.log(response.code); // Authorization code
              });
            }
          })
          .catch((error) => {
            // Handle any error that occurs while checking the status
            console.error('Error checking tracking authorization status:', error);
          });
      }
    } catch (error) {
      // Handle any error that occurs during the authorization process
      console.error('Authorization failed:', error);
    }
  }, []);

  // Render your app components here

  return (
    <div>
      {/* Your app components */}
    </div>
  );
}

export default App;
```

## Updating Xcode Info.plist

To ensure proper functioning of the ios-tracking-transparency package, you need to update your Xcode project's Info.plist file. Follow the steps below:

1. Open your Xcode project.
2. Locate the **Info.plist** file in the project navigator.
3. Add the following key-value pair under the main `<dict>` element:

    ```xml
    <key>NSUserTrackingUsageDescription</key>
    <string>Message to Users</string>
    ```

    Replace `"Message to Users"` with a meaningful message to explain to users why your app requires tracking authorization.

That's it! You have successfully integrated and used the ios-tracking-transparency package in your iOS app. Now, your app will handle tracking authorization requests and track the authorization status for iOS 14 and above.

## Conclusion

In this tutorial, we learned how to install and use the ios-tracking-transparency package in your iOS app. We explored the available methods for requesting tracking authorization and checking the tracking authorization status. By following the steps outlined in this tutorial, you can easily integrate tracking transparency into your iOS app and ensure compliance with Apple's privacy guidelines.

Remember to always provide clear and concise explanations to users about the purpose of tracking authorization and obtain their consent before tracking their activities. Happy coding!