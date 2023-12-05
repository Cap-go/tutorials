---
title: "Using capacitor-print Package"
description: "A tutorial on how to use the capacitor-print package for printing in Capacitor apps."
created_at: "2021-10-10"
published: true
slug: "capacitor-print"
---

# Using capacitor-print Package

In this tutorial, we will learn how to use the `capacitor-print` package to enable printing functionality in Capacitor apps.

## Step 1: Install the Package

To begin, let's install the `capacitor-print` package. Open your terminal and navigate to your Capacitor app project directory. Run the following command:

```bash
npm install capacitor-print
```

## Step 2: Import the Package

Once the package is installed, we need to import it into our project. In your project's main TypeScript file (typically `app.ts` or `main.ts`), add the following import statement:

```typescript
import 'capacitor-print';
```

## Step 3: Initialize the Plugin

Before we can use the `capacitor-print` plugin, we need to initialize it. In the same TypeScript file, initialize the plugin by adding the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { PrintPlugin } = Plugins;

// ...

PrintPlugin.initialize();
```

## Step 4: Print a Document

Now that the plugin is initialized, we can use it to print a document. To print a document, we first need to obtain the document content. This could be an HTML string, a URL to a web page, or a file path.

For example, let's say we have an HTML document stored in a variable called `htmlContent`. To print this document, use the following code:

```typescript
PrintPlugin.print({
  htmlContent: htmlContent
})
  .then(() => {
    // Printing succeeded
    console.log('Printing succeeded');
  })
  .catch((error) => {
    // Printing failed
    console.error('Printing failed:', error);
  });
```

Make sure to handle any potential errors by using the `catch` block.

## Step 5: Customize the Print Options

The `print` function also accepts optional print options to customize the printing process. These options include page size, page orientation, and more. Here's an example:

```typescript
PrintPlugin.print({
  htmlContent: htmlContent,
  options: {
    pageSize: 'A4',
    landscape: true,
    marginTop: '10mm',
    marginBottom: '10mm',
    marginLeft: '10mm',
    marginRight: '10mm'
  }
})
  .then(() => {
    // Printing succeeded
    console.log('Printing succeeded');
  })
  .catch((error) => {
    // Printing failed
    console.error('Printing failed:', error);
  });
```

By providing options, you can customize the appearance of the printed document according to your needs.

## Conclusion

In this tutorial, we learned how to use the `capacitor-print` package to enable printing functionality in Capacitor apps. We covered the installation process, initialization of the plugin, printing documents, and customizing print options. Now you can easily incorporate printing capabilities into your Capacitor app.

Please note that the `capacitor-print` package may have additional features and settings that are not covered in this tutorial. For more information, refer to the official documentation of the package.

Happy printing!