---
title: "Using @capacitor-community/advertising-id Package"
description: "A tutorial on how to use the @capacitor-community/advertising-id package to access the Advertising Identifier (IDFA) on iOS and Android platforms."
created_at: "2022-01-25"
published: true
slug: advertising-id
---

# Using @capacitor-community/advertising-id Package

In this tutorial, we will explore how to use the `@capacitor-community/advertising-id` package to access the Advertising Identifier (IDFA) on iOS and Android platforms. The Advertising Identifier is a unique ID that allows developers and marketers to track user activity for advertising purposes.

## Installation

To get started, install the `@capacitor-community/advertising-id` package in your Capacitor project:

```shell
npm install @capacitor-community/advertising-id
```

or

```shell
yarn add @capacitor-community/advertising-id
```

## Android Configuration

There is no additional configuration required for Android.

## iOS Configuration

In your `Info.plist` file, make sure to add a description for the user permission request:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Your description here</string>
```

Replace `Your description here` with a brief description of why your app needs to access the user's IDFA.

## Usage

Now that the package is installed and the necessary configurations are done, you can start using the `@capacitor-community/advertising-id` package in your code.

```typescript
import { AdvertisingId } from '@capacitor-community/advertising-id';

// Get the Advertising ID
const getAdvertisingId = async () => {
  try {
    const { id, isAdTrackingLimited } = await AdvertisingId.getAdvertisingId();
    if (id) {
      console.log('Advertising ID:', id);
    } else {
      console.log('Advertising ID not available.');
    }
    console.log('Ad Tracking Limited:', isAdTrackingLimited);
  } catch (error) {
    console.error('Error:', error);
  }
};

getAdvertisingId();
```

The `getAdvertisingId` function retrieves the Advertising ID using the `AdvertisingId.getAdvertisingId()` method. It returns an object with the `id` and `isAdTrackingLimited` properties. The `id` property contains the Advertising ID (or null if not defined/permitted), and the `isAdTrackingLimited` property indicates whether the user has limited ad tracking.

Make sure to handle any errors that may occur during the retrieval process.

## Conclusion

In this tutorial, we have learned how to use the `@capacitor-community/advertising-id` package to access the Advertising Identifier (IDFA) on iOS and Android platforms. We covered the installation process, platform-specific configurations, and demonstrated how to retrieve the Advertising ID using the provided methods. Integrating the Advertising ID into your app can enable better advertising tracking and user analytics.