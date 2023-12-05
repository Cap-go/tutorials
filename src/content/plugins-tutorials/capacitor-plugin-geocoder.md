---
title: "Using the @oniq/capacitor-plugin-geocoder Package"
description: "A tutorial on how to use the @oniq/capacitor-plugin-geocoder package in your Capacitor project."
created_at: "2021-10-07"
published: true
slug: "capacitor-plugin-geocoder"
---

# Using the @oniq/capacitor-plugin-geocoder Package

In this tutorial, we will learn how to use the @oniq/capacitor-plugin-geocoder package in your Capacitor project. This plugin allows you to perform geocoding and reverse geocoding operations, converting addresses into geographic coordinates (latitude and longitude) and vice versa.

## Installation

To start using the @oniq/capacitor-plugin-geocoder package, first install it in your Capacitor project:

```bash
npm install @oniq/capacitor-plugin-geocoder
npx cap sync
```

## Configuration

After installing the package, you need to configure it in your Capacitor project.

### iOS Configuration

1. Open your project in Xcode.
2. Navigate to the `AppDelegate.swift` file.
3. Import the plugin:

```swift
import @oniq/capacitor-plugin-geocoder
```

4. Inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool` method, add the following code:

```swift
IonGeocoder.register()
```

### Android Configuration

1. Open your project in Android Studio.
2. Navigate to the `MainActivity.java` file.
3. Import the plugin:

```java
import @oniq/capacitor-plugin-geocoder
```

4. Inside the `init` method, add the following code:

```java
IonGeocoder.register(this);
```

## Usage

Once the package is installed and configured, you can use it in your Capacitor project.

### Geocoding

To perform geocoding (converting an address to coordinates), use the `geocode` method:

```typescript
import { IonGeocoder } from '@oniq/capacitor-plugin-geocoder';

const address = '1600 Amphitheatre Parkway, Mountain View, CA';
const result = await IonGeocoder.geocode({ address });

console.log(result.latitude, result.longitude);
```

The `geocode` method returns an object with the latitude and longitude properties.

### Reverse Geocoding

To perform reverse geocoding (converting coordinates to an address), use the `reverseGeocode` method:

```typescript
import { IonGeocoder } from '@oniq/capacitor-plugin-geocoder';

const latitude = 37.422;
const longitude = -122.084;
const result = await IonGeocoder.reverseGeocode({ latitude, longitude });

console.log(result.address);
```

The `reverseGeocode` method returns an object with the address property.

## Conclusion

In this tutorial, we have learned how to use the @oniq/capacitor-plugin-geocoder package in a Capacitor project. We covered the installation and configuration steps, as well as how to perform geocoding and reverse geocoding operations. This package can be very useful for adding location-based features to your Capacitor app.