---
title: "Using the capacitor-webview-controller package"
description: "A tutorial on how to use the capacitor-webview-controller package in your Capacitor app."
created_at: "2022-08-21"
published: true
slug: "capacitor-webview-controller"
---

# Using the capacitor-webview-controller package

In this tutorial, we will learn how to integrate the capacitor-webview-controller package into your Capacitor app. The capacitor-webview-controller package allows you to easily create and manage webviews in your app.

## Step 1: Installation

To get started, open your terminal and navigate to your Capacitor app's root directory. Run the following command to install the capacitor-webview-controller package:

```bash
npm install capacitor-webview-controller
```

## Step 2: Importing the package

Once the package is installed, you can import it into your project by adding the following line to your `index.ts` file:

```typescript
import 'capacitor-webview-controller';
```

## Step 3: Creating a webview

To create a webview, you can use the `createWebView` method provided by the capacitor-webview-controller package. This method accepts a configuration object with options for the webview. Here's an example:

```typescript
import { WebView, WebViewController } from 'capacitor-webview-controller';

const webViewController = new WebViewController();

const config = {
  url: 'https://example.com',
  width: '100%',
  height: '100%',
};

const webview = webViewController.createWebView(config);
```

In the above example, we create a new instance of `WebViewController` and use it to call the `createWebView` method. We pass a configuration object with the `url`, `width`, and `height` options.

## Step 4: Controlling the webview

Once a webview is created, you can use the `showWebView` and `hideWebView` methods to control its visibility. Here's an example:

```typescript
webViewController.showWebView(webview);
```

The `showWebView` method accepts the webview instance as a parameter and makes it visible in your app. To hide the webview, you can use the `hideWebView` method:

```typescript
webViewController.hideWebView(webview);
```

## Step 5: Event handling

The capacitor-webview-controller package also provides event handling capabilities. You can use the `addEventListener` and `removeEventListener` methods to listen for and remove event listeners for events emitted by the webview. Here's an example:

```typescript
const eventListener = (event: WebViewEvent) => {
  console.log(event);
};

webViewController.addEventListener('webviewEvent', eventListener);

// Later, you can remove the event listener like this:
webViewController.removeEventListener('webviewEvent', eventListener);
```

In the above example, we define an event listener function and use the `addEventListener` method to subscribe to the `webviewEvent` event. We can then log the event data to the console. To remove the event listener, we call the `removeEventListener` method.

## Conclusion

In this tutorial, we learned how to integrate the capacitor-webview-controller package into a Capacitor app. We covered the installation process, creating a webview, controlling its visibility, and handling events emitted by the webview. With the capacitor-webview-controller package, you can easily add webviews to your app and interact with them programmatically.

Remember to check the official documentation of capacitor-webview-controller for more advanced features and options. Happy coding!