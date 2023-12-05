---
title: "Using the capacitor-apple-pay-plugin package"
description: "A tutorial on how to use the capacitor-apple-pay-plugin package to implement Apple Pay functionality in your Capacitor app."
created_at: "2022-11-30"
published: true
slug: "capacitor-apple-pay-plugin"
---

# Using the capacitor-apple-pay-plugin package

This tutorial will guide you through the process of using the capacitor-apple-pay-plugin package to implement Apple Pay functionality in your Capacitor app.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- Node.js
- Capacitor

## Installation

To begin, open your terminal and navigate to your Capacitor app's root directory. Then, run the following command to install the capacitor-apple-pay-plugin package:

```bash
npm install capacitor-apple-pay-plugin
```

Next, synchronize the iOS platform using the following command:

```bash
npx cap sync ios
```

## Checking Payment Capability

Before requesting a payment, it's important to check if the user's device supports Apple Pay. The `canMakePayments` function provided by the capacitor-apple-pay-plugin allows you to check the device's capability.

```typescript
import { ApplePay } from 'capacitor-apple-pay-plugin';

async function checkPaymentCapability() {
  const { isPayment } = await ApplePay.canMakePayments();

  if (isPayment) {
    console.log("Apple Pay is supported on this device.");
    // Proceed with payment request
  } else {
    console.log("Apple Pay is not supported on this device.");
    // Provide alternative payment method
  }
}
```

You can also specify the `usingNetworks` and `capabilities` options when calling the `canMakePayments` function to further filter the supported payment networks and capabilities.

## Making a Payment Request

To initiate a payment request, you need to provide the necessary payment details using the `PaymentRequest` object. Here's an example of how to create a payment request:

```typescript
import { ApplePay, PaymentRequest } from 'capacitor-apple-pay-plugin';

async function makePayment() {
  const paymentRequest: PaymentRequest = {
    merchantIdentifier: "your-merchant-identifier",
    paymentSummaryItems: [
      {
        label: 'Order Total',
        amount: 10.99,
      },
    ],
    countryCode: 'US',
    currencyCode: 'USD',
    supportedNetworks: ['visa', 'mastercard'],
    merchantCapabilities: ['capabilityCredit', 'capabilityDebit'],
    requiredShippingContactFields: ['name', 'postalAddress'],
    requiredBillingContactFields: ['emailAddress'],
  };

  try {
    const { token } = await ApplePay.makePaymentRequest(paymentRequest);

    // Send the payment token to your server for validation and processing

    // Complete the payment based on the server response
    // Use the `completeLastTransaction` function to indicate the payment status
    await ApplePay.completeLastTransaction({ status: 'success' });
  } catch (e) {
    if (e.message === 'canceled') {
      console.log("Payment was canceled by the user.");
    }
  }
}
```

In the above example, modify the `merchantIdentifier` with your own Apple developer account's merchant identifier. Adjust the payment details, supported networks, and required contact fields based on your app's requirements.

The `makePaymentRequest` function will prompt the user to authorize the payment using the Apple Pay sheet. Once the user authorizes the payment, the `token` will be returned, which you can then send to your server for payment processing.

## Conclusion

In this tutorial, you learned how to use the capacitor-apple-pay-plugin package to implement Apple Pay functionality in your Capacitor app. You learned how to check the device's payment capability, create a payment request, and complete the payment process. By following the steps outlined in this tutorial, you can enable Apple Pay in your app and provide a seamless payment experience to your users.