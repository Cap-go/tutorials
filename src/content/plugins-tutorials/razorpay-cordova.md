# Using Razorpay with Capacitor

[Razorpay](https://razorpay.com/) is a popular payment gateway service that offers seamless and secure payment solutions. In this tutorial, we will learn how to integrate Razorpay into a Capacitor app using the `capacitor-razorpay` package.

## Prerequisites

Before we begin, make sure that you have the following installed:

- Node.js
- Capacitor CLI

## Step 1: Create a Capacitor App

First, let's create a new Capacitor app by running the following command:

```bash
npx @capacitor/cli create my-app
```

Replace `my-app` with the desired name of your app.

## Step 2: Add the Capacitor Razorpay Plugin

Navigate to your app's root directory and install the `capacitor-razorpay` plugin by running the following command:

```bash
npm install capacitor-razorpay
```

## Step 3: Configure the Plugin

Next, open the `capacitor.config.json` file in your app's root directory and add the following entry to the `plugins` array:

```json
{
  "name": "Razorpay",
  "package": "com.razorpay.cordova"
}
```

This entry tells Capacitor to load the Razorpay plugin when the app is built.

## Step 4: Import and Use the Plugin

To use the Razorpay plugin in your app, import it in your TypeScript/JavaScript file as follows:

```javascript
import { Plugins } from '@capacitor/core';

const { Razorpay } = Plugins;
```

Now, you can use the `Razorpay` object to call the plugin's methods. For example, to initiate a payment, you can use the `open` method:

```javascript
const options = {
  description: 'Credits towards consultation',
  image: 'https://i.imgur.com/3g7nmJC.png',
  currency: 'INR',
  key: 'YOUR_RAZORPAY_KEY',
  order_id: 'YOUR_ORDER_ID',
  amount: '5000',
  name: 'foo',
  theme: {
    color: '#F37254'
  }
};

Razorpay.open(options)
  .then(success => {
    console.log('Payment successful:', success);
    // Handle success
  })
  .catch(error => {
    console.error('Payment error:', error);
    // Handle error
  });
```

Make sure to replace `YOUR_RAZORPAY_KEY` and `YOUR_ORDER_ID` with your own values.

## Step 5: Build and Run the App

To build the app for your target platform (e.g., Android or iOS), use the