---
title: "Using capacitor-install-referrer"
description: "A tutorial on how to use the capacitor-install-referrer package"
created_at: "2022-01-01"
published: true
slug: "capacitor-install-referrer"
---

# Using capacitor-install-referrer

In this tutorial, we will guide you on how to use the `capacitor-install-referrer` package in your Capacitor project.

## Step 1: Install the package

To begin, open your terminal and navigate to your Capacitor project directory. Run the following command:

```bash
npm install capacitor-install-referrer
```

## Step 2: Import the package in your code

In your JavaScript or TypeScript file, import the package using the following code:

```javascript
import { Plugins } from '@capacitor/core';
const { InstallReferrer } = Plugins;
```

## Step 3: Access the install referrer information

Once you've imported the `capacitor-install-referrer` package, you can access the install referrer information using the `getReferrer` method. Here's an example:

```javascript
InstallReferrer.getReferrer()
  .then(result => {
    const { installReferrer, referrerClickTimestampSeconds, installBeginTimestampSeconds } = result;

    // Access the install referrer information
    console.log("Install Referrer:", installReferrer);
    console.log("Referrer Click Timestamp (seconds):", referrerClickTimestampSeconds);
    console.log("Install Begin Timestamp (seconds):", installBeginTimestampSeconds);
  })
  .catch(error => {
    console.error("Error retrieving install referrer:", error);
  });
```

The `getReferrer` method returns a promise that resolves to an object containing the install referrer information. You can then use this information in your app as needed.

## Step 4: Build and run your app

Make sure to build your Capacitor project before running it on the desired platform. Use the appropriate commands based on your platform:

```bash
npx cap build ios
npx cap build android
```

After building your app, run it using the following commands:

```bash
npx cap run ios
npx cap run android
```

That's it! You have successfully integrated the `capacitor-install-referrer` package into your Capacitor project and accessed the install referrer information.

Remember to refer to the official documentation of `capacitor-install-referrer` for more detailed information and additional features that it provides.

Happy coding!