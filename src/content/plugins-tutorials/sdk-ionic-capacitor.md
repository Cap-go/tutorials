---
title: "Using the HyperTrack Ionic Capacitor SDK"
description: "Learn how to integrate the HyperTrack Ionic Capacitor SDK into your mobile app for live location tracking."
created_at: "2021-10-25"
published: true
slug: sdk-ionic-capacitor
---

# Using the HyperTrack Ionic Capacitor SDK

The HyperTrack Ionic Capacitor SDK allows you to easily add live location tracking to your mobile app. With live location tracking, you can provide real-time location updates, ongoing activity tracking, and control over tracking features.

In this tutorial, we will walk through the steps to integrate the HyperTrack Ionic Capacitor SDK into your Ionic Capacitor app.

## Installation

First, let's install the HyperTrack Ionic Capacitor SDK package using npm:

```bash
npm install hypertrack-sdk-ionic-capacitor
```

Next, we need to add the HyperTrack repository to the `android/build.gradle` file in your Ionic Capacitor project. Open the file and add the following code block inside the `allprojects` block:

```groovy
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

## Usage

Once the HyperTrack Ionic Capacitor SDK is installed, you can start using it in your Ionic Capacitor app. Import the HyperTrack module and initialize it with your API key.

```typescript
import { Plugins } from '@capacitor/core';

const { HyperTrack } = Plugins;

HyperTrack.setPublishableKey('YOUR_PUBLISHABLE_KEY');
```

Replace `YOUR_PUBLISHABLE_KEY` with your actual HyperTrack publishable key.

### Starting and stopping tracking

To start tracking the user's location, use the `HyperTrack.startTracking()` method:

```typescript
HyperTrack.startTracking();
```

To stop tracking, use the `HyperTrack.stopTracking()` method:

```typescript
HyperTrack.stopTracking();
```

### Getting the user's current location

To get the user's current location, use the `HyperTrack.getCurrentLocation()` method. This method returns a promise that resolves with the user's location information.

```typescript
const location = await HyperTrack.getCurrentLocation();
console.log(location);
```

### Handling tracking outage

The HyperTrack Ionic Capacitor SDK provides a way to handle tracking outages and get information about the reason for the outage. Use the `HyperTrack.getCurrentState()` method to get the current tracking state.

```typescript
const state = await HyperTrack.getCurrentState();
console.log(state);
```

### Listening for tracking updates

You can also listen for tracking updates by subscribing to the `onTrackingUpdate` event. Whenever there is a new tracking update, the subscribed callback function will be called with the updated tracking information.

```typescript
HyperTrack.addListener('onTrackingUpdate', (tracking) => {
  console.log(tracking);
});
```

## API Documentation

For more details on the available methods and options, refer to the [HyperTrack Ionic Capacitor SDK API Documentation](https://hypertrack.github.io/sdk-ionic-capacitor/).

## Conclusion

Congratulations! You have successfully integrated the HyperTrack Ionic Capacitor SDK into your mobile app. You can now track live location, monitor activity, and handle tracking outages.

Feel free to explore the [HyperTrack documentation](https://www.hypertrack.com/docs) for more advanced features and customizations.

Remember to check for the latest versions and updates of the HyperTrack Ionic Capacitor SDK from the [official repository](https://github.com/hypertrack/sdk-ionic-capacitor).

Happy coding!