---
title: "Using Plumb5 Package"
description: "A tutorial on how to use the Plumb5 package in an Ionic application."
created_at: "2023-11-15"
published: true
slug: ionicplugin
---

# Using Plumb5 Package

In this tutorial, we will learn how to integrate and use the Plumb5 package in an Ionic application. Plumb5 is a powerful analytics and marketing automation platform that allows you to track user behavior, send in-app notifications, and perform event-based marketing campaigns. Let's get started!

## Installation

To install the Plumb5 package, open your terminal and run the following command:

```bash
npm install plumb5-sdk
ionic cap sync
```

## Configuration

Once the package is installed, you need to configure it in your `capacitor.config.ts` file. Open the file and make the following changes:

1. Add the plugin object with your Plumb5 account ID, base URL, and API key:

```typescript
plugins: {
  Plumb5: {
    PLUMB5_ACCOUNT_ID: <your_account_id>,
    PLUMB5_BASE_URL: <your_base_url>,
    PLUMB5_API_KEY: <your_api_key>,
  },
},
```

2. Change the package name with your app's ID and update the app name:

```typescript
appId: <your_app_id>,
appName: <your_app_name>,
```

## Initializing Plumb5 SDK

To initialize the Plumb5 SDK, open your `app.component.ts` file and make the following changes:

1. Import the `Plumb5` class from the `plumb5-sdk` package:

```typescript
import { Plumb5 } from 'plumb5-sdk';
```

2. Inside the `AppComponent` class, add a method called `Plumb5` and initialize the SDK:

```typescript
Plumb5() {
  Plumb5.initializePlumb5();
}
```

3. To track page views and in-app notifications, add the following code inside the `Plumb5` method:

```typescript
this.router.events.subscribe((event) => {
  if (event instanceof NavigationStart) {
    Plumb5.tracking({
      ScreenName: event.url,
      PageParameter: '',
    });

    Plumb5.pushResponse({
      ScreenName: event.url,
      PageParameter: '',
    });
  }
});
```

4. Set user details using the `setUserDetails` method:

```typescript
Plumb5.setUserDetails({
  Name: 'demo',
  EmailId: 'guru@demo.com',
  PhoneNumber: '987654321',
  LeadType: 1,
  Gender: 'Male',
  Age: '2020-01-27T06:12:01.051Z',
  AgeRange: '10-89',
  MaritalStatus: 'Married',
  Education: 'MCA',
  Occupation: 'SE',
  Interests: 'Eating',
  Location: 'Bangalore',
});
```

5. Capture push notification data and route navigation from notification:

```typescript
window.addEventListener('onPushNotification', (e: any) => {
  const routeUrl = e.routeUrl;
  this.router.navigate([routeUrl]);
});
```

6. Post events from any components using the `eventPost` method:

```typescript
Plumb5.eventPost({
  Type: 'Button',
  Name: 'demo@demo.com',
  PhoneNumber: '987654321',
  Value: 1,
});
```

## Adding Android Platform

If you want to use Plumb5 in an Android application, you need to add the Android platform. Open your terminal and run the following command:

```bash
ionic cap add android
```

## Integrating Firebase googleService JSON

To integrate Firebase with your app, follow these steps:

1. Ensure that your Android package name matches the app ID defined in your `capacitor.config.ts` file.

2. Copy your `google-services.json` file to the `android/app` directory in your project.

3. Build and run your app on an Android device.

Congratulations! You have successfully integrated and configured the Plumb5 package in your Ionic application. You can now start tracking user behavior, sending in-app notifications, and performing event-based marketing campaigns using Plumb5. Happy coding!