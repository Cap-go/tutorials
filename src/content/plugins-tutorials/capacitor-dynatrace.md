---
title: "Using @okode/capacitor-dynatrace Package"
description: "This tutorial will guide you on how to use the @okode/capacitor-dynatrace package to enable Dynatrace monitoring in your Capacitor app."
created_at: "2021-10-20"
published: true
slug: "capacitor-dynatrace"
---

# Using @okode/capacitor-dynatrace Package

In this tutorial, we will learn how to integrate and use the `@okode/capacitor-dynatrace` package in your Capacitor app to enable Dynatrace monitoring. Dynatrace is a powerful observability platform that provides real-time insights into the performance and user experience of your application.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor installed globally on your machine
- A Capacitor project set up and configured

## Steps to integrate @okode/capacitor-dynatrace

Follow these steps to integrate the `@okode/capacitor-dynatrace` package in your Capacitor project:

### Step 1: Install the package

Open your terminal and navigate to the root directory of your Capacitor project. Run the following command to install the `@okode/capacitor-dynatrace` package:

```bash
npm install @okode/capacitor-dynatrace
```

### Step 2: Configure Dynatrace

To use `@okode/capacitor-dynatrace`, you need to configure your Dynatrace account. Obtain the Dynatrace API token for your application and make sure you have the necessary permissions. 

### Step 3: Initialize the Dynatrace plugin

In your `capacitor.config.json` file, add the following configuration for the `@okode/capacitor-dynatrace` plugin:

```json
"plugins": {
  "Dynatrace": {
    "token": "<YOUR_DYNATRACE_API_TOKEN>"
  }
}
```

Replace `<YOUR_DYNATRACE_API_TOKEN>` with your actual Dynatrace API token.

### Step 4: Import and use the plugin

In your TypeScript/JavaScript code, import the `@okode/capacitor-dynatrace` plugin:

```typescript
import { Plugins } from '@capacitor/core';
const { Dynatrace } = Plugins;
```

You can now use the various methods provided by the `Dynatrace` plugin to track user actions, measure performance, and capture errors in your app.

## Conclusion

In this tutorial, we have learned how to integrate the `@okode/capacitor-dynatrace` package in a Capacitor app. By following these steps, you can enable Dynatrace monitoring and gain valuable insights into the performance and user experience of your application.

Remember to refer to the official documentation of `@okode/capacitor-dynatrace` for detailed information on the available methods and configuration options.

Happy monitoring with Dynatrace and Capacitor!