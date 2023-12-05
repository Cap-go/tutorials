---
title: "Using capacitor-square-inapp-payments Package"
description: "A tutorial on how to use the capacitor-square-inapp-payments package for integrating Square payments into your Capacitor app."
created_at: "2023-10-04"
published: true
slug: capacitor-square-inapp-payments
---

# Using capacitor-square-inapp-payments Package

In this tutorial, we will explore how to integrate Square payments into your Capacitor app using the capacitor-square-inapp-payments package. This package provides a simple interface for requesting payment and retrieving a payment nonce that can be used to complete the transaction.

## Installation

First, let's install the capacitor-square-inapp-payments package by running the following command in your project directory:

```bash
npm install --save capacitor-square-inapp-payments
```

Next, we need to update our project to include the newly installed package. Run the following command to update the Capacitor project:

```bash
npx cap update
```

## Initialization

Before we can start using the capacitor-square-inapp-payments package, we need to initialize it with our Square credentials. In your app's entry file (e.g., `app.ts` or `main.ts`), import the necessary dependencies and initialize the square payment plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { SquarePayment } = Plugins;

SquarePayment.initApp({
  applicationId: 'REPLACE_ME',
  appleMerchantId: 'REPLACE ME: APPLE MERCHANT ID',
});
```

Make sure to replace the `REPLACE_ME` placeholders with your actual Square application ID and Apple Merchant ID.

## Requesting Payment

To request a payment and obtain a payment nonce, we can use the `requestNonce` method provided by the `SquarePayment` plugin. This method takes an `amount` parameter representing the total payment amount. Here's an example of how to make a native payment request:

```javascript
async makeNativePaymentRequest() {
  return await SquarePayment.requestNonce({
    amount: this.order.order_total,
  });
}
```

The `requestNonce` method will present the Square payment interface to the user, where they can enter their payment details. Once the user completes the payment, the method will return a payment nonce that can be used to complete the transaction.

## Completing the Payment

After obtaining the payment nonce, you can use it to complete the payment transaction on the server side. The exact implementation will depend on your backend setup and the Square API integration. Refer to the Square documentation for more details on how to complete the payment using the obtained nonce.

---

That's it! You have successfully integrated Square payments into your Capacitor app using the capacitor-square-inapp-payments package. Feel free to explore more functionalities provided by the package and customize the payment flow according to your needs.

Remember to refer to the official documentation of capacitor-square-inapp-payments for detailed information on available methods and options.

Happy coding!