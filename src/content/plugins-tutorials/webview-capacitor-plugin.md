---
title: "Using the webview-capacitor-plugin"
description: "A tutorial on how to use the webview-capacitor-plugin in your Capacitor project"
created_at: "2022-10-27"
published: true
slug: "webview-capacitor-plugin"
---

# Using the webview-capacitor-plugin

In this tutorial, we will learn how to use the webview-capacitor-plugin in your Capacitor project. The webview-capacitor-plugin allows you to embed a web view in your app and communicate between the web view and the native layer using JavaScript.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project. If you haven't installed Capacitor yet, you can follow the [official Capacitor installation guide](https://capacitorjs.com/docs/getting-started) to get started.
- A basic understanding of HTML, CSS, and JavaScript.

## Step 1: Install the webview-capacitor-plugin

To use the webview-capacitor-plugin, you need to install it in your Capacitor project. Open your terminal and run the following command:

```bash
npm install webview-capacitor-plugin
```

This will install the webview-capacitor-plugin package and its dependencies in your project.

## Step 2: Configure the webview-capacitor-plugin

Once the package is installed, you need to configure the webview-capacitor-plugin in your project. Open the `capacitor.config.json` file and add the following code to the `plugins` section:

```json
"webview": {
  "androidOrigin": "http://localhost:8080",
  "androidScheme": "http",
  "iosOrigin": "*",
  "iosScheme": "webview"
}
```

Make sure to replace the `androidOrigin` and `iosScheme` values with your own values according to your project's requirements.

## Step 3: Add the web view to your project

To add the web view to your project, you need to create a new HTML file and add the following code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Web View Example</title>
</head>
<body>
  <h1>Welcome to the Web View</h1>
  <p>This is an example of a web view embedded in a Capacitor app.</p>

  <script src="webview.js"></script>
</body>
</html>
```

Save this file as `webview.html` in your project's `src` folder.

## Step 4: Load the web view in your app

To load the web view in your app, open the `src/main.ts` file and add the following code:

```ts
import { Capacitor } from '@capacitor/core';

if (Capacitor.isNative) {
  const { Webview } = Capacitor.Plugins;

  Webview.open({ url: 'webview.html' });
}
```

This code checks if the app is running in a native environment and opens the web view using the `Webview.open()` method.

## Step 5: Communicate between the web view and the native layer

To communicate between the web view and the native layer, you can use the `Webview` plugin's `postMessage()` method. Here's an example of how to send a message from the web view to the native layer:

```ts
import { Plugins } from '@capacitor/core';

const { Webview } = Plugins;

Webview.postMessage({ message: 'Hello from the web view!' });
```

To receive the message in the native layer, you can use the `addMessageHandler()` method:

```ts
import { Plugins } from '@capacitor/core';

const { Webview } = Plugins;

Webview.addMessageHandler('message', (data) => {
  console.log(data.message);
});
```

This code adds a message handler that listens for messages with the key `'message'` and logs the received message to the console.

## Conclusion

In this tutorial, we have learned how to use the webview-capacitor-plugin to embed a web view in a Capacitor project and communicate between the web view and the native layer. The webview-capacitor-plugin provides a powerful and flexible way to integrate web content into your app. Explore the [official plugin documentation](https://github.com/capacitor-community/webview) for more details and advanced usage.

Happy coding!