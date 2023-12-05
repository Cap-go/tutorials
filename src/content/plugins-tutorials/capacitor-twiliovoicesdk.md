---
title: "Using capacitor-twiliovoicesdk"
description: "A tutorial on how to use the capacitor-twiliovoicesdk package in Capacitor"
created_at: "2022-10-31"
published: true
slug: capacitor-twiliovoicesdk
---

# Using capacitor-twiliovoicesdk

In this tutorial, we will learn how to use the `capacitor-twiliovoicesdk` package in Capacitor to integrate Twilio voice calling capabilities into your mobile app. Twilio provides a cloud communication platform that allows developers to make and receive phone calls programmatically.

## Installation

To get started, you need to install the `capacitor-twiliovoicesdk` package. Open your Capacitor project and run the following command:

```bash
npm install capacitor-twiliovoicesdk
```

## Configuration

Before using the Twilio Voice SDK, you need to configure your Twilio account. Follow these steps:

1. Sign in to your [Twilio account](https://www.twilio.com/console).
2. Retrieve your Account SID and Authentication Token from the [Twilio console](https://www.twilio.com/console).
3. Open your Capacitor project's native iOS project using Xcode.
4. Edit the `Info.plist` file and add the following keys with their respective values:

```xml
<key>TwilioAccountSID</key>
<string>YOUR_TWILIO_ACCOUNT_SID</string>
<key>TwilioAuthToken</key>
<string>YOUR_TWILIO_AUTH_TOKEN</string>
```

Replace `YOUR_TWILIO_ACCOUNT_SID` and `YOUR_TWILIO_AUTH_TOKEN` with your actual Twilio credentials.

## Usage

Now, let's see how to use the Twilio Voice SDK in Capacitor.

### Initializing the Twilio Voice SDK

To initialize the Twilio Voice SDK, create a new TypeScript file (e.g., `twilio-voice.ts`) and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { TwilioVoiceSDK } = Plugins;

TwilioVoiceSDK.initialize();
```

### Making an Outgoing Call

To make an outgoing call, add the following code to your TypeScript file:

```typescript
const outgoingCall = await TwilioVoiceSDK.makeCall({
  to: '+1234567890', // The phone number you want to call
  from: '+0987654321', // Your Twilio phone number
});
```

Replace `'+1234567890'` with the phone number you want to call, and `'+0987654321'` with your actual Twilio phone number.

### Receiving Incoming Calls

To receive incoming calls, you need to handle incoming call notifications. Add the following code:

```typescript
TwilioVoiceSDK.addListener('incomingCall', (call) => {
  console.log(`Incoming call from: ${call.from}`);

  // Accept the incoming call
  TwilioVoiceSDK.acceptCall(call.callId);
});

TwilioVoiceSDK.addListener('callAccepted', (call) => {
  console.log(`Call accepted from: ${call.from}`);

  // Handle the accepted call
});

TwilioVoiceSDK.addListener('callEnded', (call) => {
  console.log(`Call ended with: ${call.from}`);

  // Handle the ended call
});
```

### Disconnecting a Call

To disconnect an ongoing call, use the following code:

```typescript
TwilioVoiceSDK.disconnectCall(call.callId);
```

Replace `call.callId` with the ID of the ongoing call.

## Conclusion

In this tutorial, we learned how to use the `capacitor-twiliovoicesdk` package to integrate Twilio voice calling capabilities into a Capacitor project. We saw how to configure the Twilio account, initialize the Twilio Voice SDK, make outgoing calls, handle incoming calls, and disconnect ongoing calls. With this knowledge, you can now add voice calling functionality to your mobile app using Twilio.

Remember to refer to the [official Twilio documentation](https://www.twilio.com/docs/voice/quickstart) for detailed information on advanced usage and additional features.

Happy coding!