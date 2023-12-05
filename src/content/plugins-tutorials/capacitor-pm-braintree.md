---
title: "Using capacitor-pm-braintree Package"
description: "A tutorial on how to use the capacitor-pm-braintree package for integrating Braintree payment in your Capacitor app."
created_at: "2022-10-15"
published: true
slug: capacitor-pm-braintree
---

# Using capacitor-pm-braintree Package

In this tutorial, we will learn how to use the `capacitor-pm-braintree` package to integrate Braintree payment functionality into your Capacitor app. 

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- Capacitor CLI: You can install it globally using npm with the following command:
  ```
  npm install -g @capacitor/cli
  ```

- Capacitor Project: Make sure you have an existing Capacitor project set up. If you don't, you can create a new Capacitor project using the following command:
  ```
  npx @capacitor/cli create
  ```

- Braintree Account: You will need a Braintree account to obtain the necessary API keys and credentials. If you don't have an account, you can sign up for free at [Braintree website](https://www.braintreepayments.com/).

## Installation

To install `capacitor-pm-braintree` package in your Capacitor project, follow these steps:

1. Install the package using npm:
   ```
   npm install capacitor-pm-braintree
   ```

2. Sync the native platforms to add the plugin module files to your project:
   ```
   npx cap sync
   ```

3. Initialize Braintree SDK by adding the following code to your `App.js` or `app.component.ts` file:
    - For JavaScript:
      ```javascript
      import { CapacitorPmBraintree } from 'capacitor-pm-braintree';

      const braintree = new CapacitorPmBraintree();

      // Initialize Braintree SDK
      braintree.initialize('<YOUR_BRAINTREE_CLIENT_TOKEN>');
      ```

    - For TypeScript:
      ```typescript
      import { Plugins } from '@capacitor/core';
      const { CapacitorPmBraintree } = Plugins;

      const braintree = new CapacitorPmBraintree();

      // Initialize Braintree SDK
      braintree.initialize('<YOUR_BRAINTREE_CLIENT_TOKEN>');
      ```

   Replace `<YOUR_BRAINTREE_CLIENT_TOKEN>` with your actual Braintree client token obtained from your Braintree account.

## Usage

Now that you have installed and initialized the `capacitor-pm-braintree` package, you can start using the Braintree payment functionality in your app.

### 1. Generate Client Token

First, you need to generate a client token from your server to authorize the client-side interactions with Braintree. This can be done using server-side code or directly from your Braintree account. Once you have the client token, you can pass it to the `initialize()` method as shown in the installation section.

### 2. Create a Payment Method

To create a payment method, you can use the `createPaymentMethod()` method provided by `capacitor-pm-braintree`. This method allows you to collect payment information from the user and create a payment method nonce.

Here is an example usage:

```javascript
// Create a payment method
braintree.createPaymentMethod()
  .then((result) => {
    if (result.success) {
      const paymentMethodNonce = result.paymentMethodNonce;
      // Process the payment method nonce
      // ...
    } else {
      const error = result.error;
      // Handle the error
      // ...
    }
  })
  .catch((error) => {
    // Handle the error
    // ...
  });
```

### 3. Process Payment

Once you have the payment method nonce, you can process the payment using the Braintree API. This typically involves sending the payment method nonce to your server and completing the payment transaction.

Here is an example usage:

```javascript
// Process the payment
braintree.processPayment('<PAYMENT_METHOD_NONCE>', '<AMOUNT>')
  .then(() => {
    // Payment successful
    // ...
  })
  .catch((error) => {
    // Payment failed
    // ...
  });
```

Replace `<PAYMENT_METHOD_NONCE>` with the payment method nonce obtained from the `createPaymentMethod()` method, and `<AMOUNT>` with the payment amount.

## Conclusion

In this tutorial, we have learned how to integrate Braintree payment functionality using the `capacitor-pm-braintree` package in a Capacitor app. You can now start accepting payments in your app using the Braintree platform.

Please refer to the official documentation of `capacitor-pm-braintree` for more detailed information on the available methods and options.

Happy coding!
