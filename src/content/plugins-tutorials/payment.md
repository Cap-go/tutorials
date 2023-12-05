---
title: "Using @dicty/payment Package"
description: "This tutorial will guide you through the process of using the @dicty/payment package to handle payments in your application."
created_at: "2021-10-19"
published: true
slug: payment
---

# Using @dicty/payment Package

The `@dicty/payment` package provides a convenient way to handle payments in your application. This tutorial will guide you through the process of integrating the package into your project and making payment requests.

## Installation

To get started, install the `@dicty/payment` package by running the following command:

```
npm install @dicty/payment
```

## Usage

### Importing the Plugin

To use the `@dicty/payment` package, import it into your project as follows:

```typescript
import { Payment } from '@dicty/payment';
```

### Initializing the Payment

Before you can make payment requests, you need to initialize the payment module with your payment credentials. You can do this by calling the `init` method:

```typescript
Payment.init({
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});
```

Make sure to replace `'YOUR_API_KEY'` and `'YOUR_SECRET_KEY'` with your actual API key and secret key.

### Making a Payment Request

To make a payment request, call the `makePayment` method and pass in the necessary parameters:

```typescript
const paymentRequest = {
  amount: 1000,
  currency: 'USD',
  description: 'Payment for Product X',
};

Payment.makePayment(paymentRequest)
  .then((response) => {
    console.log('Payment successful:', response);
  })
  .catch((error) => {
    console.error('Payment failed:', error);
  });
```

In the example above, we're making a payment request for an amount of 1000 USD with a description of "Payment for Product X". The `makePayment` method returns a promise, so you can handle the response or catch any errors that occur.

### Handling Payment Responses

When a payment request is successful, the `makePayment` method will return a response object containing information about the payment:

```typescript
{
  id: 'PAYMENT_ID',
  status: 'SUCCESS',
  amount: 1000,
  currency: 'USD',
  description: 'Payment for Product X',
  // ...
}
```

You can use this information to update your application's state or perform any necessary actions.

### Error Handling

If a payment request fails, the `makePayment` method will reject the promise and provide an error object with details about the failure:

```typescript
{
  code: 'PAYMENT_ERROR',
  message: 'Payment authorization failed',
  // ...
}
```

You can handle payment errors by catching the rejected promise and displaying an appropriate error message to the user.

## Conclusion

In this tutorial, we've covered the basics of using the `@dicty/payment` package to handle payments in your application. You learned how to initialize the payment module, make payment requests, and handle payment responses and errors. Now you can integrate the package into your project and start accepting payments with ease.

Remember to refer to the package's documentation for more advanced usage and customization options.