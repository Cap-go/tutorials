---
title: "Using capacitor-plugin-incoming-call"
description: "A guide on how to use the capacitor-plugin-incoming-call package"
created_at: "2022-10-14"
published: true
slug: "capacitor-plugin-incoming-call"
---

# Using capacitor-plugin-incoming-call

This tutorial will guide you through the process of using the capacitor-plugin-incoming-call package to handle incoming calls in your Capacitor application.

## Installation

To get started, install the capacitor-plugin-incoming-call package using npm:

```bash
npm install capacitor-plugin-incoming-call
```

## Configuring the Plugin

Once the package is installed, you need to configure the plugin in your project. 

### iOS Configuration

For iOS, open your Xcode project and navigate to the "Signing & Capabilities" tab. Enable the "Push Notifications" capability and add the "Background Modes" capability with the "Voice over IP" option checked.

### Android Configuration

For Android, no additional configuration is required.

## Registering for Incoming Calls

To register your app for incoming calls, you need to invoke the `register` method provided by the capacitor-plugin-incoming-call package. This method should be called when your app starts or when the user logs in.

```typescript
import { IncomingCall } from 'capacitor-plugin-incoming-call';

async function registerForIncomingCalls() {
  await IncomingCall.register();
  console.log('Registered for incoming calls');
}
```

## Handling Incoming Call Events

The capacitor-plugin-incoming-call package provides event listeners to handle incoming call events.

### `IncomingCall.addListener('incomingCall', callback)`

This event is triggered when an incoming call is received. You can use this event to display a notification or perform any other action when a call is received.

```typescript
IncomingCall.addListener('incomingCall', (call) => {
  console.log('Incoming call received');
  console.log('Call ID:', call.id);
  console.log('Caller Name:', call.name);
});
```

### `IncomingCall.addListener('callAnswered', callback)`

This event is triggered when the user answers an incoming call.

```typescript
IncomingCall.addListener('callAnswered', (call) => {
  console.log('Call answered');
  console.log('Call ID:', call.id);
  console.log('Caller Name:', call.name);
});
```

### `IncomingCall.addListener('callEnded', callback)`

This event is triggered when an ongoing call is ended or rejected.

```typescript
IncomingCall.addListener('callEnded', (call) => {
  console.log('Call ended');
  console.log('Call ID:', call.id);
  console.log('Caller Name:', call.name);
});
```

## Conclusion

In this tutorial, you learned how to use the capacitor-plugin-incoming-call package to handle incoming calls in your Capacitor application. You learned how to install and configure the package, register for incoming call events, and handle incoming call events. Now, you can integrate incoming call functionality into your Capacitor app.