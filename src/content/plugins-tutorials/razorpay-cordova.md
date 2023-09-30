## Tutorial: Using @mogiio/capacitor-razorpay package

In this tutorial, we will guide you on how to integrate the `@mogiio/capacitor-razorpay` package into your Capacitor project. This package allows you to integrate the Razorpay payment gateway into your mobile application.

### Prerequisites

Before starting, make sure you have the following:

- Node.js installed on your machine.
- A Capacitor project set up and initialized.

### Step 1: Install the package

Open your project in the terminal and run the following command to install the `@mogiio/capacitor-razorpay` package:

```
npm install @mogiio/capacitor-razorpay
```

### Step 2: Add the platform

Next, add the platform for which you want to integrate Razorpay. For example, if you want to integrate with Android, run the following command:

```
npx cap add android
```

Replace `android` with `ios` if you want to integrate with iOS.

### Step 3: Initialize Razorpay

In your application code, import the `@mogiio/capacitor-razorpay` package and initialize Razorpay with your key. Here's an example:

```typescript
import { CapacitorRazorpay } from '@mogiio/capacitor-razorpay';

// Initialize Razorpay
const razorpay = CapacitorRazorpay.initialize({
  key: 'YOUR_RAZORPAY_KEY',
});
```

Replace `'YOUR_RAZORPAY_KEY'` with your actual Razorpay API key.

### Step 4: Create a payment

To create a payment, call the `createPayment` method on the initialized `razorpay` object. Here's an example:

```typescript
// Create a payment
const payment = await razorpay.createPayment({
  amount: 50000,                 // Amount in paise
  currency: 'INR',               // Currency code
  description: 'Test Payment',   // Payment description
  orderId: 'ORDER_ID',           // Unique order ID
});
```

Replace `'ORDER_ID'` with the unique order ID for the payment.

### Step 5: Handle payment response

To handle the payment response, add an event listener to the `razorpay` object. Here's an example:

```typescript
// Handle payment response
razorpay.on('payment.success', (response) => {
  console.log('Payment success:', response);
  // Handle success logic
});

razorpay.on('payment.cancel', (response) => {
  console.log('Payment canceled:', response);
  // Handle cancel logic
});
```

In the event listeners, you can implement your own logic for handling the payment success and cancel events.

### Step 6: Open Razorpay checkout

To open the Razorpay checkout page in your application, call the `open` method on the `razorpay` object. Here's an example:

```typescript
// Open Razorpay checkout
razorpay.open();
```

This will open the Razorpay checkout page in a WebView within your application.

### Step 7: Build and run the application

Finally, build and run your Capacitor application on the target platform. For example, if you added the Android platform, run the following command to build and run the Android application:

```
npx cap run android
```

Replace `android` with `ios` if you added the iOS platform.

That's it! You have successfully integrated the `@mogiio/capacitor-razorpay` package into your Capacitor project for Razorpay payment integration.

Note: This tutorial assumes basic knowledge of Capacitor and TypeScript. Make sure to refer to the package documentation and official Capacitor documentation for more details on using the `@mogiio/capacitor-razorpay` package and configuring your Capacitor project.