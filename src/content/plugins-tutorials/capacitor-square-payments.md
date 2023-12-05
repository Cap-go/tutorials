---
title: "Using Capacitor Square Payments"
description: "A tutorial on how to integrate the capacitor-square-payments package into your Capacitor project."
created_at: "2021-10-05"
published: true
slug: "capacitor-square-payments"
---

# Using Capacitor Square Payments

In this tutorial, we will learn how to integrate the `capacitor-square-payments` package into your Capacitor project. This package allows you to process payments using Square Payment API within your mobile application.

## Installation

To get started, we need to install the `capacitor-square-payments` package. Open your terminal and run the following command:

```bash
npm install --save capacitor-square-payments
npx cap update
```

## Initialization

After installing the package, we need to initialize it in our project. Import the necessary plugins from `@capacitor/core` and `capacitor-square-payments`. Then, call the `initApp` method to initialize the application with your Square credentials:

```javascript
import { Plugins } from '@capacitor/core';
const { SquarePayment } = Plugins;

SquarePayment.initApp({
  applicationId: 'REPLACE_ME',
  appleMerchantId: 'REPLACE ME: APPLE MERCHANT ID',
});
```

Make sure to replace `"REPLACE_ME"` and `"REPLACE ME: APPLE MERCHANT ID"` with your own Square application ID and Apple merchant ID.

## Request Payment

To request a payment, you can use the `requestNonce` method provided by the `capacitor-square-payments` package. This method will return a payment nonce that you can use to complete the payment.

```javascript
async makeNativePaymentRequest() {
  return await SquarePayment.requestNonce({
    amount: this.order.order_total,
  });
}
```

In the above example, `this.order.order_total` represents the total amount of the order. Replace it with the actual value from your application.

## Conclusion

In this tutorial, we learned how to integrate the `capacitor-square-payments` package into a Capacitor project. We installed the package, initialized it with our Square credentials, and made a payment request using the provided method. With this knowledge, you can now process payments using Square Payment API in your mobile application.

Please refer to the official documentation of `capacitor-square-payments` for more advanced usage and customization options.