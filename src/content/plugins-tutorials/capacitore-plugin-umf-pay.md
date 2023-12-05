---
title: "Using capacitore-plugin-umf-pay"
description: "A tutorial on how to use the capacitore-plugin-umf-pay package"
created_at: "2022-01-01"
published: true
slug: "capacitore-plugin-umf-pay"
---

# Using capacitore-plugin-umf-pay

In this tutorial, we will learn how to use the `capacitore-plugin-umf-pay` package to integrate UMF Pay functionality into your Capacitor project.

## Installation

First, let's install the package using npm:

```bash
npm install capacitore-plugin-umf-pay
```

## Usage

To use the `capacitore-plugin-umf-pay` package, you need to follow these steps:

1. Import the package in your code:

```javascript
import { CapacitorPluginUmfPay } from 'capacitore-plugin-umf-pay';
```

2. Initialize the plugin:

```javascript
const umfPay = CapacitorPluginUmfPay.initialize();
```

3. Use the available methods:

```javascript
// Example method: makePayment
umfPay.makePayment(paymentData)
  .then(() => {
    // Payment successful
  })
  .catch((error) => {
    // Payment failed, handle error
  });
```

Make sure to replace `paymentData` with the actual data required for making the payment.

That's it! You have successfully integrated the `capacitore-plugin-umf-pay` package into your Capacitor project.

For more information on the available methods and their usage, please refer to the plugin's documentation.

## Conclusion

In this tutorial, we have learned how to use the `capacitore-plugin-umf-pay` package to add UMF Pay functionality to your Capacitor project.