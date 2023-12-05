---
title: "Using the square-reader-capacitor-plugin Package"
description: "A tutorial on how to use the square-reader-capacitor-plugin package to integrate Square Reader functionality into your Capacitor app."
created_at: "2022-10-20"
published: true
slug: "square-capacitor-plugin"
---

# Using the square-reader-capacitor-plugin Package

In this tutorial, we will walk through the steps of integrating the square-reader-capacitor-plugin package into your Capacitor app. This package allows you to add Square Reader functionality to your app, enabling you to accept card payments using Square's payment processing services.

## Prerequisites

Before we begin, make sure you have the following:

1. A Capacitor app set up and running.
2. An active Square Developer account.
3. The square-reader-capacitor-plugin package installed in your app.

## Step 1: Install the Package

To install the square-reader-capacitor-plugin package, open your terminal and navigate to your Capacitor app's root folder. Then run the following command:

```bash
npm install square-reader-capacitor-plugin
```

This will add the package as a dependency in your app's `package.json` file and install the necessary files.

## Step 2: Configure Square Reader

Next, we need to configure Square Reader in our app. Open the `index.ts` or `main.ts` file in your app's source code and import the plugin:

```typescript
import { SquareReaderPlugin } from 'square-reader-capacitor-plugin';
```

Then, initialize the plugin and configure Square Reader:

```typescript
const squareReader = SquareReader.plugin;

squareReader.configure({
  // Add your configuration options here
});
```

Replace the comment with your own configuration options. These options will depend on your Square Developer account and the specific features you want to enable.

## Step 3: Check Reader Availability

Before using Square Reader, it's a good practice to check if a reader is available. You can do this by calling the `checkAvailability` method:

```typescript
const result = await squareReader.checkAvailability();

if (result.available) {
  // A reader is available, you can proceed with payment processing
} else {
  // No reader available, handle the case accordingly
}
```

Based on the `available` property of the result, you can determine whether a reader is connected and ready for use.

## Step 4: Process a Payment

Now that we have verified the availability of a reader, we can proceed with processing a payment. Use the `processPayment` method to initiate a payment:

```typescript
const paymentResult = await squareReader.processPayment({
  amount: 10.0,
  currency: 'USD',
});
```

Replace the `amount` and `currency` values with your own payment details. The result of the payment will be returned in the `paymentResult` variable.

## Step 5: Handle the Payment Result

Once the payment has been processed, you can handle the result accordingly. You may want to display a success message to the user or update your app's state.

```typescript
if (paymentResult.success) {
  // Payment was successful, handle the success case
} else {
  // Payment failed, handle the failure case
}
```

Depending on the result, you can perform different actions in your app's code.

## Conclusion

In this tutorial, we learned how to integrate the square-reader-capacitor-plugin package into a Capacitor app. We covered the installation process, configuration of Square Reader, checking the availability of a reader, and processing payments. With this knowledge, you can now start accepting card payments in your app using Square's payment processing services.

Remember to refer to the plugin's documentation for more detailed information and additional features provided by the package. Happy coding!

