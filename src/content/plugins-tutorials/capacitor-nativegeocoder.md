---
title: "Using the @capgo/nativegeocoder Package"
description: "A tutorial on how to use the @capgo/nativegeocoder package for geocoding in Capacitor"
created_at: "2022-10-05"
published: true
slug: "capacitor-nativegeocoder"
---

# Using the @capgo/nativegeocoder Package

The `@capgo/nativegeocoder` package is a Capacitor plugin for native forward and reverse geocoding. It allows you to convert addresses to latitude and longitude, and vice versa. This tutorial will guide you through the installation process and show you how to use the plugin in your Capacitor project.

## Installation

To install the `@capgo/nativegeocoder` package, run the following command in your terminal:

```bash
npm install @capgo/nativegeocoder
npx cap sync
```

## iOS Configuration

For iOS, you need to add the privacy descriptions for location information in your project's `Info.plist`. These descriptions include `NSLocationAlwaysUsageDescription` and `NSLocationWhenInUseUsageDescription`. Follow the steps below to configure the `Info.plist` file:

1. Open your Xcode project.
2. Locate the `Info.plist` file in your project navigator.
3. Right-click on the file and select "Open As" -> "Source Code".
4. Add the following privacy descriptions inside the `<dict></dict>` section:

```xml
<key>NSLocationAlwaysUsageDescription</key>
<string>Privacy - Location Always Usage Description</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Privacy - Location When In Use Usage Description</string>
```

5. Save the file.

For more information on iOS permissions in Xcode, refer to the [Configuring `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) section in the [iOS Guide](https://capacitorjs.com/docs/ios).

## Android Configuration

For Android, you need to add the required permissions to your `AndroidManifest.xml` file. Open the file and add the following lines:

```xml
<!-- Geolocation API -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

## Usage

To use the `@capgo/nativegeocoder` package in your Capacitor project, follow the steps below:

1. Import the `NativeGeocoder` class in your code:

```javascript
import { NativeGeocoder } from '@capgo/nativegeocoder';
```

2. Call the `forwardGeocode` method to convert an address to latitude and longitude:

```javascript
const address = '1600 Amphitheatre Parkway, Mountain View, CA';
const result = await NativeGeocoder.forwardGeocode({ address });
console.log('Latitude:', result.latitude);
console.log('Longitude:', result.longitude);
```

3. Call the `reverseGeocode` method to convert latitude and longitude to an address:

```javascript
const latitude = 37.422;
const longitude = -122.084;
const result = await NativeGeocoder.reverseGeocode({ latitude, longitude });
console.log('Address:', result.address);
console.log('City:', result.city);
console.log('Country:', result.country);
```

That's it! You have successfully used the `@capgo/nativegeocoder` package for geocoding in your Capacitor project.

## Conclusion

In this tutorial, you learned how to install and use the `@capgo/nativegeocoder` package for geocoding in Capacitor. You also configured the required permissions for iOS and Android. Now you can easily convert addresses to latitude and longitude, and vice versa, using the native geocoding capabilities. Explore the package's documentation for more advanced features and options. Happy coding!