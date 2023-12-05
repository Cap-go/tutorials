---
title: "Using the @andevsv/intent-gmaps Capacitor Plugin"
description: "A tutorial on how to use the @andevsv/intent-gmaps package in your Capacitor application to integrate Google Maps functionality."
created_at: "2022-10-20"
published: true
slug: "intent-gmaps-capacitor-plugin"
---

# Using the @andevsv/intent-gmaps Capacitor Plugin

## Introduction

The @andevsv/intent-gmaps Capacitor Plugin is a powerful tool for integrating Google Maps functionality into your Capacitor application. In this tutorial, we will guide you through the process of installing and using the plugin to add maps, markers, and other features to your app.

## Prerequisites

Before you begin, make sure you have the following:

- Capacitor installed in your project
- An Android device or emulator with Google Play Services

## Installation

To install the @andevsv/intent-gmaps Capacitor Plugin, follow these steps:

1. Open your project directory in a terminal.

2. Run the following command to install the plugin:

```bash
npm install @andevsv/intent-gmaps
```

3. Sync the Android project by running the following command:

```bash
npx cap sync android
```

## Usage

Once the plugin is installed, you can start using it in your Capacitor application.

### 1. Import the Plugin

Open the TypeScript file where you want to use the plugin, and import it as follows:

```typescript
import { IntentGmaps } from '@andevsv/intent-gmaps';
```

### 2. Initialize the Plugin

Before using any plugin methods, you need to initialize the plugin by calling the `initialize()` method. This method returns a promise that resolves once the plugin is ready to use.

```typescript
IntentGmaps.initialize().then(() => {
  console.log('Plugin initialized');
}).catch((error) => {
  console.error('Error initializing plugin: ', error);
});
```

### 3. Display a Map

To display a map in your application, you need to create a `<div>` element to hold the map and call the `showMap()` method.

HTML:
```html
<div id="map"></div>
```

TypeScript:
```typescript
const mapElement = document.getElementById('map');
IntentGmaps.showMap(mapElement);
```

### 4. Add a Marker

You can add markers to the map by calling the `addMarker()` method. This method requires a latitude and longitude value for the marker's position.

```typescript
const markerPosition = {
  latitude: 37.7749,
  longitude: -122.4194
};

IntentGmaps.addMarker(markerPosition);
```

### 5. Customize the Marker

You can customize the marker's appearance by passing additional options to the `addMarker()` method. For example, you can set a custom icon or title for the marker.

```typescript
const markerOptions = {
  position: markerPosition,
  icon: 'path/to/custom/icon.png',
  title: 'San Francisco'
};

IntentGmaps.addMarker(markerOptions);
```

### 6. Handle Marker Click Events

To handle click events on markers, you can listen for the `markerClick` event. The event returns the marker's position and any additional data associated with the marker.

```typescript
IntentGmaps.addListener('markerClick', (data) => {
  console.log('Marker clicked: ', data.position);
});
```

## Conclusion

In this tutorial, you learned how to integrate the @andevsv/intent-gmaps Capacitor Plugin into your application and use its features to display maps and add markers. You also learned how to customize markers and handle click events. Now you can leverage the power of Google Maps in your Capacitor app.

For more information and additional features, refer to the official documentation of the @andevsv/intent-gmaps Capacitor Plugin.

Happy mapping!