---
"title": "Using Capacitor Google Maps Package Tutorial",
"description": "A detailed guide on integrating and utilizing the @capacitor/google-maps package within your Capacitor project.",
"created_at": "2022-01-05",
"published": true,
"slug": "capacitor-google-maps.git"
---

# Using Capacitor Google Maps Package

In this tutorial, we will walk through the process of integrating and utilizing the `@capacitor/google-maps` package to add Google Maps functionality to your Capacitor project.

## Installation

To begin, install the `@capacitor/google-maps` package by running the following command:

```bash
npm install @capacitor/google-maps
npx cap sync
```

## Setting up API Keys

Before using the Google Maps SDK on any platform, you need to obtain API keys associated with an account with billing enabled from the [Google Cloud Console](https://console.cloud.google.com). These API keys are required for Android, iOS, and JavaScript platforms. Refer to the [Google Maps documentation](https://developers.google.com/maps/documentation/android-sdk/overview) for detailed information on obtaining API keys for each platform.

### iOS Permissions

For iOS, if you intend to show the user's current location, ensure you specify the privacy descriptions in `Info.plist`. 

- `NSLocationWhenInUseUsageDescription` (`Privacy - Location When In Use Usage Description`)

Refer to the [iOS Guide](https://capacitorjs.com/docs/ios) for details on setting iOS permissions in Xcode.

### Android Configuration

In Android projects, include your API key in the `AndroidManifest.xml` file and add the required location permissions as shown below:

```xml
<meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY_HERE"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

## Usage

1. **HTML Setup:**
   
   Include the following web component in your HTML file and assign it an ID:

   ```html
   <capacitor-google-map id="map"></capacitor-google-map>
   ```

2. **Initializing the Map:**

   Use the `GoogleMap` class to create and configure the map:

   ```typescript
   import { GoogleMap } from '@capacitor/google-maps'

   const apiKey = 'YOUR_API_KEY_HERE'
   const mapRef = document.getElementById('map')

   const newMap = await GoogleMap.create({
     id: 'my-map',
     element: mapRef,
     apiKey: apiKey,
     config: {
       center: { lat: 33.6, lng: -117.9 },
       zoom: 8,
     },
   })
   ```

3. **Interacting with the Map:**

   After creating the map, you can add markers and perform various interactions:

   ```typescript
   const newMap = await GoogleMap.create({...});

   // Add a marker to the map
   const markerId = await newMap.addMarker({
       coordinate: { lat: 33.6, lng: -117.9 }
   });
   ```

By following these steps, you can successfully integrate and utilize Google Maps in your Capacitor project using the `@capacitor/google-maps` package.