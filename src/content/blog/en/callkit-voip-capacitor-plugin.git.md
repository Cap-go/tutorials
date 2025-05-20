---
title: Using the Callkit Voip Capacitor Plugin for iOS Development
description: >-
  This tutorial will guide you through setting up and using the Callkit Voip
  Capacitor Plugin on iOS for VoIP calling applications.
created_at: '2023-10-15'
published: true
slug: callkit-voip-capacitor-plugin.git
locale: en
---

# How to Use the Callkit Voip Capacitor Plugin for iOS Development

This tutorial will walk you through the process of installing and utilizing the `capacitor-plugin-callkit-voip` package in your iOS projects to enable Voice over IP (VoIP) capabilities. 

## Installation

1. Begin by installing the plugin using npm:
```bash
npm i capacitor-plugin-callkit-voip
ionic cap sync
```

2. Next, open your Xcode project and navigate to the Capabilities pane. Check the box for Voice over IP as shown in the following image:
![Xcode Capabilities](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

3. Register the necessary certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates) following the steps provided in the image below:
![Register Certificate](https://miro.medium.com/max/700/1*Z2q66Vo2Emho4_IVXRN8GQ.png)

4. Download the certificate and import it into the Keychain Access app. Export the certificates as shown in the following screenshot:
![Export Certificates](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

5. Execute the following command in the folder where the certificate file was exported:
```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

6. The `app.pem` certificate file will be generated and can be used to send VOIP notifications.

## Usage

To begin using the plugin, call the `.register()` method and utilize the following API:

```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"

async function registerCallKit() {
    // Register the VOIP notifications plugin
    await CallKitVoip.register();
    console.log("Push notification has been registered");

    // Receive the VOIP token
    CallKitVoip.addListener("registration", (token: CallToken) =>
        console.log(`VOIP token has been received ${token.value}`)
    );

    // Notify when an incoming call is accepted
    CallKitVoip.addListener("callAnswered", (data: CallData) =>
        console.log(`Call received from ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    // Notify when a call is ended
    CallKitVoip.addListener("callEnded", (data: CallData) =>
        console.log(`Call has been ended ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    // Notify when a call is started
    CallKitVoip.addListener("callStarted", (data: CallData) =>
        console.log(`Call has been started with ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );
}
```

To send a VOIP notification, use the following data payload structure:
```json
{
    "name": "Display Name",
    "id": "Unique Call ID",
    "media": "Call Type: audio or video",
    "duration": "Call duration"
}
```

A sample script `sendVoip.sh` is provided to test the notifications:
```shell
./sendVoip.sh <media> <id> <name> <duration> <token>
```

This comprehensive tutorial will help you incorporate Voice over IP (VoIP) capabilities into your iOS applications using the Callkit Voip Capacitor Plugin. Happy coding!
```
