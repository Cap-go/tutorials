---
title: "Using Google Pay Package"
description: "A tutorial on how to use the google-pay package to integrate Google Pay in your application"
created_at: "2021-10-15"
published: true
slug: "googlepay_doorstep"
---

# Using Google Pay Package

This tutorial will guide you on how to integrate Google Pay into your application using the google-pay package. Google Pay provides a fast and secure way for users to make payments using credit or debit cards stored on their Google accounts. By following the steps below, you will be able to implement Google Pay in your application.

## Prerequisites

Before you begin, make sure you have the following:

- An Android or web application project
- Google Play services installed on your Android device (for testing on Android)
- A Google Cloud Platform (GCP) project with Google Pay API enabled
- Basic knowledge of JavaScript

## Step 1: Install the Package

To start, you need to install the `google-pay` package. Open your terminal and run the following command:

```shell
npm install google-pay
```

## Step 2: Setup Google Pay API on Google Cloud Platform

Next, you need to set up the Google Pay API on the Google Cloud Platform. Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project (or select an existing one).
2. Enable the Google Pay API for your project.
3. Configure the necessary settings for your API (e.g., payment methods, allowed countries, etc.).
4. Generate the necessary API credentials (e.g., API key, OAuth client ID, etc.) and note them down for later use.

## Step 3: Implement Google Pay in Your Application

Now, let's implement Google Pay in your application. 

### For Android:

1. Add the necessary permissions and dependency in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
```

```xml
<application
    ...
    android:usesCleartextTraffic="true"
    ...>
    ...
</application>
```

2. Import the `google-pay` package in your JavaScript file:

```javascript
import GooglePay from 'google-pay';
```

3. Create a new instance of the `GooglePay` class:

```javascript
const googlePay = new GooglePay({
    // API credentials (API key, OAuth client ID, etc.)
    apiKey: 'YOUR_API_KEY',
    clientId: 'YOUR_CLIENT_ID',
});

```

4. Implement Google Pay on your payment screen by adding the necessary UI elements (e.g., Google Pay button).

### For Web:

1. Import the `google-pay` package in your JavaScript file:

```javascript
import GooglePay from 'google-pay';
```

2. Create a new instance of the `GooglePay` class:

```javascript
const googlePay = new GooglePay({
    // API credentials (API key, OAuth client ID, etc.)
    apiKey: 'YOUR_API_KEY',
    clientId: 'YOUR_CLIENT_ID',
});

```

3. Implement Google Pay on your payment screen by adding the necessary UI elements (e.g., Google Pay button).

## Step 4: Handle Google Pay Response

Once the user makes a payment using Google Pay, you need to handle the response and process the payment on your server. 

For Android, use the `onPaymentSuccess` and `onPaymentFailure` callbacks to handle the payment response:

```javascript
googlePay.onPaymentSuccess((paymentData) => {
    // Process the successful payment on your server
    // Payment data contains information about the transaction
});

googlePay.onPaymentFailure((error) => {
    // Handle the payment failure
    // Error contains information about the failure
});
```

For Web, use the `onPaymentAuthorized` and `onPaymentError` callbacks:

```javascript
googlePay.onPaymentAuthorized((paymentData) => {
    // Process the authorized payment on your server
    // Payment data contains information about the transaction
});

googlePay.onPaymentError((error) => {
    // Handle the payment error
    // Error contains information about the error
});
```

## Step 5: Test and Publish

Before publishing your application, make sure to thoroughly test the integration of Google Pay in your application. Test different scenarios, such as successful payments, failed payments, etc., to ensure everything is working as expected.

Once you are satisfied with the testing, you can publish your application and make it available to your users.

Congratulations! You have successfully integrated Google Pay into your application using the google-pay package.

## Conclusion

In this tutorial, you learned how to use the google-pay package to integrate Google Pay in your application. You installed the package, set up the Google Pay API on the Google Cloud Platform, implemented Google Pay in your application, handled the payment response, and tested the integration. Now, users can make payments using Google Pay in your application.

Remember to follow Google's guidelines and best practices for handling payments and ensuring the security of your users' data.

Happy coding!

