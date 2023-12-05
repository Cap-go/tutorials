---
title: "Using @flowmoco/capacitor-biometric-keychain Package"
description: "A tutorial on how to use the @flowmoco/capacitor-biometric-keychain package in Capacitor"
created_at: "2021-10-12"
published: true
slug: "capacitor-biometric-keychain"
---

# Using @flowmoco/capacitor-biometric-keychain Package

In this tutorial, we will learn how to use the `@flowmoco/capacitor-biometric-keychain` package in Capacitor to securely store data using biometric authentication.

## Installation

To begin, we need to install the package in our project. Open your terminal and run the following command:

```bash
npm install @flowmoco/capacitor-biometric-keychain
```

After the installation is complete, we need to sync the project with Capacitor. Run the following command:

```bash
npx cap sync
```

## Usage

Now that the package is installed, we can start using it in our Capacitor project. Here's how:

### Import the Package

First, we need to import the `BiometricNative` class from the package. Add the following line at the beginning of your TypeScript file:

```typescript
import { BiometricNative } from "@flowmoco/capacitor-biometric-keychain";
```

### Get an Item

To retrieve an item from the secure storage, we can use the `getItem` method. This method will invoke the device biometric authentication before returning the item value. Here's how to use it:

```typescript
async function getItemFromSecureStorage(key: string) {
  try {
    const result = await BiometricNative.getItem({ key });
    if (result.error) {
      console.error(result.error);
    } else {
      console.log("Item value:", result.value);
    }
  } catch (error) {
    console.error(error);
  }
}
```

### Set an Item

To set an item in the secure storage, we can use the `setItem` method. This method will also invoke the device biometric authentication. If the specified key already exists, the biometric authentication will be skipped on iOS. Here's how to use it:

```typescript
async function setItemInSecureStorage(key: string, value: string) {
  try {
    const result = await BiometricNative.setItem({ key, value });
    if (result.error) {
      console.error(result.error);
    } else {
      console.log("Item set successfully");
    }
  } catch (error) {
    console.error(error);
  }
}
```

### Remove an Item

To remove an item from the secure storage, we can use the `removeItem` method. This method does not require biometric authentication and can be used to remove an item without invoking the device's authentication mechanism. Here's how to use it:

```typescript
async function removeItemFromSecureStorage(key: string) {
  try {
    const result = await BiometricNative.removeItem({ key });
    if (result.error) {
      console.error(result.error);
    } else {
      console.log("Item removed successfully");
    }
  } catch (error) {
    console.error(error);
  }
}
```

## Conclusion

In this tutorial, we learned how to use the `@flowmoco/capacitor-biometric-keychain` package in Capacitor to securely store data using biometric authentication. We saw how to retrieve an item, set an item, and remove an item from the secure storage. Using this package, you can add an extra layer of security to your app by requiring biometric authentication for data operations.

Remember to consult the official documentation of the package for more details and advanced usage.

That's it! Happy coding!