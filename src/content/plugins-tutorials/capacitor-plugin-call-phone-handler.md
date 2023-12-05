---
title: "Using capacitor-plugin-call-phone-handler Package"
description: "A tutorial on how to use the capacitor-plugin-call-phone-handler package to handle phone calls in Capacitor."
created_at: "2021-10-12"
published: true
slug: "capacitor-plugin-call-phone-handler"
---

# Using capacitor-plugin-call-phone-handler Package

In this tutorial, we will learn how to use the capacitor-plugin-call-phone-handler package to handle phone calls in Capacitor.

## Installation

To get started, we need to first install the capacitor-plugin-call-phone-handler package. Open your terminal and navigate to your Capacitor project directory.

```bash
npm install capacitor-plugin-call-phone-handler
```

Once the installation is complete, synchronize the Capacitor project to add the plugin to the platform-specific projects.

```bash
npx cap sync
```

## Usage

The capacitor-plugin-call-phone-handler package provides a simple API to handle phone call events in Capacitor.

### Handling Incoming Calls

To handle incoming calls, we need to register a listener for the `callReceived` event. This event is triggered when an incoming call is received on the device.

```typescript
import { CallPhoneHandler } from 'capacitor-plugin-call-phone-handler';

CallPhoneHandler.addListener('callReceived', (data) => {
  // Handle the incoming call
  console.log('Received call: ', data);
});
```

The `data` parameter in the callback function contains information about the incoming call, such as the caller's phone number, call duration, and call timestamp.

### Making Outgoing Calls

To make outgoing calls, we can use the `makeCall` method provided by the capacitor-plugin-call-phone-handler package. This method takes a phone number as input and initiates a call to that number.

```typescript
import { CallPhoneHandler } from 'capacitor-plugin-call-phone-handler';

CallPhoneHandler.makeCall('+1234567890');
```

Replace `+1234567890` with the desired phone number to make the call.

### Ending Calls

To end an ongoing call, we can use the `endCall` method provided by the capacitor-plugin-call-phone-handler package. This method terminates the current call.

```typescript
import { CallPhoneHandler } from 'capacitor-plugin-call-phone-handler';

CallPhoneHandler.endCall();
```

### Checking Call State

We can also check the current call state using the `getCallState` method provided by the capacitor-plugin-call-phone-handler package. This method returns the current state of the call, such as "active", "held", or "ended".

```typescript
import { CallPhoneHandler } from 'capacitor-plugin-call-phone-handler';

const callState = CallPhoneHandler.getCallState();
console.log('Call State:', callState);
```

The `callState` variable will contain the current state of the call.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-call-phone-handler package to handle phone calls in Capacitor. We covered how to handle incoming calls, make outgoing calls, end calls, and check the call state. This package provides a convenient way to integrate phone call functionalities into your Capacitor app.