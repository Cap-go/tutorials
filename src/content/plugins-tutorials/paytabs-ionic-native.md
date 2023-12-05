---
title: "Tutorial: Using PayTabs Ionic Native Package"
description: "A step-by-step guide on using the PayTabs Ionic Native package to integrate PayTabs payment gateway into your Ionic application."
created_at: "2022-10-28"
published: true
slug: paytabs-ionic-native
---

# Tutorial: Using PayTabs Ionic Native Package

In this tutorial, we will walk you through the process of integrating the PayTabs payment gateway into your Ionic application using the PayTabs Ionic Native package. PayTabs Ionic Native is a wrapper for the native Android and iOS SDKs provided by PayTabs, making it easy to seamlessly integrate PayTabs into your Ionic app.

## Prerequisites

Before we start, make sure you have the following prerequisites:

- Ionic CLI installed globally
- Node.js and npm installed
- An active PayTabs account

## Step 1: Installation

To start using the PayTabs Ionic Native package in your Ionic app, you need to install it first. Open the terminal and navigate to your Ionic project directory. Run the following command:

```bash
npm install paytabs-ionic-native@latest --save --force
npx cap sync
```

## Step 2: Configuration

Next, you need to configure the billing and shipping details for the payment. These details include the customer's name, email, phone number, address, and more. You can also specify whether to show the billing and shipping information during the payment process.

Here's an example of configuring the billing and shipping details:

```javascript
import { PaymentSDKBillingDetails, PaymentSDKShippingDetails, PaymentSDKConfiguration } from 'paytabs-ionic-native';

let billingDetails: PaymentSDKBillingDetails = {
  name: 'John Smith',
  email: 'email@domain.com',
  phone: '+201111111111',
  addressLine: 'Address line',
  city: 'Dubai',
  state: 'Dubai',
  countryCode: 'AE',
  zip: '1234'
};

let shippingDetails: PaymentSDKShippingDetails = {
  name: 'John Smith',
  email: 'email@domain.com',
  phone: '+201111111111',
  addressLine: 'Address line',
  city: 'Dubai',
  state: 'Dubai',
  countryCode: 'AE',
  zip: '1234'
};

let configuration: PaymentSDKConfiguration = {
  profileID: '*profile ID*',
  serverKey: '*server key*',
  clientKey: '*client key*',
  cartID: '12345',
  currency: 'USD',
  cartDescription: 'Flowers',
  merchantCountryCode: 'ae',
  merchantName: 'Flowers Store',
  amount: 20,
  screenTitle: 'Pay with Card',
  billingDetails,
  shippingDetails
};

// Options to show billing and shipping info
configuration.showBillingInfo = true;
configuration.showShippingInfo = true;
```

## Step 3: Start Payment

Once the configuration is set, you can start the payment process by calling the `startCardPayment` method from the `PayTabsIonic` module. This method will initiate the payment and return the transaction details.

Here's an example of starting the payment:

```javascript
import { PayTabsIonic } from 'paytabs-ionic-native';

async function startPayment() {
  const result = await PayTabsIonic.startCardPayment(configuration);
  // Handle the transaction result here
}
```

You can now handle the transaction result as per your application's logic.

## Conclusion

In this tutorial, you learned how to integrate the PayTabs payment gateway into your Ionic application using the PayTabs Ionic Native package. You learned how to install the package, configure the payment details, and start the payment process. With PayTabs Ionic Native, you can easily accept payments in your Ionic app using the secure and reliable PayTabs payment gateway.

Remember to refer to the PayTabs Ionic Native documentation for more advanced features and customization options. Happy coding!

---

I hope this tutorial helps you integrate PayTabs into your Ionic application using the PayTabs Ionic Native package. If you have any further questions, feel free to ask.