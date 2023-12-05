---
title: "Using capacitor-biometric-lock Package"
description: "A tutorial on how to use the capacitor-biometric-lock package to implement biometric authentication in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-biometric-lock
---

# Using capacitor-biometric-lock Package

In this tutorial, we will learn how to use the `capacitor-biometric-lock` package to implement biometric authentication in your Capacitor app. Biometric authentication allows users to authenticate using fingerprint or face recognition, providing a convenient and secure login experience.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Using Biometric Lock](#using-biometric-lock)
  - [Check Biometric Availability](#check-biometric-availability)
  - [Request Biometric Authentication](#request-biometric-authentication)
- [Handling Authentication Results](#handling-authentication-results)
- [Conclusion](#conclusion)

Let's get started!

## Installation

To begin, let's install the `capacitor-biometric-lock` package:

```bash
npm install capacitor-biometric-lock
```

## Configuration

Next, we need to configure the plugin in our Capacitor app.

### iOS Configuration

For iOS, open your `ios/App/App/AppDelegate.swift` file and add the following import statement at the top:

```swift
import BiometricLock
```

Then, add the following code inside the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
BiometricLock.registerPlugins()
```

### Android Configuration

For Android, open your `android/app/src/main/java/{YOUR_PACKAGE_NAME}/MainActivity.java` file and add the following imports at the top:

```java
import com.etoobi.capacitor.biometriclock.BiometricLock;
import com.etoobi.capacitor.biometriclock.BiometricLockPlugin;
```

Inside the `init` method, add the following code:

```java
super.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // ...
  add(BiometricLockPlugin.class);
  // ...
}});
```

## Using Biometric Lock

Now that we have installed and configured the `capacitor-biometric-lock` package, let's look at how to use it for biometric authentication.

### Check Biometric Availability

Before performing biometric authentication, it is important to check if the device supports biometric authentication and if the user has enrolled any biometric credentials.

Add the following code to check biometric availability:

```typescript
import { BiometricLock } from 'capacitor-biometric-lock';

// Check if biometric authentication is available
const isAvailable = await BiometricLock.isAvailable();
if (isAvailable.available) {
  console.log('Biometric authentication is available.');
  console.log('Available biometric types:', isAvailable.biometryTypes);
} else {
  console.log('Biometric authentication is not available.');
  console.log('Error:', isAvailable.error);
}
```

This code will check if biometric authentication is available on the device. If it is available, it will log the available biometric types (e.g., fingerprint, face). If it is not available, it will log the error message.

### Request Biometric Authentication

To request biometric authentication, use the following code:

```typescript
import { BiometricLock } from 'capacitor-biometric-lock';

// Request biometric authentication
const result = await BiometricLock.authenticate();

if (result.success) {
  // Authentication successful
  console.log('Authentication successful');
} else {
  // Authentication failed or cancelled
  console.log('Authentication failed or cancelled');
}
```

This code will prompt the user for biometric authentication. If the authentication is successful, it will log a success message. If the authentication fails or is cancelled by the user, it will log a failure message.

## Handling Authentication Results

After requesting biometric authentication, you can handle the authentication results as per your app's requirements. For example, you may want to navigate to a different page or display a success/error message.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-biometric-lock` package to implement biometric authentication in a Capacitor app. We covered the installation, configuration, and usage of the package, including checking biometric availability and requesting biometric authentication. You can now enhance the security and user experience of your app by adding biometric authentication.

Remember to consult the official documentation of the `capacitor-biometric-lock` package for more detailed information and additional features.

Happy coding!