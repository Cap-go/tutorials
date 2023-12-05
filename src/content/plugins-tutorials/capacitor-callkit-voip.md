---
title: "Using @techrover_solutions/capacitor-callkit-voip package"
description: "A tutorial on how to use the @techrover_solutions/capacitor-callkit-voip package for implementing CallKit VOIP functionality in your Capacitor-powered mobile app."
created_at: "2022-08-25"
published: true
slug: "capacitor-callkit-voip"
---

# Using @techrover_solutions/capacitor-callkit-voip package

This tutorial will guide you through the process of implementing CallKit VOIP functionality in your Capacitor-powered mobile app using the @techrover_solutions/capacitor-callkit-voip package.

## Installation

To begin, install the package by running the following command:

```bash
npm i @techrover_solutions/capacitor-callkit-voip
```

After the installation, sync your Capacitor project by running:

```bash
npx cap sync
```

## Configuration

### Xcode Project Setup

1. Open your Xcode project and navigate to the **Capabilities** pane.
2. Enable the **Voice over IP** capability by selecting the checkbox, as shown in the image below:

![](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

### Registering the Certificate

1. Register a certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates) to enable VOIP notifications.
2. Download the certificate and open it to import it into the Keychain Access app.
3. Export the certificates as shown in the image below to obtain the `app.pem` certificate file:

![](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

4. Navigate to the folder where you exported the file and execute the following command to generate the required `app.pem` certificate file:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

### Usage

To make the @techrover_solutions/capacitor-callkit-voip package work, follow these steps:

1. Import the package into your project:

```typescript
import { CallKitVoip } from '@techrover_solutions/capacitor-callkit-voip';
```

2. Register for VOIP notifications by calling the `.register()` method. You can use the Promise-based syntax or the `async/await` syntax:

```typescript
// Using Promise-based syntax
CallKitVoip.register().then(() => {
  console.log('Push notification has been registered');
}).catch((error) => {
  console.error('Failed to register push notification:', error);
});

// Using async/await syntax
try {
  await CallKitVoip.register();
  console.log('Push notification has been registered');
} catch (error) {
  console.error('Failed to register push notification:', error);
}
```

3. Listen for events related to incoming calls, call answering, call ending, and call starting:

```typescript
// Voip token has been generated
CallKitVoip.addListener('registration', (token) => {
  console.log(`VOIP token has been received: ${token.value}`);
});

// Incoming call accepted
CallKitVoip.addListener('callAnswered', (data) => {
  console.log(`Call received from ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
});

// Call ended
CallKitVoip.addListener('callEnded', (data) => {
  console.log(`Call has ended with ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
});

// Call started
CallKitVoip.addListener('callStarted', (data) => {
  console.log(`Call started with ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
});
```

4. Push a VOIP notification with the