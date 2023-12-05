---
title: "Using capacitor-phonepe package"
description: "A tutorial on how to use the capacitor-phonepe package"
created_at: "2022-06-15"
published: true
slug: phonepe
---

# Using capacitor-phonepe package

In this tutorial, we will learn how to use the capacitor-phonepe package to integrate PhonePe payments into your Capacitor app. PhonePe is a popular digital payments platform in India. 

## Installation

First, let's install the capacitor-phonepe package using npm:

```bash
npm install capacitor-phonepe
```

## Configuration

To use the capacitor-phonepe package, make sure you have a valid PhonePe merchant account. You will need the following credentials:

- Merchant ID
- Merchant Key
- Salt
- Return URL

Once you have obtained these credentials, open your Capacitor project and navigate to the `capacitor.config.json` file. Add the following configuration under the `"plugins"` section:

```json
"PhonePe": {
  "merchantId": "YOUR_MERCHANT_ID",
  "merchantKey": "YOUR_MERCHANT_KEY",
  "salt": "YOUR_SALT",
  "returnUrl": "YOUR_RETURN_URL"
}
```

Replace `YOUR_MERCHANT_ID`, `YOUR_MERCHANT_KEY`, `YOUR_SALT`, and `YOUR_RETURN_URL` with your actual credentials.

## Usage

Now that we have installed and configured the capacitor-phonepe package, let's see how to use it in our app.

### Importing the package

In your TypeScript file, import the capacitor-phonepe package:

```typescript
import { Plugins } from '@capacitor/core';

const { PhonePe } = Plugins;
```

### Making a payment request

To initiate a payment request with PhonePe, use the `makePayment` method:

```typescript
async function makePayment(amount: number, orderId: string) {
  try {
    const result = await PhonePe.makePayment({
      amount,
      orderId
    });

    if (result.success) {
      // Payment was successful
      console.log('Payment successful');
    } else {
      // Payment failed
      console.error('Payment failed');
    }
  } catch (error) {
    // Error occurred during payment
    console.error('Payment error:', error);
  }
}
```

The `makePayment` method takes two parameters:
- `amount`: The payment amount in Indian Rupees (INR)
- `orderId`: An identifier for the order

### Handling the payment response

After the user completes the payment process, PhonePe will redirect them back to your app using the return URL specified in the configuration. To handle the payment response, add the following code to the page where the return URL is handled:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

ngOnInit() {
  const url = new URL(this.router.url);
  const params = url.searchParams;

  if (params.has('paymentId') && params.has('orderId')) {
    const paymentId = params.get('paymentId');
    const orderId = params.get('orderId');
    
    // Handle payment response
    console.log('Payment completed for paymentId:', paymentId);
    console.log('Order ID:', orderId);
  }
}
```

This code retrieves the `paymentId` and `orderId` from the URL parameters and handles the payment response accordingly.

That's it! You have now learned how to use the capacitor-phonepe package to integrate PhonePe payments into your Capacitor app. Happy coding!