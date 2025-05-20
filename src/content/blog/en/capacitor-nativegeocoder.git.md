---
title: Using @capgo/nativegeocoder Package
description: >-
  Learn how to use the @capgo/nativegeocoder package for native geocoding in
  Capacitor.
created_at: '2022-02-28'
published: true
slug: capacitor-nativegeocoder.git
locale: en
---

# Using @capgo/nativegeocoder Package

The `@capgo/nativegeocoder` package is a Capacitor plugin that allows for native forward and reverse geocoding in your Capacitor projects. This tutorial will guide you on how to install and use this package effectively.

## Installation

To get started, you need to install the `@capgo/nativegeocoder` package in your Capacitor project. Run the following commands in your terminal:

```bash
npm install @capgo/nativegeocoder
npx cap sync
```

Next, import the `NativeGeocoder` from `@capgo/nativegeocoder` into your code:

```javascript
import { NativeGeocoder } from '@capgo/nativegeocoder';
```

## iOS Setup

For iOS, you need to add privacy descriptions to your `Info.plist` for location information. Include the following keys in your `Info.plist`:

- `NSLocationAlwaysUsageDescription` (`Privacy - Location Always Usage Description`)
- `NSLocationWhenInUseUsageDescription` (`Privacy - Location When In Use Usage Description`)

Refer to the [iOS Guide](https://capacitorjs.com/docs/ios) for more information on setting iOS permissions in Xcode.

## Android Setup

On Android, you need to add the following permissions to your `AndroidManifest.xml` file:

```xml
<!-- Geolocation API -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

## Using the API

### Reverse Geocoding

The `reverseGeocode` method converts latitude and longitude coordinates to an address. Here is the method signature:

```typescript
reverseGeocode(options: reverseOptions) => any
```

### Forward Geocoding

The `forwardGeocode` method converts an address to latitude and longitude coordinates. Here is the method signature:

```typescript
forwardGeocode(options: ForwardOptions) => any
```

Make sure to refer to the official documentation for detailed information on the available options and usage of the methods.

By following this tutorial, you should be able to integrate the `@capgo/nativegeocoder` package successfully into your Capacitor project and perform geocoding operations efficiently.
