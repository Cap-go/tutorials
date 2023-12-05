---
title: "Using the @nadlowebagentur/capacitor-sip-phone Package"
description: "This tutorial will guide you through the process of using the @nadlowebagentur/capacitor-sip-phone package in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-sip-phone
---

# Using the @nadlowebagentur/capacitor-sip-phone Package

In this tutorial, we will learn how to use the `@nadlowebagentur/capacitor-sip-phone` package to integrate SIP (Session Initiation Protocol) functionality into your Capacitor app. SIP allows you to make voice calls over the internet using VoIP (Voice over Internet Protocol) technology.

## Step 1: Installing the Package

To begin, ensure that you have a Capacitor project set up. If not, you can create a new Capacitor project by following the Capacitor documentation.

Once you have a Capacitor project ready, install the `@nadlowebagentur/capacitor-sip-phone` package by running the following command in your project's root directory:

```bash
npm install @nadlowebagentur/capacitor-sip-phone
```

This will add the package as a dependency in your project's `package.json` file and download the necessary files.

## Step 2: Configuring the SIP Phone Plugin

After installing the package, you need to configure the SIP Phone plugin. Open your Capacitor project's `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "SipPhone": {
      "sipServer": "YOUR_SIP_SERVER",
      "sipPort": "YOUR_SIP_PORT",
      "sipUser": "YOUR_SIP_USER",
      "sipPassword": "YOUR_SIP_PASSWORD"
    }
  }
}
```

Replace `YOUR_SIP_SERVER`, `YOUR_SIP_PORT`, `YOUR_SIP_USER`, and `YOUR_SIP_PASSWORD` with your actual SIP server details.

## Step 3: Using the SIP Phone Plugin

Now that the plugin is configured, you can start using it in your app. Import the `SipPhone` module from the `@nadlowebagentur/capacitor-sip-phone` package and use its methods to make and receive SIP calls.

Here's an example of how you can make a SIP call:

```javascript
import { SipPhone } from '@nadlowebagentur/capacitor-sip-phone';

// ...

const makeSipCall = async () => {
  try {
    const callId = await SipPhone.makeCall('DESTINATION_PHONE_NUMBER');
    console.log(`SIP call initiated. Call ID: ${callId}`);
  } catch (error) {
    console.error('Failed to make SIP call:', error);
  }
};

makeSipCall();
```

Replace `'DESTINATION_PHONE_NUMBER'` with the phone number you want to call.

Similarly, you can use other methods provided by the `SipPhone` module, such as `answerCall()` to answer incoming SIP calls and `hangUpCall(callId)` to hang up ongoing calls.

## Conclusion

In this tutorial, we have learned how to integrate the `@nadlowebagentur/capacitor-sip-phone` package into your Capacitor app. We covered installation, configuration, and usage of the SIP Phone plugin.

With this knowledge, you can now add SIP functionality to your Capacitor app and enable voice calling over the internet.