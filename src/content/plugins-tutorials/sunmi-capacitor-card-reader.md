---
title: "Using Sunmi-card-reader Package"
description: "This tutorial will guide you on how to use the sunmi-card-reader package to integrate with Sunmi payment SDK and work with the NFC card reader."
created_at: "2022-01-14"
published: true
slug: "sunmi-capacitor-card-reader"
---

# Using Sunmi-card-reader Package

This tutorial will guide you on how to use the sunmi-card-reader package to integrate with Sunmi payment SDK and work with the NFC card reader. The sunmi-card-reader package is designed to work with Sunmi devices such as Sunmi P2, P1N, P2Lite, P2Pro, and P14G.

## Installation

To get started, you need to install the sunmi-card-reader package. Open your terminal and run the following command:

```bash
npm install @capacitor-community/sunmi-card-reader
```

Once the installation is complete, sync the capacitor by running the following command:

```bash
npx cap sync
```

## Usage

1. Import the sunmi-card-reader package into your project.

```typescript
import { SunmiCardReader } from '@capacitor-community/sunmi-card-reader';
```

2. Initialize the sunmi-card-reader plugin by calling the `init()` method.

```typescript
SunmiCardReader.init();
```

3. Check if the Sunmi device is supported using the `isSupported()` method.

```typescript
const isSupported = await SunmiCardReader.isSupported();
if(isSupported) {
  console.log("Sunmi device is supported.");
} else {
  console.log("Sunmi device is not supported.");
}
```

4. Connect to the Sunmi card reader using the `connect()` method.

```typescript
await SunmiCardReader.connect();
```

5. Start listening for card detection events using the `startListening()` method.

```typescript
SunmiCardReader.startListening((data, error) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log("Card detected with UUID:", data.uuid);
});
```

6. Stop listening for card detection events using the `stopListening()` method.

```typescript
SunmiCardReader.stopListening();
```

7. Disconnect from the Sunmi card reader using the `disconnect()` method.

```typescript
await SunmiCardReader.disconnect();
```

8. Release the resources used by the sunmi-card-reader plugin using the `release()` method.

```typescript
SunmiCardReader.release();
```

That's it! You have successfully integrated the sunmi-card-reader package into your project and implemented card reader functionality with Sunmi devices.

Remember to handle error cases and check for supported devices before performing card reader operations.

Happy coding!