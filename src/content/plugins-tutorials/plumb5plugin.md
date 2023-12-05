---
title: "Using the Plumb5 Plugin for Tracking"
description: "A tutorial on how to use the plumb5-plugin-tracking package to track user activities in your mobile app."
created_at: "2021-10-12"
published: true
slug: plumb5plugin
---

# Using the Plumb5 Plugin for Tracking

In this tutorial, we will learn how to use the **plumb5-plugin-tracking** package to track user activities in your mobile app. The Plumb5 plugin allows you to integrate the Plumb5 analytics and tracking functionalities into your Capacitor app.

## Installation

To get started, you need to install the **plumb5-plugin-tracking** package and sync your Capacitor project. Open your terminal and run the following command:

```bash
npm install plumb5-plugin-tracking
ionic cap sync
```

## Configure the Plugin

After installing the package, you need to configure the plugin in your **capacitor.config.ts** file. Open the file and make the following changes:

1. Import the `Plumb5` class from the **plumb5-plugin-tracking** package:

```typescript
import { Plumb5 } from 'plumb5-plugin-tracking';
```

2. Add the plugin configuration object inside the `plugins` property of your **capacitor.config.ts** file. This object should contain the `PLUMB5_ACCOUNT_ID`, `PLUMB5_BASE_URL`, and `PLUMB5_API_KEY` values specific to your Plumb5 account:

```typescript
plugins: {
  Plumb5: {
    PLUMB5_ACCOUNT_ID: YOUR_ACCOUNT_ID,
    PLUMB5_BASE_URL: YOUR_BASE_URL,
    PLUMB5_API_KEY: YOUR_API_KEY,
  },
},
```

Make sure to replace `YOUR_ACCOUNT_ID`, `YOUR_BASE_URL`, and `YOUR_API_KEY` with the actual values from your Plumb5 account.

## Initialize the Plumb5 SDK

Next, we need to initialize the Plumb5 SDK in our app. Open your **app.component.ts** file and import the required dependencies:

```typescript
import { Component } from '@angular/core';
import { Plumb5 } from 'plumb5-plugin-tracking';
import { Platform, Router, NavigationStart } from '@ionic/angular';
```

In the `AppComponent` class, add the following code to initialize the Plumb5 SDK and enable page tracking and in-app notifications:

```typescript
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
  ) {
    this.platform.ready().then(() => {
      this.initPlumb5();
    });
  }

  initPlumb5() {
    Plumb5.initializePlumb5();

    this.router.events.subscribe(event => {
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
}
```

This code initializes the Plumb5 SDK and sets up page tracking and in-app notification listeners. Whenever the user navigates to a new page, the plugin will send the screen name and any additional page parameters to the Plumb5 server.

## Track User Details

To track user details, you can use the `setUserDetails` method provided by the Plumb5 plugin. This method allows you to send user-specific information, such as name, email, phone number, and more.

Here's an example of how to use the `setUserDetails` method:

```typescript
Plumb5.setUserDetails({
  Name: 'John Doe',
  EmailId: 'john.doe@example.com',
  PhoneNumber: '1234567890',
});
```

Replace the sample values with the actual details of the current user.

## Capture Push Notifications

If your app receives push notifications and you want to capture the notification data and perform a specific action when a notification is clicked, you can use the `onPushNotification` event listener provided by the Plumb5 plugin.

Add the following code to your **app.component.ts** file to capture push notification events:

```typescript
window.addEventListener('onPushNotification', (event: any) => {
  console.log('Received push notification:', event.notification);

  // Perform a specific action based on the notification data
  // For example, navigate to a specific page
  this.router.navigate([event.notification.routeUrl]);
});
```

This code listens for the `onPushNotification` event and logs the received notification data. You can customize the code inside the event listener to perform your desired action, such as navigating to a specific page or updating the app UI.

## Post Events

The Plumb5 plugin allows you to post events from any component in your app. This is useful for tracking user interactions, such as button clicks or form submissions.

To post an event, use the `eventPost` method provided by the Plumb5 plugin. Here's an example:

```typescript
Plumb5.eventPost({
  Type: 'Button',
  Name: 'ButtonClicked',
  Value: 1,
});
```

This example posts an event of type "Button" with the name "ButtonClicked" and a value of 1. Adjust the event details according to your app's requirements.

## Conclusion

Congratulations! You have successfully learned how to integrate the **plumb5-plugin-tracking** package into your Capacitor app to track user activities. You now have the ability to collect valuable analytics and insights using the Plumb5 platform.

Remember to refer to the official documentation of the Plumb5 plugin for detailed usage instructions and additional features.

Happy tracking!