---
title: "Using the capacitor-health-data-plugin Package"
description: "A tutorial on how to use the capacitor-health-data-plugin package to access health data in your app."
created_at: "2021-11-01"
published: true
slug: "health-data-plugin"
---

# Using the capacitor-health-data-plugin Package

In this tutorial, we will learn how to utilize the capacitor-health-data-plugin package to access health data in your capacitor app. The capacitor-health-data-plugin package provides a simple way to retrieve health-related data such as step count, heart rate, sleep analysis, and more.

## Installation

To get started, open your terminal and navigate to your capacitor app's root directory. Then, run the following command to install the capacitor-health-data-plugin package:

```bash
npm install capacitor-health-data-plugin
```

## Setup

After installing the package, you need to configure the plugin in your capacitor project. Open the `capacitor.config.json` file in your project's root directory and add the following configuration under `plugins`:

```json
{
  "plugins": {
    "HealthData": {
      "permissions": ["com.apple.healthkit"]
    }
  }
}
```

Make sure to replace `"com.apple.healthkit"` with the appropriate health data permission for your target platform.

## Usage

Once the package is installed and configured, you can start using the capacitor-health-data-plugin in your app. Here's an example of how to retrieve the step count data:

```typescript
import { Plugins } from '@capacitor/core';

const { HealthData } = Plugins;

async function getStepCount() {
  const result = await HealthData.getStepCount();
  console.log('Step Count:', result.value);
}
```

In the above code snippet, we import the `HealthData` plugin from the `@capacitor/core` package. Then, we define an asynchronous function `getStepCount` which uses the `getStepCount` method provided by the `HealthData` plugin to retrieve the step count data. Finally, we log the step count value to the console.

## Conclusion

In this tutorial, we learned how to install and configure the capacitor-health-data-plugin package in a capacitor app. We also explored a basic usage example for retrieving the step count data. With the capacitor-health-data-plugin, you can easily access health-related data in your app and provide valuable insights to your users.

Remember to refer to the capacitor-health-data-plugin documentation for more information and additional API methods.

Happy coding!
