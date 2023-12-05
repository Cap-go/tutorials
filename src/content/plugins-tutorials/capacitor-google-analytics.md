---
title: "Using capacitor-google-analytics package"
description: "A tutorial on how to use the capacitor-google-analytics package in your Ionic project."
created_at: "2021-03-25"
published: true
slug: capacitor-google-analytics
---

# Using capacitor-google-analytics package

In this tutorial, we will learn how to integrate the capacitor-google-analytics package into your Ionic project. capacitor-google-analytics is a Capacitor plugin that allows you to implement Google Analytics tracking in your mobile and web applications.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Ionic 4 or above installed
- Capacitor installed
- A Google Analytics account

## Step 1: Installing the capacitor-google-analytics package

The first step is to install the capacitor-google-analytics package in your Ionic project. Open your terminal and navigate to your project directory. Then, run the following command:

```shell
npm install capacitor-google-analytics
```

This will install the capacitor-google-analytics package and add it to your project's dependencies.

## Step 2: Adding the plugin to your project

Next, you need to add the capacitor-google-analytics plugin to your project. Open the component or service where you want to use the plugin and import it:

```typescript
import { CapacitorGoogleAnalytics } from 'capacitor-google-analytics';
```

## Step 3: Logging an event

Now, let's log an event using the capacitor-google-analytics plugin. Inside your component or service, create a method to log the event:

```typescript
public async logEvent() {
  try {
    const event = { someLabel: 'someValue' };
    const didLogEvent = await CapacitorGoogleAnalytics.logEvent('someEvent', event);
  } catch (err) {
    throw new Error(err);
  }
}
```

In this example, we are logging an event with the name 'someEvent' and a custom parameter 'someLabel' with the value 'someValue'.

## Step 4: Building and syncing the project

After adding the capacitor-google-analytics plugin to your project, you need to build and sync it with your platforms (iOS and/or Android).

For iOS, run the following commands:

```shell
ionic build --platform=ios
ionic cap add ios
ionic cap sync ios
```

For Android, run the following commands:

```shell
ionic build --platform=android
ionic cap add android
ionic cap sync android
```

## Step 5: Xcode setup (for iOS)

If you are targeting iOS, follow these additional steps for Xcode setup:

1. Open your project in Xcode.
2. Select the Project Navigator Icon.
3. Expand your App folder.
4. Right-click the App folder and select "Add Files to <Your App>".
5. Select the GoogleService-Info.plist file and click "Add".

Once these steps are completed, you can build and run your app in Xcode.

## Step 6: Web/PWA setup

To set up Google Analytics in your web/PWA project, you need to add a firebaseConfig object in your AppComponent and initialize the Firebase app. You can find the necessary configuration values in your Google Analytics project settings.

Here's an example of how to set up Firebase and Google Analytics in an Angular project:

```typescript
import { CapacitorGoogleAnalytics } from 'capacitor-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private firebaseConfig: any = {
    // Your Firebase configuration values
    apiKey: 'xxxx',
    authDomain: 'xxxx',
    databaseURL: 'xxxx',
    projectId: 'xxxx',
    storageBucket: 'xxxx',
    messagingSenderId: 'xxxx',
    appId: 'xxxx',
    measurementId: 'xxxx'
  };

  constructor() {
    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);
  }
}
```

## Conclusion

In this tutorial, we have learned how to integrate the capacitor-google-analytics package into an Ionic project. We covered the installation process, logging events, and setting up the package for both mobile and web/PWA applications.

Now you can track user interactions and analyze data using Google Analytics in your Ionic applications.

I hope you found this tutorial helpful. Happy coding!