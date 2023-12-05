---
title: "Using the Capacitor Plugin Google Analytics"
description: "A tutorial on how to use the capacitor-plugin-google-analytics package to implement Google Analytics in your Capacitor app."
created_at: "2021-09-28"
published: true
slug: "capacitor-plugin-google-analytics"
---

# Using the Capacitor Plugin Google Analytics

In this tutorial, we will explore how to integrate Google Analytics into your Capacitor app using the capacitor-plugin-google-analytics package. Google Analytics allows you to track user behavior, measure app performance, and gain valuable insights into your app's usage.

## Prerequisites

Before we begin, make sure you have the following:

1. An existing Capacitor project.
2. The Capacitor CLI installed.

## Installation

To install the capacitor-plugin-google-analytics package, follow these steps:

1. Open your terminal and navigate to your Capacitor project directory.
2. Run the following command to add the plugin to your project:

```shell
npm install --save capacitor-plugin-google-analytics
```

3. After the installation is complete, update the Capacitor configuration files by running the sync command:

```shell
npx cap sync
```

## Android Setup

Follow these steps to set up Google Analytics on your Android app:

1. Create a new project on the [Google Analytics website](https://analytics.google.com/).
2. Copy the tracking ID provided for your project.
3. Open the `MainActivity.java` file in your Android project.
4. Import the Google Analytics plugin by adding the following import statement:

```java
import io.stewan.capacitor.googleanalytics.GoogleAnalyticsPlugin;
```

5. Inside the initialize callback method, add the following line to initialize the plugin:

```java
add(GoogleAnalyticsPlugin.class);
```

6. Save the file and rebuild your Android project.

## iOS Setup

For iOS setup, follow these steps:

1. Create a new project on the [Google Analytics website](https://analytics.google.com/).
2. Copy the tracking ID provided for your project.
3. Open the `AppDelegate.swift` file in your iOS project.
4. Import the Google Analytics plugin by adding the following import statement:

```swift
import CapacitorGoogleAnalytics
```

5. Inside the `didFinishLaunchingWithOptions` method, add the following line to initialize the plugin:

```swift
let gaid = "YOUR_TRACKING_ID"
GoogleAnalytics.shared.initialize(gaid)
```

6. Save the file and rebuild your iOS project.

## Tracking Events

Once you have set up Google Analytics, you can start tracking events in your app. Here's an example of how to track a button click event:

```typescript
import { Plugins } from '@capacitor/core';

const { GoogleAnalyticsPlugin } = Plugins;

...

GoogleAnalyticsPlugin.trackEvent({
  category: 'Button',
  action: 'Click',
  label: 'Login',
  value: 1
});
```

In the above example, we track a button click event with the category "Button", action "Click", label "Login", and value 1.

## Tracking Screen Views

You can also track screen views in your app. Here's an example of how to track a screen view:

```typescript
import { Plugins } from '@capacitor/core';

const { GoogleAnalyticsPlugin } = Plugins;

...

GoogleAnalyticsPlugin.trackScreenView({
  screenName: 'Home'
});
```

In this example, we track the screen view with the screen name "Home".

## Conclusion

Congratulations! You have successfully integrated Google Analytics into your Capacitor app using the capacitor-plugin-google-analytics package. You can now track events, screen views, and gather valuable insights about your app's usage.

Remember to check the official documentation for more advanced features and customization options.

Happy tracking!

---

For more Capacitor plugins and tutorials, check out:

- [capacitor-analytics](https://github.com/stewwan/capacitor-analytics)
- [capacitor-fcm](https://github.com/stewwan/capacitor-fcm)
- [capacitor-intercom](https://github.com/stewwan/capacitor-intercom)
- [capacitor-twitter](https://github.com/stewwan/capacitor-twitter)

Feel free to reach out to me [@Twitter](https://twitter.com/StewanSilva) if you have any questions.

Cheers! 🍻

## License

This project is licensed under the MIT License.