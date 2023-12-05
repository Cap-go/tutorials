---
title: "Tutorial: Using capacitor-axa-mobile-sdk-plugin"
description: "Learn how to integrate and use the capacitor-axa-mobile-sdk-plugin in your Capacitor app to collect and fine tune custom metrics."
created_at: "2023-12-15"
published: true
slug: "capacitoraxamobilesdkplugin"
---

# Tutorial: Using capacitor-axa-mobile-sdk-plugin

The capacitor-axa-mobile-sdk-plugin is a powerful plugin that allows you to integrate the AXA Mobile SDK into your Capacitor app. This SDK provides deep insights into the performance, user experience, crash, and log analytics of your app. In this tutorial, we will go through the steps to install and use the capacitor-axa-mobile-sdk-plugin in your Capacitor app.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

1. Install Node.js and NPM on your machine.
2. Set up a Capacitor project. If you haven't done this yet, you can follow the [official Capacitor documentation](https://capacitorjs.com/docs/getting-started) to get started.

## Installation

To install the capacitor-axa-mobile-sdk-plugin, open your command line interface and navigate to your Capacitor project's root folder. Then, run the following command:

```bash
npm install capacitor-axa-mobile-sdk-plugin
```

This command will install the plugin and add it as a dependency in your project.

## Integrating the SDK

Now that the plugin is installed, we need to integrate the AXA Mobile SDK into our project. Follow these steps:

1. Download the **camdo.plist** file from your AXA Mobile SDK dashboard.
2. Open your Capacitor project in your preferred code editor.
3. Navigate to the `ios/App` folder.
4. Drag and drop the downloaded `camdo.plist` file into the `App` folder.

### Setting up iOS

In your project's `AppDelegate.swift` file, add the following code to import the capacitor-axa-mobile-sdk-plugin:

```swift
import CapacitorAXAMobileSDKPlugin
```

Then, add the following code in the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
CapacitorAXAMobileSDKPlugin.register()
```

### Setting up Android

In your project's `MainActivity.java` file, add the following code to import the capacitor-axa-mobile-sdk-plugin:

```java
import com.capacitoraxamobilesdkplugin.CapacitorAXAMobileSdkPlugin;
```

Then, add the following code in the `initialize` method:

```java
CapacitorAXAMobileSdkPlugin.register(this);
```

## Using the SDK

Now that the AXA Mobile SDK is integrated, you can start using its features. Here is a basic example of how to use the SDK in your app:

```typescript
import { CapacitorAXAMobileSdk } from 'capacitor-axa-mobile-sdk-plugin';

// Set up listeners for events or perform other configuration

// Example of collecting a custom metric
CapacitorAXAMobileSdk.collectMetric('LoginSuccess', {
  username: 'john.doe',
});

// Example of logging an event
CapacitorAXAMobileSdk.logEvent('ButtonClicked', {
  buttonId: 'submit',
});
```

This example shows how to collect a custom metric called 'LoginSuccess' with a username and log an event called 'ButtonClicked' with a button ID.

For more detailed information on the available methods and options, refer to the [official documentation](https://techdocs.broadcom.com/content/broadcom/techdocs/us/en/ca-enterprise-software/it-operations-management/app-experience-analytics-saas/SaaS/reference/data-collected-by-ca-app-experience-analytics-sdk.html) provided by AXA Mobile SDK.

## Conclusion

Congratulations! You have successfully integrated and used the capacitor-axa-mobile-sdk-plugin in your Capacitor app. You now have access to powerful metrics and insights that can help you improve your app's performance and user experience. Experiment with the different features of the AXA Mobile SDK to get the most out of this powerful tool. Happy coding!