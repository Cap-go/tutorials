---
title: "Using @capacitor-community/stripe Package"
description: "A tutorial on how to use the @capacitor-community/stripe package to integrate Stripe payment functionality into your Capacitor app."
created_at: "2021-11-01"
published: true
slug: "stripe"
---

# Using @capacitor-community/stripe Package

In this tutorial, we will guide you on how to use the `@capacitor-community/stripe` package to integrate Stripe payment functionality into your Capacitor app.

## Installation

To get started, you need to install the `@capacitor-community/stripe` package. Open your terminal and run the following command:

```bash
npm install @capacitor-community/stripe
```

or using yarn:

```bash
yarn add @capacitor-community/stripe
```

## Configuration

The next step is to configure the package for your app. Follow the steps below based on your platform.

### iOS Configuration

1. Follow the [official Stripe documentation](https://stripe.com/docs/mobile/ios) to configure your app on the Stripe dashboard.
2. Open your Xcode project and navigate to the `AppDelegate.swift` file.
3. Import the `Stripe` module by adding the following line at the top of the file:

   ```swift
   import Stripe
   ```

4. In the `didFinishLaunchingWithOptions` method, initialize Stripe with your publishable key:

   ```swift
   STPAPIClient.shared.publishableKey = "YOUR_PUBLISHABLE_KEY"
   ```

   Replace `YOUR_PUBLISHABLE_KEY` with your actual publishable key.

### Android Configuration

1. Follow the [official Stripe documentation](https://stripe.com/docs/mobile/android) to configure your app on the Stripe dashboard.
2. Open your Android project and navigate to the `MainActivity.java` file.
3. Import the `Stripe` module by adding the following line at the top of the file:

   ```java
   import com.stripe.android.*;
   ```

4. In the `onCreate` method, initialize Stripe with your publishable key:

   ```java
   Stripe.apiKey = "YOUR_PUBLISHABLE_KEY";
   ```

   Replace `YOUR_PUBLISHABLE_KEY` with your actual publishable key.

## Usage

Now that you have installed and configured the `@capacitor-community/stripe` package, you can start using it in your app.

### Import the Package

In the file where you want to use the Stripe functionality, import the package by adding the following line at the top:

```typescript
import '@capacitor-community/stripe';
```

### Initialize Stripe

Before using any other Stripe functionality, you need to initialize Stripe by calling the `Stripe.initialize()` method. Optionally, you can pass additional configuration options as an argument.

Here's an example of how to initialize Stripe:

```typescript
import { Plugins } from '@capacitor/core';

const { Stripe } = Plugins;

Stripe.initialize({
  publishableKey: 'YOUR_PUBLISHABLE_KEY',
  backendUrl: 'YOUR_BACKEND_URL',
});
```

Replace `YOUR_PUBLISHABLE_KEY` with your actual publishable key, and `YOUR_BACKEND_URL` with the URL of your backend API.

### Create a Payment Method

To create a payment method, you can use the `Stripe.createPaymentMethod()` method. This method takes a `PaymentMethodParams` object as an argument and returns a `PaymentMethod` object.

Here's an example of how to create a payment method:

```typescript
import { Plugins } from '@capacitor/core';

const { Stripe } = Plugins;

async function createPaymentMethod() {
  const params = {
    type: 'card',
    card: {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2023,
      cvc: '123',
    },
  };

  try {
    const paymentMethod = await Stripe.createPaymentMethod(params);
    console.log('Payment method created:', paymentMethod);
  } catch (error) {
    console.error('Error creating payment method:', error);
  }
}
```

In this example, we are creating a payment method using a test card.

### Handling Errors

If there is an error while using the `@capacitor-community/stripe` package, it will throw an exception with the error message. Make sure to handle errors appropriately in your code.

Here's an example of error handling:

```typescript
try {
  // Stripe API call
} catch (error) {
  console.error('Error:', error.message);
}
```

## Conclusion

Congratulations! You have successfully integrated the `@capacitor-community/stripe` package into your Capacitor app. You can now leverage the power of Stripe to handle payments and more.

Remember to refer to the [official Stripe documentation](https://stripe.com/docs) for more information on the available features and options.

Happy coding!
