---
title: "Using @periksa/cap-mock-detector Package"
description: "This tutorial will guide you through the process of using the @periksa/cap-mock-detector package in your Capacitor app."
created_at: "2021-10-25"
published: true
slug: "capacitor-mock-location-detector"
---

# Using @periksa/cap-mock-detector Package

In this tutorial, we will learn how to install and use the `@periksa/cap-mock-detector` package in a Capacitor app. The `@periksa/cap-mock-detector` package allows you to detect whether the location provided by the device is mocked or not.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js
- Capacitor CLI

## Step 1: Create a new Capacitor app

First, let's create a new Capacitor app. Open your terminal and run the following command:

```bash
npx create-capacitor-app
```

Follow the prompts to set up your app and choose a project template.

## Step 2: Install the @periksa/cap-mock-detector package

Next, navigate to your Capacitor app directory and install the `@periksa/cap-mock-detector` package using npm or yarn:

```bash
npm install @periksa/cap-mock-detector
```

or

```bash
yarn add @periksa/cap-mock-detector
```

## Step 3: Import and initialize the package

To use the package, you need to import and initialize it in your app's code. Open your `src/App.tsx` file and add the following lines at the top:

```typescript
import { Plugins } from '@capacitor/core';
import { CapMockDetectorPlugin } from '@periksa/cap-mock-detector';

const { CapMockDetector } = Plugins;
```

## Step 4: Detect mock location

Now, you can use the `CapMockDetector` plugin to detect if the location provided by the device is mocked or not. Add the following code to a function or event in your app:

```typescript
const detectMockLocation = async () => {
  try {
    const result = await CapMockDetector.detectMockLocation();
    const isMocked = result.mocked;

    if (isMocked) {
      console.log('Location is mocked');
    } else {
      console.log('Location is not mocked');
    }
  } catch (error) {
    console.error('Error detecting mock location:', error);
  }
};

// Call the function to detect mock location
detectMockLocation();
```

That's it! You have successfully installed and used the `@periksa/cap-mock-detector` package in your Capacitor app.

## Conclusion

In this tutorial, we learned how to install and use the `@periksa/cap-mock-detector` package to detect mocked locations in a Capacitor app. You can now incorporate this package into your app to enhance location-based functionality and improve user experience.

Remember to refer to the package's documentation for more detailed information and additional features.

Happy coding!