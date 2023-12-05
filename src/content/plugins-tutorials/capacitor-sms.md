---
title: "Using the capacitor-sms package"
description: "This tutorial will guide you through the process of using the capacitor-sms package in your Capacitor app."
created_at: "2022-09-25"
published: true
slug: "capacitor-sms"
---

# Using the capacitor-sms Package

In this tutorial, we will learn how to use the capacitor-sms package to send SMS messages in your Capacitor app.

## Step 1: Installation

First, we need to install the capacitor-sms package. Open your terminal and run the following command:

```
npm install capacitor-sms
```

## Step 2: Android Configuration

If you are targeting Android, you will need to make some changes to your AndroidManifest.xml file. Open the file located at `android/app/src/main/AndroidManifest.xml` and add the following permissions:

```xml
<uses-permission android:name="android.permission.READ_SMS" />
<uses-permission android:name="android.permission.SEND_SMS" />
```

## Step 3: Initialize the Plugin

To start using the capacitor-sms package, we need to initialize the plugin in our project. Open your `index.ts` file and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { Sms } = Plugins;

Sms.initialize();
```

## Step 4: Sending an SMS

Now that we have everything set up, let's send an SMS. Add the following code to the file where you want to send the SMS:

```typescript
import { Plugins } from '@capacitor/core';

const { Sms } = Plugins;

const sendSMS = async () => {
  const options = {
    phoneNumber: '1234567890',
    message: 'Hello from my Capacitor app!'
  };

  try {
    await Sms.send(options);
    console.log('SMS sent successfully!');
  } catch (error) {
    console.error('Failed to send SMS', error);
  }
};

sendSMS();
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-sms package to send SMS messages in our Capacitor app. We covered the installation process, Android configuration, plugin initialization, and sending an SMS. Feel free to explore the capacitor-sms documentation for more advanced features and customization options.

Stay tuned for more Capacitor tutorials!
