---
title: "Using the cap-nfc-plugin Package"
description: "A tutorial on how to use the cap-nfc-plugin package for NFC functionality in Capacitor."
created_at: "2022-10-29"
published: true
slug: "cap-nfc-plugin"
---

# Using the cap-nfc-plugin Package

The `cap-nfc-plugin` is a plugin for Capacitor that provides support for NFC (Near Field Communication) functionality in your Ionic applications. This tutorial will guide you through the process of setting up and using the `cap-nfc-plugin` package.

## Installation

To install the `cap-nfc-plugin` package, follow these steps:

1. Make sure you have Capacitor installed globally by running the following command:
   ```shell
   npm install -g @capacitor/cli
   ```

2. Create a new Capacitor project or navigate to an existing project:
   ```shell
   ionic start my-app blank --capacitor
   cd my-app
   ```

3. Install the `cap-nfc-plugin` package by running the following command:
   ```shell
   npm install cap-nfc-plugin
   ```

4. Sync the Capacitor project to install the plugin:
   ```shell
   npx cap sync
   ```

## Usage

### 1. Import the Plugin

Import the `cap-nfc-plugin` package in your TypeScript file:
```typescript
import 'cap-nfc-plugin';
```

### 2. Register the Listener

Register the NFC event listener in your TypeScript file:
```typescript
import { Plugins } from '@capacitor/core';

const { CapNfcPlugin } = Plugins;

// ...

CapNfcPlugin.addListener('nfcReading', (event) => {
  console.log('NFC event', event);
});
```

### 3. Start Listening for NFC Events

Start listening for NFC events in your TypeScript file:
```typescript
CapNfcPlugin.startListening();
```

### 4. Stop Listening for NFC Events

Stop listening for NFC events in your TypeScript file:
```typescript
CapNfcPlugin.stopListening();
```

## Conclusion

In this tutorial, you learned how to install and use the `cap-nfc-plugin` package for NFC functionality in Capacitor. You imported the plugin, registered an NFC event listener, and started and stopped listening for NFC events. Now you can incorporate NFC functionality into your Capacitor applications with ease.

Remember to refer to the official documentation of the `cap-nfc-plugin` package for more detailed information and additional functionalities: [cap-nfc-plugin documentation](https://github.com/example/cap-nfc-plugin).

Happy coding with NFC in Capacitor!
