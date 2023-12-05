---
title: "Using @perfood/capacitor-google-fit Package"
description: "A tutorial on how to use the @perfood/capacitor-google-fit package in your Capacitor app."
created_at: "2022-01-25"
published: true
slug: "capacitor-google-fit"
---

# Using @perfood/capacitor-google-fit Package

In this tutorial, we will learn how to use the `@perfood/capacitor-google-fit` package in your Capacitor app. The `@perfood/capacitor-google-fit` package provides a simple and convenient way to integrate Google Fit functionality into your Capacitor app. 

## Prerequisites

Before getting started, make sure you have the following:

- Installed Capacitor in your project
- A Google Developer account
- Enabled the Google Fitness API in your Google Developer Console

## Installation

To install the `@perfood/capacitor-google-fit` package, run the following command:

```bash
npm install @perfood/capacitor-google-fit
npx cap sync
```

## Configuration

### Android Configuration

1. Open the `android/app/src/main/java/<YOUR_PACKAGE_NAME>/MainActivity.java` file.
2. Import the `com.getcapacitor.community.googlefit.GoogleFit` package.
3. Add `add(GoogleFit.class)` in the `initialize` method of the `MainActivity` class.

```java
import com.getcapacitor.community.googlefit.GoogleFit;

public class MainActivity extends BridgeActivity {
    // ...

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            // ...

            // Add this line
            add(GoogleFit.class);
        }});
    }
}
```

4. Open the `android/app/src/main/res/values/strings.xml` file and add the following strings:

```xml
<string name="server_client_id"><YOUR_SERVER_CLIENT_ID></string>
<string name="client_id"><YOUR_CLIENT_ID></string>
```

Replace `<YOUR_SERVER_CLIENT_ID>` with your server client ID and `<YOUR_CLIENT_ID>` with your client ID. These IDs can be obtained from the Google Developer Console.

5. Open the `android/app/src/main/AndroidManifest.xml` file and add the following permissions:

```xml
<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
```

### iOS Configuration

1. Open the `ios/App/App/AppDelegate.swift` file.
2. Import the `CapacitorGoogleFit` module.
3. Add `CapacitorGoogleFit.register()` in the `application(_:didFinishLaunchingWithOptions:)` method.

```swift
import Capacitor
import CapacitorGoogleFit

class AppDelegate: UIResponder, UIApplicationDelegate {
    // ...

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // ...

        // Add this line
        CapacitorGoogleFit.register()

        // ...

        return true
    }
}
```

4. Open the `ios/App/App/Info.plist` file and add the following keys:

```xml
<key>NSMotionUsageDescription</key>
<string>Access to motion data is required for tracking your fitness activities.</string>
<key>NSHealthUpdateUsageDescription</key>
<string>Access to health data is required for reading and writing fitness data.</string>
```

## Usage

Now that the package is installed and configured, let's see how we can use it in our Capacitor app.

### Import the Plugin

Import the `GoogleFit` plugin in your JavaScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { GoogleFit } = Plugins;
```

### Request Authorization

To access the fitness data, we need to request user authorization. Use the `authorize` method to request authorization:

```javascript
GoogleFit.authorize();
```

### Read Fitness Data

To read fitness data, you can use the various methods provided by the `GoogleFit` plugin. For example, to get the daily step count:

```javascript
GoogleFit.query({
  dataType: 'step_count_delta',
  days: 1,
});
```

### Write Fitness Data

To write fitness data, you can use the `insert` method. For example, to insert a step count:

```javascript
GoogleFit.insert({
  dataType: 'step_count_delta',
  value: 500,
  sourceName: 'MyApp',
});
```

### Subscribe to Data Changes

To receive real-time updates for fitness data, you can use the `subscribe` method. For example, to subscribe to step count updates:

```javascript
GoogleFit.subscribe({
  dataType: 'step_count_delta',
  callbackId: 'stepCountUpdates',
});
```

### Unsubscribe from Data Changes

To stop receiving real-time updates, use the `unsubscribe` method. For example, to unsubscribe from step count updates:

```javascript
GoogleFit.unsubscribe({
  callbackId: 'stepCountUpdates',
});
```

## Conclusion

In this tutorial, we have learned how to use the `@perfood/capacitor-google-fit` package in your Capacitor app. We covered the installation and configuration steps, as well as the usage of the various methods provided by the package. You can now integrate Google Fit functionality into your Capacitor app and access fitness data easily.