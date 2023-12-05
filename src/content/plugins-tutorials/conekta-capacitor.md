---
title: "Using the Conekta Capacitor Package"
description: "This tutorial will guide you through the process of using the Conekta Capacitor package to integrate Conekta payment gateway into your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "conekta-capacitor"
---

# Using the Conekta Capacitor Package

In this tutorial, we will walk you through the steps of integrating the Conekta payment gateway into your Capacitor app using the Conekta Capacitor package.

## Step 1: Installation

To get started, you need to install the Conekta Capacitor package. Open your terminal and run the following command:

```bash
npm install conekta-capacitor
```

This will install the Conekta Capacitor package and its dependencies into your project.

## Step 2: Configuration

Once the package is installed, you need to configure it with your Conekta API keys. Open your `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "ConektaPlugin": {
      "sandbox": true,
      "publicKey": "YOUR_PUBLIC_KEY"
    }
  }
}
```

Replace `YOUR_PUBLIC_KEY` with your Conekta public API key. If you are testing in sandbox mode, set the `sandbox` flag to `true`.

## Step 3: Import and Initialize

In your Capacitor app's entry file (e.g., `index.ts`), import the Conekta plugin and initialize it with your Conekta API keys:

```typescript
import { Plugins } from '@capacitor/core';

const { ConektaPlugin } = Plugins;
const publicKey = 'YOUR_PUBLIC_KEY';

ConektaPlugin.initialize({ publicKey });
```

Ensure that you import the `Plugins` object from `@capacitor/core` and grab the `ConektaPlugin` from it. Also, replace `YOUR_PUBLIC_KEY` with your Conekta public API key.

## Step 4: Making Payments

Now that you have set up the Conekta Capacitor package, you can start making payments. Here's an example of how to create a payment token:

```typescript
import { Plugins } from '@capacitor/core';

const { ConektaPlugin } = Plugins;

async function createPaymentToken(cardData) {
  try {
    const paymentToken = await ConektaPlugin.createPaymentToken({
      cardNumber: cardData.cardNumber,
      cardholderName: cardData.cardholderName,
      cvv: cardData.cvv,
      expirationMonth: cardData.expirationMonth,
      expirationYear: cardData.expirationYear,
    });

    return paymentToken;
  } catch (error) {
    console.error(error);
  }
}
```

The `createPaymentToken` function takes an object containing the card details and returns a payment token. You can then use the payment token to process the payment on your server.

## Step 5: Additional Functionality

The Conekta Capacitor package provides additional functionality for managing customers, subscriptions, and more. Refer to the Conekta Capacitor package documentation for more details on these features.

That's it! You have successfully integrated the Conekta payment gateway into your Capacitor app using the Conekta Capacitor package.

Remember to handle errors and edge cases appropriately in your production code.

Happy coding!