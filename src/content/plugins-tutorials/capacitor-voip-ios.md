---
title: "Using capacitor-voip-ios: A Tutorial"
description: "Learn how to implement and use the capacitor-voip-ios package for Voice over IP functionality in your iOS app."
created_at: "2021-09-27"
published: true
slug: "capacitor-voip-ios"
---

# Using capacitor-voip-ios: A Tutorial

In this tutorial, we will learn how to install and use the capacitor-voip-ios package to add Voice over IP (VoIP) functionality to your iOS app. We will cover the installation process, configuring Xcode project, registering certificates, and sending VOIP notifications using the plugin.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Node.js installed on your machine.
- Xcode installed on your macOS system.
- An Apple Developer account.

## Installation

To install the capacitor-voip-ios package, follow these steps:

```bash
npm install capacitor-voip-ios
npx cap sync
```

These commands will install the package and sync the necessary files with your Capacitor project.

## Configuring Xcode Project

To enable the Voice over IP capability in your Xcode project, do the following:

1. Open your Xcode project.
2. Go to the `Capabilities` pane for your target.
3. Check the checkbox for `Voice over IP`, as shown in the image below:

![](https://miro.medium.com/max/700/1*zVc9U601x_qUqweRKfsfow.png)

This will enable the Voice over IP capability in your project.

## Certificate Registration

To register the certificates for VOIP notifications, follow these steps:

1. Go to [developer.apple.com/certificates](https://developer.apple.com/certificates) and register your certificates.
2. Download the certificate and open it to import it into the Keychain Access app.
3. Export the certificates as shown in the image below:

![](https://miro.medium.com/max/700/1*7N7d7-dEa6WAMzWbFXO66A.png)

Save the exported file to a desired location.

## Generating Certificate File

To generate the `app.pem` certificate file, execute the following command in the terminal:

```bash
openssl pkcs12 -in YOUR_CERTIFICATES.p12 -out app.pem -nodes -clcerts
```

Replace `YOUR_CERTIFICATES.p12` with the path to your exported certificates file.

## Using Node.js to Send Notifications

If you want to send VOIP notifications using Node.js, you can use the `apn` module. Install it in your Node.js project with the following command:

```bash
npm install apn --save
```

This module allows you to send push notifications directly using APNs.

## Usage

To make the capacitor-voip-ios plugin work, follow these steps:

1. Call the `.register({topic:'videocall'})` method to start the registration of VOIP notifications. Example:

```typescript
import {CapacitorVoipIos} from "capacitor-voip-ios"

async function registerVoipNotification(){
    CapacitorVoipIos.addListener("registration", ({token}) =>
        console.log(`VOIP token has been received ${token}`)
    )

    CapacitorVoipIos.addListener("callAnswered", ({username, connectionId, joinToken, meetingId}) => {
        console.log(`VOIP username ${username}`);
        console.log(`VOIP connectionId ${connectionId}`);
        console.log(`VOIP meetingId ${meetingId}`);
        console.log(`VOIP joinToken ${joinToken}`);
    });

    await CapacitorVoipIos.register({ topic:'videocall' });
    console.log("Push notification has been registered")
}
```

2. Push a VOIP notification with the following data payload structure:

```json
{
  "Username": "Display Name",
  "ConnectionId": "Unique Call ID",
  "MeetingId": "ID of the Meeting",
  "JoinToken": "Token for joining the meeting",
  "Params": "Object with additional params"
}
```

You can use the provided `sendVoip.sh` script to test it out by running the following command:

```bash
./sendVoip.sh