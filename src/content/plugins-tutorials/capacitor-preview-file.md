# Using the @innoline/capacitor-preview-file Package

This tutorial will guide you through the process of using the `@innoline/capacitor-preview-file` package in your Capacitor app. This package allows you to preview files in your app using Capacitor's native features.

## Installation

To get started, install the `@innoline/capacitor-preview-file` package in your Capacitor app:

```bash
npm install @innoline/capacitor-preview-file
```

## Set Up Capacitor

Before using the package, make sure you have set up Capacitor in your project. If you haven't done so already, run the following commands:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

## Import and Initialize the Plugin

Next, import and initialize the plugin in your app's main `index.ts` file:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPreviewFile } = Plugins;
```

## Preview a File

To preview a file using the `@innoline/capacitor-preview-file` package, use the `previewFile()` method. Here's an example of how you can preview a file:

```typescript
async function previewFile() {
  const { path } = await CapacitorPreviewFile.previewFile({
    url: 'https://example.com/path/to/file.pdf',
    filename: 'example.pdf',
  });
}
```

In the above example, `url` represents the URL of the file you want to preview, and `filename` represents the name of the file.

## Conclusion

In this tutorial, you have learned how to use the `@innoline/capacitor-preview-file` package to preview files in your Capacitor app. This package provides a simple way to integrate file preview functionality into your app using Capacitor's native features.

---

title: "Using @innoline/capacitor-preview-file Package"
description: "A tutorial on how to use the @innoline/capacitor-preview-file package in your Capacitor app."
created_at: "2022-11-01"
published: true
slug: "capacitor-preview-file"
