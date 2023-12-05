---
title: "Using gly-pay Package"
description: "A tutorial on how to use the gly-pay package for payment processing in your application."
created_at: "2021-05-18"
published: true
slug: "gly-pay"
---

# Using gly-pay Package

This tutorial will guide you through the process of integrating the gly-pay package into your application for payment processing.

## Installation

To install the gly-pay package, run the following command:

```shell
npm install gly-pay
```

## Configuration

Import the gly-pay package into your file:

```javascript
import glyPay from 'gly-pay';
```

Create a new instance of the gly-pay class:

```javascript
const paymentGateway = new glyPay({
  apiKey: 'your-api-key',
  environment: 'sandbox',
});
```

Replace `'your-api-key'` with the API key provided by the payment gateway provider. Set the environment to `'sandbox'` for testing purposes.

## Making a Payment

To make a payment, use the `processPayment` method of the gly-pay instance:

```javascript
const paymentDetails = {
  amount: 1000,
  currency: 'USD',
  description: 'Payment for a product',
  customer: {
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
};

paymentGateway.processPayment(paymentDetails)
  .then(response => {
    // Handle successful payment
    console.log(response);
  })
  .catch(error => {
    // Handle payment error
    console.error(error);
  });
```

Replace the `paymentDetails` object with the actual payment details, including the amount, currency, description, and customer information.

The `processPayment` method returns a Promise that resolves to the payment response if the payment is successful. If there is an error during the payment process, the Promise will be rejected with an error object.

## Additional Features

The gly-pay package provides additional features for handling refunds, checking payment status, and more. Refer to the package documentation for more information.

---

Now you have learned how to integrate the gly-pay package into your application for payment processing. Start implementing it in your project and provide a seamless payment experience to your users!