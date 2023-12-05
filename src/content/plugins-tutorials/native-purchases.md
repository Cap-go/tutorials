---
title: "Using @capgo/native-purchases Plugin"
description: "A tutorial on how to use the @capgo/native-purchases plugin in Capacitor applications."
created_at: "2022-02-04"
published: true
slug: "native-purchases"
---

# Using @capgo/native-purchases Plugin

In this tutorial, we will learn how to use the @capgo/native-purchases plugin in Capacitor applications. The @capgo/native-purchases plugin allows you to implement in-app purchases in both Android and iOS apps developed with Capacitor.

## Installation

To install the @capgo/native-purchases plugin, run the following command in your project directory:

```bash
npm install @capgo/native-purchases
```

or with yarn:

```bash
yarn add @capgo/native-purchases
```

Next, sync the native project with the following command:

```bash
npx cap sync
```

## Configuration

The @capgo/native-purchases plugin does not require any additional configuration.

## Usage

To use the @capgo/native-purchases plugin, first import it in your code:

```typescript
import { NativePurchases } from '@capgo/native-purchases';
```

### Initialize the Plugin

Before using any of the plugin's methods, you need to initialize it. You can do this by calling the `initialize` method and passing your app's public key as the parameter. For example:

```typescript
NativePurchases.initialize({
  publicKey: 'your_public_key_here',
});
```

### Make a Purchase

To make an in-app purchase, use the `makePurchase` method. You need to provide the product ID and a callback function to handle the purchase result. The callback function will receive a `PurchaseResult` object containing information about the purchase. Here's an example:

```typescript
NativePurchases.makePurchase({
  productId: 'your_product_id_here',
  callback: (result) => {
    if (result.success) {
      // The purchase was successful
      console.log('Purchase successful');
      console.log('Product ID:', result.productId);
      console.log('Transaction ID:', result.transactionId);
    } else {
      // The purchase failed
      console.error('Purchase failed:', result.error);
    }
  },
});
```

### Query Purchases

You can query the user's purchased products using the `queryPurchases` method. This method returns a list of `Purchase` objects representing the user's purchases. Here's an example:

```typescript
const purchases = await NativePurchases.queryPurchases();
console.log('Purchased products:', purchases);
```

### Restore Purchases

If your app supports restoring purchases, you can use the `restorePurchases` method. This method will restore the user's previous purchases and return them as a list of `Purchase` objects. Here's an example:

```typescript
const restoredPurchases = await NativePurchases.restorePurchases();
console.log('Restored purchases:', restoredPurchases);
```

## Conclusion

In this tutorial, we learned how to use the @capgo/native-purchases plugin to implement in-app purchases in Capacitor applications. We covered the installation process, plugin initialization, making a purchase, querying purchases, and restoring purchases. With this knowledge, you can now add in-app purchases to your Capacitor apps with ease using the @capgo/native-purchases plugin.

Remember to always test your in-app purchases thoroughly and provide a seamless experience for your users. Happy coding!
