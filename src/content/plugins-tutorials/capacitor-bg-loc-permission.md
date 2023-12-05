## How to Use capacitor-bg-loc-permission Package

In this tutorial, we will learn how to use the `capacitor-bg-loc-permission` package to manage background location permissions in a Capacitor app.

### Step 1: Installation

To begin, we need to install the `capacitor-bg-loc-permission` package. Open your terminal and run the following command:

```bash
npm install capacitor-bg-loc-permission
```

### Step 2: Configuration

After installing the package, we need to configure it in our Capacitor project. Open the `capacitor.config.json` file and add the following entry to the `plugins` section:

```json
{
  "name": "capacitor-bg-loc-permission",
  "web": {
    "config": {
      "permissions": [
        "geolocation",
        "background-location"
      ]
    }
  }
}
```

This will ensure that the necessary permissions are requested from the user when using background location features.

### Step 3: Requesting Permission

To request the background location permission from the user, we can use the `Permissions.requestPermission` method provided by Capacitor. Add the following code to the relevant part of your app:

```javascript
import { Permissions } from 'capacitor-core';

async function requestLocationPermission() {
  const { state } = await Permissions.requestPermission('background-location');
  
  if (state === 'granted') {
    console.log('Background location permission granted');
  } else {
    console.log('Background location permission denied');
  }
}

// Call the function when needed
requestLocationPermission();
```

### Step 4: Checking Permission Status

If you need to check the current status of the background location permission, you can use the `Permissions.queryPermission` method. Here's an example:

```javascript
import { Permissions } from 'capacitor-core';

async function checkLocationPermissionStatus() {
  const { state } = await Permissions.queryPermission('background-location');
  
  if (state === 'granted') {
    console.log('Background location permission granted');
  } else if (state === 'denied') {
    console.log('Background location permission denied');
  } else {
    console.log('Background location permission not requested');
  }
}

// Call the function when needed
checkLocationPermissionStatus();
```

And that's it! You now know how to use the `capacitor-bg-loc-permission` package to manage background location permissions in your Capacitor app.

## Frontmatter

---
title: "Using capacitor-bg-loc-permission Package"
description: "Learn how to use the capacitor-bg-loc-permission package to manage background location permissions in a Capacitor app."
created_at: "2022-06-30"
published: true
slug: "capacitor-bg-loc-permission"
---

This tutorial provides a step-by-step guide on how to use the `capacitor-bg-loc-permission` package in a Capacitor app to manage background location permissions.