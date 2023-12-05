---
title: "Using terra-capacitor package"
description: "A tutorial on how to use the terra-capacitor package"
created_at: "2021-10-06"
published: true
slug: "terra-capacitor"
---

# Using terra-capacitor package

In this tutorial, we will learn how to use the terra-capacitor package to enhance your Capacitor app with additional functionality.

## Step 1: Installation

First, let's install the terra-capacitor package by running the following command:

```bash
npm install terra-capacitor
```

## Step 2: Importing and Initializing

Next, import the necessary modules from the package and initialize any required dependencies. Here's an example:

```javascript
import { TerraCapacitor } from 'terra-capacitor';

const terra = new TerraCapacitor();
```

## Step 3: Using the Features

Once you have initialized the terra-capacitor package, you can start using its features. Here are a few examples:

### Example 1: Geolocation

```javascript
// Getting the user's current location
const location = await terra.geolocation.getCurrentPosition();
console.log('Current Location:', location);
```

### Example 2: Camera

```javascript
// Capture a photo using the device's camera
const photo = await terra.camera.takePhoto();
console.log('Photo:', photo);
```

### Example 3: Filesystem

```javascript
// Read a file from the device's filesystem
const fileContent = await terra.filesystem.readFile('path/to/file.txt');
console.log('File Content:', fileContent);
```

## Step 4: Building and Testing

After implementing the desired features using the terra-capacitor package, build your app and test it on different platforms to ensure compatibility.

That's it! You have now successfully learned how to use the terra-capacitor package to enhance your Capacitor app.

Remember to refer to the package's documentation for more details and advanced usage.

Happy coding!