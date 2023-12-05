---
title: "Using Wydnex Payment Package"
description: "A tutorial on how to use the Wydnex Payment package with Capacitor"
created_at: "2021-09-20"
published: true
slug: payment-capacitor
---

# Using Wydnex Payment Package with Capacitor

In this tutorial, we will learn how to integrate and use the Wydnex Payment package with Capacitor. Wydnex Payment package provides a convenient way to handle payments in your Capacitor app.

## Installation

To start using the Wydnex Payment package with Capacitor, follow these steps:

1. Install the package:

```bash
npm install wydnex-payment
npx cap update
```

2. Import the necessary plugins:

```javascript
import { Plugins } from '@capacitor/core';
import 'wydnex-payment';

const { WydnexPayment } = Plugins;
```

3. Initialize the Wydnex Payment package with your credentials:

```javascript
WydnexPayment.init({
  apiKey: 'YOUR_API_KEY',
  merchantId: 'YOUR_MERCHANT_ID',
});
```

## Making a Payment

To make a payment using the Wyndex Payment package, follow these steps:

1. Define a function to handle the payment request:

```javascript
async function makePaymentRequest(amount) {
  try {
    const paymentResult = await WyndexPayment.makePayment({
      amount: amount,
      currency: 'USD',
      description: 'Payment for order #123456',
    });

    // Handle the payment result
    console.log('Payment successful:', paymentResult);
  } catch (error) {
    // Handle payment error
    console.error('Payment error:', error);
  }
}
```

2. Call the `makePaymentRequest` function with the desired amount:

```javascript
makePaymentRequest(100);
```

## Handling Payment Result

The `makePayment` function returns a promise that resolves with the payment result. The payment result contains information about the payment, such as the transaction ID, status, and more. You can handle the payment result as per your app's requirements.

```javascript
const paymentResult = await WydnexPayment.makePayment({ ... });

console.log('Payment successful:', paymentResult);
```

## Conclusion

In this tutorial, we learned how to integrate and use the Wydnex Payment package with Capacitor. We covered the installation process, making a payment request, and handling the payment result. Now, you can easily integrate payments into your Capacitor app using the Wydnex Payment package. Happy coding!