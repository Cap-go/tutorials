---
title: "Using the gps-location Package"
description: "This tutorial will guide you through the process of using the gps-location package in your Ionic Capacitor app to get GPS location information."
created_at: "2021-10-28"
published: true
slug: gps-location
---

# Using the gps-location Package

The `gps-location` package is a helpful tool for obtaining GPS location information in an Ionic Capacitor app. This tutorial will walk you through the steps of installing and using this package to get the GPS location of a device.

## Installation

To begin, you'll need to install the `gps-location` package in your project. Open your terminal and run the following command:

```bash
npm install gps-location
npx cap sync
```

### Android Configuration

Next, you'll need to add some Android-specific configuration. Open the `AndroidManifest.xml` file in your project and add the following lines within the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

You should also add the `xmlns:tools="http://schemas.android.com/tools"` attribute to the `<manifest>` tag.

### iOS Configuration

For iOS, you'll need to add some keys to the `Info.plist` file in your Xcode project. Open the file and add the following lines:

```xml
<key>NSLocationAlwaysUsageDescription</key>
<string>Description</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Description</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Description</string>
```

You will also need to enable "Location update" from the "Signing & Capabilities" section in Xcode.

## Usage

Now that the package is installed and configured, you can start using it to get GPS location information. Here's an example of how to use the `gps-location` package in your code:

```javascript
import { getCurrentLocation } from 'gps-location';

const getLocation = async () => {
  try {
    const location = await getCurrentLocation();
    console.log('Latitude:', location.latitude);
    console.log('Longitude:', location.longitude);
  } catch (error) {
    console.error('Error:', error);
  }
};

getLocation();
```

In this example, we import the `getCurrentLocation` function from the `gps-location` package. We then call this function to get the current GPS location. The latitude and longitude values are stored in the `location` variable, and we log them to the console.

## Conclusion

In this tutorial, you learned how to install and use the `gps-location` package in your Ionic Capacitor app. You can now retrieve GPS location information with ease. Experiment with different functions and options provided by the package to further enhance your app's functionality.