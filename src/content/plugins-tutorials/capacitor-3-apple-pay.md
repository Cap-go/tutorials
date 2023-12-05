---
title: "Using Capacitor 3 Apple Pay"
description: "Learn how to integrate Apple Pay into your Capacitor 3 app"
created_at: "2022-01-01"
published: true
slug: capacitor-3-apple-pay
---

# Using Capacitor 3 Apple Pay

In this tutorial, we will learn how to integrate Apple Pay into a Capacitor 3 app using the `capacitor-3-apple-pay` package.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor 3 project setup
- An Apple Developer account
- Physical iOS device or a simulator with Apple Pay support

## Step 1: Install the Package

First, we need to install the `capacitor-3-apple-pay` package into our Capacitor 3 project. Run the following command in your terminal:

```bash
npm install capacitor-3-apple-pay
```

## Step 2: Configure Apple Pay

Next, we need to configure Apple Pay in our app. Open the `capacitor.config.json` file in the root of your project and add the following configuration:

```json
{
  "plugins": {
    "ApplePay": {
      "merchantId": "YOUR_MERCHANT_ID",
      "supportedNetworks": ["visa", "masterCard", "amex"],
      "merchantCapabilities": ["supports3DS", "supportsEMV"],
      "requiredShippingContactFields": ["postalAddress", "name"],
      "requiredBillingContactFields": ["postalAddress"],
      "billingAddressRequirement": "none",
      "shippingAddressRequirement": "none"
    }
  }
}
```

Make sure to replace `YOUR_MERCHANT_ID` with your actual Apple Pay merchant identifier.

## Step 3: Implement Apple Pay Button

Now, let's implement the Apple Pay button in our app. Open the desired page component file and add the following code:

```tsx
import { ApplePay } from 'capacitor-3-apple-pay';

...

const handleApplePay = async () => {
  try {
    const result = await ApplePay.presentPaymentRequest({
      total: {
        label: 'Total Amount',
        amount: '100.00'
      },
      currencyCode: 'USD',
      countryCode: 'US',
      supportedNetworks: ['visa', 'masterCard', 'amex'],
      merchantCapabilities: ['supports3DS', 'supportsEMV'],
      shippingMethods: [
        {
          label: 'Standard Shipping',
          identifier: 'standard',
          detail: 'Delivery in 3-5 business days',
          amount: '0.00'
        },
        {
          label: 'Express Shipping',
          identifier: 'express',
          detail: 'Next-day delivery',
          amount: '5.00'
        }
      ]
    });

    if (result.paymentStatus === 'success') {
      // Payment successful
    } else if (result.paymentStatus === 'failure') {
      // Payment failed
    }
  } catch (error) {
    console.error(error);
  }
};

...

<Button onClick={handleApplePay}>Pay with Apple Pay</Button>
```

This code sets up an Apple Pay button and handles the payment request when it is tapped. You can customize the payment request options based on your specific requirements.

## Step 4: Handle Apple Pay Events

Lastly, let's handle the Apple Pay events in our app. Open the desired page component file and add the following code:

```tsx
import { ApplePay } from 'capacitor-3-apple-pay';

...

ApplePay.addListener('paymentAuthorized', async payment => {
  try {
    // Process the authorized payment
    const result = await api.processPayment(payment.token);

    if (result.success) {
      await ApplePay.completePayment({ status: 'success' });
    } else {
      await ApplePay.completePayment({ status: 'failure' });
    }
  } catch (error) {
    console.error(error);
    await ApplePay.completePayment({ status: 'failure' });
  }
});

ApplePay.addListener('paymentMethodSelected', method => {
  // Handle the selected payment method
});

...
```

These event listeners allow you to handle the authorized payment and the selected payment method events. You can perform any necessary backend processing and complete the payment accordingly.

That's it! You have successfully integrated Apple Pay into your Capacitor 3 app using the `capacitor-3-apple-pay` package. Test the app on a physical iOS device or simulator with Apple Pay support to see it in action.

Remember to refer to the package documentation for advanced usage and additional configuration options.

Happy coding!