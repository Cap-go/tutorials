---
title: "Using @revenuecat/purchases-capacitor Package - Tutorial"
description: "This tutorial provides a step-by-step guide on how to use the @revenuecat/purchases-capacitor package to implement in-app purchases in Capacitor."
created_at: "2022-11-01"
published: true
slug: "purchases-capacitor"
---

# Using @revenuecat/purchases-capacitor Package Tutorial

This tutorial provides a step-by-step guide on how to use the @revenuecat/purchases-capacitor package to implement in-app purchases in Capacitor. The @revenuecat/purchases-capacitor package is an open-source framework that makes it easy to work with in-app purchases and subscriptions.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- @revenuecat/purchases-capacitor package

## Step 1: Install @revenuecat/purchases-capacitor package

To install the @revenuecat/purchases-capacitor package, run the following command:

```bash
npm install @revenuecat/purchases-capacitor
```

## Step 2: Sync Capacitor

After installing the package, sync Capacitor by running the following command:

```bash
npx cap sync
```

This command will sync the dependencies and configurations with your Capacitor project.

## Step 3: Configure the @revenuecat/purchases-capacitor package

To configure the @revenuecat/purchases-capacitor package, you need to provide your RevenueCat API key. This key is used to authenticate your app with the RevenueCat backend.

```typescript
import { Purchases } from '@revenuecat/purchases-capacitor';

Purchases.setup('YOUR_API_KEY');
```

Replace `YOUR_API_KEY` with your actual RevenueCat API key.

## Step 4: Fetch Products

Before making any purchases, you need to fetch the available products from RevenueCat. You can use the `getProducts` method to fetch the products.

```typescript
import { Purchases } from '@revenuecat/purchases-capacitor';

async function fetchProducts() {
  try {
    const products = await Purchases.getProducts(['PRODUCT_ID_1', 'PRODUCT_ID_2']);
    console.log('Fetched products:', products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
```

Replace `PRODUCT_ID_1` and `PRODUCT_ID_2` with the actual product IDs you want to fetch.

## Step 5: Make a Purchase

To make a purchase, you can use the `makePurchase` method. This method takes the product ID and any additional parameters required for the purchase.

```typescript
import { Purchases } from '@revenuecat/purchases-capacitor';

async function makePurchase(productId: string) {
  try {
    const purchase = await Purchases.makePurchase(productId);
    console.log('Purchase made:', purchase);
  } catch (error) {
    console.error('Error making purchase:', error);
  }
}

makePurchase('PRODUCT_ID');
```

Replace `PRODUCT_ID` with the actual product ID you want to purchase.

## Step 6: Check Subscription Status

To check the subscription status of a user, you can use the `checkSubscriptions` method. This method returns the active subscriptions for the user.

```typescript
import { Purchases } from '@revenuecat/purchases-capacitor';

async function checkSubscriptions() {
  try {
    const subscriptions = await Purchases.checkSubscriptions();
    console.log('Active subscriptions:', subscriptions);
  } catch (error) {
    console.error('Error checking subscriptions:', error);
  }
}

checkSubscriptions();
```

## Conclusion

In this tutorial, you learned how to use the @revenuecat/purchases-capacitor package to implement in-app purchases in Capacitor. You saw how to install the package, configure it with your RevenueCat API key, fetch products, make purchases, and check subscription status.

The @revenuecat/purchases-capacitor package provides a convenient way to work with in-app purchases and subscriptions in Capacitor, allowing you to monetize your app effectively. Explore the official documentation for more advanced features and customization options.

Happy coding!