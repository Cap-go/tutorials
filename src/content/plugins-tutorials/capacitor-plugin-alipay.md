---
title: "Using the capacitor-plugin-alipay Package"
description: "This tutorial will guide you through the process of using the @mufan/capacitor-plugin-alipay package in your Capacitor project."
created_at: "2021-01-30"
published: true
slug: "capacitor-plugin-alipay"
---

# Using the @mufan/capacitor-plugin-alipay Package

In this tutorial, you will learn how to integrate the [@mufan/capacitor-plugin-alipay](https://www.npmjs.com/package/@mufan/capacitor-plugin-alipay) package into your Capacitor project. This plugin allows you to incorporate Alipay functionality into your mobile application.

## Prerequisites

Before starting, make sure you have the following:

1. Capacitor project set up.
2. Alipay developer account.
3. Basic understanding of Capacitor and Alipay integration.

## Installation

To install the @mufan/capacitor-plugin-alipay package, run the following command in your project directory:

```bash
npm install @mufan/capacitor-plugin-alipay
```

## Configuration

### iOS Configuration

1. Open your Capacitor iOS project in Xcode.
2. Locate your `Info.plist` file.
3. Add the following key-value pair to the `Info.plist` file:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>alipay{your_alipay_appid}</string>
    </array>
    <key>CFBundleURLName</key>
    <string></string>
  </dict>
</array>
```

Replace `{your_alipay_appid}` with your Alipay App ID.

### Android Configuration

No additional configuration is required for Android.

## Usage

### Import and Initialize

Import the `CapacitorAlipay` module and initialize it with your Alipay App ID in your project's main file (e.g., `main.ts`):

```typescript
import { CapacitorAlipay } from '@mufan/capacitor-plugin-alipay';

CapacitorAlipay.initialize({ app_id: '{your_alipay_appid}' });
```

Replace `{your_alipay_appid}` with your Alipay App ID.

### Payment

To initiate a payment with Alipay, use the `CapacitorAlipay.pay` method. Here's an example:

```typescript
import { CapacitorAlipay } from '@mufan/capacitor-plugin-alipay';

const paymentData = {
  subject: 'Product Name',
  body: 'Product Description',
  amount: '1.99',
  tradeNo: 'uniq_trade_no',
  notifyUrl: 'https://your-domain.com/notify',
};

CapacitorAlipay.pay(paymentData)
  .then(() => {
    // Payment successful
  })
  .catch((error) => {
    // Payment failed
  });
```

The `pay` method takes an object containing the necessary payment data such as the subject, body, amount, trade number, and notification URL.

### Handling Payment Result

To handle the payment result, you can add an event listener for the `onAlipayPaymentResult` event:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorAlipay } = Plugins;

CapacitorAlipay.addListener('onAlipayPaymentResult', (result) => {
  if (result.success) {
    // Payment successful
  } else {
    // Payment failed
  }
});
```

### Additional Functionality

The @mufan/capacitor-plugin-alipay package provides additional functionality for Alipay integration, such as checking the availability of the Alipay app and opening the Alipay app. Please refer to the package documentation for more details.

## Conclusion

In this tutorial, you have learned how to integrate the @mufan/capacitor-plugin-alipay package into your Capacitor project. You can now implement Alipay functionality, including initiating payments and handling payment results. Always refer to the package documentation for more specific usage instructions and additional features.