# webview-plugin

The "Webview Plugin" for Capacitor seamlessly integrates web content within your native application, offering a bridge to display websites directly in a WebView. This plugin is a versatile solution for developers looking to enhance their app with web-based functionalities or content. It's perfect for displaying entire websites, web-based interfaces, or HTML content without leaving the app environment. The plugin supports a range of customization options to ensure the web content fits naturally within your app, providing a cohesive user experience. Whether you're building an application that leverages online resources, or simply need to show web content as part of your app's functionality, the Webview Plugin makes it straightforward and efficient.

## Install

```bash
npm install webview-plugin
npx cap sync
```

## API

<docgen-index>

* [`showWebView(...)`](#showwebview)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### showWebView(...)

```typescript
showWebView(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------

</docgen-api>


## Examples

### Angular

To use the "Webview Plugin" within an Angular application, follow this example which demonstrates how to integrate the plugin into a component. The example below illustrates how to display a WebView with a specific URL upon the component's initialization.

```typescript
// Import necessary modules
import { Component, OnInit } from '@angular/core';
// Ensure to adjust the import path based on your plugin's location
import { CapWebviewPlugin } from 'webview-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Component initialization method
  ngOnInit() {
    this.showWebView();
  }

  // Method to display the WebView
  async showWebView() {
    try {
      await CapWebviewPlugin.showWebView({ url: 'https://www.example.com' });
    } catch (error) {
      console.error('Error loading WebView', error);
    }
  }
}

### Typescript
For a simple TypeScript example without a specific framework like Angular, you can utilize the plugin as follows:

import { CapWebviewPlugin } from 'path-to-your-plugin/webview-plugin';

// Async function to demonstrate plugin usage
async function loadWebView() {
  try {
    await CapWebviewPlugin.showWebView({ url: 'https://www.example.com' });
  } catch (error) {
    console.error('Error loading WebView', error);
  }
}
