---
title: "Using background-location-update Package"
description: "A tutorial on how to use the background-location-update package for receiving location updates in the background."
created_at: "2022-10-30"
published: true
slug: "background-location-update"
---

# Using background-location-update Package

In this tutorial, we will learn how to use the `background-location-update` package for receiving location updates in the background. This package provides a simple way to track the user's location even when the app is not in the foreground.

## Installation

To install the `background-location-update` package, run the following command:

```
npm install background-location-update
```

Next, make sure to sync your Capacitor project to apply the changes:

```
npx cap sync
```

## Usage

To use the `background-location-update` package in your project, you need to import the necessary modules from the package:

```typescript
import { BackgroundLocation, Location } from 'background-location-update';
```

### iOS Setup

For iOS, you need to add the following keys to the `Info.plist` file in your Xcode project:

```xml
<dict>
  ...
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>We need to track your location</string>
  <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
  <string>We need to track your location while your device is locked.</string>
  <key>UIBackgroundModes</key>
  <array>
    <string>location</string>
  </array>
  ...
</dict>
```

### Android Setup

For Android, you need to configure the `AndroidManifest.xml` file as follows:

```xml
<manifest>
    <application>
        <service
            android:name="com.viewtrak.plugins.backgroundlocation.BackgroundLoctionService"
            android:enabled="true"
            android:exported="true"
            android:foregroundServiceType="location" />
    </application>

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-feature android:name="android.hardware.location.gps" />
</manifest>
```

You can also make specific configuration changes in the `strings.xml` file.

## Using the Package

Once the installation and setup are complete, you can start using the `background-location-update` package in your code.

### Adding a Watcher

To receive location updates, you need to add a watcher. The watcher is a function that will be called whenever a new location is available. It takes the location and error as parameters.

Here's an example of adding a watcher:

```typescript
import { addWatcher, Location } from 'background-location-update';

// Define the watcher options
const watcherOptions = {
  interval: 1000, // Update interval in milliseconds
  minimumDistance: 10, // Minimum distance in meters
};

// Define the watcher callback function
const watcherCallback = (location?: Location, error?: Error) => {
  if (location) {
    console.log('New location:', location);
    // Do something with the new location
  } else if (error) {
    console.error('Error:', error);
    // Handle the error
  }
};

// Add the watcher
const watcherId = addWatcher(watcherOptions, watcherCallback);
console.log('Watcher added. Watcher ID:', watcherId);
```

### Removing a Watcher

If you no longer need to receive location updates, you can remove the watcher using the `removeWatcher` function. This function takes the watcher ID as a parameter.

Here's an example of removing a watcher:

```typescript
import { removeWatcher } from 'background-location-update';

// Remove the watcher
removeWatcher(watcherId);
console.log('Watcher removed.');
```

### Opening Settings

You can open the settings screen for the app using the `openSettings` function. This function will navigate the user to the app's settings page where they can grant or revoke location permissions.

Here's an example of opening the settings:

```typescript
import { openSettings } from 'background-location-update';

// Open the settings
openSettings();
console.log('Settings opened.');
```

## Conclusion

In this tutorial, we learned how to use the `background-location-update` package to receive location updates in the background of a Capacitor app. We covered the installation, setup for iOS and Android, and how to add and remove a watcher. We also saw how to open the app's settings screen. Now you can track the user's location even when the app is not in the foreground.