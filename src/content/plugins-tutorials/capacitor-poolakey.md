---
title: "Using Capacitor Poolakey Package"
description: "This tutorial will guide you through using the Capacitor Poolakey package to integrate Poolakey payment gateway into your Capacitor app."
created_at: "2022-05-19"
published: true
slug: capacitor-poolakey
---

# Using Capacitor Poolakey Package

The Capacitor Poolakey package provides a convenient way to integrate the Poolakey payment gateway into your Capacitor app. Follow the steps below to get started:

## Installation

To install the Capacitor Poolakey package in your project, run the following command:

```bash
npm install capacitor-poolakey
```

## Platform Configuration

### iOS

For iOS, open your project in Xcode and update the `AppDelegate.swift` file as follows:

```swift
import Capacitor
import Poolakey

// ...

@objc func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  // ...

  PoolakeyPlugin.register(with: self)

  // ...

  return true
}
```

### Android

For Android, open the `MainActivity.java` file and add the following import statements:

```java
import com.capacitorjs.plugins.poolakey.PoolakeyPlugin;
import com.capacitorjs.plugins.poolakey.Serial;
import com.capacitorjs.plugins.poolakey.Poolakey;
```

Then, add the following code under the `onCreate` method:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    // ...

    PoolakeyPlugin.register(this);

    // ...
}
```

## Basic Usage

The Capacitor Poolakey package provides various methods that you can use to interact with the Poolakey payment gateway. Here are a few examples:

### Initialize Poolakey

To initialize Poolakey, use the `initialize` method and provide your API key:

```typescript
import { Poolakey } from 'capacitor-poolakey';

const poolakey = new Poolakey();
poolakey.initialize({ apiKey: 'YOUR_API_KEY' });
```

### Start Payment Flow

To initiate a payment flow, use the `startPayment` method and provide the necessary payment details:

```typescript
const paymentData = {
  amount: 1000, // Payment amount in Rials
  redirectUrl: 'https://yourapp.com/payment/callback', // Redirect URL for handling payment completion
  additionalData: {
    orderId: '123456', // Custom order ID
    userId: '7890', // Custom user ID
  },
};

poolakey.startPayment(paymentData)
  .then(() => {
    // Payment flow started successfully
  })
  .catch((error) => {
    // Payment flow failed
  });
```

## Conclusion

In this tutorial, we learned how to integrate the Capacitor Poolakey package into your Capacitor app. You can now leverage the Poolakey payment gateway to process payments seamlessly in your app. Make sure to check the [official documentation](https://github.com/example/poolakey-docs) for more details on the available methods and configuration options.

Feel free to explore additional features and customize the integration based on your app's requirements. Happy coding!