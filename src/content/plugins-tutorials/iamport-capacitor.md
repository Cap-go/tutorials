---
title: "Tutorial: Using @onout/iamport-capacitor Package"
description: "A step-by-step guide on how to use the @onout/iamport-capacitor package for integrating the Iamport payment gateway in a Capacitor app."
created_at: "2022-11-15"
published: true
slug: "iamport-capacitor"
---

# Tutorial: Using @onout/iamport-capacitor Package

In this tutorial, we will learn how to integrate the Iamport payment gateway into a Capacitor app using the @onout/iamport-capacitor package. The Iamport is a popular payment gateway used in many e-commerce applications. By following the steps outlined in this tutorial, you will be able to easily process payments in your Capacitor app.

## Prerequisites

Before we get started, make sure you have the following:

1. Node.js installed on your machine.
2. A Capacitor app set up.

## Step 1: Install the Package

To begin, open your terminal and navigate to your Capacitor app's directory.

```bash
cd path/to/your/capacitor-app
```

Next, install the `@onout/iamport-capacitor` package using npm or yarn.

```bash
npm install @onout/iamport-capacitor
```

or

```bash
yarn add @onout/iamport-capacitor
```

## Step 2: Configure the Package

Once the package is installed, you need to configure it in your Capacitor app.

### iOS Configuration

For iOS, open the `ios/App/App/AppDelegate.swift` file in your Xcode project. Import the package and add the following code in the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
import IamportCapacitor

// ...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  // ...

  IamportCapacitor.registerPlugin()
  // ...

  return true
}
```

### Android Configuration

For Android, open the `android/app/src/main/java/**/**/MainActivity.java` file in your Android Studio project. Import the package and add the following code inside the `MainActivity` class:

```java
import com.onout.iamportcapacitor.IamportCapacitor;

// ...

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // ...

        registerPlugin(IamportCapacitor.class);
        // ...
    }
}
```

## Step 3: Usage

Now that the package is installed and configured, you can start using it in your Capacitor app to process payments with the Iamport payment gateway.

### Example Usage

Here's a basic example of how you can use the `@onout/iamport-capacitor` package to process a payment:

```js
import { Plugins } from '@capacitor/core';

const { IamportCapacitor } = Plugins;

async function processPayment() {
  const paymentData = {
    pg: 'html5_inicis',
    pay_method: 'card',
    merchant_uid: 'merchant_12345',
    amount: 1000,
    name: 'Sample Product',
    buyer_email: 'user@example.com',
    buyer_name: 'John Doe',
    // Add more payment data if needed...
  };

  try {
    const response = await IamportCapacitor.payment(paymentData);
    console.log('Payment Response:', response);
    // Handle payment success...
  } catch (error) {
    console.error('Payment Error:', error);
    // Handle payment error...
  }
}
```

In the code above, we import the `IamportCapacitor` plugin from the `@capacitor/core` package. We then call the `payment` method provided by the plugin, passing in the necessary payment data. The method returns a promise that resolves with the payment response or rejects with an error.

You can customize the payment data based on your requirements. Consult the official Iamport documentation for a full list of available options.

## Conclusion

In this tutorial, we learned how to integrate the Iamport payment gateway into a Capacitor app using the `@onout/iamport-capacitor` package. We covered the installation, configuration, and usage of the package, and even provided an example usage code snippet.

Now that you have successfully integrated the Iamport payment gateway, you can start processing payments in your Capacitor app with ease. Happy coding!
