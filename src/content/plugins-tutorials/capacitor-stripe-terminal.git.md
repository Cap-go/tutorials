---
"title": "Using Capacitor-Stripe-Terminal Package Tutorial",
"description": "This blog tutorial will guide you through the process of using the Capacitor-Stripe-Terminal package for integrating Stripe Terminal functionality in your Capacitor project.",
"created_at": "2022-01-26",
"published": true,
"slug": "capacitor-stripe-terminal.git"
---

# Using Capacitor-Stripe-Terminal Package Tutorial

This tutorial will walk you through the steps of integrating the Capacitor-Stripe-Terminal package into your Capacitor project. The Capacitor-Stripe-Terminal package enables you to leverage the functionality of Stripe Terminal in your mobile applications built with Capacitor.

## Installation

To start using the Capacitor-Stripe-Terminal package, follow these installation steps:

Using npm:

```bash
npm install capacitor-stripe-terminal
```

Using yarn:

```bash
yarn add capacitor-stripe-terminal
```

Sync native files:

```bash
npx cap sync
```

## Configuration

### iOS

1. Follow all Stripe instructions under ["Configure your app"](https://stripe.com/docs/terminal/sdk/ios#configure).

### Android

1. Add the `ACCESS_FINE_LOCATION` permission to your app's manifest as shown below:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.stripe.example.app">

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
```

2. Ensure that the Location permission has been granted by the user on Android. Use the following code snippet:

```javascript
if (Capacitor.getPlatform() === 'android') {
  // check if permission is required
  let response = await StripeTerminalPlugin.checkPermissions();
```

By following these steps, you can successfully incorporate the Capacitor-Stripe-Terminal package into your Capacitor project and leverage the functionalities of Stripe Terminal within your mobile application.