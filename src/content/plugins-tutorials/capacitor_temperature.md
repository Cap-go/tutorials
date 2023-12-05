---
title: "Using the Capacitor-Temperature Package"
description: "Learn how to use the Capacitor-Temperature package to access temperature data in your Capacitor app."
created_at: "October 15, 2021"
published: true
slug: capacitor_temperature
---

# Using the Capacitor-Temperature Package

In this tutorial, we will walk through the steps to integrate and use the Capacitor-Temperature package in your Capacitor app. This package allows you to access temperature data from the device where your app is running.

## Installation

To get started, you need to install the Capacitor-Temperature package. Run the following command in your project directory:

```bash
npm install capacitor-temperature
```

## Integration

Once the package is installed, you need to integrate it into your Capacitor app. Open your project's `capacitor.config.json` file, and add the following code to the `plugins` section:

```json
{
  "plugins": {
    "CapacitorTemperature": {
      "appId": "YOUR_APP_ID"
    }
  }
}
```

Replace `YOUR_APP_ID` with your actual app ID.

## Usage

Now that the package is integrated, you can use it to access temperature data in your app. Import the package in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorTemperature } = Plugins;
```

To get the current temperature, use the `getTemperature()` method:

```typescript
const temperature = await CapacitorTemperature.getTemperature();
console.log(`Current temperature: ${temperature.value} ${temperature.unit}`);
```

The `getTemperature()` method returns an object with two properties: `value` and `unit`. The `value` property represents the temperature value, and the `unit` property represents the temperature unit (e.g., Celsius, Fahrenheit).

## Error Handling

In case of an error while retrieving the temperature data, you can handle it using a try-catch block:

```typescript
try {
  const temperature = await CapacitorTemperature.getTemperature();
  console.log(`Current temperature: ${temperature.value} ${temperature.unit}`);
} catch (error) {
  console.error('Failed to retrieve temperature:', error);
}
```

## Conclusion

In this tutorial, you learned how to integrate and use the Capacitor-Temperature package to access temperature data in your Capacitor app. You can now incorporate temperature functionality into your app and enhance its capabilities. Happy coding!
