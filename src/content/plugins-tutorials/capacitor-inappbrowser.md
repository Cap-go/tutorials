---
title: "Using @capgo/inappbrowser Package"
description: "This tutorial will guide you on how to use the @capgo/inappbrowser package in your Capacitor app."
created_at: "2022-09-26"
published: true
slug: capacitor-inappbrowser
---

# Using @capgo/inappbrowser Package

In this tutorial, we will learn how to use the [@capgo/inappbrowser](https://www.npmjs.com/package/@capgo/inappbrowser) package in a Capacitor app. The `@capgo/inappbrowser` package provides a simple way to open an in-app browser within your Capacitor app.

## Installation

To get started, you need to install the package. Open your terminal and run the following command:

```bash
npm install @capgo/inappbrowser
```

## Importing the Plugin

To use the in-app browser functionality, you need to import the plugin in your application code. Open the file where you want to use the in-app browser and add the following line at the top:

```typescript
import { Plugins } from '@capacitor/core';

const { InAppBrowser } = Plugins;
```

## Opening the In-App Browser

To open the in-app browser, use the `open` method provided by the `InAppBrowser` plugin. Here's an example of how to open a URL in the in-app browser:

```typescript
InAppBrowser.open({
  url: 'https://www.example.com',
});
```

You can also customize the behavior of the in-app browser by passing additional options:

```typescript
InAppBrowser.open({
  url: 'https://www.example.com',
  toolbarColor: '#FF0000',
  closeButtonText: 'Close',
  closeButtonColor: '#FFFFFF',
});
```

## Closing the In-App Browser

To close the in-app browser programmatically, use the `close` method:

```typescript
InAppBrowser.close();
```

## Listening to Events

The `@capgo/inappbrowser` package also provides events that you can listen to. Here's an example of how to listen for the `browserFinished` event:

```typescript
InAppBrowser.addListener('browserFinished', (result) => {
  console.log('Browser finished:', result);
});
```

## Conclusion

In this tutorial, we learned how to use the `@capgo/inappbrowser` package in a Capacitor app. You learned how to install the package, import the plugin, open the in-app browser, close it programmatically, and listen to events. Now you can integrate in-app browsing functionality into your Capacitor app with ease.

Make sure to explore the official [documentation](https://www.npmjs.com/package/@capgo/inappbrowser) for more details and options provided by the `@capgo/inappbrowser` package.

Happy coding!