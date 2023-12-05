---
title: "Using the Plumb5 SDK Package with Ionic Capacitor"
description: "A tutorial on how to use the Plumb5 SDK package with Ionic Capacitor to integrate Plumb5 analytics and tracking into your mobile app."
created_at: "2022-03-01"
published: true
slug: ionic-capacitor-sdk
---

# Using the Plumb5 SDK Package with Ionic Capacitor

In this tutorial, we will learn how to integrate the Plumb5 SDK package into an Ionic Capacitor project. The Plumb5 SDK allows you to track user analytics and events, as well as implement in-app notifications in your mobile app.

## Prerequisites

Before we begin, make sure you have the following installed on your machine:

- Node.js (version X.X.X)
- Ionic CLI (version X.X.X)
- Capacitor CLI (version X.X.X)
- Plumb5 SDK package

## Installation

To install the Plumb5 SDK package in your Ionic Capacitor project, follow these steps:

1. Open your project in the terminal and navigate to the root directory.

2. Run the following command to install the Plumb5 SDK package:

```
npm install plumb5-sdk
```

3. Sync the Capacitor configuration with the command:

```
ionic cap sync
```

## Configuration

After installing the Plumb5 SDK package, you need to configure the package in your Capacitor config file. Open the `capacitor.config.ts` file and make the following changes:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "your_app_id",
  appName: "your_app_name",
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Plumb5: {
      PLUMB5_ACCOUNT_ID: 12345,
      PLUMB5_BASE_URL: "https://plumb5.example.com",
      PLUMB5_API_KEY: "your_api_key",
    }
  },
};

export default config;
```

Make sure to replace `your_app_id`, `your_app_name`, `PLUMB5_ACCOUNT_ID`, `PLUMB5_BASE_URL`, and `PLUMB5_API_KEY` with the appropriate values for your app and Plumb5 account.

## Initializing Plumb5 SDK

To initialize the Plumb5 SDK and start tracking user analytics, follow these steps:

1. Open the `app.component.ts` file in your project.

2. Import the `Plumb5` module from the `plumb5-sdk` package:

```typescript
import { Plumb5 } from 'plumb5-sdk';
```

3. Add the initialization code in the `AppComponent` constructor:

```typescript
constructor() {
  // Initialize the Plumb5 SDK
  Plumb5.initializePlumb5();
}
```

4. Implement page tracking and in-app notification handling by subscribing to the router events:

```typescript
import { Router, NavigationStart } from '@angular/router';

constructor(private router: Router) {
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
}
```

5. Set user details by calling the `setUserDetails` method:

```typescript
Plumb5.setUserDetails({
  Name: 'John Doe',
  EmailId: 'john.doe@example.com',
  PhoneNumber: '1234567890',
  LeadType: 1,
  Gender: 'Male',
  Age: new Date('1990-01-01'),
  AgeRange: '18-30',
  MaritalStatus: 'Single',
  Education: 'Bachelors',
  Occupation: 'Developer',
  Interests: 'Sports',
  Location: 'New York',
});
```

Replace the example user details with the actual user information.

6. Capture push notification data and handle route navigation from notifications by adding an event listener:

```typescript
window.addEventListener('onPushNotification', (e: any) => {
  const routeUrl = e.routeUrl;
  this.router.navigate([routeUrl]);
});
```

7. Post events for any kind of component by calling the `eventPost` method:

```typescript
Plumb5.eventPost({
  Type: 'Button',
  Name: 'Button Click',
  PhoneNumber: '1234567890',
  Value: 1,
});
```

Replace the example event data with the actual event information.

## Running the App

To run your Ionic Capacitor app with the Plumb5 SDK integrated, use the following commands:

1. Build the web assets:

```
ionic build
```

2. Add the Android platform:

```
ionic cap add android
```

3. Open the Android project in Android Studio:

```
npx cap open android
```

4. Build and run the app on an Android device or emulator using Android Studio.

## Conclusion

In this tutorial, we have learned how to integrate the Plumb5 SDK package into an Ionic Capacitor project. We have seen how to configure the package, initialize the SDK, track user analytics, handle in-app notifications, and post events. With the Plumb5 SDK, you can easily add powerful tracking and analytics capabilities to your mobile app.