---
title: "Using the cap-browser package"
description: "This tutorial will guide you through the process of using the cap-browser package in your Capacitor app."
created_at: "2021-11-29"
published: true
slug: capbrowser
---

# Using the cap-browser package

The `cap-browser` package is a Capacitor plugin that allows you to open a web browser within your Capacitor app. This can be useful when you want to display external websites or web content within your app.

## Installation

To use the `cap-browser` package, you need to install it in your Capacitor project. Open your terminal or command prompt and navigate to your project directory. Then run the following command:

```bash
npm install @capacitor/browser
```

## Usage

After installing the `cap-browser` package, you can import and use it in your app code.

First, import the `Browser` plugin from `@capacitor/browser`:

```typescript
import { Browser } from '@capacitor/browser';
```

Next, you can use the `open` method to open a website in a web browser:

```typescript
async function openBrowser() {
  const result = await Browser.open({ url: 'https://example.com' });
  
  if (result.completed) {
    console.log('Browser opened successfully');
  }
}
```

You can also specify additional options when calling the `open` method. For example, you can specify a `presentationStyle` to determine how the browser window is presented:

```typescript
async function openBrowserWithOptions() {
  const result = await Browser.open({
    url: 'https://example.com',
    presentationStyle: 'popover'
  });
  
  if (result.completed) {
    console.log('Browser opened successfully');
  }
}
```

The `cap-browser` package also provides other methods like `close`, `prefetch`, and `removeAllListeners` for managing the browser instance. You can refer to the official documentation for more details on these methods.

## Conclusion

In this tutorial, we learned how to use the `cap-browser` package to open a web browser within a Capacitor app. We covered the installation process, basic usage of the `open` method, and how to specify additional options. With this knowledge, you can now incorporate web content seamlessly into your Capacitor app.

Remember to refer to the official documentation for more advanced usage and configuration options.

Happy coding!