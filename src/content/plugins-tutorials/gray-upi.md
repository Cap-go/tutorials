---
title: "Using capacitor-gray-upi Package"
description: "A tutorial on how to use the capacitor-gray-upi package to implement UPI Payments in your Capacitor app."
created_at: "2021-11-10"
published: true
slug: gray-upi
---

# Using capacitor-gray-upi Package

In this tutorial, we will learn how to use the capacitor-gray-upi package to implement UPI Payments in your Capacitor app. The capacitor-gray-upi package is a plugin that uses the EasyUpiPayment library to initiate UPI payments and handle related events. It supports the Android platform.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Ionic CLI
- Capacitor CLI

## Step 1: Install the Package

To get started, open your terminal and navigate to your Capacitor project directory. Then run the following command to install the capacitor-gray-upi package:

```bash
npm install capacitor-gray-upi
```

## Step 2: Copying and Syncing

After the package is installed, you need to copy the necessary files and sync the project. Run the following commands in your terminal:

```bash
ionic build
npx cap copy
npx cap sync
```

## Step 3: Android Setup

For Android, you need to perform some additional steps:

1. Open your Android project in Android Studio:

```bash
npx cap open android
```

2. Inside your `MainActivity.java` file, add the following import statement at the top:

```java
import com.grayhat.upi.GrayUPI;
```

3. Inside the `init` callback of your `MainActivity.java` file, add the following line to initialize the plugin:

```java
add(GrayUPI.class);
```

## Step 4: Initializing the Plugin

Now it's time to initialize the capacitor-gray-upi plugin. In your JavaScript file, import the necessary dependencies and use the `initialise` function to initialize the plugin with the required transaction details. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-gray-upi';

const { GrayUPI } = Plugins;

// ...code

async function startPayment() {
  GrayUPI.addListener('onTransactionCompleted', (res) => {
    alert(JSON.stringify(res));
  });
  GrayUPI.addListener('onTransactionCancelled', (res) => {
    alert(JSON.stringify(res));
  });
  GrayUPI.initialise({
    transID: "**********",
    transRefID: "**********",
    amount: '1.00',
    description: 'Test Payment',
    vpa: '1234567890@service',
    name: 'Sample Name',
  })
    .then(() => {
      GrayUPI.startPayment();
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}
```

The `initialise` function takes a `Transaction` object as a parameter, which includes details like VPA, name, transaction ID, transaction reference ID, description, and amount.

## Step 5: Starting the Payment

To initiate the payment, call the `startPayment` function after the initialization is complete. This will open the UPI payment intent on Android, allowing the user to choose an app for payment. Here's an example:

```javascript
GrayUPI.startPayment();
```

## Handling Events

The capacitor-gray-upi plugin provides two events that you can listen to:

1. `"onTransactionCompleted"`: This event is triggered when the transaction is completed. The event listener callback receives the `TransactionDetails` object, which contains the status of the transaction ("SUBMITTED", "SUCCESS", or "FAILURE").

2. `"onTransactionCancelled"`: This event is triggered when the user cancels the transaction. The event listener callback receives the `TransactionDetails` object.

Here's an example of how to listen to these events:

```javascript
GrayUPI.addListener('onTransactionCompleted', (transaction) => {
  console.log(transaction.status);
});

GrayUPI.addListener('onTransactionCancelled', (transaction) => {
  console.log(transaction.status);
});
```

## Conclusion

Congratulations! You have now learned how to use the capacitor-gray-upi package to implement UPI Payments in your Capacitor app. You can now handle UPI payment functionality in your Android app with ease.

Remember to try out different scenarios and handle errors appropriately in your application.

Feel free to explore the capacitor-gray-upi package documentation for additional features and customization options.