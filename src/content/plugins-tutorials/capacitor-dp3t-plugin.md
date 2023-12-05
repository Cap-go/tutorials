---
title: "Using the @silicia/capacitor-dp3t Package"
description: "A tutorial on how to use the @silicia/capacitor-dp3t package to integrate the DP-3T contact tracing framework with Capacitor."
created_at: "2022-06-28"
published: true
slug: "capacitor-dp3t-plugin"
---

# Using the @silicia/capacitor-dp3t Package

In this tutorial, we will guide you through the process of integrating the @silicia/capacitor-dp3t package with Capacitor. The @silicia/capacitor-dp3t package allows you to easily integrate the DP-3T contact tracing framework into your Capacitor application.

## Prerequisites

Before we get started, make sure you have the following prerequisites installed on your machine:

- Node.js
- Capacitor

## Step 1: Creating a Capacitor Project

First, let's create a new Capacitor project. Open your terminal and run the following command:

```bash
npx @capacitor/cli create
```

Follow the prompts to create a new Capacitor project and choose the necessary options for your application.

## Step 2: Installing the @silicia/capacitor-dp3t Package

Once you have your Capacitor project set up, navigate to the project's root directory in your terminal and run the following command to install the @silicia/capacitor-dp3t package:

```bash
npm install @silicia/capacitor-dp3t
```

This will install the package as a dependency in your project.

## Step 3: Configure DP-3T Credentials

Next, you need to configure your DP-3T credentials. Open the `capacitor.config.json` file in your project and add the following configurations:

```json
{
  "plugins": {
    "@silicia/capacitor-dp3t": {
      "appId": "YOUR_DP3T_APP_ID",
      "appSecret": "YOUR_DP3T_APP_SECRET",
      "apiUrl": "YOUR_DP3T_API_URL",
      "region": "YOUR_DP3T_REGION"
    }
  }
}
```

Make sure to replace the placeholder values with your actual DP-3T credentials.

## Step 4: Initializing the DP-3T Plugin

To initialize the DP-3T plugin in your Capacitor application, open the `src/main.ts` file and add the following code at the top:

```typescript
import { Dp3tPlugin } from '@silicia/capacitor-dp3t';

const dp3tPlugin = new Dp3tPlugin();

async function initializeDp3t() {
  await dp3tPlugin.initialize();
}

initializeDp3t();
```

This code initializes the DP-3T plugin as soon as your application starts.

## Step 5: Using DP-3T Functions

Now that you have the DP-3T plugin set up, you can start using its functions. For example, to start the contact tracing process, you can call the `startTracing` function:

```typescript
import { Dp3tPlugin } from '@silicia/capacitor-dp3t';

const dp3tPlugin = new Dp3tPlugin();

async function startContactTracing() {
  await dp3tPlugin.startTracing();
}

startContactTracing();
```

This will start the contact tracing process and begin monitoring for nearby devices.

## Conclusion

In this tutorial, you learned how to integrate the @silicia/capacitor-dp3t package with Capacitor to use the DP-3T contact tracing framework in your application. You configured the DP-3T credentials, initialized the plugin, and used its functions to start the contact tracing process. Feel free to explore the other functions provided by the @silicia/capacitor-dp3t package to further customize your contact tracing implementation.

Remember to always refer to the official documentation of the @silicia/capacitor-dp3t package for detailed information on its usage and available functions.
