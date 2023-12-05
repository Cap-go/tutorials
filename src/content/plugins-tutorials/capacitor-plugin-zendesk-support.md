---
title: "Using capacitor-plugin-zendesk-support"
description: "A tutorial on how to use the capacitor-plugin-zendesk-support package in your Capacitor project."
created_at: "2022-05-12"
published: true
slug: "capacitor-plugin-zendesk-support"
---

# Using capacitor-plugin-zendesk-support

In this tutorial, we will learn how to use the `capacitor-plugin-zendesk-support` package in your Capacitor project. This plugin allows you to integrate Zendesk Support SDK into your mobile app built with Capacitor.

## Prerequisites

Before we start, make sure you have the following installed:

- Capacitor (version 2 or higher)
- Ionic (optional, but recommended for building the UI)

## Step 1: Install the plugin

Open your terminal and navigate to your Capacitor project's root directory. Run the following command to install the `capacitor-plugin-zendesk-support` plugin:

```bash
npm install capacitor-plugin-zendesk-support
```

## Step 2: Configure Zendesk credentials

To use the Zendesk Support SDK, you need to configure your Zendesk credentials. This includes your Zendesk URL, application ID, and OAuth client ID.

Open your `capacitor.config.json` file and add the following configuration values under the `plugins` section:

```json
"capacitor-plugin-zendesk-support": {
  "url": "YOUR_ZENDESK_URL",
  "appId": "YOUR_ZENDESK_APP_ID",
  "clientId": "YOUR_OAUTH_CLIENT_ID"
}
```

Make sure to replace `YOUR_ZENDESK_URL`, `YOUR_ZENDESK_APP_ID`, and `YOUR_OAUTH_CLIENT_ID` with your actual Zendesk credentials.

## Step 3: Initialize the plugin

In your app's entry file (e.g., `app.component.ts` in an Ionic project), import and initialize the `capacitor-plugin-zendesk-support` plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorZendeskSupport } = Plugins;

CapacitorZendeskSupport.initialize();
```

This will initialize the Zendesk Support SDK with the provided configuration.

## Step 4: Show the Help Center

To show the Help Center in your app, you can use the `showHelpCenter` method provided by the plugin. For example, you can add a button in your UI that triggers the Help Center view:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorZendeskSupport } = Plugins;

async function showHelpCenter() {
  await CapacitorZendeskSupport.showHelpCenter();
}
```

You can now call the `showHelpCenter` function when the button is clicked.

## Step 5: Present the Contact form

If you want to allow users to contact your support team, you can use the `presentContactForm` method provided by the plugin. For example, you can add another button that presents the Contact form:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorZendeskSupport } = Plugins;

async function presentContactForm() {
  await CapacitorZendeskSupport.presentContactForm();
}
```

Again, you can call the `presentContactForm` function when the button is clicked.

## Conclusion

In this tutorial, we learned how to integrate the `capacitor-plugin-zendesk-support` package into a Capacitor project. We configured the Zendesk credentials, initialized the plugin, and showed the Help Center and Contact form in our app.

With this plugin, you can provide a seamless support experience to your app users by incorporating Zendesk Support functionality directly within your mobile app.

For more information on the available methods and customization options, refer to the plugin's documentation.

Happy coding!