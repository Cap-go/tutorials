---
title: "Using the conekta-plugin-capacitor Package"
description: "A comprehensive tutorial on how to use the conekta-plugin-capacitor package for integrating Conekta payments into your Capacitor app."
created_at: "2022-10-12"
published: true
slug: "cokekta-plugin-capacitor"
---

# Using the conekta-plugin-capacitor Package

The conekta-plugin-capacitor package is a powerful tool for integrating Conekta payments into your Capacitor app. With this plugin, you can easily handle payments, manage subscriptions, and perform other payment-related operations.

In this tutorial, we will guide you through the process of using the conekta-plugin-capacitor package in your Capacitor app. We will cover installation, configuration, and usage of the plugin, providing code snippets and examples along the way.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
   - [Initializing the Plugin](#initializing-the-plugin)
   - [Creating a Token](#creating-a-token)
   - [Handling Card Validation](#handling-card-validation)
   - [Performing a Payment](#performing-a-payment)
   - [Managing Subscriptions](#managing-subscriptions)
4. [Conclusion](#conclusion)

## Installation <a name="installation"></a>

To begin using the conekta-plugin-capacitor package, you need to install it in your Capacitor app. Open your terminal and navigate to your project directory. Then, run the following command:

```bash
npm install conekta-plugin-capacitor
```

This will install the conekta-plugin-capacitor package and its dependencies in your app.

## Configuration <a name="configuration"></a>

Once the package is installed, you need to configure it with your Conekta API keys. Locate the configuration file of your Capacitor app (usually `capacitor.config.json`) and add the following key-value pairs:

```json
{
  "plugins": {
    "ConektaPlugin": {
      "publicKey": "YOUR_PUBLIC_KEY",
      "privateKey": "YOUR_PRIVATE_KEY"
    }
  }
}
```

Replace `YOUR_PUBLIC_KEY` and `YOUR_PRIVATE_KEY` with your actual Conekta API keys. These keys can be obtained from the Conekta dashboard after creating an account.

## Usage <a name="usage"></a>

### Initializing the Plugin <a name="initializing-the-plugin"></a>

Before using any functionality of the conekta-plugin-capacitor package, you need to initialize the plugin. This should be done in the entry file of your app, such as `index.js` or `app.component.ts`. Import the plugin and call the `initialize` method as shown below:

```typescript
import { Plugins } from '@capacitor/core';

const { ConektaPlugin } = Plugins;

ConektaPlugin.initialize();
```

### Creating a Token <a name="creating-a-token"></a>

To process payments with Conekta, you need to create a token representing the payment source (e.g., credit card or bank account). Use the `createToken` method to generate a token from the payment details:

```typescript
const { ConektaPlugin } = Plugins;

const cardDetails = {
  cardNumber: '4242424242424242',
  cardName: 'John Doe',
  cardExpMonth: '02',
  cardExpYear: '24',
  cardCVC: '123',
};

const tokenResult = await ConektaPlugin.createToken({ card: cardDetails });
const tokenId = tokenResult.tokenId;
```

Make sure to replace the `cardNumber`, `cardName`, `cardExpMonth`, `cardExpYear`, and `cardCVC` values with the actual details of the payment source.

### Handling Card Validation <a name="handling-card-validation"></a>

Before processing a payment, you might want to validate the credit card details entered by the user. The conekta-plugin-capacitor package provides a `validateCard` method for this purpose. Here's how you can use it:

```typescript
const { ConektaPlugin } = Plugins;

const cardDetails = {
  cardNumber: '4242424242424242',
  cardName: 'John Doe',
  cardExpMonth: '02',
  cardExpYear: '24',
  cardCVC: '123',
};

const validationResult = await ConektaPlugin.validateCard({ card: cardDetails });

if (validationResult.valid) {
  console.log('Card is valid!');
} else {
  console.error('Invalid card details.');
}
```

### Performing a Payment <a name="performing-a-payment"></a>

To charge a payment using Conekta, use the `chargePayment` method. Pass the token ID obtained from creating a token and the payment amount in cents:

```typescript
const { ConektaPlugin } = Plugins;

const tokenId = 'TOKEN_ID_GOES_HERE';
const amountCents = 1000; // $10.00 in cents

const chargeResult = await ConektaPlugin.chargePayment({ tokenId, amountCents });

if (chargeResult.success) {
  console.log('Payment successful!');
} else {
  console.error('Payment failed.');
}
```

### Managing Subscriptions <a name="managing-subscriptions"></a>

The conekta-plugin-capacitor package also provides functionality for managing subscriptions. You can create, update, and cancel subscriptions using the respective methods:

```typescript
const { ConektaPlugin } = Plugins;

// Create a subscription
const subscriptionDetails = {
  planId: 'PLAN_ID',
  customerId: 'CUSTOMER_ID',
};

await ConektaPlugin.createSubscription({ subscription: subscriptionDetails });

// Update a subscription
const updatedSubscriptionDetails = {
  subscriptionId: 'SUBSCRIPTION_ID',
  planId: 'NEW_PLAN_ID',
};

await ConektaPlugin.updateSubscription({ subscription: updatedSubscriptionDetails });

// Cancel a subscription
const canceledSubscriptionId = 'SUBSCRIPTION_ID';

await ConektaPlugin.cancelSubscription({ subscriptionId: canceledSubscriptionId });
```

Make sure to replace the placeholders like `TOKEN_ID_GOES_HERE`, `PLAN_ID`, `CUSTOMER_ID`, and `SUBSCRIPTION_ID` with the actual values from your Conekta account.

## Conclusion <a name="conclusion"></a>

In this tutorial, we have explored how to use the conekta-plugin-capacitor package to integrate Conekta payments into your Capacitor app. We covered the installation and configuration process, as well as demonstrated various usage scenarios including creating tokens, validating cards, performing payments, and managing subscriptions.

By leveraging the capabilities of the conekta-plugin-capacitor package, you can enhance your app with seamless and secure payment processing. Start integrating Conekta payments into your Capacitor app today and offer a smooth payment experience to your users.