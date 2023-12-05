---
title: "Using capacitor-telephony-manager Package"
description: "In this tutorial, we will explore how to use the capacitor-telephony-manager package to access telephony features in a Capacitor app."
created_at: "2021-12-01"
published: true
slug: "capacitor-telephony-manager"
---

# Using capacitor-telephony-manager Package

The capacitor-telephony-manager package allows you to access telephony features in your Capacitor app. This can be useful for tasks such as making phone calls, sending SMS messages, and retrieving information about the device's telephony state.

## Installation

To get started, first install the capacitor-telephony-manager package in your Capacitor project. Open your terminal and run the following command:

```bash
npm install capacitor-telephony-manager
```

## Usage

Once the package is installed, you can start using its features in your app. Here are some examples:

### Making a Phone Call

To make a phone call, you can use the `makeCall` method provided by the package. This method takes a phone number as input and initiates the call. Here's how you can use it:

```javascript
import { Plugins } from '@capacitor/core';
const { TelephonyManager } = Plugins;

TelephonyManager.makeCall({ phoneNumber: '1234567890' })
  .then(() => {
    console.log('Call initiated!');
  })
  .catch((error) => {
    console.error('Failed to initiate call:', error);
  });
```

### Sending an SMS Message

To send an SMS message, you can use the `sendSms` method provided by the package. This method takes a phone number and message body as inputs. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { TelephonyManager } = Plugins;

TelephonyManager.sendSms({
  phoneNumber: '1234567890',
  message: 'Hello, this is a test message!',
})
  .then(() => {
    console.log('SMS sent successfully!');
  })
  .catch((error) => {
    console.error('Failed to send SMS:', error);
  });
```

### Retrieving Telephony State

You can use the `getTelephonyState` method to retrieve information about the device's telephony state. This method returns an object containing properties such as signal strength, network type, and call state. Here's how you can use it:

```javascript
import { Plugins } from '@capacitor/core';
const { TelephonyManager } = Plugins;

TelephonyManager.getTelephonyState()
  .then((state) => {
    console.log('Telephony state:', state);
  })
  .catch((error) => {
    console.error('Failed to retrieve telephony state:', error);
  });
```

## Conclusion

In this tutorial, we learned how to use the capacitor-telephony-manager package to access telephony features in a Capacitor app. We covered making phone calls, sending SMS messages, and retrieving telephony state. Feel free to explore the package's documentation for further customization and additional features.

Remember to check device permissions and handle platform-specific considerations when working with telephony features.