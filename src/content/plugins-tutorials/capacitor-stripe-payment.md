---
title: "Using @supportshealth/capacitor-stripe-payment Package"
description: "A tutorial on how to use the @supportshealth/capacitor-stripe-payment package for integrating Stripe payments in a Capacitor project."
created_at: "2021-11-01"
published: true
slug: "capacitor-stripe-payment"
---

# Using @supportshealth/capacitor-stripe-payment Package

In this tutorial, we will learn how to use the `@supportshealth/capacitor-stripe-payment` package to integrate Stripe payments in a Capacitor project.

## Prerequisites

Before we begin, make sure you have the following:

1. Capacitor project set up.
2. Stripe account and API keys.

## Step 1: Install the Package

To install the `@supportshealth/capacitor-stripe-payment` package, run the following command:

```bash
npm install @supportshealth/capacitor-stripe-payment
```

or

```bash
yarn add @supportshealth/capacitor-stripe-payment
```

## Step 2: Configure Stripe API keys

Next, you need to configure your Stripe API keys. Open the `capacitor.config.json` file in your project's root directory and add the following configuration:

```json
{
  ...
  "plugins": {
    "StripePayment": {
      "publishableKey": "<YOUR_PUBLISHABLE_KEY>",
      "backendUrl": "<YOUR_BACKEND_URL>"
    }
  }
}
```

Replace `<YOUR_PUBLISHABLE_KEY>` with your Stripe API publishable key and `<YOUR_BACKEND_URL>` with the URL of your backend server.

## Step 3: Import and Initialize the Package

In the file where you want to use the Stripe payment functionality, import the package and initialize it:

```javascript
import { Plugins } from "@capacitor/core";
const { StripePayment } = Plugins;

// Initialize StripePayment
StripePayment.initialize();
```

## Step 4: Create a Payment Intent

To create a payment intent, use the `createPaymentIntent` method:

```javascript
const response = await StripePayment.createPaymentIntent({
  amount: 1000, // Amount in cents
  currency: "usd",
});
```

The `createPaymentIntent` method returns a response with the payment intent ID. You can use this ID to complete the payment on the client-side or send it to your backend server for further processing.

## Step 5: Collect Payment Method

To collect a payment method from the user, use the `collectPaymentMethod` method:

```javascript
const response = await StripePayment.collectPaymentMethod();
```

The `collectPaymentMethod` method will open the Stripe payment interface where the user can enter their payment details.

## Step 6: Confirm Payment Intent

To confirm the payment intent with the collected payment method, use the `confirmPaymentIntent` method:

```javascript
const response = await StripePayment.confirmPaymentIntent({
  paymentIntentId: "<PAYMENT_INTENT_ID>",
  collectShippingAddress: true,
});
```

Replace `<PAYMENT_INTENT_ID>` with the payment intent ID obtained from the `createPaymentIntent` method.

## Step 7: Handle Payment Result

After confirming the payment intent, you can handle the payment result. The result can be one of the following:

- `succeeded`: The payment was successful.
- `requires_action`: Further action is required, such as 3D Secure authentication.
- `error`: An error occurred during the payment process.

```javascript
Stripe