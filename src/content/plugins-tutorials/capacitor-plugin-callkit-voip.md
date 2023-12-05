---
title: "Using capacitor-plugin-callkit-voip"
description: "A tutorial on how to use the capacitor-plugin-callkit-voip package for integrating VOIP notifications in your Capacitor-based project."
created_at: "2021-11-06"
published: true
slug: "capacitor-plugin-callkit-voip"
---

# Using capacitor-plugin-callkit-voip

In this tutorial, we will learn how to use the `capacitor-plugin-callkit-voip` package to integrate VOIP (Voice over IP) notifications into your Capacitor-based project. This package allows you to handle incoming and outgoing calls using the CallKit framework on iOS devices. We will cover the installation process, registration of the plugin, and the usage of the provided API.

## Prerequisites

Before we begin, make sure you have the following requirements:

- Capacitor installed in your project.
- Xcode installed on your development machine.
- A valid Apple Developer Account.

## Installation

To start using the `capacitor-plugin-callkit-voip` package, follow these steps:

1. Install the plugin by running the following command in your project directory:

```bash
npm i capacitor-plugin-callkit-voip
ionic cap sync
```

2. In your Xcode project, navigate to the Capabilities pane and select the checkbox for Voice over IP. This enables the necessary background mode for VOIP notifications. Refer to the screenshot below:

![Xcode Capabilities](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

3. Register a certificate for your app on the Apple Developer website. This certificate is required to send VOIP notifications. Download the certificate and import it into the Keychain Access app. Follow the instructions provided by the Apple Developer website.

4. Export the certificates from the Keychain Access app. This step is necessary to obtain the certificate file for sending VOIP notifications. Export the certificates in the desired format (typically .p12).

5. Open a terminal window and navigate to the folder where you exported the certificate file. Run the following command to convert the certificate to a .pem file:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

6. You will now have the `app.pem` certificate file, which can be used to send VOIP notifications. Keep this file secure.

## Usage

To use the `capacitor-plugin-callkit-voip` package in your project, follow these steps:

1. Import the necessary modules in your TypeScript file:

```typescript
import { CallKitVoip } from 'capacitor-plugin-callkit-voip';
```

2. Register the plugin by calling the `.register()` method. This step initializes the plugin and registers it for VOIP notifications. You can use the `.register()` method with `.then()` or `async/await` syntax. Here is an example:

```typescript
async function registerCallKit() {
  // Register plugin for VOIP notifications
  await CallKitVoip.register();
  console.log("Push notification has been registered");

  // Handle VOIP registration token
  CallKitVoip.addListener("registration", (token: CallToken) => {
    console.log(`VOIP token has been received: ${token.value}`);
  });

  // Handle incoming call answered event
  CallKitVoip.addListener("callAnswered", (data: CallData) => {
    console.log(`Call received from ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
  });

  // Handle call ended event
  CallKitVoip.addListener("callEnded", (data: CallData) => {
    console.log(`Call ended with ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
  });

  // Handle call started event
  CallKitVoip.addListener("callStarted", (data: CallData) => {
    console.log(`Call started with ${data.name} (Call ID: ${data.id}) (Call Type: ${data.media}) (Call Duration: ${data.duration})`);
 