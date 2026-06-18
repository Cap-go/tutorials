```md
---
"title": "Using @capacitor/google-maps Package Tutorial",
"description": "A tutorial on how to use the @capacitor/google-maps package in a Capacitor project",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-google-maps.git"
---

# @capacitor/google-maps

Google maps on Capacitor

## Install

```bash
npm install @capacitor/google-maps
npx cap sync
```

## API Keys

To use the Google Maps SDK on any platform, API keys associated with an account _with billing enabled_ are required. These can be obtained from the [Google Cloud Console](https://console.cloud.google.com). This is required for all three platforms, Android, iOS, and Javascript. Additional information about obtaining these API keys can be found in the [Google Maps documentation](https://developers.google.com/maps/documentation/android-sdk/overview) for each platform.

## iOS

The Google Maps SDK supports the use of showing the users current location via `enableCurrentLocation(bool)`. To use this, Apple requires privacy descriptions to be specified in `Info.plist`:

- `NSLocationWhenInUseUsageDescription` (`Privacy - Location When In Use Usage Description`)

Read about [Configuring `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) in the [iOS Guide](https://capacitorjs.com/docs/ios) for more information on setting iOS permissions in Xcode.

### Minimum Deployment Target

Version 6 of this plugin has a minimum deployment target of iOS 14.0. You will need to edit `ios/App/Podfile` and change the following line from 13.0 to 14.0:
```
platform :ios, '14.0'
```

Additionally, you will need to open your project in XCode and in the `Build Settings` tab for your `Project` and for each `Target` set the `iOS Deployment Target` to `iOS 14.0` or higher.

### Typescript Configuration

Your project will also need have `skipLibCheck` set to `true` in `tsconfig.json`.

### Migrating from older versions
> The main Google Maps SDK now supports running on simulators on Apple Silicon Macs, but make sure you have the latest version of [Google-Maps-iOS-Utils](https://github.com/googlemaps/google-maps-ios-utils) installed.

If you added the previous workaround for getting the unreleased version, you can delete it now by removing this line from `ios/App/Podfile`:

```
pod 'Google-Maps-iOS-Utils', :git => 'https://github.com/googlemaps/google-maps-ios-utils.git', :commit => '637954e5bcb2a879c11a6f2cead153a6bad5339f'
```

Then run `pod update Google-Maps-iOS-Utils` from the `ios/App/` folder:

```
cd ios/App
pod update Google-Maps-iOS-Utils
```

## Android

The Google Maps SDK for Android requires you to add your API key to the AndroidManifest.xml file in your project.

```xml
<meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY_HERE"/>
```

To use certain location features, the SDK requires the following permissions to also be added to your AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### Variables

This plugin will use the following project variables (defined in your app's `variables.gradle` file):
```