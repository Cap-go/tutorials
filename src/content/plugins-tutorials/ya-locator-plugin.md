---
title: "Using the ya-locator-plugin Package"
description: "A tutorial on how to use the ya-locator-plugin package to determine the location of a device without using GPS."
created_at: "2022-10-03"
published: true
slug: "ya-locator-plugin"
---

# Using the ya-locator-plugin Package

The ya-locator-plugin package is a plugin for Capacitor that allows you to determine the location of a device without using GPS. It utilizes cellular and Wi-Fi networks through the Yandex Locator service. This tutorial will guide you through the process of installing and using the ya-locator-plugin package in your Capacitor project.

## Installation

To install the ya-locator-plugin package, run the following command:

```bash
npm install ya-locator-plugin
npx cap sync
```

## API

### requestCoordinates()

The `requestCoordinates` method is used to request the coordinates of the device from the Yandex Locator service. It accepts an options object as a parameter with the following properties:

- `version` (string): The version of the Yandex Locator API to use.
- `url` (string): The URL of the Yandex Locator API.
- `api_key` (string): Your Yandex Locator API key.

Here's an example of how to use the `requestCoordinates` method:

```javascript
import { Plugins } from '@capacitor/core';
const { yaLocatorPlugin } = Plugins;

const options = {
  version: '2.1',
  url: 'https://api.example.com',
  api_key: 'your-api-key'
};

yaLocatorPlugin.requestCoordinates(options)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Listener

The ya-locator-plugin package emits an event called `"currentLocation"` when it receives the current coordinates of the mobile device. You can listen for this event and handle the data accordingly.

Here's an example of how to add a listener for the `"currentLocation"` event:

```javascript
import { Plugins } from '@capacitor/core';
const { yaLocatorPlugin } = Plugins;

yaLocatorPlugin.addListener('currentLocation', (data) => {
  console.log('currentLocation', data);
});
```

## Conclusion

In this tutorial, you learned how to install and use the ya-locator-plugin package in your Capacitor project. You learned how to request the coordinates of a device from the Yandex Locator service and how to listen for the `"currentLocation"` event to receive the current coordinates of the device. This package offers a convenient way to determine device location without relying on GPS.