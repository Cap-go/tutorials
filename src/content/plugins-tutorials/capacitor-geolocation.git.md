---
"title": "Using the Capacitor Geolocation Package",
"description": "A markdown tutorial demonstrating how to use the @capacitor/geolocation package for location services in Capacitor applications.",
"created_at": "2022-01-23",
"published": true,
"slug": "capacitor-geolocation"
---

# Using the Capacitor Geolocation Package

In this tutorial, we will explore how to utilize the `@capacitor/geolocation` package to integrate location-based services in Capacitor applications.

## Installation

To start using the `@capacitor/geolocation` package, follow these steps:

Using npm:

```bash
npm install capacitor-geolocation
```

Sync native files:

```bash
npx cap sync
```

## Usage with TypeScript

### Import the plugin and types

```typescript
import 'capacitor-geolocation';
import { Plugins } from '@capacitor/core';
const { BerialGeolocation } = Plugins;
```

### Adding Listeners for Location Updates

```typescript
const id =  await BerialGeolocation.watchPosition((data) => {
        const coords = data.coords;
        console.log("berial: lat: ", coords.latitude + ", lon: ", coords.longitude);
      });

await BerialGeolocation.clearWatch(id);
```

## Android Setup

### Notice

Make sure to include the `capacitor-geolocation` plugin in your main `Activity`:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  add(BerialGeolocation.class);
}});
```

Check that the `AndroidManifest.xml` file contains the necessary permissions for `FOREGROUND_SERVICE` and `ACCESS_FINE_LOCATION`.

## Conclusion

You have now learned how to implement location-based services in your Capacitor applications using the `@capacitor/geolocation` package.