```markdown
---
title: "Using @haggag641/capacitor-5-qr-scanner Package"
description: "This tutorial will guide you through the process of using the @haggag641/capacitor-5-qr-scanner package to scan QR codes in Capacitor 5"
created_at: "2022-07-15"
published: true
slug: "capacitor-5-qr-scanner"
---

# Using @haggag641/capacitor-5-qr-scanner Package

In this tutorial, we will learn how to use the **@haggag641/capacitor-5-qr-scanner** package to scan QR codes in Capacitor 5.

## Installation

To install the package, run the following command in your project's root directory:

```shell
npm install @haggag641/capacitor-5-qr-scanner
```

## Usage

### 1. Import the Package

To make use of the QR scanner functionality, import the **QrScanner** module from the **@haggag641/capacitor-5-qr-scanner** package:

```typescript
import { QrScanner } from '@haggag641/capacitor-5-qr-scanner';
```

### 2. Request Camera Permissions

Before scanning QR codes, we need to ensure that the app has the necessary camera permissions. You can use the **requestPermissions** method to request the camera permission:

```typescript
async function requestCameraPermission() {
  const { camera } = await QrScanner.requestPermissions();
  if (camera === 'granted') {
    console.log('Camera permission granted.');
  } else {
    console.log('Camera permission not granted.');
  }
}
```

### 3. Scan QR Code

Once we have the camera permission, we can use the **scanQrCode** method to scan QR codes:

```typescript
async function scanQRCode() {
  const { result } = await QrScanner.scanQrCode();
  if (result) {
    console.log('QR code scanned:', result);
  } else {
    console.log('No QR code found.');
  }
}
```

### 4. Putting it All Together

Here's an example of how you can use the **@haggag641/capacitor-5-qr-scanner** package to scan QR codes in Capacitor 5:

```typescript
import { QrScanner } from '@haggag641/capacitor-5-qr-scanner';

async function requestCameraPermission() {
  const { camera } = await QrScanner.requestPermissions();
  if (camera === 'granted') {
    console.log('Camera permission granted.');
  } else {
    console.log('Camera permission not granted.');
  }
}

async function scanQRCode() {
  const { result } = await QrScanner.scanQrCode();
  if (result) {
    console.log('QR code scanned:', result);
  } else {
    console.log('No QR code found.');
  }
}

// Request camera permission
requestCameraPermission();

// Scan QR code
scanQRCode();
```

That's it! Now you know how to use the **@haggag641/capacitor-5-qr-scanner** package to scan QR codes in Capacitor 5. Happy coding!
```
```