---
title: Using the Capacitor Plugin Phone Call Package
description: Step-by-step tutorial on leveraging the Capacitor Plugin Phone Call package for implementing phone calls in Capacitor apps.
created_at: 2022-02-15
published: true
slug: capacitor-plugin-phonecall.git
locale: en
---

# How to Use the Capacitor Plugin Phone Call Package

## Introduction
This tutorial guides you through the process of integrating and utilizing the `capacitor-plugin-phone-call` plugin in your Capacitor app to enable direct phone call interactions within your application.

## Setup
Firstly, ensure you have Capacitor installed globally on your machine:
```bash
npm install -g @capacitor/core @capacitor/cli
```

Next, install the `capacitor-plugin-phone-call` package:
```bash
npm install capacitor-plugin-phone-call
ionic cap sync
```

## Adding Phone Call Functionality
To initiate a phone call within your app, use the following function:

```javascript
import { CallNumber } from 'capacitor-plugin-phone-call';

async function dialNumber() {
  const phoneNumber = '+123456789'; // Phone number to dial

  CallNumber.call({
    number: phoneNumber,
  }).then(() => {
    console.log('Phone call successfully initiated.');
  }).catch(error => {
    console.error('Error during phone call: ', error);
  });
}
```

In the provided code snippet:
- Replace `phoneNumber` with the actual phone number you want to dial.
- This function makes use of the `CallNumber.call()` method to initiate a phone call.
- You can log the success or error messages for handling the outcome of the call.

## Permissions
Ensure you have the required permissions within your `AndroidManifest.xml` and `Info.plist` files to handle phone call functionalities.

## Conclusion
By following these steps, you can seamlessly integrate the `capacitor-plugin-phone-call` into your Capacitor app for efficiently handling phone call actions within your application.
