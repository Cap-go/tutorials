---
"title": "Using the Capacitor CallKit VoIP Plugin",
"description": "A tutorial on how to implement and use the capacitor-callkit-voip package for adding Voice over IP capabilities to your Ionic app with Capacitor.",
"created_at": "2022-03-03",
"published": true,
"slug": "capacitor-callkit-voip.git"

# Using the Capacitor CallKit VoIP Plugin

Capacitor CallKit VoIP Plugin is a plugin that allows you to easily add Voice over IP (VoIP) capabilities to your Ionic apps. In this tutorial, you will learn how to install, configure, and use the capacitor-callkit-voip package to integrate VoIP notifications in your mobile application.

## Installation
To get started, follow the steps below to install and configure the capacitor-callkit-voip package:

1. Install the plugin by running the following command in your project directory:
```bash
npm i capacitor-plugin-callkit-voip
ionic cap sync
```

2. Open your Xcode project and navigate to the Capabilities pane. Select the checkbox for Voice over IP to enable VoIP capabilities in your project.

3. Register the required certificate by visiting [developer.apple.com/certificates](https://developer.apple.com/certificates). Download the certificate and import it into the Keychain Access app.

4. Export the certificates with the following command:
```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

## Usage
After installing the plugin, you can start using the VoIP notifications by following these steps:

1. Call the `.register()` method to initialize the plugin and register for VoIP notifications.
```typescript
import {CallKitVoip} from "capacitor-plugin-callkit-voip"

async function registerCallKit() {
    await CallKitVoip.register();
    console.log("Push notification has been registered");

    // Add an event listener for incoming calls
    CallKitVoip.addListener("registration", (token: CallToken) =>
        console.log(`VOIP token has been received ${token.value}`)
    );

    // Notify incoming call answered
    CallKitVoip.addListener("callAnswered", (data: CallData) =>
        console.log(`Incoming call from ${data.name} (call ID: ${data.id}) (Type: ${data.media}) (Duration: ${data.duration})`)
    );

    CallKitVoip.addListener("callEnded", (data: CallData) =>
        console.log(`Call ended with ${data.name} (call ID: ${data.id}) (Type: ${data.media}) (Duration: ${data.duration})`)
    );

    CallKitVoip.addListener("callStarted", (data: CallData) =>
        console.log(`Call started with ${data.name} (call ID: ${data.id}) (Type: ${data.media}) (Duration: ${data.duration})`)
    );
}
```

2. To send a VoIP notification, use the provided JSON structure with the required data: 
```json
{
    "name": "Display Name",
    "id": "Unique Call ID",
    "media": "audio or video",
    "duration": "Call duration"
}
```

3. You can also use the provided script to test sending a VoIP notification:
```shell
./sendVoip.sh <media> <id> <name> <duration> <token>
```

By following these steps, you can successfully implement VoIP notifications in your Ionic app using the capacitor-callkit-voip plugin.

This tutorial provides a comprehensive guide on how to integrate VoIP capabilities into your Ionic application using the capacitor-callkit-voip package.