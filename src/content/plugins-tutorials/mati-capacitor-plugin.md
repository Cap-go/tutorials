---
title: "Using @avo121/mati-capacitor-plugin Package"
description: "This tutorial will guide you through the process of using the @avo121/mati-capacitor-plugin package in your Capacitor project."
created_at: "2022-09-22"
published: true
slug: "mati-capacitor-plugin"
---

# Using @avo121/mati-capacitor-plugin Package

In this tutorial, we will learn how to integrate the @avo121/mati-capacitor-plugin package into your Capacitor project. This plugin provides functionality for identity verification using the Mati platform.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

1. A Capacitor project set up and initialized.
2. Node.js installed on your machine.
3. Access to the Mati developer dashboard and API credentials.

## Installation

To install the @avo121/mati-capacitor-plugin package, run the following command in your Capacitor project directory:

```
npm install @avo121/mati-capacitor-plugin
```

Next, sync the native project by running:

```
npx cap sync
```

## Configuration

1. Open your Capacitor project in a code editor.
2. Locate the `capacitor.config.json` file in the root directory.
3. Add the following configuration to the `plugins` section:

```json
"@avo121/mati-capacitor-plugin": {
  "clientId": "YOUR_CLIENT_ID",
  "flowId": "YOUR_FLOW_ID"
}
```

Replace `YOUR_CLIENT_ID` with your Mati client ID and `YOUR_FLOW_ID` with the ID of the Mati flow you want to use for identity verification.

## Usage

Now that the package is installed and configured, you can start using the Mati identity verification functionality in your app.

To initiate the identity verification process, call the `startVerification` method from the Mati plugin. This method takes an optional configuration object with parameters like `language`, `metadata`, and `appearance`.

Here's an example of how to start the verification process:

```javascript
import { Plugins } from '@capacitor/core';

const { Mati } = Plugins;

Mati.startVerification({
  language: 'en',
  metadata: {
    userId: '123456',
    userType: 'customer'
  },
  appearance: {
    themeColor: '#FF0000'
  }
});
```

In the above example, we are starting the verification process in English, passing some metadata about the user, and customizing the appearance with a red theme color.

## Conclusion

In this tutorial, we have learned how to integrate the @avo121/mati-capacitor-plugin package into a Capacitor project for identity verification using the Mati platform. By following the installation, configuration, and usage steps mentioned, you should now be able to leverage the Mati identity verification functionality in your app.

For more details and documentation, please refer to the official [Mati Capacitor Plugin GitHub repository](https://github.com/avo121/mati-capacitor-plugin).

Happy coding!