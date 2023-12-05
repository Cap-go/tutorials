---
title: "Using capacitor-adapty Package"
description: "A tutorial on how to use the capacitor-adapty package in your Capacitor app."
created_at: "October 30, 2021"
published: true
slug: "capacitor-adapty"
---

# Using capacitor-adapty Package

Capacitor is a cross-platform app runtime that allows developers to build apps for iOS, Android, and the web using web technologies such as HTML, CSS, and JavaScript. Capacitor comes with a rich ecosystem of plugins that extend its functionality.

One popular plugin is `capacitor-adapty`, which integrates Adapty SDK into your Capacitor app for implementing in-app purchases, subscriptions, and analytics. Adapty is a powerful mobile marketing and monetization platform that helps developers optimize their app's revenue and engagement.

In this tutorial, we will walk through the steps required to use `capacitor-adapty` in your Capacitor app.

## Prerequisites

Before we get started, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- An existing Capacitor app

## Installation

To install the `capacitor-adapty` package, open your Terminal or Command Prompt and navigate to your project's root directory. Run the following command:

```bash
npm install capacitor-adapty
```

This command will download and install the `capacitor-adapty` package from the npm registry.

## Configuration

After the installation is complete, we need to configure the `capacitor-adapty` plugin in our Capacitor app.

1. Open the `capacitor.config.json` file in your project's root directory.

2. Add the following lines to the `plugins` section:

```json
"capacitor-adapty": {
  "appId": "YOUR_ADAPTY_APP_ID"
}
```

Make sure to replace `YOUR_ADAPTY_APP_ID` with your actual Adapty app ID. You can find this ID in the Adapty Dashboard.

3. Save the changes and close the file.

## Usage

Now that we have installed and configured the `capacitor-adapty` package, we can start using it in our app.

1. Import the `capacitor-adapty` module in your project's main JavaScript/TypeScript file:

```javascript
import 'capacitor-adapty';
```

2. To initialize the Adapty SDK, add the following code to your app's initialization logic (e.g., in your `app.component.ts` file):

```javascript
import { Plugins } from '@capacitor/core';

const { Adapty } = Plugins;

Adapty.initialize().then(() => {
  console.log('Adapty SDK initialized successfully!');
}).catch((error) => {
  console.error('Failed to initialize Adapty SDK:', error);
});
```

3. You can now use the various methods provided by the `capacitor-adapty` package to implement in-app purchases, subscriptions, and analytics in your app. Refer to the official `capacitor-adapty` documentation for more information on available methods and usage examples.

## Conclusion

In this tutorial, we learned how to install and use the `capacitor-adapty` package in a Capacitor app. We covered the installation process, configuration steps, and basic usage examples.

With `capacitor-adapty`, you can easily integrate Adapty SDK into your app and leverage its powerful features for in-app purchases, subscriptions, and analytics.

If you have any further questions or need more information, refer to the official `capacitor-adapty` documentation or reach out to the Adapty support team.