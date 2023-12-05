---
title: "Using the coop-nfc Package"
description: "A tutorial on how to use the coop-nfc package to read card numbers"
created_at: "2021-09-21"
published: true
slug: coopnfc
---

# Using the coop-nfc Package

The coop-nfc package is a plugin for reading card numbers. It provides a simple API to interact with NFC functionality. This tutorial will guide you through the installation process and demonstrate how to use the different methods provided by the coop-nfc package.

## Installation

To get started, follow these steps to install the coop-nfc package:

1. Open your terminal or command prompt.
2. Run the following command to install the package:
   ```bash
   npm install coop-nfc
   ```
3. After the installation is complete, run the following command to sync your project with Capacitor:
   ```bash
   npx cap sync
   ```

## API

The coop-nfc package provides the following methods:

### `echo(options: { value: string; })`

This method is used to send a test message and receive the same message as the response. It accepts an object with a `value` property as input and returns a Promise that resolves to an object with a `value` property containing the same message.

Example usage:
```typescript
import { echo } from 'coop-nfc';

const result = await echo({ value: 'Hello, coop-nfc!' });
console.log(result.value); // Output: Hello, coop-nfc!
```

### `waitNFC()`

This method is used to wait until an NFC event occurs. It returns a Promise that resolves when an NFC event is detected.

Example usage:
```typescript
import { waitNFC } from 'coop-nfc';

await waitNFC();
console.log('NFC event detected!');
```

### `startNfcListening()`

This method is used to start listening for NFC events continuously. It returns a Promise that resolves when the NFC listening is started.

Example usage:
```typescript
import { startNfcListening } from 'coop-nfc';

await startNfcListening();
console.log('NFC listening started!');
```

### `handleOnNewIntent()`

This method is used to handle new NFC intents. It returns a Promise that resolves when a new NFC intent is received.

Example usage:
```typescript
import { handleOnNewIntent } from 'coop-nfc';

await handleOnNewIntent();
console.log('New NFC intent received!');
```

### `startScan()`

This method is used to start scanning for NFC devices. It returns a Promise that resolves to a `ScanResult` object containing the scanned NFC device information.

Example usage:
```typescript
import { startScan } from 'coop-nfc';

const result = await startScan();
console.log(result); // Output: ScanResult object
```

## Interfaces

The coop-nfc package defines the following interfaces:

### `IScanResultWithContent`

This interface represents the scanned NFC device information and content.

Example usage:
```typescript
import { IScanResultWithContent } from 'coop-nfc';

const result: IScanResultWithContent = {
  // Scanned device information and content properties
};
```

Now that you are familiar with the API provided by the coop-nfc package, you can start integrating NFC functionality into your Capacitor project. Enjoy exploring the capabilities of the coop-nfc package!

Note: This tutorial assumes that you have a basic understanding of Capacitor and how to set up a Capacitor project. If you are new to Capacitor, it is recommended to visit the official Capacitor documentation for more information.