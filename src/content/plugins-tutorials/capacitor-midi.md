---
title: "Using Capacitor MIDI Package"
description: "In this tutorial, we will learn how to use the Capacitor MIDI package to interact with MIDI devices in your Capacitor project."
created_at: "2022-09-20"
published: true
slug: "capacitor-midi"
---

# Using Capacitor MIDI Package

In this tutorial, we will learn how to use the Capacitor MIDI package to interact with MIDI devices in your Capacitor project. The Capacitor MIDI package provides a set of APIs that allow you to send and receive MIDI messages, control MIDI devices, and process MIDI data in your app. 

## Prerequisites

Before getting started, ensure that you have the following:

- Capacitor 3 or later installed in your project.
- A MIDI-enabled device or simulator connected to your development environment.

## Installation

To install the Capacitor MIDI package, run the following command:

```bash
npm install capacitor-midi
```

## Setup

### iOS Configuration

1. Open your Capacitor project's iOS project in Xcode.
2. Navigate to your project's `Info.plist` file.
3. Add the following entry to the list of permissions:

```xml
<key>NSMidiUsageDescription</key>
<string>We need access to MIDI devices for this app.</string>
```

This will allow your app to access MIDI devices on iOS.

### Android Configuration

No additional configuration is required for Android.

## Usage

### Import the MIDI Plugin

To start using the Capacitor MIDI package, you need to import the MIDI plugin in your project. Open the file where you want to use the MIDI functionality and add the following import statement:

```typescript
import { MidiPlugin } from 'capacitor-midi';
const Midi = MidiPlugin;
```

### MIDI Initialization

Before using any MIDI functionalities, you need to initialize the MIDI plugin. You can do this by calling the `init` method:

```typescript
await Midi.init();
```

### Sending MIDI Messages

To send MIDI messages to your connected MIDI devices, you can use the `sendMessages` method. This method accepts an array of MIDI messages as its parameter. Each MIDI message is an object with the following properties:

- `status`: The MIDI status byte.
- `data1` (optional): The first data byte.
- `data2` (optional): The second data byte.

Here's an example of sending a Note On message:

```typescript
Midi.sendMessages([
  { status: 0x90, data1: 60, data2: 127 } // Note On with pitch 60 and velocity 127
]);
```

### Receiving MIDI Messages

To receive MIDI messages from your connected MIDI devices, you can use the `addListener` method. This method registers a callback function that will be called whenever a MIDI message is received.

```typescript
Midi.addListener((message) => {
  console.log('Received MIDI message:', message);
});
```

### Controlling MIDI Devices

The Capacitor MIDI package also provides methods to control your MIDI devices. You can use the `getDevices` method to retrieve a list of connected MIDI devices:

```typescript
const devices = await Midi.getDevices();
console.log('Connected MIDI devices:', devices);
```

You can also use the `openInput` and `openOutput` methods to open a specific MIDI device for input and output respectively.

```typescript
const deviceId = 'your-device-id';
await Midi.openInput(deviceId);
await Midi.openOutput(deviceId);
```

### Processing MIDI Data

If you need to process MIDI data in your app, the Capacitor MIDI package allows you to parse MIDI messages and extract useful information from them. You can use the `parseMessage` method to parse a MIDI message and get its status, channel, and data values.

```typescript
const message = { status: 0x90, data1: 60, data2: 127 }; // Example MIDI message
const parsedMessage = Midi.parseMessage(message);
console.log('Parsed MIDI message:', parsedMessage);
```

## Conclusion

In this tutorial, we have learned how to use the Capacitor MIDI package to interact with MIDI devices in a Capacitor project. We covered the installation process, platform-specific configurations, and the various MIDI functionalities provided by the package. You can now integrate MIDI capabilities into your Capacitor app and explore more advanced features based on your project's requirements.

Remember to refer to the official documentation of the Capacitor MIDI package for detailed information and additional examples.

Happy coding!