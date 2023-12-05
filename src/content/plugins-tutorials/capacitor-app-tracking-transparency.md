---
title: "Using the capacitor-app-tracking-transparency package"
description: "A tutorial on how to use the capacitor-app-tracking-transparency package"
created_at: "2021-08-10"
published: true
slug: "capacitor-app-tracking-transparency"
---

# Using the capacitor-app-tracking-transparency package

In this tutorial, we will learn how to use the capacitor-app-tracking-transparency package to handle App Tracking Transparency (ATT) in your Capacitor app.

## Introduction

The capacitor-app-tracking-transparency package provides a simple way to handle the App Tracking Transparency framework introduced in iOS 14.5. This framework requires apps to get explicit user permission before tracking their data for personalized advertising.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed in your project
- Xcode version 12.5 or above
- iOS 14.5 or above installed on your device or simulator

## Installation

To install the capacitor-app-tracking-transparency package, run the following command:

```bash
npm install capacitor-app-tracking-transparency
```

## Usage

### 1. Import the package

Import the `TrackingTransparency` module from the `capacitor-app-tracking-transparency` package in your JavaScript file:

```javascript
import { TrackingTransparency } from 'capacitor-app-tracking-transparency';
```

### 2. Request tracking authorization

To request tracking authorization from the user, call the `TrackingTransparency.requestPermission` method. This method returns a promise that resolves with the user's authorization status:

```javascript
async function requestAuthorization() {
  const status = await TrackingTransparency.requestPermission();
  console.log('Authorization status:', status);
}
```

### 3. Handle authorization status

You can handle the user's authorization status by checking the value returned by the `requestPermission` method. The possible values are:

- `TRACKING_AUTHORIZATION_STATUS_NOT_DETERMINED`
- `TRACKING_AUTHORIZATION_STATUS_RESTRICTED`
- `TRACKING_AUTHORIZATION_STATUS_DENIED`
- `TRACKING_AUTHORIZATION_STATUS_AUTHORIZED`

Here's an example of handling the authorization status:

```javascript
async function handleAuthorizationStatus() {
  const status = await TrackingTransparency.requestPermission();

  switch (status) {
    case 'TRACKING_AUTHORIZATION_STATUS_NOT_DETERMINED':
      // User has not yet made a choice
      break;

    case 'TRACKING_AUTHORIZATION_STATUS_RESTRICTED':
      // User is restricted from granting tracking authorization
      break;

    case 'TRACKING_AUTHORIZATION_STATUS_DENIED':
      // User has denied tracking authorization
      break;

    case 'TRACKING_AUTHORIZATION_STATUS_AUTHORIZED':
      // User has authorized tracking
      break;
  }
}
```

## Conclusion

In this tutorial, we learned how to use the capacitor-app-tracking-transparency package to handle App Tracking Transparency in your Capacitor app. You can now request the user's permission for tracking and handle the authorization status accordingly.

Remember to test your app on a device or simulator running iOS 14.5 or above to ensure the proper functionality of the App Tracking Transparency framework.