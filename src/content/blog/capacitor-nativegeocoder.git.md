```markdown
---
"title": "Using @capgo/nativegeocoder Package",
"description": "Tutorial on how to use the @capgo/nativegeocoder package for native forward and reverse geocoding in Capacitor",
"created_at": "2022-01-26",
"published": true,
"slug": "capacitor-nativegeocoder.git"
---

# Using @capgo/nativegeocoder Package

This tutorial will guide you on how to use the @capgo/nativegeocoder package for native forward and reverse geocoding in Capacitor.

## Installation

To install the package, run the following commands:

```bash
npm install @capgo/nativegeocoder
npx cap sync
```

Then, import the package in your code:

```javascript
import { NativeGeocoder } from '@capgo/nativegeocoder';
```

## iOS Configuration

For iOS, you need to add privacy descriptions in your `Info.plist` file:

- `NSLocationAlwaysUsageDescription` (`Privacy - Location Always Usage Description`)
- `NSLocationWhenInUseUsageDescription` (`Privacy - Location When In Use Usage Description`)

Refer to the [Configuring `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) section in the [iOS Guide](https://capacitorjs.com/docs/ios) for detailed instructions.

## Android Configuration

For Android, make sure to add the necessary permissions to your `AndroidManifest.xml` file:

```xml
<!-- Geolocation API -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

## API

### `reverseGeocode(options)`

Convert latitude and longitude to an address.

#### Parameters

- `options`: Refer to the `reverseOptions` interface for details.

### `forwardGeocode(options)`

Convert an address to latitude and longitude.

#### Parameters

- `options`: Refer to the `ForwardOptions` interface for details.

---

## Interfaces

### reverseOptions
// Add description of reverseOptions interface

### ForwardOptions
// Add description of ForwardOptions interface
```