---
"title": "Using @capacitor-community/advertising-id package tutorial",
"description": "Step-by-step guide to integrate and use the @capacitor-community/advertising-id package in your Capacitor app.",
"created_at": "2022-01-20",
"published": true,
"slug": "advertising-id.git"
---

## @capacitor-community/advertising-id Package Tutorial

[@capacitor-community/advertising-id](https://github.com/capacitor-community/advertising-id) is a Capacitor plugin that provides an easy way to access the Advertising Identifier (IDFA on iOS and AAID on Android) within your Capacitor app. This unique ID is used for advertising tracking purposes and allows developers to gather user engagement insights for advertising.

### Installation

To get started, you need to install the `@capacitor-community/advertising-id` package using npm or yarn.

```bash
npm install @capacitor-community/advertising-id
# or
yarn add @capacitor-community/advertising-id
```

### Android Configuration

No additional configuration is required for Android.

### iOS Configuration

In your `Info.plist` file, add a description for the user permission request for tracking.

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Your description here</string>
```

### Ionic App Implementation

Here's how you can use the `@capacitor-community/advertising-id` plugin in your Ionic app:

```typescript
import { AdvertisingId, AdvertisingInfoResponse } from '@capacitor-community/advertising-id';

// Get advertising id.
AdvertisingId.getAdvertisingInfo()
  .then((response: AdvertisingInfoResponse) => {
    if (response.isAdTrackingLimited) {
      console.log('Ads tracking not allowed by user.');
    } else {
      console.log(response.id);
    }
  })
  .catch((error: Error) => {
    console.error(error);
  });
```

That's it! You can now integrate and utilize the Advertising Identifier in your Capacitor app with ease.