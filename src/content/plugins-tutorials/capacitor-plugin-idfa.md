# Using @falconeta/capacitor-plugin-idfa

## Introduction

[@falconeta/capacitor-plugin-idfa](https://www.npmjs.com/package/@falconeta/capacitor-plugin-idfa) is a Capacitor plugin that provides access to the Advertising Identifier (IDFA) on iOS and Android devices. The IDFA is a unique identifier used for advertising purposes and allows developers and marketers to track user activity.

This tutorial will guide you through the installation and implementation of the @falconeta/capacitor-plugin-idfa package in your Capacitor project.

## Prerequisites

Before starting, make sure you have the following prerequisites:

- Capacitor project set up
- Node.js and npm installed

## Step 1: Installation

To install the @falconeta/capacitor-plugin-idfa package, open your terminal or command prompt and navigate to your project's root directory. Then, run the following command:

```
npm install @falconeta/capacitor-plugin-idfa
```

## Step 2: Configuration

### Android Configuration

There is no additional configuration required for Android.

### iOS Configuration

In your iOS project, locate the `info.plist` file and add the following key-value pair:

```
<key>NSUserTrackingUsageDescription</key>
<string>...</string>
```

Replace `...` with a description of why your app requires access to the user's advertising identifier.

## Step 3: Implementing the Plugin

To use the @falconeta/capacitor-plugin-idfa package in your project, follow these steps:

1. Open the file where you want to use the plugin (e.g., a TypeScript file).
2. Import the necessary modules:

```typescript
import { Plugins } from '@capacitor/core';

const { IDFA } = Plugins;
```

3. Call the `getAdvertisingInfo()` method to retrieve the Advertising ID:

```typescript
IDFA.getAdvertisingInfo()
  .then((response) => {
    console.log(response.id); // The Advertising ID
    console.log(response.isAdTrackingLimited); // Whether ad tracking is limited by the user
  })
  .catch((error) => {
    console.error(error);
  });
```

The `getAdvertisingInfo()` method returns a promise that resolves with an object containing the advertising ID and whether ad tracking is limited by the user.

## Conclusion

In this tutorial, you've learned how to install and use the @falconeta/capacitor-plugin-idfa package in your Capacitor project. You can now access the Advertising Identifier (IDFA) on iOS and Android devices and track user activity for advertising purposes.

For more information about this package, please refer to the official [documentation](https://www.npmjs.com/package/@falconeta/capacitor-plugin-idfa).

