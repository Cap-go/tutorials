---
title: "Using @jonz94/capacitor-sim Package"
description: "This tutorial will guide you through the steps of using the @jonz94/capacitor-sim package to enhance your Capacitor app."
created_at: "2021-10-15"
published: true
slug: "capacitor-sim"
---

# Using @jonz94/capacitor-sim Package

In this tutorial, we will walk you through the process of using the `@jonz94/capacitor-sim` package to enhance your Capacitor app.

## Step 1: Installation

First, you need to install the `@jonz94/capacitor-sim` package in your Capacitor project. Open your project directory in a terminal and run the following command:

```bash
npm install @jonz94/capacitor-sim
```

## Step 2: Importing and Initializing the Package

To use the `@jonz94/capacitor-sim` package, you need to import and initialize it in your app's entry file. Typically, this file is `index.js` or `main.js`. Add the following code to import and initialize the package:

```javascript
import { CapacitorSim } from '@jonz94/capacitor-sim';

// Initialize CapacitorSim
CapacitorSim.init();
```

## Step 3: Using the Simulator in your App

Once you have imported and initialized the `@jonz94/capacitor-sim` package, you can use its simulator features in your app.

### Example: Simulating Device Orientation

To simulate different device orientations, you can use the following code:

```javascript
// Enable landscape orientation
CapacitorSim.setLandscape(true);

// Enable portrait orientation
CapacitorSim.setLandscape(false);
```

### Example: Simulating Network Speed

To simulate different network speeds, you can use the following code:

```javascript
// Enable slow network speed
CapacitorSim.setNetworkSpeed('2g');

// Enable fast network speed
CapacitorSim.setNetworkSpeed('4g');
```

### Example: Simulating Geolocation

To simulate geolocation in your app, you can use the following code:

```javascript
// Set latitude and longitude for simulation
CapacitorSim.setGeolocation(37.7749, -122.4194);
```

## Step 4: Testing and Debugging

After implementing the `@jonz94/capacitor-sim` package in your app, it's essential to test and debug your app to ensure the simulator features are working correctly. You can use the following commands to run your app in different environments:

```bash
npm start         // Run your app in a development environment
npm run build     // Build your app for production
npm run serve     // Serve the built app locally
```

Congratulations! You have successfully learned how to use the `@jonz94/capacitor-sim` package to enhance your Capacitor app.

Remember to test thoroughly and make any necessary adjustments to fit your specific app requirements.

Feel free to explore the documentation of the `@jonz94/capacitor-sim` package for more features and customization options.

Happy coding! 🚀