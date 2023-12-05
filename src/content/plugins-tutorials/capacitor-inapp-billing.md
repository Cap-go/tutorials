---
title: "Using capacitor-inapp-billing Package"
description: "This tutorial will guide you through the process of using the capacitor-inapp-billing package to implement in-app billing functionality in your Capacitor app."
created_at: "2021-10-14"
published: true
slug: "capacitor-inapp-billing"
---

# Using capacitor-inapp-billing Package

In this tutorial, we will explore how to utilize the `capacitor-inapp-billing` package to incorporate in-app billing capabilities into your Capacitor app. The `capacitor-inapp-billing` package provides a simple and straightforward API for handling in-app purchases and subscriptions.

## Installation

First, let's start by installing the `capacitor-inapp-billing` package. Open your terminal and navigate to your Capacitor project folder. Run the following command to add the package to your project:

```bash
npm install capacitor-inapp-billing
```

## Android Configuration

Next, we need to configure the `capacitor-inapp-billing` package for Android. Open the `android/app/src/main/java/your/app/package/MainActivity.java` file in your project.

Import the `Billing` class from the `capacitor-inapp-billing` package by adding the following line at the top of the file:

```java
import com.razorpay.cordova.Billing;
```

Inside the `init` method of the `MainActivity` class, add the following code to initialize the billing module:

```java
Billing billing = new Billing(this);
billing.initialize();
```

## iOS Configuration

For iOS configuration, open the `ios/App/AppDelegate.swift` file in your project.

Import the `CapacitorInAppBilling` module by adding the following line at the top of the file:

```swift
import CapacitorInAppBilling
```

Inside the `application(_:didFinishLaunchingWithOptions:)` method of the `AppDelegate` class, add the following code to initialize the billing module:

```swift
CapacitorInAppBilling.shared.initialize()
```

## Usage

Once the package is installed and configured, you can start utilizing the `capacitor-inapp-billing` package to implement in-app billing functionality in your app.

The package provides methods such as `initialize`, `getProducts`, `getPurchases`, `purchase`, and `consume` to interact with the in-app billing system.

Here's an example of how to retrieve the available products for purchase:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorInAppBilling } = Plugins;

async function getAvailableProducts() {
  const response = await CapacitorInAppBilling.getProducts({
    productIds: ['com.example.product1', 'com.example.product2'],
  });

  if (response && response.products) {
    const products = response.products;
    // Process the retrieved products
  }
}
```

You can also handle the purchase flow using the following code:

```typescript
async function purchaseProduct(productId: string) {
  const response = await CapacitorInAppBilling.purchase({
    productId: productId,
  });

  if (response && response.purchaseToken) {
    const purchaseToken = response.purchaseToken;
    // Process the purchase token
  }
}
```

Remember to handle the consumption of purchased items when necessary:

```typescript
async function consumePurchase(purchaseToken: string) {
  const response = await CapacitorInAppBilling.consume({
    purchaseToken: purchaseToken,
  });

  if (response && response.success) {
    // Purchase consumed successfully
  }
}
```

## Conclusion

Congratulations! You have successfully learned how to use the `capacitor-inapp-billing` package to implement in-app billing functionality in your Capacitor app. You can now integrate in-app purchases and subscriptions into your app with ease.

Remember to refer to the package documentation for more details and additional features provided by the `capacitor-inapp-billing` package. Happy coding!