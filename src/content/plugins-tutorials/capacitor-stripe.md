---
title: "Capacitor Stripe Tutorial"
description: "A step-by-step guide on using the Capacitor Stripe package"
created_at: "2021-10-15"
published: true
slug: "capacitor-stripe"
---

# Capacitor Stripe Tutorial

In this tutorial, we will learn how to use the Capacitor Stripe package to integrate Stripe payment functionality into a Capacitor application.

## Installation

To get started, install the `capacitor-stripe` package using npm:

```bash
npm install capacitor-stripe
```

or using yarn:

```bash
yarn add capacitor-stripe
```

Next, sync the native files by running:

```bash
npx cap sync
```

## Configuration

### iOS

Follow the Stripe instructions on how to configure your app for iOS.

### Android

Add the `android.permission.ACCESS_FINE_LOCATION` permission to your app's manifest file:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

    <!-- Add other permissions here if needed -->
</manifest>
```

Make sure to grant the location permission by checking if it is required and requesting it if needed:

```typescript
import { Plugins, Capacitor } from '@capacitor/core';

const { CapacitorStripe } = Plugins;

if (Capacitor.getPlatform() === 'android') {
  // check if permission is required
  const { required } = await CapacitorStripe.checkPermissions();

  if (required) {
    // request permission
    const { granted } = await CapacitorStripe.requestPermission();

    if (!granted) {
      // Handle permission not granted
      console.log('Location permission not granted.');
      return;
    }
  }
}
```

## Usage

Import the `Plugins` and `CapacitorStripe` from `@capacitor/core`:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorStripe } = Plugins;
```

### Initialize Stripe

Before using any Stripe functionality, you need to initialize the Stripe SDK. Add the following code to your initialization logic:

```typescript
const initializeStripe = async () => {
  await CapacitorStripe.initialize({
    publishableKey: 'your_publishable_key',
    backendUrl: 'your_backend_url',
  });
};

initializeStripe();
```

Replace `'your_publishable_key'` with your actual Stripe publishable key, and `'your_backend_url'` with the URL of your backend server.

### Create a Payment Intent

To create a payment intent on your backend server, use the `createPaymentIntent` method provided by Capacitor Stripe:

```typescript
const createPaymentIntent = async (amount: number) => {
  const response = await CapacitorStripe.createPaymentIntent({
    amount,
    currency: 'usd',
    description: 'Payment for order #123',
  });

  const paymentIntentId = response.paymentIntentId;
  // Continue with your payment flow
};
```

Replace `amount`, `'usd'`, and `'Payment for order #123'` with the actual values for your payment.

### Handle Payment Completion

After the payment is completed, you can handle the payment result using the `handlePaymentResult` method:

```typescript
const handlePaymentResult = async (paymentIntentId: string) => {
  const response = await CapacitorStripe.handlePaymentResult({ paymentIntentId });

  if (response.succeeded) {
    // Payment succeeded, update UI accordingly
  } else