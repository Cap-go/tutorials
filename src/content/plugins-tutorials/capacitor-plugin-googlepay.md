---
title: "Using the @fresha/capacitor-plugin-googlepay Package"
description: "This tutorial will guide you through the process of integrating and using the @fresha/capacitor-plugin-googlepay package in your Capacitor project."
created_at: "2022-09-28"
published: true
slug: "capacitor-plugin-googlepay"
---

# Using the @fresha/capacitor-plugin-googlepay Package

## Introduction

The @fresha/capacitor-plugin-googlepay package is a Capacitor plugin that provides functionality for integrating Google Pay into your Capacitor project. This plugin allows you to easily accept payments using Google Pay in your mobile app. In this tutorial, we will guide you through the process of installing, configuring, and using this plugin in your Capacitor project.

## Prerequisites

Before we begin, please ensure that you have the following:

- Capacitor installed in your project.
- A valid Google Pay API configuration file from the Google Developers Console.
- Basic knowledge of Capacitor and JavaScript/TypeScript.

## Installation

To install the @fresha/capacitor-plugin-googlepay package, follow these steps:

1. Open your terminal or command prompt and navigate to your Capacitor project's root directory.
2. Run the following command to install the package:

```bash
npm i --save @fresha/capacitor-plugin-googlepay
```

3. After the installation is complete, update the Capacitor dependencies by running the following command:

```bash
npx cap update
```

## Configuration

Next, we need to configure the @fresha/capacitor-plugin-googlepay package in our project. Here's how:

1. Locate your Google Pay API configuration file (google-services.json).
2. Copy the file to the root directory of your Capacitor project.
3. Open your `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "@fresha/capacitor-plugin-googlepay": {
      "googlePayConfigPath": "google-services.json"
    }
  }
}
```

Make sure to replace `"google-services.json"` with the actual path to your Google Pay API configuration file.

## Usage

Now that the installation and configuration are complete, we can start using the @fresha/capacitor-plugin-googlepay package in our project. Here are some examples of common tasks you might perform:

### Initialize the Plugin

To initialize the Google Pay plugin, you need to call the `initialize` function. Here's an example:

```javascript
import { GooglePay } from '@fresha/capacitor-plugin-googlepay';

GooglePay.initialize();
```

### Check Google Pay Availability

You can check if Google Pay is available on the user's device by calling the `isAvailable` function. Here's an example:

```javascript
import { GooglePay } from '@fresha/capacitor-plugin-googlepay';

const isAvailable = await GooglePay.isAvailable();
if (isAvailable) {
  // Google Pay is available, you can proceed with payment
} else {
  // Google Pay is not available on this device
}
```

### Request Payment

To request a payment using Google Pay, you need to call the `requestPayment` function. Here's an example:

```javascript
import { GooglePay } from '@fresha/capacitor-plugin-googlepay';

const paymentData = await GooglePay.requestPayment({
  price: 10.99,
  currencyCode: 'USD',
  paymentDescription: 'Your order total',
});
```

### Handle Payment Result

After calling the `requestPayment` function, you will receive the payment result in the form of a `paymentData` object. You can handle the result according to your application's logic. Here's an example:

```javascript
import { GooglePay } from '@fresha/capacitor-plugin-googlepay';

GooglePay.onPaymentResult((result) => {
  if (result.status === 'SUCCESS') {
    // Payment was successful, proceed with your application logic
  } else if (result.status === 'ERROR') {
    // An error occurred during payment, handle the error
    console.error(result.error);
  }
});
```

## Conclusion

In this tutorial, we covered the installation, configuration, and usage of the @fresha/capacitor-plugin-googlepay package in a Capacitor project. We learned how to initialize the plugin, check Google Pay availability, request a payment, and handle the payment result. With this knowledge, you can now easily integrate Google Pay into your Capacitor mobile app and provide a seamless payment experience for your users.

Remember to refer to the package's documentation for more information and additional features. Happy coding!

*Note: This tutorial assumes basic knowledge of Capacitor and JavaScript/TypeScript. If you're new to Capacitor, it's recommended to go through the official documentation and familiarize yourself with the basics before proceeding.*
