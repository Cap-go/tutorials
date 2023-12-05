---
title: "Using capacitor-plugin-wxalipay"
description: "A tutorial on how to use the capacitor-plugin-wxalipay package"
created_at: "2021-10-25"
published: true
slug: "capacitor-plugin-wxalipay"
---

# Using capacitor-plugin-wxalipay

In this tutorial, we will learn how to use the `capacitor-plugin-wxalipay` package to integrate Alipay functionality in a Capacitor application.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project.
- A valid Alipay developer account.
- Basic knowledge of Capacitor and JavaScript.

## Installation

First, install the `capacitor-plugin-wxalipay` package by running the following command:

```bash
npm install capacitor-plugin-wxalipay
```

## Configuration

### iOS

1. Open your Capacitor project in Xcode.
2. In the Project Navigator, select your project.
3. Select the **Info** tab.
4. Expand the **URL Types** section.
5. Add a new **URL Type** by clicking the **+** button.
6. Set the **Identifier** to your app's bundle identifier.
7. Set the **URL Schemes** to your Alipay app's URL scheme.

### Android

1. Open your Capacitor project in Android Studio.
2. In the **project** folder, navigate to **app** > **src** > **main** > **AndroidManifest.xml**.
3. Add the following code inside the `<application>` tag:

```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="YOUR_ALIPAY_APP_SCHEME" />
</intent-filter>
```

Replace `YOUR_ALIPAY_APP_SCHEME` with your Alipay app's scheme.

## Usage

Now that we have installed and configured the `capacitor-plugin-wxalipay` package, let's see how to use its functionalities.

### Initialize Alipay

To initialize Alipay, add the following code to your project:

```javascript
import { Plugins } from '@capacitor/core';

const { Alipay } = Plugins;

Alipay.init({ appId: 'YOUR_APP_ID' });
```

Replace `YOUR_APP_ID` with your Alipay app's ID.

### Make a Payment

To make a payment using Alipay, use the following code:

```javascript
const options = {
  orderString: 'YOUR_ORDER_STRING',
};

Alipay.pay(options)
  .then(result => {
    console.log('Payment successful:', result);
  })
  .catch(error => {
    console.error('Payment failed:', error);
  });
```

Replace `YOUR_ORDER_STRING` with the order string received from your server.

### Handling Payment Success

To handle the payment success callback, add the following code:

```javascript
Alipay.addListener('alipay_payment_success', (data) => {
  console.log('Payment success data:', data);
});
```

### Handling Payment Failure

To handle the payment failure callback, add the following code:

```javascript
Alipay.addListener('alipay_payment_failure', (error) => {
  console.error('Payment failure error:', error);
});
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-plugin-wxalipay` package to integrate Alipay functionality in a Capacitor application. We covered the installation, configuration, and usage of the package. Now, you can leverage the capabilities of Alipay in your Capacitor projects.