---
title: Using capacitor-plugin-webview-cache-extended Package
description: A tutorial on how to use the capacitor-plugin-webview-cache-extended package to extend webview functionality in Capacitor.
created_at: 2022-01-28
published: true
slug: capacitor-plugin-webview-cache-extended.git
locale: en
---

# Using capacitor-plugin-webview-cache-extended Package

This tutorial will guide you on how to use the capacitor-plugin-webview-cache-extended package to extend webview functionality in Capacitor.

## Installation

You can install the `capacitor-plugin-webview-cache-extended` package using npm:

```bash
npm install capacitor-plugin-webview-cache-extended
npx cap sync
```

## API

The plugin provides the following API:

<docgen-index></docgen-index>

<docgen-api>
<!-- API documentation will be generated here -->
</docgen-api>

## Implementation

### 1. Import the Plugin into Your Project

```ts
import 'capacitor-plugin-webview-cache-extended';
import { WebViewCacheExtended } from 'capacitor-plugin-webview-cache-extended';
```

### 2. Use the Plugin Functions

You can now use the functions provided by the `WebViewCacheExtended`:

```ts
const storage = WebViewCacheExtended.getStoragePath();
console.log('Storage Path:', storage);

WebViewCacheExtended.clearCache().then(() => {
  console.log('Cache cleared successfully');
});
```

## Conclusion

In this tutorial, you learned how to install and use the `capacitor-plugin-webview-cache-extended` package to extend webview functionality in your Capacitor project. Explore more functions and features as needed.
