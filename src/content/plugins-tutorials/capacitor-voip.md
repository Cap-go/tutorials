---
title: "Tutorial: Using the capacitor-voip Package"
description: "Learn how to integrate the capacitor-voip package into your app for Voice over IP functionality."
created_at: "2021-10-12"
published: true
slug: "capacitor-voip"
---

# Tutorial: Using the capacitor-voip Package

In this tutorial, we will go through the steps required to integrate the `capacitor-voip` package into your Ionic app for Voice over IP (VoIP) functionality. The `capacitor-voip` package provides a simple API for handling VoIP notifications and managing incoming and outgoing calls.

## Prerequisites

Before we start, make sure you have the following set up in your development environment:

- Node.js and npm installed on your machine
- Ionic CLI installed globally
- Xcode installed (for iOS development)

## Step 1: Install the Plugin

To begin, we need to install the `capacitor-voip` plugin. Open your terminal and navigate to your project directory. Run the following command to install the plugin:

```bash
npm install capacitor-plugin-callkit-voip
```

Next, sync your project with Capacitor by running the following command:

```bash
npx cap sync
```

## Step 2: Configure the Project

### iOS Configuration

#### Enable Voice over IP Capability

Open your Xcode project and go to the **Capabilities** pane. Select the checkbox for **Voice over IP**, as shown in the image below:

![Enable Voice over IP capability](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

#### Register and Import Certificates

To enable VoIP functionality, you need to register a certificate on the Apple Developer Portal and import it into your Keychain Access app. Here's how:

1. Register your certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates).
2. Download the certificate and open it to import it into the Keychain Access app.
3. Export the certificates from Keychain Access.

![Export certificates](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

After exporting the certificates, navigate to the folder where you exported the files and execute the following command in the terminal:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

This command will generate an `app.pem` certificate file that can be used to send VoIP notifications.

### Step 3: Implement the Plugin

Now that we have installed the plugin and configured our project, we can start implementing the `capacitor-voip` package in our app.

Create a new TypeScript file (e.g., `voip.ts`) and import the `CallKitVoip` class from the `capacitor-plugin-callkit-voip` module:

```typescript
import { CallKitVoip } from "capacitor-plugin-callkit-voip";
```

Next, create a function to register the plugin and set up event listeners for incoming calls, call answers, call ends, and call starts:

```typescript
async function registerCallKit() {
  // Register plugin for VoIP notifications
  await CallKitVoip.register();
  console.log("VoIP notification has been registered");

  // Listen for the VoIP token
  CallKitVoip.addListener("registration", (token: CallToken) => {
    console.log(`VoIP token has been received: ${token.value}`);
  });

  // Notify when an incoming call is answered
  CallKitVoip.addListener("callAnswered", (data: CallData) => {
    console.log(`Incoming call answered from ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
  });

  // Notify when a call ends
  CallKitVoip.addListener("callEnded", (data: CallData) => {
    console.log(`Call ended with ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
  });

  // Notify when a call starts
  CallKitVoip.addListener("callStarted", (data: CallData) => {
    console.log(`Call started with ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
  });
}
```

## Step 4: Sending a VoIP Notification

To test the functionality of the `capacitor-voip` package, we need to send a VoIP notification with the required data payload structure. You can use the provided `sendVoip.sh` script or modify it as per your needs. Here's how to use it:

```bash
./sendVoip.sh [media] [id] [name] [duration] [token]
```

Replace the placeholders with the relevant values. For example:

```bash
./sendVoip.sh "audio" "12345" "John Doe" "30" "YOUR_DEVICE_TOKEN"
```

Congratulations! You have successfully implemented the `capacitor-voip` package in your Ionic app. Now you can use it to handle incoming and outgoing VoIP calls.

In this tutorial, we covered the installation and configuration of the `capacitor-voip` package, as well as how to send VoIP notifications and handle calls using the provided API. Feel free to explore more features and customize the integration to fit your app's requirements.

Happy coding!