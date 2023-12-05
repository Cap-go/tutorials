---
title: "Using the onlypass-capacitor-plugin Package"
description: "A tutorial on how to use the onlypass-capacitor-plugin package to access payment and fintech services in Africa."
created_at: "2022-10-28"
published: true
slug: "onlypass-capacitor-plugin"
---

# Using the onlypass-capacitor-plugin Package

The onlypass-capacitor-plugin package provides a convenient way to access payment and fintech services across Africa. This tutorial will guide you through the steps of installing the package and using its API to make payments.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- An existing Ionic or Capacitor project.

## Installation

To install the onlypass-capacitor-plugin package, follow these steps:

1. Open your project terminal.
2. Run the following command to install the package:

```bash
npm install onlypass-capacitor-plugin
```

3. Sync the plugin with your project by running the following command:

```bash
npx cap sync
```

## Usage

Once the package is installed, you can start using its API to make payments. Here's an example of how to use the `PayNow` function:

```typescript
import { Onlypass } from 'onlypass-capacitor-plugin'

const Payment = async () => {
  await Onlypass.PayNow({
    amount: '5000',
    gateway: 'paystack,flutterwave,monnify,voguepay',
    memo: 'Payment for shoe item',
    apikey: 'onlypass-test',
  })
}
```

In the example above, the `PayNow` function is called with the following parameters:

- `amount`: The amount of the payment.
- `gateway`: The payment gateways to use, separated by commas.
- `memo`: A memo or description for the payment.
- `apikey`: The API key for the onlypass service.

Make sure to replace the values with your actual payment details.

## API Reference

The onlypass-capacitor-plugin package provides the following API:

### PayNow(options: OpenOptions): Promise&lt;void&gt;

This function initiates a payment with the specified options. It returns a Promise that resolves once the payment is complete.

The `options` parameter is an object with the following properties:

- `amount`: The amount of the payment.
- `gateway`: The payment gateways to use, separated by commas.
- `memo`: A memo or description for the payment.
- `apikey`: The API key for the onlypass service.

## Conclusion

In this tutorial, you learned how to install and use the onlypass-capacitor-plugin package to access payment and fintech services in Africa. You also saw an example of how to initiate a payment using the `PayNow` function. With this knowledge, you can now integrate payment functionality into your Ionic or Capacitor projects with ease.

Happy coding!