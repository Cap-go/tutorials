---
"title": "Using Capacitor Background Geolocation Plugin",
"description": "A markdown tutorial on how to use the @transistorsoft/capacitor-background-geolocation package in a Capacitor project.",
"created_at": "2023-10-22",
"published": true,
"slug": "capacitor-background-geolocation.git"
---

## Introduction

This tutorial will guide you through the process of integrating and using the `@transistorsoft/capacitor-background-geolocation` package in a Capacitor project.

### Installing the Plugin

To install the plugin with `yarn`, run the following commands:
```bash
$ yarn add @transistorsoft/capacitor-background-geolocation
$ yarn add @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

Or, if you prefer using `npm`, execute the following commands:
```console
$ npm install @transistorsoft/capacitor-background-geolocation --save
$ npm install @transistorsoft/capacitor-background-fetch --save
$ npx cap sync
```

### Setup Guides

Before using the plugin, make sure you have completed the required setup for iOS and Android. You can find the setup guides in the documentation.

### Configure your License

1. Login to the Customer Dashboard to generate an application key.
2. Add your license key to the `android/app/src/main/AndroidManifest.xml` file as follows:
   
```xml
<meta-data android:name="com.transistorsoft.locationmanager.license" android:value="YOUR_LICENCE_KEY_HERE" />
```

### Using the Plugin

Import the `BackgroundGeolocation` from the package in your JavaScript file:
```javascript
import BackgroundGeolocation from "@transistorsoft/capacitor-background-geolocation";
```

### Example

Follow these steps to use the `BackgroundGeolocation` plugin:
1. Wire up event-listeners.
2. Call the `#ready` method of the plugin.
3. Start the plugin with the `#start` method.

> Note: Do not execute any API method requiring location services until the `#ready` callback has resolved.

```javascript
// This will not work as .ready() has not resolved yet
BackgroundGeolocation.getCurrentPosition(options);
BackgroundGeolocation.start();

// Make sure .ready() has resolved before accessing location services
BackgroundGeolocation.ready(config).then((state) => {
  BackgroundGeolocation.getCurrentPosition(options);
  BackgroundGeolocation.start();  
});
```

By following these steps, you can successfully use the `@transistorsoft/capacitor-background-geolocation` package in your Capacitor project.