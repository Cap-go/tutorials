# Using `point-sdk-capacitor` Package

## Introduction

In this tutorial, we will learn how to use the `point-sdk-capacitor` package to integrate Point SDK functionality into your Capacitor application.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js and npm
- Capacitor CLI


## Step 1: Install `point-sdk-capacitor`

First, let's install the `point-sdk-capacitor` package in your Capacitor project. Open your terminal and navigate to your project directory. Then, run the following command:

```bash
npm install point-sdk-capacitor
```

## Step 2: Configure `point-sdk-capacitor`

Next, we need to configure the `point-sdk-capacitor` package in your project. Open your project's `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "PointSDK": {
      "appId": "YOUR_APP_ID",
      "appSecret": "YOUR_APP_SECRET"
    }
  }
}
```

Replace `YOUR_APP_ID` and `YOUR_APP_SECRET` with your actual Point SDK App ID and App Secret.

## Step 3: Initialize Point SDK

Now, let's initialize Point SDK in your application. Create a new file called `point-sdk.js` and add the following code:

```javascript
import { Plugins } from '@capacitor/core';

const { PointSDK } = Plugins;

const initializePointSDK = async () => {
  try {
    await PointSDK.initialize();
    console.log('Point SDK initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Point SDK', error);
  }
};

initializePointSDK();
```

Make sure to import the necessary `Plugins` module from `@capacitor/core`.

## Step 4: Using Point SDK APIs

With Point SDK initialized, you can now start using its APIs in your application. Here's an example of querying nearby points of interest:

```javascript
import { Plugins } from '@capacitor/core';

const { PointSDK } = Plugins;

const queryNearbyPoints = async () => {
  try {
    const result = await PointSDK.queryNearbyPoints({
      latitude: 37.785834,
      longitude: -122.406417,
      radius: 500
    });
    console.log('Nearby points:', result.points);
  } catch (error) {
    console.error('Failed to query nearby points', error);
  }
};

queryNearbyPoints();
```

Replace the latitude, longitude, and radius parameters with your desired values.

## Conclusion

In this tutorial, we learned how to integrate Point SDK functionality into a Capacitor application using the `point-sdk-capacitor` package. We covered the installation, configuration, initialization, and usage of Point SDK APIs.

Now you can leverage the power of Point SDK in your Capacitor app!

---
title: "Using point-sdk-capacitor Package"
description: "Learn how to integrate Point SDK functionality into your Capacitor application using the point-sdk-capacitor package."
created_at: "2022-01-01"
published: true
slug: "point-sdk-capacitor"
---