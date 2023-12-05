---
title: "Using the Capacitor WebView Package"
description: "Learn how to use the Capacitor WebView package in your app"
created_at: "2022-02-10"
published: true
slug: "capacitor-webview"
---

# Using the Capacitor WebView Package

In this tutorial, we will learn how to use the Capacitor WebView package to display web content within your Capacitor app.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, run the following command to install Capacitor globally:

```bash
npm install -g @capacitor/cli
```

Next, navigate to your project directory and run the following command to add the Capacitor WebView package:

```bash
npm install @capacitor/webview
```

## Integration

Once the package is installed, we need to integrate it into our app.

First, open the `capacitor.config.json` file in the root of your project directory and add the following code:

```json
{
  "plugins": {
    "WebView": {
      "iosScheme": "myapp",
      "allowFileAccess": true
    }
  }
}
```

Replace `"myapp"` with your app's custom scheme.

Next, open the `main.ts` file in your project's source code and import the Capacitor WebView plugin:

```typescript
import { defineCustomElements } from '@capacitor/webview';
```

Call the `defineCustomElements` function before `platform.ready()`:

```typescript
import { defineCustomElements } from '@capacitor/webview';

platform.ready().then(() => {
  // Other code...
  defineCustomElements(window);
});
```

## Usage

Now that we have integrated the Capacitor WebView package, we can use it to display web content in our app.

Import the Capacitor WebView plugin in the file where you want to use it:

```typescript
import { Plugins } from '@capacitor/core';
const { WebView } = Plugins;
```

To display a web page, use the `open` method:

```typescript
WebView.open({ url: 'https://example.com' });
```

You can also pass additional options to the `open` method, such as custom headers or a user agent:

```typescript
WebView.open({
  url: 'https://example.com',
  headers: {
    'Authorization': 'Bearer my-token'
  },
  userAgent: 'CustomUserAgent/1.0'
});
```

And that's it! You have successfully integrated and used the Capacitor WebView package in your app.

## Summary

In this tutorial, we learned how to integrate and use the Capacitor WebView package in a Capacitor app. We covered the installation process, integration steps, and basic usage of the WebView plugin to display web content. Now you can enhance your app by embedding web content seamlessly using the Capacitor WebView package.

Remember to check the official Capacitor documentation for more advanced usage and customization options.

Happy coding!