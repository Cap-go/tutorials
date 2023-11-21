---
title: "Using Capacitor Razorpay Package"
description: "A tutorial on integrating and using the Capacitor Razorpay package in your application."
created_at: "2022-03-10"
published: true
slug: "razorpay-cordova"
---

# Using Capacitor Razorpay Package

In this tutorial, we will learn how to integrate and use the Capacitor Razorpay package in your application. The Capacitor Razorpay package allows you to add payment functionality to your Capacitor-based app using the Razorpay payment gateway.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- A Capacitor-based application set up
- Node.js and npm installed on your machine
- Basic knowledge of JavaScript and Capacitor

## Step 1: Install the Capacitor Razorpay Package

To get started, install the Capacitor Razorpay package in your project. Open your terminal and navigate to your project's root directory. Run the following command:

```bash
npm install capacitor-razorpay
```

This will install the Capacitor Razorpay package and add it as a dependency in your project's `package.json` file.

## Step 2: Configure Razorpay

Next, we need to configure Razorpay in our application. Visit the Razorpay website and create an account if you don't have one already. Once logged in, navigate to the dashboard and find your API credentials.

In your project, open the file where you initialize Capacitor (usually `capacitor.config.ts` or `capacitor.config.json`). Add the following configuration options:

```typescript
import { CapacitorRazorpayPlugin } from 'capacitor-razorpay';

// Other imports and configurations...

CapacitorRazorpayPlugin.setPublishableKey('YOUR_RAZORPAY_PUBLISHABLE_KEY');
```

Replace `YOUR_RAZORPAY_PUBLISHABLE_KEY` with your actual publishable key obtained from the Razorpay dashboard.

## Step 3: Create a Payment

Now, let's create a payment using the Capacitor Razorpay package. Open the file where you want to initiate the payment (e.g., a checkout page). Add the following code:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorRazorpayPlugin } = Plugins;

// Other imports and code...

async function handlePayment() {
  try {
    const paymentOptions = {
      amount: 1000, // Amount in paise (e.g., 1000 paise = ₹10)
      currency: 'INR',
      receipt: 'order_123',
      notes: {
        description: 'My order description',
        customer_name: 'John Doe',
      },
    };

    const paymentResult = await CapacitorRazorpayPlugin.createPayment(paymentOptions);
    
    console.log(paymentResult); // The payment result object
  } catch (error) {
    console.error(error); // Handle any error that occurred during payment
  }
}
```

In the above code, we create a payment using the `createPayment` method provided by the Capacitor Razorpay plugin. We pass the payment options like amount, currency, receipt, and notes. The `createPayment` method returns a promise, which resolves with the payment result object.

You can customize the payment options based on your requirements.

## Step 4: Handle Payment Result

Once the payment is completed or cancelled, you can handle the payment result using the `createPayment` method's response.

```typescript
async function handlePayment() {
  // Previous code...

  const paymentResult = await CapacitorRazorpayPlugin.createPayment(paymentOptions);

  if (paymentResult.success === true) {
    console.log('Payment successful');
  } else if (paymentResult.cancelled === true) {
    console.log('Payment cancelled');
  } else {
    console.log('Payment failed');
  }
}
```

In the above code, we check the properties `success`, `cancelled`, and `error` of the payment result object to determine the payment status.

## Conclusion

In this tutorial, we learned how to integrate and use the Capacitor Razorpay package in your application. We covered the installation, configuration, creating payments, and handling payment results. Now you can easily add payment functionality to your Capacitor-based app using Razorpay.

For more information and advanced usage, refer to the official Capacitor Razorpay documentation.

I hope this tutorial was helpful. Happy coding!

