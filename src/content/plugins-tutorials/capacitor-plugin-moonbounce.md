---
title: "Using capacitor-plugin-moonbounce Package"
description: "A tutorial on how to use the capacitor-plugin-moonbounce package to enable moonbounce functionality in your Capacitor app."
created_at: "2022-09-29"
published: true
slug: capacitor-plugin-moonbounce
---

# Using capacitor-plugin-moonbounce Package

The capacitor-plugin-moonbounce package allows you to add moonbounce functionality to your Capacitor app. In this tutorial, we will walk through the steps to install the package, configure it, and use its features.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js installed on your machine
- Capacitor CLI installed globally

## Step 1: Install Capacitor Plugin

First, install the capacitor-plugin-moonbounce package by running the following command:

```bash
npm install capacitor-plugin-moonbounce
```

## Step 2: Link the Plugin

After installing the package, link it to your project using the following command:

```bash
npx cap sync
```

## Step 3: Configure the Plugin

Next, configure the capacitor-plugin-moonbounce plugin. Open your `capacitor.config.json` file and add the following entry:

```json
{
  "plugins": {
    "Moonbounce": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

Replace `YOUR_API_KEY` with your actual API key for moonbounce functionality.

## Step 4: Use the Plugin

Now that the plugin is installed and configured, you can start using its features in your Capacitor app. Refer to the plugin's documentation for the available methods and examples of how to use them.

## Conclusion

In this tutorial, we went through the steps to install, configure, and use the capacitor-plugin-moonbounce package in a Capacitor app. By following these steps, you can enable moonbounce functionality and integrate it into your app seamlessly.

Remember to check the official documentation for more details and advanced usage of the capacitor-plugin-moonbounce package.

Happy coding!