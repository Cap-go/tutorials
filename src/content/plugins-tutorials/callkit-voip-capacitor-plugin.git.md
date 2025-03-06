---
"title": "Using CallKit VoIP Capacitor Plugin",
"description": "This tutorial will guide you through the installation and usage of the CallKit VoIP Capacitor Plugin for your iOS application.",
"created_at": "2022-01-18",
"published": true,
"slug": "callkit-voip-capacitor-plugin.git"
---

# Using CallKit VoIP Capacitor Plugin

Capacitor is a cross-platform app development tool used with Ionic framework. The CallKit VoIP Capacitor Plugin allows for Voice over IP capabilities in your iOS applications developed with Capacitor. This plugin provides functionality to send and receive VoIP notifications for incoming calls.

## Installation Steps

1. Install the capacitor-plugin-callkit-voip package:

```bash
npm i capacitor-plugin-callkit-voip
ionic cap sync
```

2. In your Xcode Project, go to the Capabilities pane and select the checkbox for **Voice over IP**.

![](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

3. Register your certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates). 

![](https://miro.medium.com/max/700/1*Z2q66Vo2Emho4_IVXRN8GQ.png)

4. Download the certificate and import it into the Keychain Access app.

5. Export the certificates and save them.

![](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

6. Navigate to the folder where you exported the file and execute the following command:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

7. You will receive the `app.pem` certificate file, which can be used to send VoIP notifications.

## Usage

To enable the functionalities of the plugin, you need to follow these steps in your application:

### Register Method
```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"

async function registerCallKit() {
    await CallKitVoip.register();
    console.log("Push notification has been registered")

    CallKitVoip.addListener("registration", (token: CallToken) =>
        console.log(`VOIP token has been received ${token.value}`)
    );

    CallKitVoip.addListener("callAnswered", (data: CallData) =>
        console.log(`Call has been received from ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    CallKitVoip.addListener("callEnded", (data: CallData) =>
        console.log(`Call has been ended ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    CallKitVoip.addListener("callStarted", (data: CallData) =>
        console.log(`Call has been started with ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );
}
```

### Sending VoIP Notifications

You can test the VoIP notification feature using the provided script:

```shell
./sendVoip.sh <media> <id> <name> <duration> <token>
```

Make sure to replace the placeholders with appropriate values for testing.