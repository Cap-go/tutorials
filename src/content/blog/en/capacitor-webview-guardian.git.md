---
title: "Using the @capgo/capacitor-webview-guardian Package"
description: "A step-by-step tutorial on how to integrate and use the @capgo/capacitor-webview-guardian package in your Capacitor project."
created_at: 2022-01-26
published: true
slug: capacitor-webview-guardian.git
locale: en
---

# Using the @capgo/capacitor-webview-guardian Package

If you want to add additional security layers to your Capacitor webview, the `@capgo/capacitor-webview-guardian` package can help you achieve this. Follow the steps below to integrate and use this package effectively:

## Step 1: Installation
Begin by installing the `@capgo/capacitor-webview-guardian` package to your Capacitor project. You can do this using npm:

```bash
npm install @capgo/capacitor-webview-guardian
```

## Step 2: Import the Package
Next, you need to import the package into your project. You can do this in your component where you want to use the webview guardian:

```javascript
import 'capacitor-webview-guardian';
```

## Step 3: Initialize the Package
Make sure to initialize the `@capgo/capacitor-webview-guardian` package in your project. You can typically do this in the initialization phase of your app:

```javascript
import { Plugins } from '@capacitor/core';

const { WebviewGuardian } = Plugins;

WebviewGuardian.initialize();
```

## Step 4: Customize Configuration
You can customize the configuration of the webview guardian according to your project requirements. Here is an example of how you can configure the webview guardian:

```javascript
WebviewGuardian.configure({
  blockExternalNavigation: true,
  blockDownloads: true,
  enableFraudDetection: true,
});
```

## Step 5: Implement Guardian Actions
You can implement various guardian actions based on user interactions. For example, here is how you can handle a download request:

```javascript
WebviewGuardian.addListener('downloadRequested', (data) => {
  // Handle the download request here
});
```

## Step 6: Additional Features
Explore additional features and actions provided by the `@capgo/capacitor-webview-guardian` package to enhance the security of your webview.

By following these steps, you can effectively integrate and use the `@capgo/capacitor-webview-guardian` package in your Capacitor project to add an extra layer of security to your webview environment.
