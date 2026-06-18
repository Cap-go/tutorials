---
"title": "Using Capacitor Stripe Terminal Plugin",
"description": "A step-by-step tutorial on how to integrate and use the capacitor-stripe-terminal plugin in your Capacitor project.",
"created_at": "2023-10-31",
"published": true,
"slug": "capacitor-stripe-terminal.git"
---

# Using Capacitor Stripe Terminal Plugin

Capacitor Stripe Terminal is a plugin that allows you to integrate the Stripe Terminal SDK into your Capacitor project. This tutorial will walk you through the process of installing and configuring the plugin, as well as how to use its features in your application.

## Installation

To begin using the Capacitor Stripe Terminal Plugin, follow these steps:

1. Install the plugin using npm:

```bash
npm install capacitor-stripe-terminal
```

2. If you are using Yarn, you can also install the plugin with the following command:

```bash
yarn add capacitor-stripe-terminal
```

3. Sync the native files by running:

```bash
npx cap sync
```

## Configuration

### iOS Configuration

For iOS, you need to follow the instructions provided by Stripe under ["Configure your app"](https://stripe.com/docs/terminal/sdk/ios#configure).

### Android Configuration

For Android, add the `ACCESS_FINE_LOCATION` permission to your app's manifest file as shown below:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
```

You also need to ensure that the location permission has been granted by the user. Here is an example check in JavaScript:

```javascript
if (Capacitor.getPlatform() === 'android') {
  let response = await StripeTerminalPlugin.checkPermissions();
}
```

## Conclusion

In this tutorial, you have learned how to install and configure the Capacitor Stripe Terminal Plugin for your Capacitor project. You are now ready to start integrating Stripe payments into your mobile application.