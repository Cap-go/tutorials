---
title: "Using the capacitor-plugin-useragent Package"
description: "A tutorial on how to use the capacitor-plugin-useragent package in your Capacitor project."
created_at: "2022-01-12"
published: true
slug: capacitor-plugin-useragent
---

# Using the capacitor-plugin-useragent Package

In this tutorial, we will go through the steps required to integrate and utilize the capacitor-plugin-useragent package in your Capacitor project. The package allows you to access information about the user's device and browser user agent.

## Step 1: Installation

To begin, install the capacitor-plugin-useragent package by running the following command in your Capacitor project's root directory:

```bash
npm install capacitor-plugin-useragent
```

## Step 2: Configuration

Once the package is installed, we need to configure it for usage within our project. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "UserAgent": {}
  }
}
```

## Step 3: Usage

With the package installed and configured, we can now start using it within our project. Import the `Plugins` class from Capacitor and use the `UserAgent` plugin to retrieve the user agent information. Here's an example of how to retrieve the user agent string:

```typescript
import { Plugins } from '@capacitor/core';

const { UserAgent } = Plugins;

const getUserAgent = async () => {
  const { userAgent } = await UserAgent.getInfo();
  console.log('User Agent:', userAgent);
};

getUserAgent();
```

## Conclusion

In this tutorial, we covered the installation, configuration, and usage of the capacitor-plugin-useragent package. You should now be able to retrieve the user agent information from the device's browser using this package. Enjoy developing your Capacitor project with enhanced user agent capabilities!