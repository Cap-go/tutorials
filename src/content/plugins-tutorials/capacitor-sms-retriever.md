---
title: "Using @skmd87/capacitor-sms-retriever Package"
description: "A tutorial on how to use the @skmd87/capacitor-sms-retriever package in your Capacitor app."
created_at: "2022-11-30"
published: true
slug: capacitor-sms-retriever
---

# Using @skmd87/capacitor-sms-retriever Package

In this tutorial, we will learn how to use the `@skmd87/capacitor-sms-retriever` package in your Capacitor app. This package allows you to easily retrieve SMS messages on Android devices using the SMS Retriever API.

## Prerequisites

Before we get started, make sure you have the following installed:

- Node.js and npm
- Capacitor
- Android Studio (for Android development)

## Installation

To install the `@skmd87/capacitor-sms-retriever` package, open your terminal and navigate to your Capacitor app's root directory. Then, run the following command:

```bash
npm install @skmd87/capacitor-sms-retriever
```
Once the installation is complete, continue to the next section.

## Configuring the Package

Next, we need to configure the package in your Capacitor app. Open your `capacitor.config.json` file and add the following entry to the `plugins` section:

```json
"CapacitorSmsRetriever": {
  "appId": "YOUR_APP_ID"
}
```

Make sure to replace `YOUR_APP_ID` with your actual Android app package name.

## Using the Plugin

Now that we have the package installed and configured, let's see how to use it in our app.

To start using the `@skmd87/capacitor-sms-retriever` package, import it into your desired file:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorSmsRetriever } = Plugins;
```

### Requesting SMS Consent

Before you can retrieve SMS messages, you need to request SMS consent from the user. To do this, call the `requestConsent` method:

```typescript
async function requestSmsConsent() {
  try {
    const result = await CapacitorSmsRetriever.requestConsent();
    // Handle successful consent request
  } catch (error) {
    // Handle error
  }
}
```

The `requestConsent` method will show a dialog to the user, asking for their consent to read SMS messages.

### Listening for SMS Retrieval

Once the user has provided consent, you can start listening for SMS retrieval events. Call the `startListening` method to start listening:

```typescript
function startListeningForSms() {
  CapacitorSmsRetriever.startListening(
    (event: any) => {
      // Handle SMS retrieval event
    },
    (error: any) => {
      // Handle error
    }
  );
}
```

The `startListening` method takes two callback functions - one for handling the successful retrieval event and another for handling errors.

### Stopping Listening

To stop listening for SMS retrieval events, call the `stopListening` method:

```typescript
function stopListeningForSms() {
  CapacitorSmsRetriever.stopListening(
    () => {
      // Successfully stopped listening
    },
    (error: any) => {
      // Handle error
    }
  );
}
```

The `stopListening` method takes a callback function to handle the successful stop event and an optional error callback.

## Conclusion

In this tutorial, we learned how to use the `@skmd87/capacitor-sms-retriever` package in your Capacitor app. We covered installation, configuration, and basic usage of the package. Now you can easily retrieve SMS messages on Android devices using the SMS Retriever API.

Remember to check the official documentation for more advanced usage and options. Happy coding!