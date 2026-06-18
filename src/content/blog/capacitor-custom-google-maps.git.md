```markdown
---
"title": "Using Capacitor Custom Google Maps Package",
"description": "This tutorial provides a step-by-step guide on using the Capacitor Custom Google Maps package to integrate and customize Google Maps in your application.",
"created_at": "2022-01-02",
"published": true,
"slug": "capacitor-custom-google-maps.git"
---

# Using Capacitor Custom Google Maps Package

The Capacitor Custom Google Maps Package allows developers to integrate and customize Google Maps in their applications. In this tutorial, you will learn how to set up and use this package effectively.

**Step 1:** Install the Capacitor Custom Google Maps Package by running the following command in your project directory:

```bash
npm install capacitor-custom-google-maps
```

**Step 2:** Include the custom Google Map component in your HTML file. Assign an ID to the element for easy reference.

```html
<capacitor-google-map id="map"></capacitor-google-map>
```

**Step 3:** Style the Google Map element to fit within your layout structure. Set explicit width and height values as needed.

```css
capacitor-google-map {
    display: inline-block;
    width: 275px;
    height: 400px;
}
```

**Step 4:** Create a map reference by importing the GoogleMap class from the Capacitor plugin and calling the create method with the required parameters.

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

**Step 5:** Interact with your map using the returned reference. For example, you can add a marker to the map.

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

By following these steps, you can effectively integrate and customize Google Maps in your Capacitor application using the Capacitor Custom Google Maps package. Happy mapping!
```