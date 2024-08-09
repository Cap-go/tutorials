Here is a markdown tutorial for using the `capacitor-map-link` package with a frontmatter section:

```markdown
---
"title": "Using capacitor-map-link Package",
"description": "A tutorial on integrating and utilizing the capacitor-map-link package in your Capacitor project.",
"created_at": "2022-09-28",
"published": true,
"slug": "capacitor-map-link"
---

# Using capacitor-map-link Package

This tutorial will guide you on how to integrate and utilize the `capacitor-map-link` package in your Capacitor project. 

## Installation

First, install the necessary dependencies for the `capacitor-map-link` package by running the following commands:

```bash
npm install capacitor-map-link @capacitor/action-sheet capacitor-linking
npx cap sync
```

## Show Location Function

To open a specific location using the `showLocation` function, use the following code snippet:
```typescript
import { CapMapLink } from 'capacitor-map-link';

CapMapLink.showLocation({
  latitude: 38.8976763,
  longitude: -77.0387185,
  sourceLatitude: -8.0870631,
  sourceLongitude: -34.8941619,
  title: 'The White House',
  googleForceLatLon: false,
  googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58',
  alwaysIncludeGoogle: true,
  dialogTitle: 'This is the dialog Title',
  dialogMessage: 'This is the amazing dialog Message',
  cancelText: 'This is the cancel button text',
  appsWhiteList: ['google-maps'],
  naverCallerName: 'com.example.myapp',
  appTitles: { 'google-maps': 'My custom Google Maps title' },
  app: 'uber',
  directionsMode: 'walk',
});
```

## Adding URL Schemes

Don't forget to add the required URL schemes to your `Info.plist` file in your iOS project for the app to properly handle the URL schemes.

Refer to the [MetaMap for Capacitor Usage Guide](https://github.com/matiasfic/metamap-capacitor-plugin/blob/main/docs/metaMap-capacitor.md) for more details on using the Capacitor plugin.

Happy mapping!
```

Please copy the above markdown content to a Markdown file in your project directory.