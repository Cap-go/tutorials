---
title: "Using capacitor-custom-google-maps package"
description: "A tutorial on how to use the capacitor-custom-google-maps package"
created_at: "2021-09-13"
published: true
slug: capacitor-custom-google-maps
---

# Using capacitor-custom-google-maps package

This tutorial will guide you through the steps to use the capacitor-custom-google-maps package in your Ionic Capacitor project.

## Installation

First, install the capacitor-custom-google-maps package by running the following command:

```shell
npm install capacitor-custom-google-maps
```

## Setup

Next, you need to configure the package. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "CustomGoogleMaps": {
      "APIKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual Google Maps API key.

## Importing the Plugin

Import the `CustomGoogleMaps` plugin in your project:

```typescript
import { Plugins } from '@capacitor/core';

const { CustomGoogleMaps } = Plugins;
```

## Displaying the Map

To display the map in your application, add the following HTML code:

```html
<capacitor-custom-google-maps id="map"></capacitor-custom-google-maps>
```

Make sure to assign an `id` to the `capacitor-custom-google-maps` element for later reference.

## Creating a Map Instance

To create a map instance, use the `createMap` method from the `CustomGoogleMaps` plugin:

```typescript
const mapElement = document.getElementById('map');

const mapOptions = {
  camera: {
    target: {
      latitude: 37.7749,
      longitude: -122.4194
    },
    zoom: 12
  }
};

const mapInstance = await CustomGoogleMaps.createMap({
  element: mapElement,
  options: mapOptions
});
```

Replace the coordinates in `target` with the desired initial location of the map and adjust the zoom level as needed.

## Adding a Marker

You can add markers to the map using the `addMarker` method. Here's an example:

```typescript
const markerOptions = {
  position: {
    latitude: 37.7749,
    longitude: -122.4194
  },
  title: "San Francisco"
};

const marker = await mapInstance.addMarker(markerOptions);
```

Replace the coordinates in `position` with the desired location of the marker and provide a title for the marker.

## Conclusion

In this tutorial, you've learned how to install and use the capacitor-custom-google-maps package in your Ionic Capacitor project. You've seen how to display a map, create a map instance, and add markers to the map. With this knowledge, you can now integrate custom Google Maps functionality into your Ionic apps.

Remember to refer to the package documentation for more advanced usage and additional features.

Happy mapping!