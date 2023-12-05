---
title: "Using the @johnbraum/acs-nfc-scanner Package"
description: "In this tutorial, we will learn how to use the @johnbraum/acs-nfc-scanner package to scan NFC (Near Field Communication) cards using Capacitor."
created_at: "2021-11-10"
published: true
slug: "acs-nfc-scanner"
---

# Using the @johnbraum/acs-nfc-scanner Package

In this tutorial, we will learn how to use the @johnbraum/acs-nfc-scanner package to scan NFC (Near Field Communication) cards using Capacitor.

## Installation

To get started, you need to install the @johnbraum/acs-nfc-scanner package. You can do this by running the following command:

```bash
npm install @johnbraum/acs-nfc-scanner
```

## Usage

1. Import the `acsNfcScanner` module from the package:

```typescript
import { acsNfcScanner } from '@johnbraum/acs-nfc-scanner';
```

2. Initialize the NFC scanner:

```typescript
const scanner = acsNfcScanner.create();
```

3. Register event listeners for card detection:

```typescript
scanner.on('cardDetected', (cardData) => {
  console.log('Card detected:', cardData);
});

scanner.on('cardRemoved', () => {
  console.log('Card removed');
});
```

4. Start scanning for NFC cards:

```typescript
scanner.startScan();
```

5. Stop scanning for NFC cards when you're done:

```typescript
scanner.stopScan();
```

That's it! You have successfully integrated the @johnbraum/acs-nfc-scanner package into your Capacitor app. Now you can scan NFC cards and handle the card detection events.

## Example

Here's a complete example of how to use the @johnbraum/acs-nfc-scanner package:

```typescript
import { acsNfcScanner } from '@johnbraum/acs-nfc-scanner';

const scanner = acsNfcScanner.create();

scanner.on('cardDetected', (cardData) => {
  console.log('Card detected:', cardData);
});

scanner.on('cardRemoved', () => {
  console.log('Card removed');
});

scanner.startScan();

// Wait for user input to stop scanning
setTimeout(() => {
  scanner.stopScan();
}, 5000);
```

In this example, the scanner is created, event listeners for card detection and removal are registered, and the scanning is started. After 5 seconds, the scanning is stopped.

That's all you need to know to start using the @johnbraum/acs-nfc-scanner package. Happy coding!