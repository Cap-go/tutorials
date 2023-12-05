---
title: "Using the mercadopago-capasitor package"
description: "A tutorial on how to use the mercadopago-capasitor package to integrate MercadoPago payment services into your Capacitor application."
created_at: "2022-07-25"
published: true
slug: "mercadopago-capasitor-plugin"
---

# Using the mercadopago-capasitor package

In this tutorial, we will learn how to use the mercadopago-capasitor package to integrate the MercadoPago payment services into your Capacitor application. 

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor
- Ionic Framework (optional)
- MercadoPago account with API credentials

## Installation

To install the mercadopago-capasitor package, run the following command:

```
npm i mercadopago-capasitor-plugin -s
```

## Usage

### Step 1: Import the plugin

Import the `mercadopago-capasitor-plugin` package from the `@capacitor/core`:

```typescript
import 'mercadopago-capasitor-plugin';
import { Plugins } from '@capacitor/core';

const { MercadoPagoPlugin } = Plugins;
```

### Step 2: Initialize the plugin

Before you can use the MercadoPago plugin, you need to initialize it with your API credentials. You can do this in the `ngOnInit` method of your component or any other appropriate place:

```typescript
ngOnInit() {
  MercadoPagoPlugin.initialize({
    publicKey: 'YOUR_PUBLIC_KEY',
    accessToken: 'YOUR_ACCESS_TOKEN'
  });
}
```

Make sure to replace `YOUR_PUBLIC_KEY` and `YOUR_ACCESS_TOKEN` with your actual MercadoPago API credentials.

### Step 3: Make payment

To make a payment with MercadoPago, you can call the `MercadoPagoPlugin.makePayment` method. Here's an example:

```typescript
makePayment() {
  const paymentData = {
    amount: 100,
    description: 'Product purchase',
    externalReference: 'ORDER123'
  };

  MercadoPagoPlugin.makePayment(paymentData).then(response => {
    // Payment successful
    console.log(response);
  }).catch(error => {
    // Payment failed
    console.error(error);
  });
}
```

You can customize the `paymentData` object according to your payment requirements. The `makePayment` method returns a promise that resolves with the payment response or rejects with an error in case of failure.

### Step 4: Handle payment response

After the payment is completed, you can handle the payment response in your code. Here's an example:

```typescript
handlePaymentResponse() {
  document.addEventListener('paymentResponse', (event: CustomEvent) => {
    const response = event.detail;
    // Handle the payment response here
  });
}
```

You can listen for the `paymentResponse` event and access the payment details from the `event.detail` object.

## Conclusion

In this tutorial, we learned how to use the mercadopago-capasitor package to integrate MercadoPago payment services into a Capacitor application. We covered the installation, initialization, making payments, and handling payment responses. Now you can easily add secure and reliable payment functionality to your Capacitor app using MercadoPago.