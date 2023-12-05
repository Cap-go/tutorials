---
title: "Using Situm Capacitor Plugin Wayfinding"
description: "A tutorial on using the Situm Capacitor Plugin Wayfinding package to create indoor location applications."
created_at: "2021-09-28"
published: true
slug: situm-capacitor-plugin-wayfinding
---

# Using Situm Capacitor Plugin Wayfinding

The Situm Capacitor Plugin Wayfinding package provides a simple way to create indoor location applications. It is built on top of the Situm SDK and supports Android and iOS platforms. In this tutorial, we will go through the steps to configure and use the Situm Capacitor Plugin Wayfinding in your project.

## Prerequisites

Before we begin, make sure you have the following:

1. Capacitor installed globally:
   ```bash
   npm install -g @capacitor/core @capacitor/cli
   ```

2. Your Capacitor project set up. If not, you can refer to the [official Capacitor documentation](https://capacitorjs.com/docs/getting-started) for more information.

## Installation

To install the `situm-capacitor-plugin-wayfinding` package, add the following line to your `package.json` file:

```json
"dependencies": {
  "situm-capacitor-plugin-wayfinding": "latest"
}
```

Then run the following command to install the package and sync your project with Capacitor:

```bash
npm install && npx cap sync
```

## Configuration

1. Add the HTMLElement for the Situm Wayfinding Module in your project's HTML file:

   ```html
   <div id="situm-map"></div>
   ```

   Note that the size of this `div` will be the size of the native module, so make sure it has a non-zero size.

2. Set the background of the parent HTML elements to transparent to ensure the native map is drawn behind your HTML:

   ```css
   ion-content {
     --background: none;
   }
   ```

3. In your project's Typescript layer, initialize the module with the desired settings:

   ```typescript
   const librarySettings = {
     user: 'YOUR_SITUM_USER',
     apiKey: 'YOUR_SITUM_APIKEY',
     iosGoogleMapsApiKey: 'YOUR_IOS_GOOGLE_MAPS_APIKEY',
     buildingId: 'YOUR_BUILDING_ID',
     dashboardUrl: 'https://dashboard.situm.com',
     hasSearchView: true,
     searchViewPlaceholder: 'Capacitor WYF',
     useDashboardTheme: false,
     captureTouchEvents: true,
     useRemoteConfig: false,
   };

   await SitumWayfinding.load(element, librarySettings);
   ```

   Make sure to replace the placeholder values (`YOUR_SITUM_USER`, `YOUR_SITUM_APIKEY`, etc.) with your own credentials and configuration.

## Frameworks Navigation

If you are integrating the Situm Capacitor Plugin Wayfinding in a framework like Angular, React, or Vue, where the page with the map may be destroyed and recreated (e.g., after navigating), you need to call `load(HTMLElement element, ...)` again to inform the plugin of the new map div.

For example, if you are using Ionic's lifecycle callbacks, you can call `load` every time the `ionViewDidEnter` event is triggered:

```typescript
ionViewDidEnter() {
  SitumWayfinding.load(element, librarySettings);
}
```

## Conclusion

In this tutorial, we have seen how to use the Situm Capacitor Plugin Wayfinding package to create indoor location applications. We covered the installation and configuration steps, as well as how to integrate the plugin in different frameworks. Now you can leverage the power of the Situm SDK to build engaging indoor navigation experiences for your users.