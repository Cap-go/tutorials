```markdown
---
title: "Using Capacitor Geolocation Package"
description: "A tutorial on how to use the @capacitor/geolocation package to integrate geolocation features into your Capacitor app."
created_at: "2022-10-12"
published: true
slug: capacitor-geolocation.git
---

# Using the @capacitor/geolocation Package

This tutorial will guide you through the process of integrating geolocation features into your Capacitor app using the @capacitor/geolocation package.

## Installation

To install the @capacitor/geolocation package, run the following command:

### With `yarn`

```bash
$ yarn add @capacitor/geolocation
```

### With `npm`

```bash
$ npm install @capacitor/geolocation
```

## Configuration

After installation, you need to configure the geolocation package in your app. Make sure to follow the necessary setup steps for both iOS and Android platforms.

### iOS Setup
- [iOS Configuration Guide](link-to-ios-setup)

### Android Setup
- [Android Configuration Guide](link-to-android-setup)

## Usage

Import the geolocation package in your app to start using its functionalities:

```javascript
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
```

### Get Current Position

You can use the `getCurrentPosition` method to retrieve the current geolocation of the device.

```javascript
Geolocation.getCurrentPosition().then((position) => {
  console.log('Current Position:', position.coords);
}).catch((error) => {
  console.error('Error getting current position', error);
});
```

### Watch Position Changes

To monitor the continuous changes in the device's location, you can use the `watchPosition` method.

```javascript
const watchId = Geolocation.watchPosition({}, (position, err) => {
  if (err) {
    console.error('Unable to watch position:', err);
  } else {
    console.log('Position changed:', position.coords);
  }
});
```

## Conclusion

By following this tutorial, you have learned how to integrate geolocation features into your Capacitor app using the @capacitor/geolocation package. Experiment with the methods provided to enhance the location tracking capabilities of your app.

Happy coding!
```
```