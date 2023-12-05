---
title: "Using @capacitor-community/google-maps Package"
description: "A tutorial on how to use the @capacitor-community/google-maps package to integrate native Google Maps in your Capacitor project."
created_at: "2022-10-15"
published: true
slug: "google-maps"
---

# Using @capacitor-community/google-maps Package

In this tutorial, we will walk through the process of integrating native Google Maps into your Capacitor project using the `@capacitor-community/google-maps` package. This package leverages the Native SDKs for Google Maps, offering improved performance and offline caching capabilities.

## Prerequisites

Before we get started, make sure you have the following prerequisites in place:

1. Capacitor CLI installed globally.
2. An existing Capacitor project.
3. Google Maps API keys for both Android and iOS platforms.

## Installation

To install the `@capacitor-community/google-maps` package, run the following command in your project directory:

```bash
npm install @capacitor-community/google-maps
```

## Configuration

Next, we need to configure the plugin by setting up the API keys for Android and iOS. Update the `android` and `ios` sections in your project's `capacitor.config.json` file as follows:

```json
{
  "plugins": {
    "GoogleMaps": {
      "apiKey": {
        "android": "YOUR_ANDROID_API_KEY",
        "ios": "YOUR_IOS_API_KEY"
      }
    }
  }
}
```

Replace `YOUR_ANDROID_API_KEY` and `YOUR_IOS_API_KEY` with the respective API keys you obtained from the Google Cloud Console.

## Usage

### Adding Maps to your App

To add a map to your app, create a new page/component where you want to display the map. Import the `GoogleMaps` plugin and use the `create` method to create a new map instance:

```typescript
import { GoogleMaps } from '@capacitor-community/google-maps';

const map = GoogleMaps.create({
  container: document.getElementById('map'),
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12
});
```

In the above code, we create a new map instance and specify the `container` where the map will be rendered, the initial `center` coordinates, and the `zoom` level.

Make sure to update the `container` element's ID to match the ID of the HTML element where you want to render the map.

### Adding Markers

To add markers to the map, use the `addMarker` method:

```typescript
const marker = map.addMarker({
  position: { lat: 37.7749, lng: -122.4194 },
  title: 'San Francisco',
  snippet: 'A beautiful city'
});
```

In the above code, we add a marker to the map at the specified `position` coordinates and provide a `title` and `snippet` for the marker.

### Customizing the Map

The `create` method and `addMarker` method accept various options for customizing the map and markers. Refer to the [API reference](https://capacitor-community.github.io/google-maps/#/api) for a complete list of available options.

## Conclusion

In this tutorial, we explored how to use the `@capacitor-community/google-maps` package to integrate native Google Maps into a Capacitor project. We covered the installation process, configuration of API keys, and basic usage for adding maps and markers.

Feel free to explore the additional features and options provided by the package based on your project requirements. Happy mapping!

Check out the official documentation for more information: [https://capacitor-community.github.io/google-maps/](https://capacitor-community.github.io/google-maps/)