---
title: "Using @teamhive/capacitor-webview-overlay Package"
description: "This tutorial will guide you through the steps of using the @teamhive/capacitor-webview-overlay package to create a webview overlay in your Capacitor app."
created_at: "2022-03-30"
published: true
slug: "capacitor-webview-overlay"
---

# Using @teamhive/capacitor-webview-overlay Package

This tutorial will guide you through the steps of using the `@teamhive/capacitor-webview-overlay` package to create a webview overlay in your Capacitor app.

## Installation

To get started, first install the `@teamhive/capacitor-webview-overlay` package using npm:

```bash
npm install @teamhive/capacitor-webview-overlay
```

Next, sync the Capacitor project:

```bash
npx cap sync
```

## Usage

1. Import the `WebviewOverlay` class from the `@teamhive/capacitor-webview-overlay` package:

```javascript
import { WebviewOverlay } from '@teamhive/capacitor-webview-overlay';
```

2. Create a new instance of the `WebviewOverlay` class to control a separate webview:

```javascript
const webview = new WebviewOverlay();
```

3. Prepare an empty HTML element to determine the position and dimensions of the webview:

```html
<div id="webviewContainer"></div>
```

4. Initialize the webview overlay using the HTML container element:

```javascript
const container = document.querySelector('#webviewContainer');
webview.initialize(container);
```

5. Display the webview by providing the URL or HTML content:

```javascript
webview.display('https://example.com');
```
  
or

```javascript
const htmlContent = '<h1>Welcome to My Webview Overlay!</h1>';
webview.display(content);
```

6. If you need to overlay any app UI elements on the webview, you can capture a screen image of the webview using the `capture` method:

```javascript
const screenshot = await webview.capture();
```

That's it! You have successfully integrated the `@teamhive/capacitor-webview-overlay` package into your Capacitor app. You can now customize and enhance your webview overlay based on your specific requirements.

For more details and implementation examples, you can refer to the example project provided with the package.

Please note that this package requires a good understanding of Capacitor and webview concepts. Make sure to refer to the official Capacitor documentation for more information.

Happy coding!