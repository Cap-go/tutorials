```md
---
"title": "Using capacitor-custom-google-maps Package",
"description": "This markdown tutorial covers the steps to utilize the capacitor-custom-google-maps package in your application. It includes registering the web component, styling the map element, creating map references, and interacting with the map.",
"created_at": "2022-02-24",
"published": true,
"slug": "capacitor-custom-google-maps.git"
---

## Using the Google Maps Capacitor Plugin

The Google Maps Capacitor plugin ships with a web component that must be used to render the map in your application. This enables us to embed the native view more effectively on iOS. The plugin will automatically register this web component for use in your application.

### Register the Web Component

For Angular users, resolve the error warning by modifying the module that declares your component to allow for custom web components.

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

Include the component in your HTML and assign it an ID.

```html
<capacitor-google-map id="map"></capacitor-google-map>
```

### Styling the Map Element

The Google Map element itself comes unstyled, so you should style it to fit within the layout of your page structure.

```css
capacitor-google-map {
  display: inline-block;
  width: 275px;
  height: 400px;
}
```

### Creating Map References

To create the map reference, import the GoogleMap class and call the create method with the required parameters.

```typescript
import { GoogleMap } from '@capacitor/google-maps';

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

### Interacting with the Map

Using the returned reference to the map, you can easily interact with your map.

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

This tutorial covers the basic steps to get started with the capacitor-custom-google-maps package in your application. Feel free to further explore the documentation for more advanced features.
```