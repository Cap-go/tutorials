---
title: "Using capacitor-twilio-voice"
description: "A tutorial on how to use the capacitor-twilio-voice package in your Capacitor app."
created_at: "2021-09-10"
published: true
slug: "capacitor-twilio-voice"
---

# Using capacitor-twilio-voice

In this tutorial, we will learn how to use the capacitor-twilio-voice package to integrate Twilio Voice API into your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project.
- An active Twilio account with Voice API credentials.
- Basic knowledge of TypeScript and Ionic Capacitor.

## Installation

To install the capacitor-twilio-voice package, run the following command in your project directory:

```bash
npm install capacitor-twilio-voice
npx cap sync
```

## Configuration

### iOS Configuration

1. Open your Capacitor project in Xcode.

2. In the **Podfile**, add the following line inside the **target** section:

   ```ruby
   pod 'TwilioVoice', '~> 5.0'
   ```

3. Save the file and run the following command in your project directory:

   ```bash
   npx cap update
   ```

4. Run your iOS project in the Xcode simulator or on a physical device.

### Android Configuration

1. Open the **MainActivity.java** file located in the **android/app/src/main/java/...** directory.

2. Add the following import statement at the top of the file:

   ```java
   import io.stewan.capacitor.twilio.voice.CapacitorTwilioVoice;
   ```

3. Inside the **init()** method, add the following line to initialize the CapacitorTwilioVoice plugin:

   ```java
   add(CapacitorTwilioVoice.class);
   ```

4. Sync your project with Gradle by running the following command in your project directory:

   ```bash
   npx cap sync
   ```

## Usage

### Initialization

To use the capacitor-twilio-voice package, you need to initialize it with your Twilio Voice API credentials. Add the following code to initialize the plugin in your app:

```tsx
import { Plugins } from '@capacitor/core';
const { CapacitorTwilioVoice } = Plugins;

// Initialize the plugin
CapacitorTwilioVoice.initialize({
  // Add your Twilio Voice API credentials here
  accountSid: 'YOUR_ACCOUNT_SID',
  authToken: 'YOUR_AUTH_TOKEN',
});
```

### Making a Voice Call

To make a voice call using Twilio Voice API, you can use the `makeCall` method provided by the package. Here's an example:

```tsx
// Make a voice call
async function makeVoiceCall() {
  try {
    const response = await CapacitorTwilioVoice.makeCall({
      to: '+1234567890', // Phone number to call
      from: '+0987654321', // Your Twilio phone number
      twimlUrl: 'https://example.com/twiml', // URL for TwiML instructions
      customParameters: {
        // Additional custom parameters if needed
        foo: 'bar',
      },
    });
    
    console.log('Voice call initiated:', response.callSid);
  } catch (error) {
    console.error('Failed to make voice call:', error);
  }
}
```

### Handling Incoming Calls

To handle incoming voice calls, you can use the `addListener` method provided by the package. Here's an example:

```tsx
// Listen for incoming calls
CapacitorTwilioVoice.addListener('callReceived', async (call) => {
  console.log('Incoming call:', call);
  
  // Answer the incoming call
  try {
    const response = await CapacitorTwilioVoice.answerCall({ callSid: call.callSid });
    console.log('Call answered:', response.callSid);
  } catch (error) {
    console.error('Failed to answer call:', error);
  }
});
```

### Ending a Call

To end an ongoing voice call, you can use the `endCall` method provided by the package. Here's an example:

```tsx
// End the ongoing call
async function endVoiceCall(callSid) {
  try {
    const response = await CapacitorTwilioVoice.endCall({ callSid });
    console.log('Call ended:', response.callSid);
  } catch (error) {
    console.error('Failed to end call:', error);
  }
}
```

## Conclusion

In this tutorial, we learned how to use the capacitor-twilio-voice package to integrate Twilio Voice API into our Capacitor app. We covered installation, configuration, and usage of the package for making voice calls, handling incoming calls, and ending ongoing calls. Now you can enhance your app with voice calling capabilities using Twilio Voice API.

Remember to refer to the official documentation of capacitor-twilio-voice and Twilio Voice API for more detailed information and additional features.