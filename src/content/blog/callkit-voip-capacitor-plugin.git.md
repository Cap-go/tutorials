---
title: "Using CallKit VoIP Capacitor Plugin - Tutorial"
description: "This tutorial will guide you through the setup and usage of the CallKit VoIP Capacitor Plugin in your Ionic project."
created_at: "2022-01-27"
published: true
slug: callkit-voip-capacitor-plugin.git
---

# Using CallKit VoIP Capacitor Plugin - Tutorial

In this tutorial, we will cover how to install and use the CallKit VoIP Capacitor Plugin in an Ionic project. The plugin enables you to integrate Voice over IP (VoIP) capabilities within your mobile application, allowing you to handle incoming and outgoing calls effectively.

## Installation
To get started with the CallKit VoIP Capacitor Plugin, follow these steps:

1. Install the plugin using npm:
   ```bash
   npm i capacitor-plugin-callkit-voip
   ionic cap sync
   ```

2. Enable the Voice over IP capability in the Xcode project:
   - Open your Xcode project
   - Navigate to the **Capabilities** pane
   - Check the checkbox for **Voice over IP** capability

   ![Xcode VOIP Capability](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

3. Register your certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates). Follow the instructions provided to download and import the certificate into Keychain Access.

4. Export your certificates using the following command and generate the `app.pem` certificate file:
   ```bash
   openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
   ```

## Usage
To start making use of the plugin functionalities, you need to call the `.register()` method and utilize the provided APIs.

```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"

async function registerCallKit() {
  // Register the plugin for VOIP notifications
  await CallKitVoip.register();
  console.log("Push notification has been registered");

  // Get the VOIP token
  CallKitVoip.addListener("registration", (token: CallToken) =>
    console.log(`VOIP token has been received: ${token.value}`)
  );

  // Handle Incoming Call Answered event
  CallKitVoip.addListener("callAnswered", (data: CallData) => 
    console.log(`Incoming call from ${data.name} accepted (ID: ${data.id}, Type: ${data.media}, Duration: ${data.duration})`)
  );

  // Handle Call Ended event
  CallKitVoip.addListener("callEnded", (data: CallData) =>
    console.log(`Call with ${data.name} ended (ID: ${data.id}, Type: ${data.media}, Duration: ${data.duration})`)
  );

  // Handle Call Started event
  CallKitVoip.addListener("callStarted", (data: CallData) =>
    console.log(`Call started with ${data.name} (ID: ${data.id}, Type: ${data.media}, Duration: ${data.duration})`)
  );
}
```

Remember to push a VOIP notification with the required data payload structure:
```json
{
  "name": "Display Name",
  "id": "Unique Call ID",
  "media": "Call Type: audio or video",
  "duration": "Call Duration"
}
```

To test the plugin functionality, you can use the provided script:
```bash
./sendVoip.sh <media> <id> <name> <duration> <token>
``` 

This tutorial provides an overview of how to integrate and use the CallKit VoIP Capacitor Plugin in your Ionic project.