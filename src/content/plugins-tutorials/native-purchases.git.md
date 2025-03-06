---
"title": "Using @capgo/native-purchases Package Tutorial",
"description": "A markdown tutorial on how to use the @capgo/native-purchases package in a Capacitor app. The tutorial covers installation, checking billing support, retrieving available products, making purchases, and restoring purchases.",
"created_at": "2021-11-14",
"published": true,
"slug": "native-purchases.git"
---

# Using @capgo/native-purchases Package Tutorial

This tutorial will guide you through using the `@capgo/native-purchases` package in a Capacitor app. The package enables you to implement in-app purchases and subscriptions easily using native APIs.

## Installation

To begin using the `@capgo/native-purchases` package, follow these steps:

```bash
npm install @capgo/native-purchases
npx cap sync
```

Make sure to add the necessary permissions in the Android manifest file:

```xml
<uses-permission android:name="com.android.vending.BILLING"/>
```

## Check Billing Support

Before making any purchases, it's essential to check if billing is supported on the device. Use the following code snippet to verify billing support:

```typescript
import { NativePurchases } from '@capgo/native-purchases';

const checkBillingSupport = async () => {
  try {
    const { isBillingSupported } = await NativePurchases.isBillingSupported();
    if (isBillingSupported) {
      console.log('Billing is supported on this device');
    } else {
      console.log('Billing is not supported on this device');
    }
  } catch (error) {
    console.error('Error checking billing support:', error);
  }
};
```

## Get Available Products

To retrieve information about available products, use the `getProducts` method as shown below:

```typescript
const getAvailableProducts = async () => {
  try {
    const { products } = await NativePurchases.getProducts({
      productIdentifiers: ['product_id_1', 'product_id_2'],
      productType: PURCHASE_TYPE.INAPP // or PURCHASE_TYPE.SUBS for subscriptions
    });
    console.log('Available products:', products);
  } catch (error) {
    console.error('Error getting products:', error);
  }
};
```

## Purchase a Product

Initiate a purchase using the `purchaseProduct` method:

```typescript
const purchaseProduct = async (productId: string) => {
  try {
    const transaction = await NativePurchases.purchaseProduct({
      productIdentifier: productId,
      productType: PURCHASE_TYPE.INAPP // or PURCHASE_TYPE.SUBS for subscriptions
    });
    console.log('Purchase successful:', transaction);
    // Handle the successful purchase (e.g., unlock content, update UI)
  } catch (error) {
    console.error('Purchase failed:', error);
  }
};
```

## Restore Purchases

To restore previously purchased products, use the `restorePurchases` method:

```typescript
const restorePurchases = async () => {
  try {
    const { customerInfo } = await NativePurchases.restorePurchases();
    console.log('Restored purchases:', customerInfo);
    // Update your app's state based on the restored purchases
  } catch (error) {
    console.error('Failed to restore purchases:', error);
  }
};
```

This tutorial covers the basic usage of the `@capgo/native-purchases` package in a Capacitor app. Feel free to explore more advanced features based on your app's requirements.