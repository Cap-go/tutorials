```markdown
---
"title": "Using callkit-voip-capacitor-plugin Package Tutorial",
"description": "A step-by-step tutorial on how to use the callkit-voip-capacitor-plugin package for integrating VOIP notifications in an Ionic application.",
"created_at": "2022-01-18",
"published": true,
"slug": "callkit-voip-capacitor-plugin"
---

# Using callkit-voip-capacitor-plugin Package Tutorial

This tutorial will guide you through the process of integrating the `callkit-voip-capacitor-plugin` package into your Ionic application for handling VOIP notifications.

## Installation and Setup

1. Install the plugin by running the following commands in your project directory:

```bash
npm i capacitor-plugin-callkit-voip
ionic cap sync
```

2. In your Xcode project, navigate to the Capabilities pane and select the "Voice over IP" checkbox as shown in the image.

![Xcode Capabilities](image_link)

3. Register the required certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates). Download and import the certificate into the Keychain Access app.

4. Export the certificates as shown in the provided image.

5. Execute the following command in the directory where you exported the file to generate the `app.pem` certificate file:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

## Usage

To make use of this plugin, follow the steps below:

```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"

async function registerCallKit() {
  await CallKitVoip.register();
  console.log("Push notification has been registered");

  CallKitVoip.addListener("registration", (token: CallToken) =>
    console.log(`VOIP token has been received ${token.value}`)
  );

  CallKitVoip.addListener("callAnswered", (data: CallData) => 
    console.log(`Call has been received from ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
  );

  CallKitVoip.addListener("callEnded", (data: CallData) =>
    console.log(`Call has been ended ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
  );

  CallKitVoip.addListener("callStarted", (data: CallData) =>
    console.log(`Call has been started with ${call.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
  );
}
```

## Sending a VOIP Notification

To test the VOIP notification, use the provided script:

```shell
./sendVoip.sh <media> <id> <name> <duration> <token>
```

Ensure to replace the placeholders with appropriate values for media, ID, name, duration, and token. This will allow you to see the VOIP notification in action.
```