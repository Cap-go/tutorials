# Ionic Capacitor HyperTrack SDK

[![GitHub](https://img.shields.io/github/license/hypertrack/sdk-ionic-capacitor.svg?color=orange)](./LICENSE)
[![npm](https://img.shields.io/npm/v/hypertrack-sdk-ionic-capacitor.svg)](https://www.npmjs.com/package/hypertrack-sdk-ionic-capacitor)
[![iOS SDK](https://img.shields.io/badge/iOS%20SDK-5.11.1-brightgreen.svg)](https://github.com/hypertrack/sdk-ios)
[![Android SDK](https://img.shields.io/badge/Android%20SDK-7.11.2-brightgreen.svg)](https://github.com/hypertrack/sdk-android)

[HyperTrack](https://www.hypertrack.com) lets you add live location tracking to your mobile app. Live location is made available along with ongoing activity, tracking controls and tracking outage with reasons.

Ionic Capacitor HyperTrack SDK is a wrapper around native iOS and Android SDKs that allows to integrate HyperTrack into Ionic Capacitor apps.

For information about how to get started with Ionic Capacitor HyperTrack SDK, please check this [Guide](https://www.hypertrack.com/docs/install-sdk-ionic-capacitor).

## Installation

`npm install hypertrack-sdk-ionic-capacitor`

### Android

In order to use this plugin, please add HyperTrack repository in `android/build.gradle`:

```
allprojects {
    repositories {
        google()
        jcenter()
        maven {
            name 'hypertrack'
            url  'https://s3-us-west-2.amazonaws.com/m2.hypertrack.com/'
        }
    }
}
```

## Sample code

[Quickstart React Native app](https://github.com/hypertrack/quickstart-ionic-capacitor)

## Wrapper API Documentation

[Wrapper API Documentation](https://hypertrack.github.io/sdk-ionic-capacitor/)

## Requirements

### iOS

- iOS version 13.0+

## Contributing

If you want to contribute check [CONTRIBUTING.md](CONTRIBUTING.md)
