---
title: "Using @aparajita/capacitor-biometric-auth Package"
description: "A tutorial on how to use the @aparajita/capacitor-biometric-auth package for native biometric authentication in Capacitor 5."
created_at: "2022-10-24"
published: true
slug: "capacitor-biometric-auth"
---

# Using @aparajita/capacitor-biometric-auth Package

This tutorial will guide you through the process of using the `@aparajita/capacitor-biometric-auth` package in your Capacitor 5 project to enable native biometric authentication on iOS and Android devices. The package provides support for various types of biometry and configuration options, and even offers biometric simulation on the web for testing purposes.

## Installation

To get started, you need to install the `@aparajita/capacitor-biometric-auth` package using a package manager like npm or yarn. Open your terminal and run the following command:

```bash
pnpm add @aparajita/capacitor-biometric-auth
```

If you are not using [pnpm](https://pnpm.js.org/), you can use npm or yarn instead.

## Usage

The `@aparajita/capacitor-biometric-auth` package provides a comprehensive API documented in the [TypeScript definitions file](src/definitions.ts). Here, we will cover the basic usage of the package. For more advanced features and examples, you can refer to the [demo app](https://github.com/aparajita/capacitor-biometric-auth-demo).

### Checking Biometry Availability

Before giving the users the option to use biometry, such as displaying a biometry icon, you first need to check the availability of biometry on the device. This determines whether the device has biometric authentication capabilities and whether the user is enrolled in biometry.

To check biometry availability, use the `checkBiometry` function and inspect the `CheckBiometryResult` object that is returned. Here's an example:

```typescript
import { checkBiometry, CheckBiometryResult } from '@aparajita/capacitor-biometric-auth';

const checkAvailability = async () => {
  const result: CheckBiometryResult = await checkBiometry();
  
  if (result.isAvailable) {
    console.log('Biometry is available on this device');
    console.log('Biometry Type:', result.biometryType);
  } else {
    console.log('Biometry is not available on this device');
    console.log('Reason:', result.reason);
    console.log('Code:', result.code);
  }
};

checkAvailability();
```

The `isAvailable` property indicates whether biometry is available on the device. If it is `false`, you can check the `reason` and `code` properties to determine why biometry is not available.

### Authenticating with Biometry

Once you have determined that biometry is available on the device, you can allow the user to authenticate using biometry. The `authenticate` function is used to initiate the biometric authentication process.

Here's an example of how to authenticate with biometry:

```typescript
import { authenticate } from '@aparajita/capacitor-biometric-auth';

const authenticateWithBiometry = async () => {
  try {
    const result = await authenticate();
    console.log('Biometric authentication successful');
  } catch (error) {
    console.log('Biometric authentication failed');
    console.error(error);
  }
};

authenticateWithBiometry();
```

The `authenticate` function returns a promise that resolves when the biometric authentication is successful. If the authentication fails, an error is thrown.

## Conclusion

In this tutorial, you have learned how to use the `@aparajita/capacitor-biometric-auth` package to enable native biometric authentication in your Capacitor 5 project. You have seen how to check biometry availability and authenticate with biometry.

Feel free to explore more advanced features and configuration options provided by the package in the [TypeScript definitions file](src/definitions.ts) or the [demo app](https://github.com/aparajita/capacitor-biometric-auth-demo).

Now you can enhance the security and user experience of your app by leveraging biometric authentication on iOS and Android devices!
