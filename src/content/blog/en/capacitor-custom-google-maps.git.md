---
title: Using Capacitor Custom Google Maps Package
description: >-
  A detailed tutorial on how to integrate the Capacitor Custom Google Maps
  package into your application.
created_at: '2022-01-28'
published: true
slug: capacitor-custom-google-maps.git
locale: en
---

# Using Capacitor Custom Google Maps Package

The Capacitor Custom Google Maps package provides enhanced functionality for integrating Google Maps into your Capacitor application. This tutorial will guide you through the process of setting up and using this package effectively.

## Installation

To begin, install the `capacitor-custom-google-maps` package in your Capacitor project:

```bash
npm install capacitor-custom-google-maps
```

## Setting Up the Web Component

After installing the package, include the Google Maps web component in your HTML code with a unique ID assigned to it:

```html
<capacitor-custom-google-map id="map"></capacitor-custom-google-map>
```

Remember to style the map element to fit within your layout structure explicitly:

```css
capacitor-custom-google-map {
  display: inline-block;
  width: 275px;
  height: 400px;
}
```

## Creating the Google Map Reference

Next, create a map reference by importing the `GoogleMap` class and calling the `create` method with the necessary parameters, including your Google Maps API key:

```typescript
import { GoogleMap } from 'capacitor-custom-google-maps';

const apiKey = 'YOUR_API_KEY_HERE';
const mapRef = document.getElementById('map');

const newMap = await GoogleMap.create({
  id: 'my-map',
  element: mapRef,
  apiKey: apiKey,
  config: {
    center: {
      lat: 33.6,
      lng: -117.9,
    },
    zoom: 8,
  },
});
```

## Interacting with the Map

With the map reference created, you can interact with the map in various ways. For example, you can add a marker to the map using the `addMarker` method:

```typescript
const newMap = await GoogleMap.create({...});

const markerId = await newMap.addMarker({
    coordinate: {
        lat: 33.6,
        lng: -117.9
    }
});
```

By following these steps, you can effectively integrate the Capacitor Custom Google Maps package into your application and enhance the mapping experience for your users. Happy mapping!
```
