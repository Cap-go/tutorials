---
title: "Using the Capacitor-Dialer Package"
description: "A tutorial on how to use the Capacitor-Dialer package in your Capacitor app."
created_at: "2021-12-01"
published: true
slug: "capacitor-dialer"
---

# Using the Capacitor-Dialer Package

In this tutorial, we will learn how to use the Capacitor-Dialer package to add dialing functionality to your Capacitor app. The Capacitor-Dialer package provides a set of APIs to interact with the device's dialer and make phone calls.

## Installation

To install the Capacitor-Dialer package, open your terminal and navigate to your Capacitor project's root directory. Then run the following command:

```bash
npm install capacitor-dialer
```

## Configuration

After installing the package, we need to configure it to work with our app. Open the `capacitor.config.json` file in your project and add the following entry to the `plugins` section:

```json
"CapacitorDialer": {
  "appId": "com.example.app",
  "appName": "Example App"
}
```

Make sure to replace `"com.example.app"` and `"Example App"` with your app's unique identifier and name.

## Usage

To use the Capacitor-Dialer package, you need to import it into your JavaScript or TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorDialer } = Plugins;
```

### Checking Device Support

Before making any phone calls, you should check if the device supports the dialer feature. Use the `hasFeature()` method to do this:

```javascript
const hasDialer = async () => {
  const { value } = await CapacitorDialer.hasFeature();
  if (value) {
    console.log('Dialer is supported on this device.');
  } else {
    console.log('Dialer is not supported on this device.');
  }
};

hasDialer();
```

### Making a Phone Call

To make a phone call, use the `openDialer()` method and pass the phone number as a parameter:

```javascript
const makePhoneCall = async (phoneNumber) => {
  await CapacitorDialer.openDialer({
    number: phoneNumber,
  });
};

makePhoneCall('+1234567890');
```

Make sure to replace `'+1234567890'` with the actual phone number you want to dial.

## Conclusion

In this tutorial, we learned how to install and use the Capacitor-Dialer package to add dialing functionality to your Capacitor app. We saw how to check if the device supports the dialer feature and how to make phone calls programmatically.

For more information on the Capacitor-Dialer package and its available methods, refer to the official documentation.

Start adding phone call functionality to your app with Capacitor-Dialer today!