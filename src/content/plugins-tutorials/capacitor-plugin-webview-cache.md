---
title: "Using capacitor-plugin-webview-cache"
description: "A tutorial on how to use the capacitor-plugin-webview-cache package"
created_at: "2021-12-10"
published: true
slug: "capacitor-plugin-webview-cache"
---

# Using capacitor-plugin-webview-cache

In this tutorial, we will learn how to use the capacitor-plugin-webview-cache package to add caching functionality to your Capacitor-based web application.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, you can install Capacitor globally by running the following command:

```cmd
npm install -g @capacitor/core @capacitor/cli
```

Next, install the capacitor-plugin-webview-cache package by running the following command in your project's root directory:

```cmd
npm install capacitor-plugin-webview-cache
```

## Adding the Plugin to Your Project

Once the capacitor-plugin-webview-cache package is installed, you need to add it to your Capacitor project. Run the following command to add the plugin:

```cmd
npx cap plugin add capacitor-plugin-webview-cache
```

This command will add the plugin to your project's dependencies and update the native project files accordingly.

## Configuration

To configure the capacitor-plugin-webview-cache package, you need to add the necessary configuration options to your project. These options can be set in your `capacitor.config.json` file.

Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "CapacitorWebViewCache": {
      "clearSessionCache": true,
      "clearCacheFolder": true,
      "cacheFolder": "my-cache-folder",
      "cacheAllowList": ["https://example.com"]
    }
  }
}
```

- `clearSessionCache`: Set this option to `true` if you want to clear the webview session cache on each app launch. Default is `false`.
- `clearCacheFolder`: Set this option to `true` if you want to clear the entire webview cache folder on each app launch. Default is `false`.
- `cacheFolder`: Specify the name of the cache folder. Default is `WebViewCache`.
- `cacheAllowList`: Specify a list of URLs that should be allowed to be cached. By default, all URLs are allowed.

## Usage

Once the capacitor-plugin-webview-cache package is configured, you can use the caching functionality in your web application.

To enable caching for a specific web view, use the `setCacheEnabled` method:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorWebViewCache } = Plugins;

CapacitorWebViewCache.setCacheEnabled({ enabled: true });
```

To disable caching for a web view, use the `setCacheEnabled` method with `enabled: false`:

```typescript
CapacitorWebViewCache.setCacheEnabled({ enabled: false });
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-webview-cache package to add caching functionality to our Capacitor-based web application. We have seen how to install the package, add it to the project, configure the caching options, and use the caching functionality in our web views.