---
title: How to Use capacitor-plugin-incoming-call Package
description: A step-by-step guide on integrating and using the capacitor-plugin-incoming-call package for handling incoming call notifications in your Ionic Capacitor app.
created_at: 2022-01-12
published: true
slug: capacitor-plugin-incoming-call.git
locale: en
---

## Introduction
The `capacitor-plugin-incoming-call` package allows you to manage, monitor, and respond to incoming call notifications efficiently in your Ionic Capacitor application. This tutorial will walk you through the installation, setup, and usage of this plugin to handle incoming calls seamlessly.

### Prerequisites
Before starting this tutorial, ensure that you have the following prerequisites:
- Basic knowledge of Ionic Capacitor and TypeScript.
- An Ionic Capacitor project set up and ready to use.
- Node.js and npm installed on your development machine.

## Installation
1. Install the `capacitor-plugin-incoming-call` package using npm:
   ```bash
   npm install capacitor-plugin-incoming-call
   ```

2. After installing the package, synchronize the changes with your Ionic project using the Capacitor CLI:
   ```bash
   npx cap sync
   ```

## Configuration
1. Open your Xcode project in the iOS platform and navigate to the **Capabilities** pane.
2. Enable the **Voice over IP** checkbox to allow Voice over IP functioning.
   ![Voice over IP Checkbox](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)
3. Obtain and register your certificate on [developer.apple.com/certificates](https://developer.apple.com/certificates).
4. Download and import the certificate into the Keychain Access app.
5. Export the certificate by navigating to the export dialog in Keychain Access.
   ![Export Certificate](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)
6. Open the terminal and execute the following command by replacing `YOUR_CERTIFICATES.p12` with your actual certificate file:
   ```bash
   openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
   ```

## Usage
To use the `capacitor-plugin-incoming-call` package in your Ionic project, you can follow these steps:

1. Register the CallKitVoip plugin to start receiving incoming call events:
   ```typescript
   import { CallKitVoip } from "capacitor-plugin-incoming-call";

   async function registerCallKit() {
     // Register the VOIP notifications plugin
     await CallKitVoip.register();
     console.log("Push notification has been registered");

     CallKitVoip.addListener("registration", (token) =>
       console.log(`VOIP token has been received ${token.value}`)
     );

     CallKitVoip.addListener("callAnswered", (data) => 
       console.log(`Incoming call answered from ${data.name} (ID: ${data.id}) (Type: ${data.media}) (Duration: ${data.duration})`)
     );

     CallKitVoip.addListener("callEnded", (data) =>
       console.log(`Call ended with ${data.name} (ID: ${data.id}) (Type: ${data.media}) (Duration: ${data.duration})`)
     );

     CallKitVoip.addListener("callStarted", (data) =>
       console.log(`Call started with ${data.name} (ID: ${data.id}) (Type: ${data.media}) (Duration: ${data.duration})`)
     );
   }
   ```

2. Use the provided script to test incoming calls:
   ```bash
   ./sendVoip.sh <media> <id> <name> <duration> <token>
   ```

3. The `callData` payload structure for incoming calls includes:
   ```json
   {
       "name": "Caller Display Name",
       "id": "Unique Call ID",
       "media": "Call Type: audio or video",
       "duration": "Call Duration"
   }
   ```

By following these steps, you can integrate and effectively handle incoming call notifications using the `capacitor-plugin-incoming-call` plugin in your Ionic Capacitor application.