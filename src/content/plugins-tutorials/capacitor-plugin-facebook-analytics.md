---
title: "Using the capacitor-plugin-facebook-analytics Package"
description: "A tutorial on how to use the capacitor-plugin-facebook-analytics package for tracking events in your Capacitor app"
created_at: "2022-03-15"
published: true
slug: capacitor-plugin-facebook-analytics
---

# Using the capacitor-plugin-facebook-analytics Package

This tutorial will guide you through the process of using the `capacitor-plugin-facebook-analytics` package to track events in your Capacitor app.

## Installation

To install the `capacitor-plugin-facebook-analytics` package, open your terminal and run the following command:

```bash
$ npm i --save capacitor-plugin-facebook-analytics
```

If you are using yarn, you can use the following command instead:

```bash
yarn add capacitor-plugin-facebook-analytics
```

## Android Configuration

To configure the package for Android, follow these steps:

1. Open the `MainActivity.java` file located at `android/app/src/main/java/**/**/MainActivity.java`.

2. Add the plugin to the initialization list by adding the following code:

   ```diff
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
     [...]
   +   add(com.vrba.plugins.facebookanalytics.FacebookAnalytics.class);
     [...]
   }});
   ```

3. Open the `AndroidManifest.xml` file located at `android/app/src/main/AndroidManifest.xml`.

4. Add the following XML elements under the `<manifest><application>` section:

   ```diff
   + <meta-data android:name="com.facebook.sdk.ApplicationId"
   +     android:value="@string/facebook_app_id"/>
   ```

5. Open the `strings.xml` file located at `android/app/src/main/res/values/strings.xml`.

6. Add the following lines to define the Facebook application Id:

   ```diff
   + <string name="facebook_app_id">[APP_ID]</string>
   ```

   Don't forget to replace `[APP_ID]` with your actual Facebook application Id.

For more information on Android configuration, you can refer to the [official Facebook documentation](https://developers.facebook.com/docs/app-events/getting-started-app-events-android).

## iOS Configuration

To configure the package for iOS, follow these steps:

1. Open the `info.plist` file located at `ios/App/App/info.plist`.

2. Add the following keys and values to the file:

   ```diff
   + <key>FacebookAppID</key>
   + <string>[APP_ID]</string>
   + <key>FacebookDisplayName</key>
   + <string>[APP_NAME]</string>
   ```

   Replace `[APP_ID]` with your Facebook application Id and `[APP_NAME]` with your app's display name.

For more information on iOS configuration, you can refer to the [official Facebook documentation](https://developers.facebook.com/docs/app-events/getting-started-app-events-ios).

## Supported Methods

The `capacitor-plugin-facebook-analytics` package supports the following methods:

| Name                  | Android | iOS | Web |
| :-------------------- | :------ | :-- | :-- |
| logEvent              | ✅      | ✅  | ❌ |

## API

### logEvent

The `logEvent` method allows you to log custom events. Here's an example of how to use it:

```ts
import { Plugins } from '@capacitor/core';
const { FacebookAnalytics } = Plugins;

// Example command.
await FacebookAnalytics.logEvent({ event: 'button_click', params: { button_name: 'Login' }});
```

This example logs a custom event with the event name `button_click` and an optional `params` object that contains additional data.

### Other Methods

In addition to `logEvent`, the package also supports the following methods:

- `logPurchase`: Logs a purchase event.
- `logAddPaymentInfo`: Logs an event when payment information is added.
- `logAddToCart`: Logs an event when an item is added to the cart.
- `logCompleteRegistration`: Logs an event when the registration process is completed.
- `logInitiatedCheckout`: Logs an event when the checkout process is initiated.

You can find more information on these methods in the [official Facebook documentation](https://developers.facebook.com/docs/app-events/getting-started-app-events).

That's it! You have now learned how to use the `capacitor-plugin-facebook-analytics` package to track events in your Capacitor app. Happy tracking!