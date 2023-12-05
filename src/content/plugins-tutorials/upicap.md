---
title: "Using upi-intent Package for UPI Payments"
description: "Learn how to integrate and use the upi-intent package in your Ionic app to enable UPI payments."
created_at: "2022-01-10"
published: true
slug: "upicap"
---

# Using upi-intent Package for UPI Payments

In this tutorial, we will learn how to integrate the upi-intent package in your Ionic app to enable UPI payments. The upi-intent package is a native Android Capacitor plugin for Ionic that allows you to initiate UPI payments using UPI intent.

## Prerequisites

Before we begin, make sure you have the following:

- Ionic framework installed
- Capacitor installed
- Android development environment set up

## Installation

To install the upi-intent package in your Ionic app, run the following command:

```bash
npm install upi-intent
```

## Integration

1. Import the `Upicap` module from the `upi-intent` package in your Ionic app.

```typescript
import { Upicap } from 'upi-intent';
```

2. Create a function to handle the payment:

```typescript
async pay() {
  try {
    const paymentResult = await Upicap.startPayment({
      vpa: 'YOUR_UPI_ID',
      amount: '10.00',
      merchant_code: 'UPI_MERCHANT_CODE',
      name: 'UPI_MERCHANT_NAME',
      trans_id: 'UNIQUE_TRANSACTION_ID'
    });

    console.log(paymentResult);
    alert(JSON.stringify(paymentResult));
  } catch (error) {
    console.error(error.message);
  }
}
```

3. Call the `pay()` function to initiate the payment process.

```typescript
this.pay();
```

4. Find your merchant codes from the [NPCI website](https://www.npci.org.in/what-we-do/rupay/merchant-category-code).

## Transaction Details

Here are the properties for the transaction object passed to the `startPayment()` method:

| Property          | Type     | Description                            |
| ----------------- | -------- | -------------------------------------- |
| `vpa`             | `string` | UPI ID of the recipient                  |
| `amount`          | `string` | Amount to be paid                       |
| `merchant_code`   | `string` | Merchant code for the transaction       |
| `name`            | `string` | Name of the UPI merchant                |
| `trans_id`        | `string` | Unique transaction ID                   |

## Handling the Payment Result

After calling `startPayment()`, you can handle the payment result using the `then()` method. Here's an example:

```typescript
.then((res) => {
  alert(JSON.stringify(res.status));
  // Handle the payment result...
})
.catch((err) => {
  console.log(err.message);
  // Handle the error...
});
```

## Conclusion

In this tutorial, we have learned how to integrate and use the upi-intent package in your Ionic app for UPI payments. Now you can enable seamless UPI payments in your app using the UPI intent.