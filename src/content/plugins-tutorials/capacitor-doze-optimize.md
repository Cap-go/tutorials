---
title: "Using capacitor-doze-optimize Package"
description: "A tutorial on how to use the capacitor-doze-optimize package to optimize your Capacitor app"
created_at: "2021-10-01"
published: true
slug: "capacitor-doze-optimize"
---

# Using capacitor-doze-optimize Package

In this tutorial, we will learn how to use the `capacitor-doze-optimize` package to optimize your Capacitor app. The `capacitor-doze-optimize` package provides easy-to-use methods and utilities to help improve the performance and energy efficiency of your app.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, follow the official Capacitor installation guide.

Next, install the `capacitor-doze-optimize` package by running the following command in your project's root directory:

```
npm install capacitor-doze-optimize
```

## Configuration

Once the package is installed, you need to configure it in your project. Open the `capacitor.config.json` file and add the `capacitor-doze-optimize` plugin to the `plugins` array:

```json
"plugins": {
  "capacitor-doze-optimize": {
    "some_configuration_option": "value"
  }
}
```

Replace `"some_configuration_option"` with the actual configuration option you want to set for the `capacitor-doze-optimize` plugin.

## Usage

Once the package is configured, you can start using its features in your app. Here are some common use cases:

### Example 1: Optimizing Background Tasks

```typescript
import { DozeOptimizePlugin } from 'capacitor-doze-optimize';

// ...

const dozeOptimize = Capacitor.Plugins.DozeOptimizePlugin as DozeOptimizePlugin;

// Optimize background tasks
dozeOptimize.optimizeBackgroundTasks()
  .then(() => {
    console.log('Background tasks optimized successfully');
  })
  .catch((error) => {
    console.error('Failed to optimize background tasks:', error);
  });
```

### Example 2: Managing Power Modes

```typescript
import { DozeOptimizePlugin } from 'capacitor-doze-optimize';

// ...

const dozeOptimize = Capacitor.Plugins.DozeOptimizePlugin as DozeOptimizePlugin;

// Get the current power mode
dozeOptimize.getPowerMode()
  .then((powerMode) => {
    console.log('Current power mode:', powerMode);
  })
  .catch((error) => {
    console.error('Failed to get power mode:', error);
  });

// Set the power mode to "optimized"
dozeOptimize.setPowerMode('optimized')
  .then(() => {
    console.log('Power mode set to "optimized"');
  })
  .catch((error) => {
    console.error('Failed to set power mode:', error);
  });
```

## Conclusion

In this tutorial, we have explored how to use the `capacitor-doze-optimize` package to optimize your Capacitor app. We covered the installation, configuration, and usage of the package's features. By leveraging the capabilities of `capacitor-doze-optimize`, you can significantly improve the performance and energy efficiency of your app.

Remember to refer to the official documentation of `capacitor-doze-optimize` for more details and additional features. Happy optimizing!