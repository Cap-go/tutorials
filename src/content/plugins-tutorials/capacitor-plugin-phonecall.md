---
title: "Using capacitor-plugin-phone-call"
description: "Learn how to use the capacitor-plugin-phone-call package to make phone calls in your Capacitor projects."
created_at: "2022-10-08"
published: true
slug: capacitor-plugin-phonecall
---

# Using capacitor-plugin-phone-call

In this tutorial, we will explore how to use the capacitor-plugin-phone-call package to make phone calls in your Capacitor projects. The capacitor-plugin-phone-call package allows you to integrate phone call functionality into your Ionic Capacitor applications with ease.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor: `npm install -g @capacitor/core @capacitor/cli`
- capacitor-plugin-phone-call: `npm install capacitor-plugin-phone-call`

## Setting up the Plugin

To start using the capacitor-plugin-phone-call package, follow these steps:

1. Install the capacitor-plugin-phone-call package by running the following command in your project directory:

```bash
npm install capacitor-plugin-phone-call
```

2. Sync the Capacitor configuration with the installed plugin by running the following command:

```bash
npx cap sync
```

## Making Phone Calls

Now that your project is set up with the capacitor-plugin-phone-call package, you can start making phone calls. Here's an example of how to make a phone call using the Capacitor plugin:

```typescript
import { PhoneCall } from 'capacitor-plugin-phone-call';

async function makePhoneCall() {
  const phoneNumber = '123456789'; // Replace with the desired phone number

  try {
    const response = await PhoneCall.makeCall({ phoneNumber });
    console.log('Phone call initiated:', response);
  } catch (error) {
    console.error('Failed to make the phone call:', error);
  }
}
```

In the above code snippet, we import the `PhoneCall` class from the capacitor-plugin-phone-call package. We then define an async function `makePhoneCall` that initiates a phone call using the `makeCall` method of the `PhoneCall` class. We supply the desired phone number as an argument to the `makeCall` method.

To handle the response or error, we use a try-catch block. If the phone call is initiated successfully, the response will be logged to the console. Otherwise, the error will be logged.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-phone-call package to make phone calls in Capacitor projects. We covered the setup process and demonstrated how to initiate a phone call using the `makeCall` method. With this knowledge, you can easily integrate phone call functionality into your Ionic Capacitor applications.