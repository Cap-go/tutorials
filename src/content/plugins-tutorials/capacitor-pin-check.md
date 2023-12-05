---
title: "Using the capacitor-pin-check Package"
description: "A tutorial on how to use the capacitor-pin-check package in your Capacitor app"
created_at: "2021-10-20"
published: true
slug: capacitor-pin-check
---

# Using the capacitor-pin-check Package

In this tutorial, we will learn how to use the `capacitor-pin-check` package in your Capacitor app to implement a PIN code verification feature.

## Installation

First, let's start by installing the `capacitor-pin-check` package into your Capacitor app.

```bash
npm install capacitor-pin-check
```

## Configuration

After installing the package, we need to configure it in our app. Open the `capacitor.config.json` file in the root of your project and add the following lines:

```json
"plugins": {
  "CapacitorPinCheck": {
    "packageName": "com.example.myapp",
    "skipCheckOnFirstLoad": true
  }
}
```

Make sure to replace `"com.example.myapp"` with your app's package name.

## Usage

Now, let's move on to using the `capacitor-pin-check` package in your app. We will go through the basic steps to implement a PIN code verification feature.

### 1. Import the Plugin

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorPinCheck } = Plugins;
```

### 2. Check If PIN Code Is Set

```typescript
const isPINSet = await CapacitorPinCheck.isPINSet();
if (isPINSet.value) {
  // PIN code is already set, show PIN code verification screen
} else {
  // PIN code is not set, show PIN code setup screen
}
```

### 3. Set or Change PIN Code

```typescript
await CapacitorPinCheck.setPIN();
```

### 4. Verify PIN Code

```typescript
const verifyResult = await CapacitorPinCheck.verifyPIN({ pin: enteredPIN });
if (verifyResult.verified) {
  // PIN code is verified
} else {
  // Invalid PIN code
}
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-pin-check` package to implement a PIN code verification feature in your Capacitor app. This can be useful for securing sensitive parts of your app or creating a personalized user experience.

Feel free to explore the package's documentation for more advanced usage and customization options. Happy coding!