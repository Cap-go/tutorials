---
title: "Using Capacitor CellRebel SDK"
description: "This tutorial will guide you through the process of using the Capacitor CellRebel SDK to enhance your mobile app capabilities."
created_at: "2021-09-28"
published: true
slug: capacitor-cellrebel-sdk
---

## Introduction

In this tutorial, we will learn how to integrate the Capacitor CellRebel SDK into your mobile app. The Capacitor CellRebel SDK allows you to add powerful features to your app, such as real-time monitoring, performance optimization, and crash reporting. By using this SDK, you can ensure that your app performs at its best and provides a seamless user experience.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor and Node.js installed on your development machine.
- An existing Capacitor project set up.

## Installation

To install the Capacitor CellRebel SDK, follow these steps:

1. Open your terminal and navigate to your Capacitor project directory.

2. Run the following command to install the Capacitor CellRebel SDK package:

   ```bash
   npm install capacitor-cellrebel-sdk
   ```

3. Next, we need to sync the native project by running the following command:

   ```bash
   npx cap sync
   ```

   This command will update the native project configuration files with the new dependencies.

## Integration

Once the Capacitor CellRebel SDK is installed, we can start integrating it into our app.

1. Open the `src/main.ts` file in your Capacitor project.

2. Import the CellRebel plugin by adding the following line at the top of the file:

   ```typescript
   import 'capacitor-cellrebel-sdk';
   ```

3. Inside the `async` function `platformReady()`, add the following code to initialize the CellRebel SDK:

   ```typescript
   import { CellRebel } from 'capacitor-cellrebel-sdk';

   // ...

   async function platformReady() {
     // ...

     await CellRebel.initialize({
       // Add your CellRebel configuration options here
     });

     // ...
   }
   ```

4. Build your app and run it on a device or emulator.

   ```bash
   npx cap open android
   ```

   or

   ```bash
   npx cap open ios
   ```

5. Once the app is open in Android Studio or Xcode, build and run the app on a device or emulator.

6. You have successfully integrated the Capacitor CellRebel SDK into your mobile app.

## Conclusion

In this tutorial, we learned how to install and integrate the Capacitor CellRebel SDK into a Capacitor project. By leveraging the capabilities of the CellRebel SDK, you can monitor and optimize your app's performance, as well as receive valuable insights into any crashes that occur. With this knowledge, you can ensure that your app provides a seamless user experience and meets the highest standards of performance and stability.

Start using the Capacitor CellRebel SDK today and take your app to the next level!