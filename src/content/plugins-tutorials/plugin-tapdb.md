---
title: "Using @evol1213/capacitor-plugin-tapdb"
description: "In this tutorial, we will learn how to use the @evol1213/capacitor-plugin-tapdb package to integrate TapDB functionality into a Capacitor project."
created_at: "2022-05-10"
published: true
slug: "plugin-tapdb"
---

# Using @evol1213/capacitor-plugin-tapdb

In this tutorial, we will learn how to use the @evol1213/capacitor-plugin-tapdb package to integrate TapDB functionality into a Capacitor project.

## Prerequisites

Before we get started, make sure you have the following:

- Capacitor CLI installed globally: `npm install -g @capacitor/cli`
- Capacitor project setup: `npx cap init [appName] [appId]`

## Installation

To install the @evol1213/capacitor-plugin-tapdb package, run the following command in your Capacitor project directory:

```
npm install @evol1213/capacitor-plugin-tapdb
```

## Configuration

After installing the package, we need to configure it in our project. Open the `capacitor.config.json` file and add the following code under the `plugins` section:

```json
"TapDB": {
  "tapdbApiKey": "YOUR_TAPDB_API_KEY"
}
```

Replace `YOUR_TAPDB_API_KEY` with your actual TapDB API key.

## Usage

Now that the package is installed and configured, we can start using it in our project. Here are some examples of how to use the TapDB plugin:

### Initialization

To initialize TapDB, use the `initialize` method provided by the plugin. This method should be called once, usually in the app's entry point.

```javascript
import { Plugins } from '@capacitor/core';
const { TapDB } = Plugins;

TapDB.initialize();
```

### Track Custom Events

You can track custom events using the `trackEvent` method. This allows you to collect data about user actions and behaviors in your app.

```javascript
TapDB.trackEvent('Button Clicked', {
  buttonName: 'Submit',
  pageName: 'Contact Form'
});
```

### Set User Properties

To set user properties, use the `setUserProperty` method. This allows you to store additional information about your app's users.

```javascript
TapDB.setUserProperty('name', 'John Doe');
TapDB.setUserProperty('email', 'john.doe@example.com');
```

### Log Custom Screens

You can log custom screens using the `logScreen` method. This allows you to track which screens users visit in your app.

```javascript
TapDB.logScreen('Home Screen');
TapDB.logScreen('Product Details', { productId: '12345' });
```

### Get Installation ID

You can get the TapDB installation ID using the `getInstallationId` method. This ID uniquely identifies the user's installation of your app.

```javascript
const installationId = await TapDB.getInstallationId();
console.log('Installation ID:', installationId);
```

## Conclusion

In this tutorial, we learned how to install, configure, and use the @evol1213/capacitor-plugin-tapdb package in a Capacitor project. We saw examples of how to initialize TapDB, track custom events, set user properties, log custom screens, and retrieve the installation ID. With the TapDB plugin, you can easily integrate TapDB functionality into your Capacitor app and gain valuable insights about your users.

Make sure to check the official documentation for more details and additional features of the @evol1213/capacitor-plugin-tapdb package.

Happy coding!
