---
title: "Tutorial: Using the capacitor-apple-pay package"
description: "This tutorial will guide you through the process of using the capacitor-apple-pay package to implement Apple Pay in your Capacitor app."
created_at: "2022-01-18"
published: true
slug: capacitor-apple-pay
---

# Tutorial: Using the capacitor-apple-pay package

In this tutorial, we will learn how to integrate Apple Pay into your Capacitor app using the capacitor-apple-pay package. We will cover the necessary steps to enable Apple Pay, handle payment processing, and retrieve payment authorization.

## Prerequisites

Before we start, make sure you have the following:

1. Xcode installed on your macOS machine.
2. An Apple Developer Account.
3. An existing Capacitor project set up.

## Step 1: Install capacitor-apple-pay

To get started, install the capacitor-apple-pay package by running the following command in your Capacitor project directory:

```bash
npm install capacitor-apple-pay
```

## Step 2: Configure Apple Pay

Next, we need to configure Apple Pay in our Capacitor project. Open your Xcode project by running the following command:

```bash
npx cap open ios
```

In Xcode, navigate to your app's `Info.plist` file and add the following key-value pairs:

```xml
<key>PKPaymentNetworks</key>
<array>
    <string>visa</string>
    <string>masterCard</string>
    <!-- Add other supported payment networks here -->
</array>
<key>NSApplePayMerchantCapabilities</key>
<array>
    <string>capability3DS</string>
    <!-- Add other required merchant capabilities here -->
</array>
<key>NSApplePayMerchantIdentifier</key>
<string>YourMerchantIdentifier</string>
```

Make sure to replace `YourMerchantIdentifier` with your actual Merchant Identifier obtained from the Apple Developer Account.

## Step 3: Implement Apple Pay

Now, let's implement Apple Pay in our Capacitor app. Create a new TypeScript file, e.g., `ApplePay.ts`, and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { ApplePay } = Plugins;

export class ApplePayHandler {
    constructor() {
        ApplePay.addListener('onPaymentAuthorized', (payment) => {
            // Handle payment authorization
            console.log('Payment authorized:', payment);
        });
    }

    async startPayment() {
        try {
            const canMakePayments = await ApplePay.canMakePayments();
            if (canMakePayments.canMakePayments) {
                const paymentRequest = {
                    merchantIdentifier: 'YourMerchantIdentifier',
                    supportedNetworks: ['visa', 'masterCard'],
                    countryCode: 'US',
                    currencyCode: 'USD',
                    paymentSummaryItems: [
                        {
                            label: 'Product 1',
                            amount: '9.99',
                        },
                        {
                            label: 'Product 2',
                            amount: '4.99',
                        },
                    ],
                };
                const paymentResult = await ApplePay.startPayment(paymentRequest);
                // Handle payment result
                console.log('Payment result:', paymentResult);
            } else {
                console.log('Apple Pay is not available');
            }
        } catch (error) {
            console.error('Error starting payment:', error);
        }
    }
}

export default new ApplePayHandler();
```

Make sure to replace `YourMerchantIdentifier` with your actual Merchant Identifier obtained from the Apple Developer Account.

## Step 4: Add Apple Pay Button

In your desired Capacitor app page, import and use the Apple Pay button component:

```tsx
import React from 'react';
import { IonButton } from '@ionic/react';
import { applePayButton } from 'capacitor-apple-pay';

const MyComponent: React.FC = () => {
    const handleApplePayClick = () => {
        // Call the startPayment() method from ApplePayHandler
        ApplePayHandler.startPayment();
    };

    return (
        <IonButton onClick={handleApplePayClick}>
            <applePayButton />
            Pay with Apple Pay
        </IonButton>
    );
};

export default MyComponent;
```

## Step 5: Test Apple Pay

Connect your device to your macOS machine, build and run your Capacitor app on your device using Xcode. Make sure your device supports Apple Pay in the configured country.

In your app, click the "Pay with Apple Pay" button. If everything is set up correctly, an Apple Pay sheet should appear. You can test with a test account or a real account to complete the payment process.

Congratulations! You have successfully integrated Apple Pay into your Capacitor app using the capacitor-apple-pay package.

## Conclusion

In this tutorial, we covered the steps required to integrate Apple Pay into a Capacitor app using the capacitor-apple-pay package. We learned how to install and configure the package, implement payment handling, and add an Apple Pay button to our app. Now, you can provide a seamless and secure payment experience to your users using Apple Pay.

Happy coding!

Remember to replace `YourMerchantIdentifier` with your actual Merchant Identifier throughout the tutorial.