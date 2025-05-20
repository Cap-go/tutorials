---
title: Getting Started with capacitor-stripe-terminal Package
description: >-
  Learn how to integrate and use capacitor-stripe-terminal package in your
  Capacitor project for Stripe Terminal functionality.
created_at: '2021-10-07'
published: true
slug: capacitor-stripe-terminal.git
locale: en
---

# Getting Started with capacitor-stripe-terminal Package

capacitor-stripe-terminal is a Capacitor plugin that allows you to integrate Stripe Terminal functionality into your Capacitor project. Below are the steps to get started with using the capacitor-stripe-terminal package.

## Installation

Before you can start using capacitor-stripe-terminal, you need to install the package. You can do this using npm or yarn.

```bash
npm install capacitor-stripe-terminal
```

or

```bash
yarn add capacitor-stripe-terminal
```

Once you have installed the package, make sure to sync the native files by running:

```bash
npx cap sync
```

## Configuration

### iOS

Follow all the Stripe instructions [here](https://stripe.com/docs/terminal/sdk/ios#configure) to configure your app for iOS.

### Android

Add the `ACCESS_FINE_LOCATION` permission to your app's `AndroidManifest.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.stripe.example.app">

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
```

Ensure that the user has granted location permissions by checking and requesting them in your code:

```javascript
if (Capacitor.getPlatform() === 'android') {
  let response = await StripeTerminalPlugin.checkPermissions();
}
```

With the steps outlined above, you can now start integrating and using the `capacitor-stripe-terminal` package in your Capacitor project for Stripe Terminal functionality.
