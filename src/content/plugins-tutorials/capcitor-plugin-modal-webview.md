---
title: "Using @twogate/capacitor-modal-webview Package"
description: "Learn how to incorporate the @twogate/capacitor-modal-webview package into your Capacitor app."
created_at: "2022-11-15"
published: true
slug: "capacitor-plugin-modal-webview"
---

# Using @twogate/capacitor-modal-webview Package

In this tutorial, we will walk through the process of integrating the @twogate/capacitor-modal-webview package into your Capacitor app. This package allows you to display a modal webview within your app and interact with it using Capacitor's native functionality.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:
- Capacitor CLI: `npm install -g @capacitor/cli`
- Capacitor Core: `npm install @capacitor/core`
- Capacitor WebView: `npm install @capacitor/webview`
- @twogate/capacitor-modal-webview: `npm install @twogate/capacitor-modal-webview`

## Step 1: Initialize a Capacitor App

If you haven't already, create a new Capacitor app by running the following commands:

```bash
npx @capacitor/cli create
cd <your-app-directory>
```

## Step 2: Install Required Dependencies

Navigate to your app's root directory and install the required dependencies:

```bash
npm install @capacitor/core @capacitor/webview @twogate/capacitor-modal-webview
```

## Step 3: Configure Capacitor

Make sure to configure Capacitor to use the WebView plugin. Open `capacitor.config.json` and add the following:

```json
{
  "plugins": {
    "WebView": {
      "iosScheme": "app",
      "allowBackForwardNavigationGestures": "false"
    }
  }
}
```

## Step 4: Set Up the Modal WebView

In your app's entry file (e.g., `src/App.tsx`), import the `Plugins` object from Capacitor and the `ModalWebView` plugin from the @twogate/capacitor-modal-webview package:

```typescript
import { Plugins } from '@capacitor/core';
import { ModalWebView } from '@twogate/capacitor-modal-webview';
```

Next, set up a method that will be triggered when you want to open the modal webview:

```typescript
async function openModalWebView() {
  const { value } = await ModalWebView.open({ 
    url: 'https://example.com',
    toolbarColor: '#000000',
    closeButtonColor: '#ffffff',
  });

  if (value === 'dismissed') {
    // Handle modal dismissal
  }
}
```

In the above example, we pass the `open` method an object with the URL of the web page to display and optional styling for the toolbar and close button.

## Step 5: Trigger the Modal

You can trigger the modal webview by calling the `openModalWebView` method. For example, you can add a button in your app's UI that calls this method when clicked:

```jsx
<button onClick={openModalWebView}>Open Modal WebView</button>
```

## Step 6: Handle Modal Dismissal

To handle the dismissal of the modal webview, you can check the returned value from the `open` method. If the modal is dismissed without any interaction, the value will be `'dismissed'`. You can add code inside the if statement to perform any necessary actions.

## Conclusion

In this tutorial, you learned how to incorporate the @twogate/capacitor-modal-webview package into your Capacitor app. You now have the ability to display a modal webview and interact with it using Capacitor's native functionality. This can be useful for integrating web-based content within your app.

Feel free to explore the documentation of the @twogate/capacitor-modal-webview package for more advanced usage and customization options.

Happy coding!