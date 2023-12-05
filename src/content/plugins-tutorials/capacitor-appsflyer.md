---

title: "Using the Capacitor-Appsflyer Package"
description: "A tutorial on how to use the Capacitor-Appsflyer package in your Capacitor app"
created_at: "2022-01-01"
published: true
slug: "capacitor-appsflyer"

---

# Using the Capacitor-Appsflyer Package

In this tutorial, we will walk you through the process of integrating the Capacitor-Appsflyer package into your Capacitor app. The Capacitor-Appsflyer package provides an easy way to track app installs, in-app events, and other user interactions, allowing you to analyze the effectiveness of your marketing campaigns and improve your app's performance.

To get started, make sure you have a Capacitor app set up. If you haven't done so already, you can create a new Capacitor app using the following command:

```bash
npx @capacitor/cli create
```

Once you have your Capacitor app ready, follow these steps to integrate the Capacitor-Appsflyer package:

## Step 1: Install the Capacitor-Appsflyer Package

To install the Capacitor-Appsflyer package, run the following command in your project's root directory:

```bash
npm install capacitor-appsflyer
```

## Step 2: Configure Appsflyer

Before using the Capacitor-Appsflyer package, you need to configure it with your Appsflyer account details. Navigate to your app's `capacitor.config.json` file and add the following configuration:

```json
"plugins": {
  "Appsflyer": {
    "devKey": "YOUR_APPSFYLER_DEV_KEY",
    "appId": "YOUR_APP_ID"
  }
}
```

Make sure to replace `YOUR_APPSFYLER_DEV_KEY` with your Appsflyer developer key and `YOUR_APP_ID` with your app's ID.

## Step 3: Import and Initialize Capacitor-Appsflyer

In your app's main JavaScript file (e.g., `app.js` or `main.js`), import the Capacitor-Appsflyer plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { Appsflyer } = Plugins;
```

Next, initialize the Capacitor-Appsflyer plugin in your app's initialization code:

```javascript
Appsflyer.initialize();
```

## Step 4: Track App Events

You can now start tracking app events using the Capacitor-Appsflyer plugin. For example, to track a custom event called "tutorial_completed", use the following code:

```javascript
Appsflyer.trackEvent('tutorial_completed', { tutorial_name: 'Getting Started' });
```

You can also include additional event parameters as key-value pairs in the second argument of the `trackEvent` method.

## Step 5: Track App Installs

The Capacitor-Appsflyer package allows you to track app installs and attribution data. To track an app installation, use the following code:

```javascript
Appsflyer.trackAppInstall();
```

This will send the necessary data to Appsflyer for tracking user acquisition.

## Step 6: Test and Verify

To verify that Capacitor-Appsflyer is working correctly in your app, run the following command in your project's root directory:

```bash
npx cap serve
```

This will start a local development server hosting your app. Install and run your app on a device or emulator/simulator, and perform the actions you want to track. Check your Appsflyer dashboard to see if the events and installs are being logged.

That's it! You have successfully integrated the Capacitor-Appsflyer package into your Capacitor app. Now you can analyze user data, track marketing campaign effectiveness, and make data-driven decisions to improve your app's performance.