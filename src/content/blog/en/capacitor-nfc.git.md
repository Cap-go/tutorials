---
title: "Using @exxili/capacitor-nfc Package Tutorial"
description: "A step-by-step guide on how to integrate and use the @exxili/capacitor-nfc package in your Capacitor app."
created_at: 2022-03-18
published: true
slug: capacitor-nfc.git
locale: en
---

# Using @exxili/capacitor-nfc Package Tutorial

In this tutorial, we will walk through the process of integrating and utilizing the @exxili/capacitor-nfc package in your Capacitor app. 

## Step 1: Installation

To start using the NFC package in your Capacitor project, first install the package using npm:

```bash
npm install @exxili/capacitor-nfc
```

## Step 2: Import in Your Project

After installing the package, import it in your project's code where you want to use NFC functionality:

```typescript
import '@exxili/capacitor-nfc';
import { Plugins } from '@capacitor/core';

const { NFCPlugin } = Plugins;
```

## Step 3: Using NFC Functions

Now that you have imported the package, you can start using the NFC functionalities in your app. Here is an example of how to listen for NFC tags:

```typescript
NFCPlugin.addListener('onNfcTagDiscovered', (data) => {
  console.log('NFC Tag Discovered:', data);
});
```

## Step 4: Building and Running Your App

Finally, build and run your Capacitor app to test the NFC functionality in action.

That's it! You have now successfully integrated and used the @exxili/capacitor-nfc package in your Capacitor app. Happy NFC tagging!
