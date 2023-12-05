---
title: "Using the appsflyer-capacitor-plugin Package"
description: "In this tutorial, we will learn how to use the appsflyer-capacitor-plugin package to integrate AppsFlyer analytics into a Capacitor app."
created_at: "2022-01-28"
published: true
slug: "appsflyer-capacitor-plugin"
---

# Using the appsflyer-capacitor-plugin Package

In this tutorial, we will learn how to use the appsflyer-capacitor-plugin package to integrate AppsFlyer analytics into a Capacitor app.

## Step 1: Install the Package

To get started, open your terminal and navigate to your Capacitor project's root directory. Then, run the following command to install the appsflyer-capacitor-plugin package:

```bash
npm install appsflyer-capacitor-plugin
```

## Step 2: Configure AppsFlyer SDK

Next, we need to configure the AppsFlyer SDK with your unique App ID and Dev Key. Open the `AppDelegate.swift` file for iOS or the `MainActivity.java` file for Android, depending on the platform you are targeting.

### iOS Configuration

In the `application(_:didFinishLaunchingWithOptions:)` method of `AppDelegate.swift`, add the following code:

```swift
import AppsFlyerLib

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    AppsFlyerLib.shared().appsFlyerDevKey = "YOUR_DEV_KEY"
    AppsFlyerLib.shared().appleAppID = "YOUR_APP_ID"
    // Additional configuration options can be set here
    AppsFlyerLib.shared().isDebug = true
    
    // Add any other code specific to your app
    
    return true
}
```

### Android Configuration

In the `onCreate` method of `MainActivity.java`, add the following code:

```java
import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.AppsFlyerLib;

@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    
    AppsFlyerConversionListener conversionListener = new AppsFlyerConversionListener() {
        @Override
        public void onInstallConversionDataLoaded(Map<String, String> conversionData) {
            // Handle install conversion data here
        }
        
        @Override
        public void onInstallConversionFailure(String errorMessage) {
            // Handle install conversion failure here
        }
        
        @Override
        public void onAppOpenAttribution(Map<String, String> attributionData) {
            // Handle app open attribution data here
        }
        
        @Override
        public void onAttributionFailure(String errorMessage) {
            // Handle attribution failure here
        }
    };
    
    AppsFlyerLib.getInstance().init("YOUR_DEV_KEY", conversionListener, getApplicationContext());
    AppsFlyerLib.getInstance().startTracking(getApplication());
    
    // Add any other code specific to your app
}
```

Make sure to replace `"YOUR_DEV_KEY"` and `"YOUR_APP_ID"` with your actual App ID and Dev Key obtained from AppsFlyer.

## Step 3: Track Events

Once the configuration is done, you can start tracking events in your app. To track an event, use the `trackEvent` method provided by the appsflyer-capacitor-plugin package. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { AppsFlyerPlugin } = Plugins;

// ...

AppsFlyerPlugin.trackEvent('purchase', { price: '29.99', currency: 'USD' });
```

In the above example, we track a "purchase" event with additional parameters `price` and `currency`.

## Step 4: Verify Installation

To verify that the AppsFlyer integration is working correctly, you can test it by running your app and triggering the events you want to track. Then, log in to your AppsFlyer account and navigate to the Analytics dashboard to see the events and their details.

Congratulations! You have successfully integrated the appsflyer-capacitor-plugin package into your Capacitor app and can now track events with AppsFlyer analytics.

Remember to refer to the official AppsFlyer documentation for advanced usage and additional features offered by the AppsFlyer SDK.