---
title: Using @capacitor-community/advertising-id Package
description: >-
  This blog tutorial provides a step-by-step guide on how to use the
  @capacitor-community/advertising-id package to retrieve the Advertising ID in
  Capacitor projects. It covers installation, configuration for Android and iOS,
  and implementation in an Ionic app.
created_at: '2022-02-15'
published: true
slug: advertising-id.git
locale: en
---

# Using @capacitor-community/advertising-id Package

The @capacitor-community/advertising-id package allows developers to access the Advertising ID (IDFA on iOS, AAID on Android) in Capacitor projects. This unique identifier is used for advertising purposes and can be accessed through a simple API. Below is a tutorial on how to use this package:

## Installation

```bash
npm install @capacitor-community/advertising-id
```

or

```bash
yarn add @capacitor-community/advertising-id
```

## Android Configuration

No additional configuration is required for Android.

## iOS Configuration

In your `Info.plist` file, add a description for the user permission request:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Your description here</string>
```

## Ionic App Implementation

To retrieve the Advertising ID in your Ionic app, follow these steps:

```typescript
import {
  AdvertisingId,
  AdvertisingInfoResponse,
} from '@capacitor-community/advertising-id';

AdvertisingId.getAdvertisingInfo()
  .then((response: AdvertisingInfoResponse) => {
    if (response.isAdTrackingLimited === true) {
      console.error('Ads tracking not allowed by user.');
    }
    console.log(response.id);
  })
  .catch((err: Error) => {
    console.error(err);
  });
```

This tutorial covers the installation, configuration, and implementation of the @capacitor-community/advertising-id package in Capacitor projects.
