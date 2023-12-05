---
title: "Using @capgo/capacitor-native-biometric"
description: "A tutorial on how to use the @capgo/capacitor-native-biometric package for biometric authentication in Capacitor apps."
created_at: "2022-10-25"
published: true
slug: "capacitor-native-biometric"
---

# Using @capgo/capacitor-native-biometric

This tutorial will guide you through the process of integrating biometric authentication into your Capacitor apps using the `@capgo/capacitor-native-biometric` package. This package provides access to native biometry features on both iOS and Android devices, allowing you to utilize fingerprint scanning, face recognition, and other biometric authentication methods in your app.

## Installation

To get started, you need to install the `@capgo/capacitor-native-biometric` package in your Capacitor project. Open your project's command line interface and run the following command:

```bash
npm install @capgo/capacitor-native-biometric
```

## Configuration

After installing the package, you need to configure it for your specific app platform. Here are the steps for each platform:

### iOS Configuration

For iOS, you need to configure the `Info.plist` file in your Xcode project. Open the `Info.plist` file and add the following key-value pairs:

```xml
<key>NSFaceIDUsageDescription</key>
<string>We use Face ID to securely authenticate you.</string>
<key>NSFaceIDUsageDescriptionForAuthentication</key>
<string>Unlock the app using Face ID.</string>
<key>NSFaceIDUsageDescriptionForSignIn</key>
<string>Sign in using Face ID.</string>
```

Make sure to replace the example strings with relevant descriptions for your app.

### Android Configuration

For Android, you need to configure the `AndroidManifest.xml` file in your Android project. Open the `AndroidManifest.xml` file and add the following permissions:

```xml
<uses-permission android:name="android.permission.USE_BIOMETRIC" />
<uses-permission android:name="android.permission.USE_FINGERPRINT" />
```

Make sure these permissions are added within the `<manifest>` element.

## Usage

Now that you have installed and configured the `@capgo/capacitor-native-biometric` package, you can start using it in your app. Here's how to perform biometric authentication:

### Checking Biometry Availability

Before offering biometric authentication to the user, it's important to check if biometry is available on the device. You can use the `checkBiometry` method to do this. Here's an example:

```javascript
import { BiometricAuth } from '@capgo/capacitor-native-biometric';

const result = await BiometricAuth.checkBiometry();

if (result.isAvailable) {
  console.log(`Biometric authentication is available. Biometry type: ${result.biometryType}`);
} else {
  console.log(`Biometric authentication is not available. Reason: ${result.reason}`);
}
```

The `checkBiometry` method returns a `CheckBiometryResult` object, which contains information about the availability of biometry on the device. You can use the `isAvailable` property to determine if biometry is available, and the `biometryType` property to get the type of biometry supported on the device (e.g., fingerprint, face recognition).

### Authenticating with Biometry

To authenticate the user using biometry, you can use the `authenticate` method. This method will present the biometric authentication prompt to the user. Here's an example:

```javascript
import { BiometricAuth } from '@capgo/capacitor-native-biometric';

const result = await BiometricAuth.authenticate();

if (result.success) {
  console.log('Biometric authentication successful!');
  // Proceed with app functionality
} else {
  console.log('Biometric authentication failed.');
  // Handle authentication failure
}
```

The `authenticate` method returns an `AuthenticationResult` object, which contains information about the authentication result. The `success` property indicates whether the authentication was successful or not.

## Conclusion

In this tutorial, you learned how to integrate biometric authentication into your Capacitor apps using the `@capgo/capacitor-native-biometric` package. You configured the package for iOS and Android, checked the availability of biometry on the device, and performed biometric authentication. By incorporating biometric authentication, you can enhance the security and user experience of your app.

To learn more about the `@capgo/capacitor-native-biometric` package and its API, refer to the package's [documentation](https://github.com/capgo/capacitor-native-biometric).

Give it a try and add an extra layer of security to your Capacitor apps with biometric authentication!

