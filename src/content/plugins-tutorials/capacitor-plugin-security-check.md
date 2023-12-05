---
title: "Using capacitor-plugin-security-check"
description: "A tutorial on how to use the capacitor-plugin-security-check package in Capacitor"
created_at: "2022-01-26"
published: true
slug: capacitor-plugin-security-check
---

# Using capacitor-plugin-security-check

In this tutorial, we will learn how to use the `capacitor-plugin-security-check` package in Capacitor to perform security checks in your application.

## Installation

First, install the `capacitor-plugin-security-check` package using the following command:

```bash
npm install capacitor-plugin-security-check
```

## Setup

### iOS

For iOS, no additional setup is required.

### Android

For Android, open your `MainActivity.java` file located in `android/app/src/main/java/...` and import the `SecurityCheck` class:

```java
import com.yourpackage.plugins.SecurityCheck;
```

Next, add the `SecurityCheck` plugin to your `initialize` method by adding the following line of code:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Add other plugins here
    add(SecurityCheck.class);
}});
```

## Usage

To perform security checks using the `capacitor-plugin-security-check`, first import the plugin in your code:

```typescript
import { Plugins } from '@capacitor/core';
const { SecurityCheck } = Plugins;
```

### Check Biometric Availability

To check if the biometric authentication is available on the device, use the `isBiometricAvailable` method:

```typescript
const result = await SecurityCheck.isBiometricAvailable();
if (result.available) {
  console.log('Biometric is available on this device');
} else {
  console.log('Biometric is not available on this device');
}
```

### Check Device Integrity

To check the integrity of the device, use the `checkDeviceIntegrity` method:

```typescript
const result = await SecurityCheck.checkDeviceIntegrity();
if (result.integrity) {
  console.log('Device integrity is intact');
} else {
  console.log('Device integrity is compromised');
}
```

### Secure Storage

To securely store sensitive information, use the `setSecureValue` and `getSecureValue` methods:

```typescript
// Set a secure value
await SecurityCheck.setSecureValue({ key: 'secretKey', value: 'mySecretValue' });

// Get the secure value
const value = await SecurityCheck.getSecureValue({ key: 'secretKey' });
console.log('Secure value: ', value);
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-plugin-security-check` package to perform security checks and handle secure storage in your Capacitor application. With these features, you can enhance the security of your application and protect sensitive data.

Feel free to explore the official documentation of the `capacitor-plugin-security-check` package for more advanced usage and configuration options.