---
title: Using capacitor-webview-print Package
description: This markdown tutorial explains how to use the capacitor-webview-print package to print the webview in a Capacitor app.
created_at: 2021-10-15
published: true
slug: capacitor-webview-print
---

# Using capacitor-webview-print Package

The capacitor-webview-print package is a Capacitor plugin that allows you to print the webview in your Capacitor app. Follow the steps below to learn how to use this package:

## Install

```bash
npm install capacitor-webview-print
npx cap sync
```

## Example

```typescript
import { WebviewPrint } from 'capacitor-webview-print';

public async printWebview(fileName: string): Promise<void> {
  await WebviewPrint.print({ name: fileName });
}
```

In this example, the `printWebview` function takes a `fileName` parameter and uses the `WebviewPrint` class from the `capacitor-webview-print` package to print the webview.

## API

### print()

The `print()` method triggers a webview print event.

```typescript
print(options: PrintOptions) => Promise<void>
```

The `print()` method takes a `PrintOptions` object as a parameter. Here is the interface for `PrintOptions`:

#### PrintOptions

- `name`: Name of the file to be printed. This is a required attribute.

This tutorial covers the basic usage of the `capacitor-webview-print` package in a Capacitor app. You can explore more functionalities and options of this package as needed.
