---
title: "Using cap-biometrics Package"
description: "A tutorial on how to use the cap-biometrics package to query meta information from a device"
created_at: "2022-10-18"
published: true
slug: "capbiometrics"
---

# Using cap-biometrics Package

In this tutorial, we will learn how to use the cap-biometrics package to query meta information from a device. The cap-biometrics package provides a convenient way to access biometric authentication features on iOS and Android platforms.

## Installation

To get started, we need to install the cap-biometrics package using npm. Open your terminal and run the following command:

```sh
npm install cap-biometrics
```

## Checking Biometric Availability

Before we can use biometric authentication, we need to check the availability of biometric features on the device. We can do this using the `checkBiometry` function provided by the cap-biometrics package. Here is an example of how to check biometric availability:

```javascript
import { checkBiometry } from 'cap-biometrics';

const checkAvailability = async () => {
  const result = await checkBiometry();
  if (result.isAvailable) {
    console.log(`Biometric type: ${result.biometryType}`);
  } else {
    console.log(`Biometric not available: ${result.reason}`);
  }
};

checkAvailability();
```

The `checkBiometry` function returns a promise that resolves to a `CheckBiometryResult` object. The `isAvailable` property indicates if biometric authentication is available, and the `biometryType` property provides information about the type of biometric available (e.g., Touch ID, Face ID, etc.). If biometric authentication is not available, the `reason` property will provide additional information.

## Conclusion

In this tutorial, we learned how to use the cap-biometrics package to check the availability of biometric authentication on a device. By using the `checkBiometry` function, we can easily determine if the device supports biometrics and provide appropriate user feedback. This package is a useful tool for integrating biometric authentication into your Capacitor apps.

To explore more features and functions provided by the cap-biometrics package, refer to the package documentation and API reference.

Happy coding!