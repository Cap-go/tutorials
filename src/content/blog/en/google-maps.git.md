---
title: Using @capacitor-community/google-maps Package Tutorial
description: >-
  A markdown tutorial on how to use the @capacitor-community/google-maps package
  in Capacitor.
created_at: '2022-01-21'
published: true
slug: google-maps.git
locale: en
---

# Using @capacitor-community/google-maps Package Tutorial

This tutorial will guide you on how to integrate the @capacitor-community/google-maps package into your Capacitor project.

## Installation

To get started, install the package using npm:

```bash
npm install @capacitor-community/google-maps
npx cap sync
```

## API Keys

To use the Google Maps SDK on any platform, you will need API keys associated with an account with billing enabled. Obtain these keys from the [Google Cloud Console](https://console.cloud.google.com).

### iOS

Before using the Google Maps SDK on iOS, make sure to configure the necessary permissions in `Info.plist`. Set the `NSLocationWhenInUseUsageDescription` privacy description.

### Android

For Android, add your API key to the AndroidManifest.xml file in your project:

```xml
<meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY_HERE"/>
```

Also, include the required permissions in the AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

Remember to set up the project variables as needed.

This tutorial covers the basic setup for using the @capacitor-community/google-maps package. Refer to the official documentation for more advanced features and customization options.
```
