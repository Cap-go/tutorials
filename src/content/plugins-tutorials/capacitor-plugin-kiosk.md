---
title: "Using Capacitor-Kiosk Package"
description: "A tutorial on how to use the Capacitor-Kiosk package for building kiosk applications"
created_at: "October 13, 2021"
published: true
slug: "capacitor-plugin-kiosk"
---

# Using Capacitor-Kiosk Package

In this tutorial, we will learn how to use the Capacitor-Kiosk package to build kiosk applications using Capacitor framework.

## Step 1: Installation

To get started, we need to install the Capacitor-Kiosk package. Open your terminal and run the following command:

```bash
npm install capacitor-kiosk
```

## Step 2: Configuration

Once the package is installed, we need to configure it in our Capacitor project. Open your Capacitor project folder and locate the `capacitor.config.json` file.

Add the following configuration to the `plugins` section of the `capacitor.config.json` file:

```json
"Kiosk": {
  "appId": "your-app-id",
  "startUrl": "https://your-kiosk-website.com",
  "enableInactivityTimer": true,
  "inactivityTimeout": 300
}
```

Make sure to replace `your-app-id` with your actual app ID and `https://your-kiosk-website.com` with the URL of your kiosk website.

## Step 3: Usage

Now that the package is installed and configured, we can start using the Capacitor-Kiosk features in our app.

To lock the device into kiosk mode, add the following code to the entry file of your app (e.g., `index.js` or `main.ts`):

```javascript
import { Plugins } from '@capacitor/core';

const { Kiosk } = Plugins;

Kiosk.lock();
```

This code will lock the device into kiosk mode and prevent the user from accessing any other apps or settings.

To unlock the device from kiosk mode, use the following code:

```javascript
Kiosk.unlock();
```

This will allow the user to exit the kiosk mode and use the device normally.

## Conclusion

In this tutorial, we learned how to use the Capacitor-Kiosk package to build kiosk applications using Capacitor framework. We covered the installation, configuration, and usage of the package.

Now you can create powerful kiosk applications with ease using Capacitor-Kiosk!

Remember to refer to the official documentation for more information and advanced usage of the package. Happy coding!