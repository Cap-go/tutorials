---
title: "Using @projectleannation/capacitorauthorizenet Package"
description: "This tutorial will guide you through the process of using the @projectleannation/capacitorauthorizenet package in your Capacitor project."
created_at: "2021-08-20"
published: true
slug: capacitorauthorizenetplugin
---

# Using @projectleannation/capacitorauthorizenet Package

This tutorial will guide you through the process of using the @projectleannation/capacitorauthorizenet package in your Capacitor project. The package provides integration with the Authorize.Net payment gateway, allowing you to process payments securely.

## Prerequisites

Before getting started, make sure you have the following:

1. Node.js installed on your system
2. Capacitor project setup

## Installation

To install the @projectleannation/capacitorauthorizenet package, run the following command in your project directory:

```bash
npm install @projectleannation/capacitorauthorizenet
```

## Configuration

### Android

In your Android project, locate the `MainActivity.java` file and import the `CapacitorAuthorizeNet` plugin:

```java
import com.projectleannation.capacitorauthorizenet.CapacitorAuthorizeNet;
```

Next, inside the `init` method of the `MainActivity` class, add the `CapacitorAuthorizeNet` plugin to the plugin list:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Capacitor plugins
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Other plugins...
      add(CapacitorAuthorizeNet.class); // Add the CapacitorAuthorizeNet plugin
    }});
  }
}
```

### iOS

In your iOS project, locate the `Podfile` file and add the following line:

```ruby
pod 'CapacitorAuthorizeNet', :path => '../node_modules/@projectleannation/capacitorauthorizenet/ios'
```

Save the file and run the following command in your project directory to install the dependencies:

```bash
npx cap sync
```

## Usage

To use the Authorize.Net plugin in your Capacitor project, follow these steps:

### Import the Plugin

In your TypeScript file, import the plugin:

```typescript
import { CapacitorAuthorizeNetPlugin } from '@projectleannation/capacitorauthorizenet';
const CapacitorAuthorizeNet = Plugins.CapacitorAuthorizeNet as CapacitorAuthorizeNetPlugin;
```

### Initialize the Plugin

Before using any other methods, you need to initialize the plugin with your Authorize.Net credentials:

```typescript
const initializeAuthorizeNet = async () => {
  const config = {
    apiKey: 'YOUR_API_KEY',
    clientKey: 'YOUR_CLIENT_KEY',
    environment: 'sandbox' // 'sandbox' or 'production'
  };

  await CapacitorAuthorizeNet.initialize(config);
};
```

### Create a Payment Transaction

To create a payment transaction, use the `createTransaction` method. Pass the necessary transaction details as parameters:

```typescript
const createPaymentTransaction = async () => {
  const transaction = {
    amount: 10.99,
    cardNumber: '4111111111111111',
    expirationDate: '12/25',
    cvv: '123'
  };

  const result = await CapacitorAuthorizeNet.createTransaction(transaction);

  if (result.success) {
    // Payment was successful
    console.log('Payment successful');
  } else {
    // Payment failed
    console.log('Payment failed');
  }
};
```

### Additional Methods

The `CapacitorAuthorizeNet` plugin also provides additional methods such as `getCardTypes` to retrieve supported card types, `validateCreditCard` to validate credit card details, and `getTransactionDetails` to get details of a previous transaction.

## Conclusion

In this tutorial, you learned how to install and use the @projectleannation/capacitorauthorizenet package in your Capacitor project. You can now integrate Authorize.Net payment functionality into your app and process payments securely.