---
title: "Using the multiplatform-biometric-auth Package"
description: "A tutorial on how to use the multiplatform-biometric-auth package in your Capacitor app."
created_at: "2022-08-10"
published: true
slug: capacitorauthplugin
---

# Using the multiplatform-biometric-auth Package

In this tutorial, we will learn how to use the multiplatform-biometric-auth package in a Capacitor app. This package provides access to native biometry on iOS and Android, allowing you to authenticate users using their biometric data such as fingerprints or face recognition.

## Installation

To begin, install the multiplatform-biometric-auth package by running the following command in your project directory:

```sh
pnpm add @aparajita/capacitor-biometric-auth
```

## Usage

### Checking Biometry Availability

Before using biometry authentication in your app, you should first check if biometry is available on the user's device. This step is important because not all devices support biometry and the user may not have enrolled in biometry authentication.

To check biometry availability, use the `checkBiometry` function provided by the package. Here is an example code snippet:

```typescript
import { Plugins } from '@capacitor/core';

const { BiometricAuth } = Plugins;

async function checkBiometryAvailability() {
  const result = await BiometricAuth.checkBiometry();

  if (result.isAvailable) {
    console.log('Biometry is available on this device');
    console.log('Biometry Type:', result.biometryType);
  } else {
    console.log('Biometry is not available on this device');
    console.log('Reason:', result.reason);
    console.log('Code:', result.code);
  }
}

checkBiometryAvailability();
```

The `checkBiometry` function returns a `CheckBiometryResult` object, which contains information about the availability of biometry on the device.

### Authenticating with Biometry

Once you have checked the availability of biometry, you can proceed with biometric authentication in your app. The `authenticate` function is used for this purpose. Here is an example code snippet:

```typescript
import { Plugins } from '@capacitor/core';

const { BiometricAuth } = Plugins;

async function authenticateWithBiometry() {
  const result = await BiometricAuth.authenticate();

  if (result.success) {
    console.log('Biometric authentication successful');
  } else {
    console.log('Biometric authentication failed');
    console.log('Error:', result.error);
  }
}

authenticateWithBiometry();
```

The `authenticate` function returns an `AuthenticationResult` object, which contains information about the success or failure of the biometric authentication.

## Conclusion

In this tutorial, we learned how to use the multiplatform-biometric-auth package in a Capacitor app. We covered the steps for checking biometry availability and authenticating with biometry. With this knowledge, you can now implement biometric authentication in your own Capacitor app.

This tutorial provides a basic overview of the package's functionality. For more detailed information and additional features, please refer to the package's documentation.

Remember to handle any potential errors and provide appropriate feedback to the user during the authentication process.