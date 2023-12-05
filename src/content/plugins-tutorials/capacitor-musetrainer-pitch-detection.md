---
title: "Using capacitor-musetrainer-pitch-detection Package"
description: "In this tutorial, we will learn how to use the capacitor-musetrainer-pitch-detection package to detect pitch in Capacitor apps."
created_at: "2021-09-30"
published: true
slug: "capacitor-musetrainer-pitch-detection"
---

# Using capacitor-musetrainer-pitch-detection Package

The capacitor-musetrainer-pitch-detection package is a plugin for Capacitor that allows pitch detection in iOS apps. In this tutorial, we will go through the steps to install and use this package in a Capacitor app.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

1. Capacitor installed in your project.
2. Xcode and iOS Simulator installed for iOS development.
3. Basic knowledge of Capacitor and iOS development.

## Installation

To install the capacitor-musetrainer-pitch-detection package, follow these steps:

1. Open your project directory in a terminal.
2. Run the following command to install the package:

   ```bash
   npm install capacitor-musetrainer-pitch-detection
   ```

3. Next, sync the Capacitor project:

   ```bash
   npx cap sync
   ```

4. The package is now installed and ready to use in your Capacitor app.

## Usage

To use the capacitor-musetrainer-pitch-detection package in your app, follow these steps:

1. Import the package in your TypeScript file:

   ```typescript
   import { Plugins } from '@capacitor/core';

   const { PitchDetection } = Plugins;
   ```

2. Request microphone permissions before using the pitch detection feature. You can use the `requestPermissions` method to request the required permissions:

   ```typescript
   async function requestMicrophonePermissions() {
     try {
       const result = await PitchDetection.requestPermissions();
       if (result.microphone === 'granted') {
         console.log('Microphone permissions granted');
       } else {
         console.log('Microphone permissions denied');
       }
     } catch (error) {
       console.error('Error requesting microphone permissions:', error);
     }
   }
   ```

3. Add a listener to receive pitch detection events. Use the `addListener` method to listen for the `pitchReceive` event:

   ```typescript
   async function addPitchListener() {
     try {
       const listener = await PitchDetection.addListener('pitchReceive', onPitchReceive);
       // Store listener for removal later
     } catch (error) {
       console.error('Error adding pitch listener:', error);
     }
   }

   function onPitchReceive(pitch) {
     // Handle received pitch data
   }
   ```

4. Start the pitch detection by calling the necessary methods. For example, you can start the pitch detection when a button is clicked:

   ```typescript
   function startPitchDetection() {
     // Start pitch detection
   }
   ```

5. Finally, remove the pitch detection listener and clean up when necessary. You can use the `remove` method on the listener object:

   ```typescript
   function removePitchListener(listener) {
     listener.remove();
   }
   ```

With these steps, you have successfully integrated the capacitor-musetrainer-pitch-detection package into your Capacitor app.

## Summary

In this tutorial, we learned how to install and use the capacitor-musetrainer-pitch-detection package in a Capacitor app. We covered the steps to request microphone permissions, add a pitch detection listener, start pitch detection, and clean up the listener. Now, you can enhance your app by detecting the pitch of audio input using this package.