---
title: "Using the @sparkfabrik/capacitor-plugin-idfa Package"
description: "A tutorial on how to use the @sparkfabrik/capacitor-plugin-idfa package to access the Advertising ID in Capacitor apps."
created_at: "2021-10-30"
published: true
slug: capacitor-plugin-idfa
---

# Using the @sparkfabrik/capacitor-plugin-idfa Package

In this tutorial, we will learn how to use the @sparkfabrik/capacitor-plugin-idfa package in Capacitor apps to access the Advertising ID. The Advertising ID (IDFA on iOS, AAID on Android) is a device-specific identifier used for advertising purposes.

## Prerequisites

Before we begin, make sure you have the following installed and set up:

- Capacitor in your project
- npm or yarn package manager
- iOS and/or Android development environment

## Installation

To install the @sparkfabrik/capacitor-plugin-idfa package, run the following command:

```bash
npm install @sparkfabrik/capacitor-plugin-idfa
```

or

```bash
yarn add @sparkfabrik/capacitor-plugin-idfa
```

## Android Configuration

There is no additional configuration required for Android.

## iOS Configuration

In your `info.plist` file, add a description for the user permission request by inserting the following code:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>...</string>
```

Replace `...` with the description of why you need to access the Advertising ID.

## Usage

Once the package is installed and the configurations are in place, you can start using the @sparkfabrik/capacitor-plugin-idfa package in your Capacitor app.

### Import the Package

In the component where you want to use the Advertising ID, import the Idfa and AdvertisingInfoResponse from the @sparkfabrik/capacitor-plugin-idfa package:

```ts
import { Idfa, AdvertisingInfoResponse } from '@sparkfabrik/capacitor-plugin-idfa';
```

### Get the Advertising ID

To retrieve the Advertising ID, call the `getAdvertisingInfo()` method from the Idfa class and handle the response:

```ts
Idfa.getAdvertisingInfo()
  .then((response: AdvertisingInfoResponse) => {
    if (response.isAdTrackingLimited === true) {
      console.error('Ads tracking not allowed by user.');
    }
    console.log(response.id);
  })
  .catch((error: Error) => {
    console.error(error);
  });
```

The `getAdvertisingInfo()` method returns a promise that resolves to an object of type `AdvertisingInfoResponse`. This object contains the Advertising ID (`id`) and a boolean flag (`isAdTrackingLimited`) indicating whether the user has allowed ad tracking.

## Conclusion

In this tutorial, we have learned how to install and use the @sparkfabrik/capacitor-plugin-idfa package to access the Advertising ID in Capacitor apps. By following the steps outlined here, you can easily integrate this package into your project and retrieve the Advertising ID for tracking and advertising purposes.