---
title: Using Capacitor Geolocation Package
description: >-
  Learn how to use the Capacitor Geolocation package to add location tracking
  functionality to your Capacitor app.
created_at: '2023-09-15'
published: true
slug: capacitor-geolocation
locale: en
---

## Installing the Plugin

Capacitor Geolocation allows you to easily access the device's geolocation data. Here's how you can install the plugin in your Capacitor project.

### With `yarn`

```bash
$ yarn add @capacitor/geolocation
$ npx cap sync
```

### With `npm`
```console
$ npm install @capacitor/geolocation
$ npx cap sync
```

## Setup

### iOS
No additional setup required.

### Android
No additional setup required.

## Using the Plugin

To use the Geolocation API in your project, import it as follows:

```javascript
import { Geolocation } from '@capacitor/geolocation';
```

### Getting the Current Position

You can easily get the current position using the `getCurrentPosition` method:

```javascript
const position = await Geolocation.getCurrentPosition();
console.log('Current position:', position);
```

### Watching Position Changes

You can also watch for changes in the device's position using the `watchPosition` method:

```javascript
const watchId = Geolocation.watchPosition({}, (position, err) => {
  if (err) {
    console.error('Geolocation error:', err);
    return;
  }
  
  console.log('Position changed:', position);
});
```

## Handling Errors

It's important to properly handle errors when using the Geolocation plugin. Here's an example of how you can catch and handle errors:

```javascript
try {
  const position = await Geolocation.getCurrentPosition();
  console.log('Current position:', position);
} catch (error) {
  console.error('Error getting position:', error);
}
```

With these steps, you can easily integrate the Capacitor Geolocation package into your project and start leveraging geolocation data in your app.
