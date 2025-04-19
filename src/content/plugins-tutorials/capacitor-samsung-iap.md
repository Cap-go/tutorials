---
title: "Using @gif-games/capacitor-samsung-iap in Capacitor"
description: "A tutorial on how to use the @gif-games/capacitor-samsung-iap package in Capacitor"
created_at: "2022-10-22"
published: true
slug: capacitor-samsung-iap
---

# Using @gif-games/capacitor-samsung-iap in Capacitor

In this tutorial, we will learn how to use the @gif-games/capacitor-samsung-iap package in Capacitor to implement in-app purchases in an Android application. The @gif-games/capacitor-samsung-iap package is a Capacitor plugin that provides integration with the Samsung In-App Purchase (IAP) Android SDK.

## Installation

To get started, we need to install the @gif-games/capacitor-samsung-iap package and its dependencies. Open your terminal and run the following command:

```bash
npm install @gif-games/capacitor-samsung-iap
npx cap sync
```

This will install the package and sync the Capacitor project.

Next, we need to include the sub dependencies for the @gif-games/capacitor-samsung-iap package. Open your app's `settings.gradle` file and add the following lines:

```java
include ':IAP6Helper'
project(':IAP6Helper').projectDir = new File('../node_modules/@gif-games/capacitor-samsung-iap/android/IAP6Helper')
```

## API

The @gif-games/capacitor-samsung-iap package provides several methods to interact with the Samsung In-App Purchase SDK. Let's go through each of them:

### setOperationMode(options: SetOperationModeOptions)

This method allows you to set the operation mode for the IAP. It supports three modes: "BILLING", "TEST_SUCCESS", and "TEST_FAIL". The "BILLING" mode enables billing for item purchases, while the test modes allow you to test IAP functions without actually billing users.

### getOwnedList(options: GetOwnedListOptions)

This method returns a list of in-app items that the app user currently owns from previous purchases. This includes consumable items that have not been used or reported as consumed, non-consumable items, and active subscription items.

### getProductsDetails(options: GetProductsDetailsOptions)

This method returns information for one or more in-app items registered to the app. You can pass the item IDs as options to retrieve the details of specific items, or leave it empty to get details of all registered items.

### startPayment(options: StartPaymentOptions)

This method initiates the purchase and payment transaction for a specified in-app item. It can notify the end user whether the purchase succeeded or failed.

### consumePurchasedItems(options: ConsumePurchasedItemsOptions)

This method consumes the purchased items, marking them as consumed. It is only applicable for consumable items.

## Example Usage

Here's an example of how to use the @gif-games/capacitor-samsung-iap package in a Capacitor project:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorSamsungIAP } = Plugins;

// Set the operation mode
CapacitorSamsungIAP.setOperationMode({ mode: 'BILLING' }).then(() => {
  // Operation mode set successfully
}).catch((error) => {
  console.error('Failed to set operation mode:', error);
});

// Get the list of owned items
CapacitorSamsungIAP.getOwnedList({}).then((ownedList) => {
  // Process the owned items
}).catch((error) => {
  console.error('Failed to get owned items:', error);
});

// Get the details of specific items
CapacitorSamsungIAP.getProductsDetails({ itemIds: ['item1', 'item2'] }).then((productList) => {
  // Process the product details
}).catch((error) => {
  console.error('Failed to get product details:', error);
});

// Start the payment transaction
CapacitorSamsungIAP.startPayment({ itemId: 'item1' }).then((purchaseVo) => {
  // Process the purchase result
}).catch((error) => {
  console.error('Failed to start payment:', error);
});

// Consume purchased items
CapacitorSamsungIAP.consumePurchasedItems({ itemIds: ['item1', 'item2'] }).then(() => {
  // Items consumed successfully
}).catch((error) => {
  console.error('Failed to consume items:', error);
});
```

That's it! You have now learned how to use the @gif-games/capacitor-samsung-iap package in Capacitor to implement in-app purchases in an Android application.

Remember to refer to the official documentation of the package for more details and advanced usage.

Happy coding!