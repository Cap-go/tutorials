---
title: "Using the @matiasfic/push-provisioning-capacitor-plugin Package"
description: "This tutorial will guide you through the process of using the @matiasfic/push-provisioning-capacitor-plugin package in your Capacitor project."
created_at: "2022-10-27"
published: true
slug: "push-provisioning-capacitor-plugin"
---

# Using the @matiasfic/push-provisioning-capacitor-plugin Package

This tutorial will guide you through the process of using the @matiasfic/push-provisioning-capacitor-plugin package in your Capacitor project.

## Install

To get started, install the package using npm:

```bash
npm install @matiasfic/push-provisioning-capacitor-plugin
```

## iOS Setup

1. If you haven't already, install Homebrew by following the instructions [here](https://capacitorjs.com/docs/getting-started/environment-setup#homebrew).
2. Install Cocoapods by running the following command:

```bash
brew install cocoapods
```

3. Create a new Capacitor project:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

4. Add the iOS platform to your Capacitor project:

```bash
npx cap add ios
```

5. Install the @matiasfic/push-provisioning-capacitor-plugin package:

```bash
npm install @matiasfic/push-provisioning-capacitor-plugin
```

6. Sync the iOS project:

```bash
npx cap sync ios
```

7. Open the iOS project in Xcode:

```bash
npx cap open ios
```

8. Sign your app in Xcode by going to the "General" tab and selecting your team.
9. Enable remote notification capabilities for your app in Xcode.
10. Add any required provisioning profiles and certificates to the app folder in Xcode.

> Note: Make sure to consult the official documentation for more details on obtaining the necessary provisioning profiles and certificates.

## Android Setup

1. Create a new Capacitor project:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

2. Add the Android platform to your Capacitor project:

```bash
npx cap add android
```

3. Install the @matiasfic/push-provisioning-capacitor-plugin package:

```bash
npm install @matiasfic/push-provisioning-capacitor-plugin
```

4. Sync the Android project:

```bash
npx cap sync android
```

5. Open the Android project in Android Studio:

```bash
npx cap open android
```

6. Add the necessary `google-services.json` file to your `android/app` folder.

> Note: Make sure to consult the official documentation for more details on obtaining the `google-services.json` file.

## Usage

Once you have installed and set up the @matiasfic/push-provisioning-capacitor-plugin package in your Capacitor project, you can use its functionality by importing and calling the appropriate methods in your code.

Here is an example of how to use the plugin to handle push notifications:

```typescript
import { Plugins } from '@capacitor/core';

const { PushProvisioning } = Plugins;

// Initialize the plugin
PushProvisioning.initialize();

// Register the device for push notifications
PushProvisioning.registerForRemoteNotifications()
  .then(response => {
    // Handle the successful registration
    console.log('Device registered for push notifications:', response);
  })
  .catch(error => {
    // Handle the registration error
    console.error('Failed to register for push notifications:', error);
  });
```

Make sure to consult the package's documentation for more information on available methods and their usage.

## Conclusion

In this tutorial, you learned how to use the @matiasfic/push-provisioning-capacitor-plugin package in your Capacitor project. You learned about the installation process, as well as the necessary setup steps for both iOS and Android. Additionally, you saw an example of how to use the plugin to handle push notifications in your code.

With this knowledge, you can now integrate push provisioning capabilities into your Capacitor project using the @matiasfic/push-provisioning-capacitor-plugin package. Good luck with your project!