---
title: Using capacitor-print-webview Package
description: This tutorial will guide you on how to use the capacitor-print-webview package to print the webview in a Capacitor App.
created_at: 2022-01-21
published: true
slug: capacitor-print-webview
---

# Using capacitor-print-webview Package

In this tutorial, you will learn how to use the capacitor-print-webview package to print the webview in a Capacitor App.

## Install

First, install the `capacitor-print-webview` package by running the following command in your terminal:

```bash
npm install capacitor-print-webview
npx cap sync
```

## Usage

After installing the package, you can call the `print()` function to print the webview. Here is an example of how to use it in your TypeScript code:

```typescript
import { PrintWebview } from 'capacitor-print-webview';
...
await PrintWebview.print();
```

That's it! You have successfully printed the webview using the capacitor-print-webview package.
