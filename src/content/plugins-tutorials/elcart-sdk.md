---
title: "Using capacitor-elcart-sdk: A Tutorial"
description: "Learn how to integrate and use the capacitor-elcart-sdk package in your app."
created_at: "2021-09-25"
published: true
slug: elcart-sdk
---

# Using capacitor-elcart-sdk: A Tutorial

In this tutorial, we will learn how to integrate and use the capacitor-elcart-sdk package in your app. The capacitor-elcart-sdk package provides a set of APIs that allow you to interact with the Elcart backend services.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and npm installed on your machine.
- An existing Capacitor project set up.

## Installation

To install the capacitor-elcart-sdk package, run the following command in your project directory:

```bash
npm install capacitor-elcart-sdk
```

This will install the package and add it to your project's dependencies.

## Initialization

Once the package is installed, you need to initialize it in your app. Open the `capacitor.config.json` file in your project and add the following lines:

```json
"plugins": {
  "CapacitorElcartSDK": {
    "appId": "YOUR_APP_ID",
    "apiKey": "YOUR_API_KEY"
  }
}
```

Replace `YOUR_APP_ID` and `YOUR_API_KEY` with your actual app ID and API key obtained from the Elcart developer portal.

## Usage

Now that the package is installed and initialized, you can start using the capacitor-elcart-sdk in your app. Here's an example of how to use some of its functionalities:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorElcartSDK } = Plugins;

// Get the current user's cart
const userCart = await CapacitorElcartSDK.getCart();

// Add an item to the cart
await CapacitorElcartSDK.addToCart({
  productId: 'PRODUCT_ID',
  quantity: 1
});

// Remove an item from the cart
await CapacitorElcartSDK.removeFromCart('PRODUCT_ID');

// Place an order
await CapacitorElcartSDK.placeOrder();
```

These are just a few examples of the capabilities provided by the capacitor-elcart-sdk package. Make sure to refer to the package's documentation for a full list of available functionalities and their usage.

## Conclusion

In this tutorial, we learned how to integrate and use the capacitor-elcart-sdk package in your Capacitor app. We covered the installation, initialization, and basic usage of the package. Feel free to explore the package's documentation and experiment with its functionalities to enhance your app with Elcart's services.

Remember to always refer to the official documentation and resources provided by the capacitor-elcart-sdk package for the most up-to-date and detailed information.

Happy coding!