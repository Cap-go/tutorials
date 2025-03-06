---
"title": "Using capacitor-plugin-phone-call Package",
"description": "This tutorial provides guidance on implementing the capacitor-plugin-phone-call package in your Ionic project to enable phone call functionality. The step-by-step guide includes instructions on installation, setting up the plugin, integration with your project, and testing.",
"created_at": "October 29, 2021",
"published": true,
"slug": "capacitor-plugin-phonecall.git"
---

# Using capacitor-plugin-phone-call Package

In this tutorial, we will walk through the process of integrating the `capacitor-plugin-phone-call` package into your Ionic application to enable phone call capabilities within your app. This guide will provide detailed steps on the installation, configuration, and testing of the phone call plugin.

## Installation

To get started, install the `capacitor-plugin-phone-call` package by running the following command:

```bash
npm install capacitor-plugin-phone-call
ionic cap sync
```

## Setting Up the Plugin

1. After installing the plugin, you need to include it in your project. 

2. **Android Setup**:

   In your Android application, modify the `AndroidManifest.xml` file to include the necessary permissions. 

3. **iOS Setup**:

   Update the Info.plist with the appropriate description to request access to phone features.

## Integrating with Your Application

To integrate phone call functionality into your app, you can use the following code snippet:

```typescript
import { PhoneCall } from 'capacitor-plugin-phone-call';

async function makePhoneCall() {
    await PhoneCall.makeCall({ number: '1234567890' });
}
```

The `makeCall` method from the `PhoneCall` object enables your application to initiate phone calls directly.

## Testing the Phone Call Functionality

To test the phone call feature within your application, use the following code snippet:

```typescript
// Perform a test phone call
PhoneCall.makeCall({ number: '1234567890' })
  .then(() => {
    console.log('Phone call initiated successfully.');
  })
  .catch((error) => {
    console.error('An error occurred during the phone call:', error);
  });
```

By following the steps above, your Ionic application will be equipped with the capability to make phone calls seamlessly using the `capacitor-plugin-phone-call` package.