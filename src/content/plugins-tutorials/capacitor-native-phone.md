```markdown
---
"title": "How to Use Capacitor Native Phone Plugin"
"description": "In this tutorial, we will learn how to integrate and use the Capacitor Native Phone package in your Ionic app."
"created_at": "October 25, 2021"
"published": true
slug: capacitor-native-phone
---

# Getting Started with Capacitor Native Phone Plugin

Capacitor Native Phone is a plugin that allows you to access and utilize phone-related functionalities in your Capacitor-based Ionic application. In this tutorial, we will walk through the steps to integrate and use this powerful plugin in your project.

## Installation

To begin, you need to install the `capacitor-native-phone` package in your app. Run the following command:

```bash
npm install capacitor-native-phone
```

## Usage

### Initialize the Plugin

In your Ionic project, make sure to import the plugin and initialize it.

```typescript
import 'capacitor-native-phone';
import { Plugins } from '@capacitor/core';
const { CapacitorNativePhone } = Plugins;
```

### Making a Phone Call

You can use the `makePhoneCall` method to initiate a phone call.

```typescript
async makeCall() {
  const phoneNumber = '+1234567890';
  await CapacitorNativePhone.makePhoneCall({ number: phoneNumber });
}
```

### Sending SMS

To send an SMS, you can use the `sendSms` method.

```typescript
async sendSMS() {
  const phoneNumber = '+1234567890';
  const message = 'Hello, this is a test message.';
  await CapacitorNativePhone.sendSms({ number: phoneNumber, message });
}
```

## Conclusion

In this tutorial, we covered the integration and usage of the Capacitor Native Phone plugin in an Ionic application. By following these steps, you can incorporate phone functionalities seamlessly into your app. Explore more features and functionalities provided by the Capacitor Native Phone plugin for a comprehensive mobile experience.
```
