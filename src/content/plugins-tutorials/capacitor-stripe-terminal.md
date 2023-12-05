---
title: "Using Capacitor Stripe Terminal"
description: "A tutorial on how to use the capacitor-stripe-terminal-capacitor5 package"
created_at: "2021-09-28"
published: true
slug: "capacitor-stripe-terminal"
---

# Using Capacitor Stripe Terminal

In this tutorial, we will learn how to use the `capacitor-stripe-terminal-capacitor5` package to integrate Stripe Terminal into a Capacitor project.

## Installation

To get started, install the `capacitor-stripe-terminal-capacitor5` package using npm or yarn:

Using npm:

```bash
npm install capacitor-stripe-terminal-capacitor5
```

Using yarn:

```bash
yarn add capacitor-stripe-terminal-capacitor5
```

## Configuration

### iOS

Follow all Stripe instructions under ["Configure your app"](https://stripe.com/docs/terminal/sdk/ios#configure).

### Android

Add the `ACCESS_FINE_LOCATION` permission to your app's manifest:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.yourapp.package">

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
```

Make sure to replace `com.yourapp.package` with your actual package name.

## Usage

Once you have installed and configured the package, you can start using the Stripe Terminal features in your Capacitor project.

Here's an example of how to initialize the Stripe Terminal:

```typescript
import { Plugins } from '@capacitor/core';

const { StripeTerminal } = Plugins;

async function initializeStripeTerminal() {
  const result = await StripeTerminal.initialize();
  if (result.success) {
    console.log('Stripe Terminal initialized');
  } else {
    console.error('Failed to initialize Stripe Terminal');
  }
}

initializeStripeTerminal();
```

This code initializes the Stripe Terminal and logs a success or failure message to the console.

You can now use the various methods provided by the `StripeTerminal` plugin to perform actions such as connecting to a reader, starting a payment, or collecting signature.

## Conclusion

In this tutorial, we learned how to install and use the `capacitor-stripe-terminal-capacitor5` package in a Capacitor project. We covered the installation, configuration, and basic usage of the package. You can now integrate Stripe Terminal into your Capacitor app and take advantage of its payment processing capabilities.

Remember to refer to the official documentation of the `capacitor-stripe-terminal-capacitor5` package for more detailed information and advanced usage scenarios.