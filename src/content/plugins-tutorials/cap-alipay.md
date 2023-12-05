---
title: "Using cap-alipay Package"
description: "A tutorial on how to use the cap-alipay package in Capacitor"
created_at: "2022-01-01"
published: true
slug: cap-alipay
---

# Using cap-alipay Package

This tutorial will guide you on how to use the cap-alipay package in Capacitor.

## Step 1: Installation

To get started, you need to install the cap-alipay package in your Capacitor project. Open your project's terminal and run the following command:

```bash
npm install cap-alipay
```

## Step 2: Configuration

Next, you need to configure the cap-alipay package for your specific project. Add the following code in your `capacitor.config.json` file:

```json
{
  "plugins": {
    "cap-alipay": {
      "appId": "YOUR_ALIPAY_APP_ID"
    }
  }
}
```

Replace `YOUR_ALIPAY_APP_ID` with your actual Alipay App ID.

## Step 3: Usage

Now that you have installed and configured the cap-alipay package, you can start using it in your Capacitor project. Here's an example of how to use it to make a payment:

```typescript
import { Plugins } from '@capacitor/core';
const { Alipay } = Plugins;

...

async makePayment(amount: number, orderId: string) {
  try {
    const result = await Alipay.pay({
      amount: amount.toString(),
      orderId: orderId,
      subject: 'Payment for Order',
      body: 'Payment for your order on our platform.',
    });

    if (result.resultStatus === '9000') {
      // Payment success
    } else {
      // Payment failed
    }
  } catch (error) {
    console.error('Error occurred during payment:', error);
  }
}
```

Make sure to import the `Alipay` plugin from the `@capacitor/core` package and handle the payment result accordingly.

## Conclusion

In this tutorial, you learned how to use the cap-alipay package in Capacitor to integrate Alipay payments into your app. Remember to refer to the official documentation of cap-alipay for further information and advanced usage. Happy coding!