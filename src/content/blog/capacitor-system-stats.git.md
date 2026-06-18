```markdown
---
"title": "Using @netacoltd/capacitor-system-stats Package"
"description": "A tutorial on how to integrate and utilize the @netacoltd/capacitor-system-stats package in a Capacitor app."
"created_at": "2023-10-08"
"published": true
"slug": "capacitor-system-stats.git"
---

# Tutorial: Using @netacoltd/capacitor-system-stats Package

In this tutorial, we will walk through the steps to integrate and use the @netacoltd/capacitor-system-stats package in your Capacitor app.

## Step 1: Installation

To get started, install the @netacoltd/capacitor-system-stats package by running the following command in your Capacitor project:

```bash
npm install @netacoltd/capacitor-system-stats
```

## Step 2: Import and Initialize the Plugin

In your project, import the plugin and initialize it to start using its functionalities. Here's an example of how you can do this:

```typescript
import { Plugins } from '@capacitor/core';
const { SystemStats } = Plugins;

// Initialize the plugin
const systemStats = SystemStats;
```

## Step 3: Retrieve System Information

You can now use the provided methods to retrieve various system information using the @netacoltd/capacitor-system-stats package. For example, to get the battery level:

```typescript
const batteryLevel = await systemStats.getBatteryLevel();
console.log('Battery Level:', batteryLevel.value);
```

## Conclusion

By following these simple steps, you can easily integrate and utilize the @netacoltd/capacitor-system-stats package in your Capacitor app to access system information. Experiment with different methods provided by the package to enhance your app's functionality.
```
```