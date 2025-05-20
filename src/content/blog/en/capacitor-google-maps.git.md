---
title: Using @capacitor/google-maps Package Tutorial
description: >-
  This tutorial will guide you on using the @capacitor/google-maps package in
  your Capacitor project.
created_at: '2023-02-26'
published: true
slug: capacitor-google-maps-git
locale: en
---

# Using @capacitor/google-maps Package Tutorial

The @capacitor/google-maps package allows you to integrate Google Maps into a Capacitor project seamlessly. Follow the steps below to get started:

## Installation

```bash
npm install @capacitor/google-maps
npx cap sync
```

## API Keys

To use the Google Maps SDK on any platform, you will need API keys from the [Google Cloud Console](https://console.cloud.google.com) with billing enabled. Check the [Google Maps documentation](https://developers.google.com/maps/documentation/android-sdk/overview) for details on obtaining these keys.

## iOS Configuration

### Enabling Current Location

To show the user's current location, you can use `enableCurrentLocation(bool)`. Ensure you include the privacy descriptions in the `Info.plist` file:

- `NSLocationWhenInUseUsageDescription` (`Privacy - Location When In Use Usage Description`)

For more details on configuring `Info.plist`, refer to the [iOS Guide](https://capacitorjs.com/docs/ios).

### Minimum Deployment Target

Make sure to update the minimum deployment target to iOS 14.0 in the `ios/App/Podfile` and Xcode settings.

### TypeScript Configuration

Set `skipLibCheck` to `true` in your `tsconfig.json`.

### Migration

If you previously used a workaround, remember to update to the latest version of [Google-Maps-iOS-Utils](https://github.com/googlemaps/google-maps-ios-utils).

## Android Configuration

### Adding API Key

In the `AndroidManifest.xml` file, insert your API key under the `com.google.android.geo.API_KEY` metadata tag.

### Location Permissions

Grant the necessary permissions in the `AndroidManifest.xml` file for Coarse and Fine Location access.

### Project Variables

Ensure the required project variables are defined in your app's `variables.gradle` file.

```

```
