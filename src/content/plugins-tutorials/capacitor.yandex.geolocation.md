---
title: "Using Yandex Locator with Capacitor"
description: "A tutorial on how to use the Yandex Locator package with Capacitor to determine the location of a device without using GPS."
created_at: "2021-12-09"
published: true
slug: capacitor.yandex.geolocation
---

# Using Yandex Locator with Capacitor

This tutorial will guide you through the process of using the Yandex Locator package with Capacitor to determine the location of a device without using GPS.

## Prerequisites

Before you begin, make sure you have the following:

- Capacitor installed in your project.
- Access to Yandex Locator API credentials (version, URL, and API key).

## Installation

To install the Yandex Locator package, run the following command:

```bash
npm install ya-locator-plugin
npx cap sync
```

## API

### requestCoordinates(options)

This method requests the current coordinates of the device using the Yandex Locator API.

#### Parameters

- `options` (object): An object containing the Yandex Locator API credentials.

#### Returns

- Promise<{ version: string; url: string; api_key: string; }>

### Example

```typescript
import { Plugins } from '@capacitor/core'

const { VerYaLocator } = Plugins

// Request coordinates
const requestData = async () => {
  try {
    const options = {
      version: '1',
      url: 'https://example.com',
      api_key: 'YOUR_API_KEY'
    }

    const response = await VerYaLocator.requestCoordinates(options)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

// Add listener for currentLocation event
VerYaLocator.addListener('currentLocation', (data) => {
  console.log('Current Location:', data)
})
```

In this example, we import the `VerYaLocator` plugin from the `@capacitor/core` package. We then define a function `requestData()` that requests the current coordinates using the Yandex Locator API. The `options` object contains the Yandex Locator API credentials. We use the `requestCoordinates()` method to make the API request and log the response.

We also add a listener for the `currentLocation` event emitted by the plugin. When the event is triggered, the listener function logs the current location data.

## Conclusion

In this tutorial, you learned how to use the Yandex Locator package with Capacitor to determine the location of a device without using GPS. You installed the package, made an API request for the current coordinates, and listened for the `currentLocation` event.

With this knowledge, you can now integrate Yandex Locator into your Capacitor projects to retrieve location information using cellular and Wi-Fi networks.