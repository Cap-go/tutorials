---
title: "Using capacitor-billing package"
description: "This tutorial will guide you on how to use the capacitor-billing package for handling billing in your Capacitor app."
created_at: "2022-01-15"
published: true
slug: billing
---

# Using capacitor-billing package

In this tutorial, we will learn how to use the capacitor-billing package to handle billing functionalities in your Capacitor app. The capacitor-billing package provides a simple and convenient way to manage in-app purchases and subscriptions for both iOS and Android platforms.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor CLI
- Node.js
- Android Studio (for Android development)
- Xcode (for iOS development)

## Step 1: Install capacitor-billing package

To use the capacitor-billing package, you need to install it in your Capacitor project. Open your terminal and navigate to the root directory of your project. Run the following command:

```bash
npm install capacitor-billing
```

This will install the capacitor-billing package and its dependencies into your project.

## Step 2: Configure capacitor-billing

After installing the package, you need to configure it for your iOS and Android projects. Follow the steps below for each platform.

### iOS Configuration

1. Open your iOS project in Xcode.
2. Locate the `AppDelegate.swift` file in the Xcode project navigator.
3. Import the capacitor-billing module by adding the following line at the top of the file:

```swift
import capacitorBilling
```

4. Inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line:

```swift
BillingRegistrar.registerPlugins()
```

### Android Configuration

1. Open your Android project in Android Studio.
2. Locate the `MainActivity.java` file in the Android project explorer.
3. Import the capacitor-billing module by adding the following line at the top of the file:

```java
import com.getcapacitor.plugin.capacitorbilling.Billing;
```

4. Inside the `onCreate(Bundle savedInstanceState)` method, add the following line:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(Billing.class);
}});
```

## Step 3: Implement billing features

Now that the capacitor-billing package is installed and configured, you can start implementing billing features in your app. Here are some examples of common functionalities:

### Querying available products

To query the available products (in-app purchases or subscriptions), use the `queryPurchases()` method. This method returns a promise that resolves with an array of available products.

```typescript
import { Plugins } from '@capacitor/core';
const { Billing } = Plugins;

// Query available products
Billing.queryPurchases().then((products) => {
  console.log(products);
}).catch((error) => {
  console.error(error);
});
```

### Making a purchase

To make a purchase, use the `purchase()` method. This method takes a product id as a parameter and returns a promise that resolves with the purchase details.

```typescript
import { Plugins } from '@capacitor/core';
const { Billing } = Plugins;

// Make a purchase
Billing.purchase(productId).then((purchase) => {
  console.log(purchase);
}).catch((error) => {
  console.error(error);
});
```

### Subscriptions

For handling subscriptions, you can use the `purchaseAsSubscription()` method. This method is similar to the `purchase()` method but is specifically designed for subscription-based products.

```typescript
import { Plugins } from '@capacitor/core';
const { Billing } = Plugins;

// Make a subscription purchase
Billing.purchaseAsSubscription(productId).then((purchase) => {
  console.log(purchase);
}).catch((error) => {
  console.error(error);
});
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-billing package to handle billing functionalities in your Capacitor app. We covered the installation and configuration steps, as well as some common billing features. You can now integrate in-app purchases and subscriptions into your app with ease using capacitor-billing.

Remember to refer to the capacitor-billing documentation for more advanced features and detailed usage instructions. Happy coding!