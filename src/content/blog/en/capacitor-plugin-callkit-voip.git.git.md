---
title: How to Use the capacitor-plugin-callkit-voip Package
description: Learn how to integrate and use the capacitor-plugin-callkit-voip package for VOIP notifications in your Capacitor project.
created_at: 2022-01-25
published: true
slug: capacitor-plugin-callkit-voip.git.git
locale: en
---

# Using the capacitor-plugin-callkit-voip Package

The `capacitor-plugin-callkit-voip` is a powerful library that allows you to implement Voice Over IP (VOIP) notifications in your Capacitor project. In this tutorial, we will guide you through the installation process and showcase how to send VOIP notifications using this package.

## Installation

1. **Install the Plugin:**
   ```bash
   npm i capacitor-plugin-callkit-voip
   ionic cap sync
   ```

2. **Configure Xcode Project:**
   - Open your Xcode Project.
   - Navigate to the Capabilities pane.
   - Select the checkbox for Voice over IP as shown in the image provided in the plugin's documentation.

3. **Register Certificate:**
   - Visit [developer.apple.com/certificates](https://developer.apple.com/certificates) to register your certificate.
   - Download the certificate and import it into the Keychain Access app.
   - Export the certificates following the steps provided in the plugin's documentation.

4. **Generate Certificate File:**
   - Execute the following command after exporting your certificate:
   ```bash
   openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
   ```

## Usage

To make the `capacitor-plugin-callkit-voip` package work, follow these steps:

1. **Register for VOIP Notifications:**
   ```typescript
   import { CallKitVoip } from "capacitor-plugin-callkit-voip";

   async function registerCallKit() {
       await CallKitVoip.register();
       console.log("Push notification has been registered");

       CallKitVoip.addListener("registration", (token: CallToken) =>
           console.log(`VOIP token: ${token.value}`)
       );

       CallKitVoip.addListener("callAnswered", (data: CallData) => 
           console.log(`Incoming Call Accepted from ${data.name} with Call ID: ${data.id} - Type: ${data.media} - Duration: ${data.duration}`)
       );

       CallKitVoip.addListener("callEnded", (data: CallData) =>
           console.log(`Call Ended from ${data.name} with Call ID: ${data.id} - Type: ${data.media} - Duration: ${data.duration}`)
       );

       CallKitVoip.addListener("callStarted", (data: CallData) =>
           console.log(`Call Started with ${data.name} with Call ID: ${data.id} - Type: ${data.media} - Duration: ${data.duration}`)
       );
   }
   ```

2. **Send VOIP Notifications:**
   - Push VOIP notifications with the following data payload structure:
   ```json
   {
       "name": "Display Name",
       "id": "Unique Call ID",
       "media": "Call Type: audio or video",
       "duration": "Call duration"
   }
   ```

3. **Test Script:**
   - Use the provided script to test VOIP notifications:
   ```bash
   ./sendVoip.sh <media> <id> <name> <duration> <token>
   ```

You are now ready to integrate and use the `capacitor-plugin-callkit-voip` package in your Capacitor project to handle VOIP notifications effectively.