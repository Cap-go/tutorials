```markdown
---
title: Using Capacitor Google Maps Plugin
description: A guide on how to use the Capacitor Google Maps Plugin to add maps in your Ionic application using Capacitor.
created_at: 2022-01-14
published: true
slug: capacitor-google-maps
---

# Using Capacitor Google Maps Plugin

The Google Maps Capacitor plugin ships with a web component that must be used to render the map in your application, enabling the embedding of the native view effectively on iOS. This tutorial will guide you through the process of integrating Google Maps into your Ionic application.

## Setting Up

1. Install the Capacitor Google Maps package by running the following command:

   ```bash
   npm install @capacitor/google-maps
   ```

2. Configure the Angular module to support custom web components:

   ```typescript
   import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
   
   @NgModule({
     schemas: [CUSTOM_ELEMENTS_SCHEMA]
   })
   ```

## Adding the Map Component

Include the capacitor-google-map component in your HTML and assign it an ID for easy reference:

```html
<capacitor-google-map id="map"></capacitor-google-map>
```

Style the map element to fit within your layout:

```css
capacitor-google-map {
  display: inline-block;
  width: 275px;
  height: 400px;
}
```

## Creating the Map

Create a map reference by calling the GoogleMap create method:

```typescript
import { GoogleMap } from '@capacitor/google-maps'

const apiKey = 'YOUR_API_KEY_HERE'

const mapRef = document.getElementById('map')

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
})
```

## Interacting with the Map

You can interact with the map instance in various ways, including adding markers. Here's an example:

```typescript
const newMap = await GoogleMap.create({...});

// Add a marker to the map
const markerId = await newMap.addMarker({
    coordinate: {
        lat: 33.6,
        lng: -117.9
    }
});
```

By following these steps, you can successfully integrate Google Maps into your Ionic application using the Capacitor Google Maps plugin.
```
