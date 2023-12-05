---
title: "Using the crowdhub-plugin-flurryanalytics Package"
description: "A tutorial on how to use the crowdhub-plugin-flurryanalytics package to integrate Flurry Analytics into your Capacitor apps."
created_at: "2022-10-27"
published: true
slug: "crowdhub-plugin-flurryanalytics"
---

# Using the crowdhub-plugin-flurryanalytics Package

Flurry Analytics is a popular analytics tool that allows you to track and analyze user behavior in your Capacitor apps. The crowdhub-plugin-flurryanalytics package provides a simple interface for integrating Flurry Analytics into your Capacitor apps. In this tutorial, we will walk you through the process of installing and using this package.

## Installation

To get started, you need to install the crowdhub-plugin-flurryanalytics package. Open your terminal and run the following command:

```
npm install crowdhub-plugin-flurryanalytics
npx cap sync
```

This will install the package and sync it with your Capacitor project.

## Web Implementation

To use Flurry Analytics in your web app, you need to initialize a session by calling the `initialize` method from the `FlurryAnalytics` class. This should be done once within your app's session, preferably on a `deviceready` event. Here's an example of how to initialize Flurry Analytics:

```typescript
import { FlurryAnalytics } from 'crowdhub-plugin-flurryanalytics'

FlurryAnalytics.initialize({
  apiKey: 'YOUR-API-KEY-HERE',
})
```

Once the session is initialized, you can call any of the provided methods from the `FlurryAnalytics` class to track events, set demographics data, and more.

Note: If you want to set demographics data such as age, gender, or user ID, make sure to call the respective methods (`setAge`, `setGender`, `setUserId`) before initializing the Flurry session.

## iOS Implementation

For iOS apps, you need to make a few additional configurations. In your `AppDelegate.swift` file, add the following code to initialize Flurry Analytics:

```swift
import FlurryAnalytics

class AppDelegate: UIResponder, UIApplicationDelegate {

  func application(_ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    let apiKey = "YOUR-API-KEY-HERE"
    Flurry.startSession(apiKey)
    return true
  }

}
```

Replace `"YOUR-API-KEY-HERE"` with your actual Flurry Analytics API key.

## Android Implementation

Similarly, for Android apps, you need to add some code to the `MainActivity.java` file to register the FlurryAnalytics plugin:

```java
package your.app.bundle;

import android.os.Bundle;
import com.crowdhubapps.plugin.flurryanalytics.FlurryAnalyticsPlugin;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(FlurryAnalyticsPlugin.class);
    super.onCreate(savedInstanceState);
  }

}
```

Make sure to replace `your.app.bundle` with your app's bundle identifier.

If you encounter an error related to finding the package, you may also need to convert the Java file to a Kotlin file using Android Studio.

## Conclusion

In this tutorial, we covered the process of installing and using the crowdhub-plugin-flurryanalytics package to integrate Flurry Analytics into your Capacitor apps. We walked through the installation steps and provided implementation examples for web, iOS, and Android platforms. You can now start tracking user behavior and analyzing data using Flurry Analytics in your Capacitor apps.

Remember to consult the official Flurry Analytics documentation for more details on available methods and features. Happy tracking!