---
title: "Using the @cartona/capacitor-google-play-availability Package"
description: "This tutorial will guide you through the process of using the @cartona/capacitor-google-play-availability package in your Capacitor app."
created_at: "2023-10-05"
published: true
slug: "capacitor-google-play-availability"
---

# Using the @cartona/capacitor-google-play-availability Package

In this tutorial, we will learn how to integrate the **@cartona/capacitor-google-play-availability** package into your Capacitor app. This package allows you to check the availability of the Google Play Services on an Android device.

## Prerequisites

Before we begin, make sure you have the following set up:

- Capacitor installed in your project.
- An Android device or emulator with Google Play Services installed.

## Step 1: Install the Package

To install the **@cartona/capacitor-google-play-availability** package, run the following command in your project's root directory:

```bash
npm install @cartona/capacitor-google-play-availability
```

## Step 2: Configure the Package

Next, we need to configure the package in our Capacitor project. Open the **capacitor.config.json** file and add the following entry under the **plugins** section:

```json
{
  "plugins": {
    "GooglePlayAvailability": {
      "PACKAGE_NAME": "your.package.name"
    }
  }
}
```

Make sure to replace `"your.package.name"` with the actual package name of your Android app.

## Step 3: Check Google Play Services Availability

Now we can start using the package in our code. Import the **GooglePlayAvailability** plugin from the **@cartona/capacitor-google-play-availability** package:

```typescript
import { Plugins } from '@capacitor/core';

const { GooglePlayAvailability } = Plugins;
```

To check the availability of Google Play Services, use the `checkGooglePlayServicesAvailability()` method:

```typescript
const checkAvailability = async () => {
  const { success, message } = await GooglePlayAvailability.checkGooglePlayServicesAvailability();
  
  if (success) {
    console.log('Google Play Services is available!');
  } else {
    console.log('Google Play Services is not available. Error:', message);
  }
};

checkAvailability();
```

The `checkGooglePlayServicesAvailability()` method returns an object with a **success** property indicating the availability status, and a **message** property with an optional error message if Google Play Services is not available.

## Conclusion

In this tutorial, we learned how to integrate the **@cartona/capacitor-google-play-availability** package into a Capacitor app. We covered the installation process, configuration steps, and how to check the availability of Google Play Services. You can now use this package to ensure that Google Play Services are available on an Android device before using any related functionality in your app.