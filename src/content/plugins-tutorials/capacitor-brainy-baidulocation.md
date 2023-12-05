---
title: "Using the capacitor-brainy-baidulocation package"
description: "A tutorial on how to use the capacitor-brainy-baidulocation package to access Baidu Location services."
created_at: "2023-01-01"
published: true
slug: "capacitor-brainy-baidulocation"
---

# Using the capacitor-brainy-baidulocation package

In this tutorial, we will explore how to use the capacitor-brainy-baidulocation package to access Baidu Location services in your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor
- capacitor-brainy-baidulocation

## Step 1: Install the package

To install the capacitor-brainy-baidulocation package, run the following command:

```bash
npm install capacitor-brainy-baidulocation
```

## Step 2: Configure the package

Open your `capacitor.config.json` file and add the following to the plugins section:

```json
"Plugins": {
  "CapacitorBrainyBaiduLocation": {
    "API_KEY": "YOUR_API_KEY"
  }
}
```
Replace `YOUR_API_KEY` with your Baidu Location API key.

## Step 3: Import and initialize the plugin

In your project, import the `CapacitorBrainyBaiduLocation` plugin from `@capacitor-community/capacitor-brainy-baidulocation`:

```typescript
import { CapacitorBrainyBaiduLocation } from '@capacitor-community/capacitor-brainy-baidulocation';
```

Initialize the plugin in your component's `ngOnInit` method:

```typescript
ngOnInit() {
  CapacitorBrainyBaiduLocation.initialize();
}
```

## Step 4: Use the Baidu Location services

You can now use the Baidu Location services provided by the plugin. Here's an example of how to get the current location:

```typescript
import { CapacitorBrainyBaiduLocation } from '@capacitor-community/capacitor-brainy-baidulocation';

async getCurrentLocation() {
  const result = await CapacitorBrainyBaiduLocation.getCurrentLocation();
  console.log(result);
}
```

This will return the current location as an object with latitude and longitude values.

## Conclusion

In this tutorial, we learned how to use the capacitor-brainy-baidulocation package to access Baidu Location services in a Capacitor app. We covered the installation, configuration, initialization, and usage of the package. Now you can enhance your app with powerful location services!

Remember to refer to the official documentation of Capacitor and the capacitor-brainy-baidulocation package for more advanced usage and additional features.