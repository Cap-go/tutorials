---
title: "Using @houseninja/capacitor-datadog Package"
description: "A tutorial on how to use the @houseninja/capacitor-datadog package to integrate Datadog with your Capacitor app."
created_at: "2022-07-25"
published: true
slug: capacitor-datadog
---

# Using @houseninja/capacitor-datadog Package

In this tutorial, we will learn how to use the `@houseninja/capacitor-datadog` package to integrate Datadog with your Capacitor app. 

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm

## Step 1: Install the package

To get started, open your Capacitor app's root directory and install the `@houseninja/capacitor-datadog` package using the following command:

```bash
npm install @houseninja/capacitor-datadog
```

## Step 2: Configure Datadog API Key

Next, you need to configure your Datadog API key. Open the `capacitor.config.json` file in your Capacitor app's root directory and add the following key-value pair:

```json
{
  "plugins": {
    "Datadog": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual Datadog API key.

## Step 3: Initialize the plugin

In your app's entry file (e.g., `src/main.ts`), import and initialize the `@houseninja/capacitor-datadog` plugin:

```typescript
import { Datadog } from '@houseninja/capacitor-datadog';

// Initialize the plugin
const datadog = new Datadog();
```

## Step 4: Sending logs

You can now use the `datadog` object to send logs to Datadog. Here's an example of how to send a log:

```typescript
datadog.log('info', 'This is an informational log');
```

You can replace `'info'` with other log levels such as `'debug'`, `'warn'`, or `'error'`.

## Step 5: Sending custom metrics

In addition to logs, you can also send custom metrics to Datadog. Here's an example:

```typescript
datadog.metric('my_metric', 42);
```

Replace `'my_metric'` with the name of your custom metric, and `42` with the actual value.

## Step 6: Building and running your app

Finally, build and run your Capacitor app using the commands provided by Capacitor:

```bash
npx cap build
npx cap run android    # Replace with 'ios' for iOS
```

And that's it! You have successfully integrated the `@houseninja/capacitor-datadog` package to send logs and custom metrics to Datadog in your Capacitor app.

Happy coding!