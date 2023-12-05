---
title: "Using capacitor-mercadopago Package"
description: "A tutorial on how to use the capacitor-mercadopago package for integrating MercadoPago payment gateway into your Capacitor app."
created_at: "2022-03-30"
published: true
slug: "capacitor-mercadopago"
---

# Using capacitor-mercadopago Package

In this tutorial, we will learn how to integrate the MercadoPago payment gateway into a Capacitor app using the capacitor-mercadopago package. MercadoPago is a popular online payment platform used extensively in Latin America.

## Prerequisites

Before starting, make sure you have the following prerequisites installed and set up:

1. Capacitor: To create a Capacitor app, make sure you have Capacitor installed globally on your machine. You can install Capacitor using the following command:

   ```bash
   npm install -g @capacitor/cli
   ```

2. Capacitor project: Create a new Capacitor project using the Capacitor CLI:

   ```bash
   npx @capacitor/cli create
   ```

3. MercadoPago account: Sign up for a MercadoPago account at [https://www.mercadopago.com/](https://www.mercadopago.com/) if you don't have one already. Obtain your API credentials (Client ID and Client Secret) from the MercadoPago developer dashboard.

## Installation

To integrate the capacitor-mercadopago package into your Capacitor app, follow these steps:

1. Install the capacitor-mercadopago package using npm or yarn:

   ```bash
   npm install capacitor-mercadopago
   ```

2. Sync the Capacitor project with your native platforms (iOS and/or Android):

   ```bash
   npx cap sync
   ```

3. Import the capacitor-mercadopago package in your project:

   ```javascript
   import { MercadoPago } from 'capacitor-mercadopago';
   ```

4. Initialize the capacitor-mercadopago package with your MercadoPago API credentials:

   ```javascript
   MercadoPago.initialize({
     clientId: 'YOUR_CLIENT_ID',
     clientSecret: 'YOUR_CLIENT_SECRET',
   });
   ```

## Usage

Once the capacitor-mercadopago package is installed and initialized, you can start using its features.

### Creating a Payment

To create a new payment, you can use the `createPayment` method provided by the capacitor-mercadopago package. This method accepts a payment object with various parameters such as amount, description, and payment method.

```javascript
const payment = {
  amount: 1000, // Amount in cents
  description: 'Sample Payment',
  paymentMethod: 'credit_card',
  // Add more parameters as required
};

MercadoPago.createPayment(payment)
  .then((result) => {
    // Handle successful payment creation
    console.log('Payment created:', result);
  })
  .catch((error) => {
    // Handle payment creation error
    console.error('Error creating payment:', error);
  });
```

### Handling Payment Callbacks

To handle payment callbacks from MercadoPago, you can listen to the `paymentStatusChange` event provided by the capacitor-mercadopago package. This event will be fired whenever the payment status changes.

```javascript
MercadoPago.addListener('paymentStatusChange', (data) => {
  // Handle payment status change
  console.log('Payment status changed:', data);
});
```

You can use the received `data` object to update your UI or perform any other required actions based on the payment status.

## Conclusion

In this tutorial, we have learned how to integrate the capacitor-mercadopago package into a Capacitor app. We have covered the installation process, initialization with MercadoPago API credentials, creating payments, and handling payment callbacks.

With the capacitor-mercadopago package, you can easily add MercadoPago payment functionality to your Capacitor app and provide a seamless payment experience for your users.