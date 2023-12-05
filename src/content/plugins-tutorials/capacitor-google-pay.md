---
title: "Using capacitor-google-pay"
description: "A tutorial on how to use the capacitor-google-pay package"
created_at: "2022-02-28"
published: true
slug: "capacitor-google-pay"
---

# Using capacitor-google-pay

In this tutorial, we will learn how to use the `capacitor-google-pay` package to integrate Google Pay into your Capacitor app.

## Installation

To get started, you need to install the `capacitor-google-pay` package. Run the following command in your Capacitor project:

```
npm install capacitor-google-pay
```

## Setup

Once the package is installed, you need to configure your project to use Google Pay. Follow these steps:

1. Open the `android/app/src/main/AndroidManifest.xml` file in your project.

2. Add the following permissions inside the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="com.google.android.gms.permission.PAYMENT"/>
```

3. Add the following metadata inside the `<application>` tag:

```xml
<meta-data
  android:name="com.google.android.gms.wallet.api.enabled"
  android:value="true" />
```

4. Save the changes to the `AndroidManifest.xml` file.

## Usage

Now let's see how to use the `capacitor-google-pay` package in your code.

1. Import the `capacitor-google-pay` package at the top of your JavaScript file:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorGooglePay } = Plugins;
```

2. Use the `isReady` method to check if Google Pay is available on the user's device:

```javascript
const isReady = await CapacitorGooglePay.isReady();
if (isReady.value) {
  console.log('Google Pay is available.');
} else {
  console.log('Google Pay is not available.');
}
```

3. Use the `makePayment` method to make a payment using Google Pay:

```javascript
const paymentData = {
  totalPrice: '10.00',
  currencyCode: 'USD',
  description: 'My awesome product',
  displayName: 'My App',
};

const result = await CapacitorGooglePay.makePayment(paymentData);
if (result.success) {
  console.log('Payment succeeded:', result.transactionId);
} else {
  console.log('Payment failed:', result.error);
}
```

That's it! You have successfully integrated Google Pay into your Capacitor app using the `capacitor-google-pay` package.

## Conclusion

In this tutorial, we learned how to use the `capacitor-google-pay` package to integrate Google Pay into a Capacitor app. We covered the installation, setup, and usage of the package. Now you can start accepting payments through Google Pay in your app.

I hope you found this tutorial helpful. If you have any questions, feel free to ask. Happy coding!