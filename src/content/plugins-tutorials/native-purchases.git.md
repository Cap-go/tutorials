---
"title": "Tutorial on Using @capgo/native-purchases Package"
"description": "A markdown tutorial on how to implement in-app purchases and subscriptions in a Capacitor app using the @capgo/native-purchases package."
"created_at": "2022-01-31"
"published": true
"slug": "native-purchases.git"
---

# Tutorial: Using @capgo/native-purchases Package

In this tutorial, you will learn how to implement in-app purchases and subscriptions in your Capacitor app using the @capgo/native-purchases package. This plugin provides a simple way to integrate native APIs for handling in-app purchases seamlessly.

## Getting Started

To begin using the @capgo/native-purchases package, you need to install it in your Capacitor project. Make sure you have Capacitor installed before proceeding.

### Installation

Run the following command in your project directory:

```bash
npm install @capgo/native-purchases
npx cap sync
```

### Android Configuration

To enable in-app purchases on Android, add the following permission to your AndroidManifest.xml file:

```xml
<uses-permission android:name="com.android.vending.BILLING" />
```

## Basic Usage

### Step 1: Check Billing Support

Before making any purchases, it's important to check if billing is supported on the device. You can do this by calling the `isBillingSupported` method provided by the plugin.

```typescript
// Check if billing is supported
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

### Step 2: Get Available Products

To retrieve information about available products, use the `getProducts` method with the desired product identifiers.

```typescript
// Get available products
const getAvailableProducts = async () => {
  try {
    const { products } = await NativePurchases.getProducts({
      productIdentifiers: ['product_id_1', 'product_id_2'],
      productType: PURCHASE_TYPE.INAPP
    });
    console.log('Available products:', products);
  } catch (error) {
    console.error('Error getting products:', error);
  }
};
```

### Step 3: Purchase a Product

Initiate a purchase by calling the `purchaseProduct` method with the product identifier and type (INAPP or SUBS).

```typescript
// Purchase a product
const purchaseProduct = async (productId: string) => {
  try {
    const transaction = await NativePurchases.purchaseProduct({
      productIdentifier: productId,
      productType: PURCHASE_TYPE.INAPP
    });
    console.log('Purchase successful:', transaction);
    // Handle the successful purchase
  } catch (error) {
    console.error('Purchase failed:', error);
  }
};
```

### Step 4: Restore Purchases

To restore previously purchased products, use the `restorePurchases` method.

```typescript
// Restore purchases
const restorePurchases = async () => {
  try {
    const { customerInfo } = await NativePurchases.restorePurchases();
    console.log('Restored purchases:', customerInfo);
    // Update your app based on restored purchases
  } catch (error) {
    console.error('Failed to restore purchases:', error);
  }
};
```

## Conclusion

You have now successfully learned how to integrate in-app purchases and subscriptions into your Capacitor app using the @capgo/native-purchases package. This plugin simplifies the process of handling native APIs for managing purchases efficiently.