---
title: "Using the capacitor-musetrainer-midi package"
description: "A tutorial on how to use the capacitor-musetrainer-midi package in your Capacitor app"
created_at: "2022-01-01"
published: true
slug: "capacitor-musetrainer-midi"
---

# Using the capacitor-musetrainer-midi package

In this tutorial, we will learn how to use the `capacitor-musetrainer-midi` package in your Capacitor app. This package allows you to integrate MIDI functionalities into your app, specifically targeted towards music training and exercises.

## Installation

To get started, first, let's install the `capacitor-musetrainer-midi` package. Open your terminal and navigate to your project directory. Run the following command:

```bash
npm install capacitor-musetrainer-midi
```

## Importing the Plugin

Next, we need to import the plugin in our project. Open the `Capacitor.config.ts` file and add the following import statement:

```typescript
import 'capacitor-musetrainer-midi';
```

## Usage

Now that we have installed and imported the `capacitor-musetrainer-midi` package, let's look at some examples of how to use it.

### Example 1: Connecting to a MIDI Device

To connect to a MIDI device, use the `connectMIDI()` method. This method returns a promise that resolves with a boolean value indicating the success of the connection.

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorMusetrainerMidi } = Plugins;

CapacitorMusetrainerMidi.connectMIDI()
  .then((success: boolean) => {
    if (success) {
      console.log('MIDI device connected successfully!');
      // Do something with the connected MIDI device
    } else {
      console.log('Failed to connect to MIDI device.');
    }
  })
  .catch((error: any) => {
    console.error('Error connecting to MIDI device:', error);
  });
```

### Example 2: Sending a MIDI Note

To send a MIDI note to the connected device, use the `sendMIDINote()` method. This method takes two parameters: the MIDI note number and the velocity.

```typescript
CapacitorMusetrainerMidi.sendMIDINote(60, 127)
  .then(() => {
    console.log('MIDI note sent successfully!');
  })
  .catch((error: any) => {
    console.error('Error sending MIDI note:', error);
  });
```

### Example 3: Receiving MIDI Messages

To receive MIDI messages from the connected device, use the `addMIDIMessageListener()` method. This method takes a callback function as a parameter, which will be called whenever a MIDI message is received.

```typescript
CapacitorMusetrainerMidi.addMIDIMessageListener((message: any) => {
  console.log('Received MIDI message:', message);
  // Process the received MIDI message
});
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-musetrainer-midi` package in your Capacitor app. We explored examples of connecting to a MIDI device, sending MIDI notes, and receiving MIDI messages. With this package, you can incorporate MIDI functionalities into your music training and exercises app. Experiment with the package and explore more features to build a rich MIDI experience!

**Please note:** This tutorial assumes you have a basic understanding of Capacitor and MIDI concepts. Make sure to refer to the package documentation for detailed information on the available methods and parameters.

This tutorial was created on January 1, 2022, and is published under the slug "capacitor-musetrainer-midi".