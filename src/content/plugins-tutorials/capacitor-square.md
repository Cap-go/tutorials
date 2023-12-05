**Title:**
Using @proteansoftware/capacitor-square Package - A Markdown Tutorial

---

**Description:**
In this tutorial, we will explore how to use the @proteansoftware/capacitor-square package in your Capacitor app. The @proteansoftware/capacitor-square package provides a seamless integration with the Square payment processing platform, allowing you to easily implement secure and reliable payment functionality in your app.

---

**Frontmatter:**
```markdown
---
title: "Using @proteansoftware/capacitor-square Package - A Markdown Tutorial"
description: "In this tutorial, we will explore how to use the @proteansoftware/capacitor-square package in your Capacitor app. The @proteansoftware/capacitor-square package provides a seamless integration with the Square payment processing platform, allowing you to easily implement secure and reliable payment functionality in your app."
created_at: "2022-01-01"
published: true
slug: "capacitor-square"
---
```

---

**Table of Contents:**
1. Introduction to @proteansoftware/capacitor-square
2. Installation
3. Configuring Square API Credentials
4. Initializing the Square Plugin
5. Implementing Payment Processing
   - Creating a Payment Form
   - Handling Card Payment
   - Handling Digital Wallet Payment
   - Handling Square Gift Card Payment
   - Handling QR Code Payment
   - Handling In-App Payments
6. Additional Functionality
   - Customizing Payment Form
   - Handling Errors and Exceptions
   - Managing Transactions
   - Retrieving Transaction Details
7. Conclusion
8. Further Reading

---

**1. Introduction to @proteansoftware/capacitor-square**

The @proteansoftware/capacitor-square package is a Capacitor plugin that provides a simple and efficient way to integrate Square payment processing into your Capacitor app. With this package, you can implement various payment workflows, including card payments, digital wallet payments, Square gift card payments, QR code payments, and in-app payments.

---

**2. Installation**

To install the @proteansoftware/capacitor-square package, follow these steps:

1. Open your Capacitor app project in your preferred code editor.
2. Open a terminal window and navigate to the root directory of your Capacitor app.
3. Run the following command to install the package:

   ```bash
   npm install @proteansoftware/capacitor-square
   ```

---

**3. Configuring Square API Credentials**

Before you can start using the @proteansoftware/capacitor-square package, you need to configure your Square API credentials. Here's how:

1. Sign in to your Square Developer Console (https://developer.squareup.com/apps).
2. Create a new application or select an existing one.
3. Go to the "Credentials" tab and copy your "Application ID" and "Access Token" values.
4. Open the `capacitor.config.json` file in the root directory of your Capacitor app.
5. Add the following configuration values under the "plugins" section:

   ```json
   "plugins": {
     "@proteansoftware/capacitor-square": {
       "applicationId": "YOUR_APPLICATION_ID",
       "accessToken": "YOUR_ACCESS_TOKEN"
     }
   }
   ```

   Replace "YOUR_APPLICATION_ID" and "YOUR_ACCESS_TOKEN" with your actual Square API credentials.

---

**4. Initializing the Square Plugin**

To use the @proteansoftware/capacitor-square package in your app, you need to initialize the Square plugin. Here's how:

1. Import the `Plugins` object from `@capacitor/core` and the `CapacitorSquare` object from `@proteansoftware/capacitor-square` in your JavaScript file:

   ```javascript
   import { Plugins } from '@capacitor/core';
   import { CapacitorSquare } from '@proteansoftware/capacitor-square';
   ```

2. Add the following code to initialize the Square plugin:

   ```javascript
   const { CapacitorSquare } = Plugins;

   // Initialize the Square plugin
   CapacitorSquare.initialize().then(() => {
     console.log('Square plugin initialized successfully');
   }).catch((error) => {
     console.error('Failed to initialize Square plugin', error);
   });
   ```

---

**5. Implementing Payment Processing**

The @proteansoftware/capacitor-square package provides several methods for implementing different payment workflows. Let's explore some common ones:

**5.1 Creating a Payment Form**

To collect payment details from the user, you need to create a payment form. Here's an example:

```html
<form id="payment-form">
  <input type="text" id="card-number" placeholder="Card Number">
  <input type="text" id="expiration-date" placeholder="Expiration Date">
  <input type="text" id="cvv" placeholder="CVV">
  <button type="submit">Pay</button>
</form>
```

**5.2 Handling Card Payment**

To process a card payment, you can use the `CapacitorSquare.processCardPayment` method. Here's an example:

```javascript
// Get the payment form element
const paymentForm = document.getElementById('payment-form');

// Listen for the form submission
paymentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the payment details from the form
  const cardNumber = document.getElementById('card-number').value;
  const expirationDate = document.getElementById('expiration-date').value;
  const cvv = document.getElementById('cvv').value;

  try {
    // Process the card payment
    const result = await CapacitorSquare.processCardPayment({
      cardNumber,
      expirationDate,
      cvv,
    });

    // Handle the payment result
    if (result.success) {
      console.log('Payment processed successfully');
    } else {
      console.error('Failed to process payment', result.error);
    }
  } catch (error) {
    console.error('An error occurred while processing payment', error);
  }
});
```

**5.3 Handling Digital Wallet Payment**

To process a digital wallet payment (e.g., Apple Pay, Google Pay), you can use the `CapacitorSquare.processDigitalWalletPayment` method. Here's an example:

```javascript
// Listen for the digital wallet payment button click
document.getElementById('digital-wallet-payment-button').addEventListener('click', async () => {
  try {
    // Process the digital wallet payment
    const result = await CapacitorSquare.processDigitalWalletPayment();

    // Handle the payment result
    if (result.success) {
      console.log('Digital wallet payment processed successfully');
    } else {
      console.error('Failed to process digital wallet payment', result.error);
    }
  } catch (error) {
    console.error('An error occurred while processing digital wallet payment', error);
  }
});
```

**5.4 Handling Square Gift Card Payment**

To process a Square gift card payment, you can use the `CapacitorSquare.processGiftCardPayment` method. Here's an example:

```javascript
// Listen for the gift card payment button click
document.getElementById('gift-card-payment-button').addEventListener('click', async () => {
  try {
    // Process the gift card payment
    const result = await CapacitorSquare.processGiftCardPayment();

    // Handle the payment result
    if (result.success) {
      console.log('Gift card payment processed successfully');
    } else {
      console.error('Failed to process gift card payment', result.error);
    }
  } catch (error) {
    console.error('An error occurred while processing gift card payment', error);
  }
});
```

**5.5 Handling QR Code Payment**

To process a QR code payment, you can use the `CapacitorSquare.processQRCodePayment` method. Here's an example:

```javascript
// Listen for the QR code payment button click
document.getElementById('qr-code-payment-button').addEventListener('click', async () => {
  try {
    // Process the QR code payment
    const result = await CapacitorSquare.processQRCodePayment();

    // Handle the payment result
    if (result.success) {
      console.log('QR code payment processed successfully');
    } else {
      console.error('Failed to process QR code payment', result.error);
    }
  } catch (error) {
    console.error('An error occurred while processing QR code payment', error);
  }
});
```

**5.6 Handling In-App Payments**
To process in-app payments, you can use the `CapacitorSquare.processInAppPayment` method. Here's an example:

```javascript
// Listen for the in-app payment button click
document.getElementById('in-app-payment-button').addEventListener('click', async () => {
  try {
    // Process the in-app payment
    const result = await CapacitorSquare.processInAppPayment();

    // Handle the payment result
    if (result.success) {
      console.log('In-app payment processed successfully');
    } else {
      console.error('Failed to process in-app payment', result.error);
    }
  } catch (error) {
    console.error('An error occurred while processing in-app payment', error);
  }
});
```

---

**6. Additional Functionality**

The @proteansoftware/capacitor-square package also provides additional functionality for customizing the payment form, handling errors and exceptions, managing transactions, and retrieving transaction details.

**6.1 Customizing Payment Form**

To customize the appearance and behavior of the payment form, you can use the `CapacitorSquare.setPaymentFormOptions` method. Here's an example:

```javascript
// Set the payment form options
CapacitorSquare.setPaymentFormOptions({
  // Specify the desired options
}).then(() => {
  console.log('Payment form options set successfully');
}).catch((error) => {
  console.error('Failed to set payment form options', error);
});
```

**6.2 Handling Errors and Exceptions**

To handle errors and exceptions that occur during payment processing, you can use the `CapacitorSquare.addListener` method. Here's an example:

```javascript
// Add an error listener
CapacitorSquare.addListener('error', (error) => {
  console.error('An error occurred', error);
});
```

**6.3 Managing Transactions**

To manage transactions and retrieve transaction details, you can use the `CapacitorSquare.createTransaction` and `CapacitorSquare.getTransactionDetails` methods. Here's an example:

```javascript
// Create a transaction
const transactionId = await CapacitorSquare.createTransaction({
  // Specify the transaction details
});

// Get transaction details
const details = await CapacitorSquare.getTransactionDetails(transactionId);
console.log('Transaction details:', details);
```

---

**7. Conclusion**

In this tutorial, we have explored how to use the @proteansoftware/capacitor-square package to implement secure and reliable payment processing in your Capacitor app. We have covered topics such as installation, configuring Square API credentials, initializing the Square plugin, and implementing various payment workflows.

---

**8. Further Reading**

To learn more about the @proteansoftware/capacitor-square package and its capabilities, refer to the official documentation and example app available on GitHub:

- [@proteansoftware/capacitor-square Documentation](https://github.com/proteansoftware/capacitor-square#readme)
- [Example App](https://github.com/proteansoftware/capacitor-square-example)