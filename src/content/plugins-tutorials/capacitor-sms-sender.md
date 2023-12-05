---
title: "Using the Capacitor SMS Sender Package"
description: "A tutorial on how to use the capacitor-sms-sender package to send SMS messages in your Capacitor app"
created_at: "2021-01-01"
published: true
slug: "capacitor-sms-sender"
---

# Using the Capacitor SMS Sender Package

In this tutorial, we will learn how to use the `capacitor-sms-sender` package to send SMS messages in your Capacitor app. The `capacitor-sms-sender` package provides a simple and easy-to-use API for accessing the native SMS capabilities of your device.

## Installation

To get started, let's install the `capacitor-sms-sender` package in your Capacitor app:

```bash
npm install capacitor-sms-sender
npx cap update
```

## Usage

Once you have installed the package, you can import and use it in your project. Here is a basic example of how to send an SMS message:

```typescript
import { Plugins } from '@capacitor/core';
const { SmsSender } = Plugins;

...

async function sendSMS() {
  try {
    const options = {
      phoneNumber: '+1234567890',
      message: 'Hello, World!'
    };

    await SmsSender.send(options);
    console.log('SMS sent successfully');
  } catch (error) {
    console.error('Failed to send SMS', error);
  }
}

sendSMS();
```

In the code above, we import the `SmsSender` plugin from the `@capacitor/core` package. We then define a function `sendSMS` that will send an SMS message using the `SmsSender.send` method. The `options` object specifies the phone number and message content.

Make sure to replace the `phoneNumber` with the actual recipient's phone number and `message` with the desired text message content.

## Handling Responses

The `SmsSender.send` method returns a promise that resolves when the SMS message is sent successfully, and rejects if there is an error. You can use `try/catch` or `.then/.catch` syntax to handle the response accordingly.

```typescript
try {
  // Send SMS
  await SmsSender.send(options);

  // Code to execute after successful SMS sending
} catch (error) {
  // Code to execute if SMS sending fails
}
```

By wrapping the `SmsSender.send` method in a try/catch block, you can easily handle any errors that might occur during the SMS sending process.

## Permissions

Before using the `capacitor-sms-sender` plugin, make sure to configure the necessary permissions in the `AndroidManifest.xml` file and `Info.plist` file for Android and iOS respectively.

For Android, add the following permission to the `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.SEND_SMS" />
```

For iOS, add the following key to the `Info.plist` file:

```xml
<key>NSAppleMusicUsageDescription</key>
<string>Your message here explaining why you need SMS sending capability</string>
```

Make sure to replace the placeholder with a suitable explanation of why your app requires SMS sending capability.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-sms-sender` package to send SMS messages in a Capacitor app. We covered the installation process, basic usage, handling responses, and setting up the necessary permissions.

Now you can incorporate SMS sending functionality into your Capacitor app with ease using the `capacitor-sms-sender` package.
