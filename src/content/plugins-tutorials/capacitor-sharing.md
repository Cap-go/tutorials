---
title: "Using Capacitor Sharing Package"
description: "In this tutorial, we will learn how to use the Capacitor Sharing package to implement sharing functionality in your Capacitor app."
created_at: "2021-10-10"
published: true
slug: "capacitor-sharing"
---

# Using Capacitor Sharing Package

In this tutorial, we will learn how to use the Capacitor Sharing package to implement sharing functionality in your Capacitor app.

## Installation

To start using the Capacitor Sharing package, you first need to install it in your project. Open your terminal and run the following command:

```
npm install @capacitor/share
```

## Importing the Package

After installing the package, you need to import it in your project. Open the file where you want to use the sharing functionality and add the following import statement at the top:

```typescript
import { Share } from '@capacitor/share';
```

## Sharing Text

To share text in your app, you can use the `shareText` function provided by the Capacitor Sharing package. Here's an example:

```typescript
async function shareText() {
  const { Share } = Plugins;
  await Share.share({
    title: 'Share Title',
    text: 'This is the text to be shared',
  });
}
```

In the code above, we are using the `Share.share` function to share a text with a title. You can customize the title and text according to your needs.

## Sharing File

If you want to share a file in your app, you can use the `shareFile` function provided by the Capacitor Sharing package. Here's an example:

```typescript
async function shareFile() {
  const { Share } = Plugins;
  await Share.share({
    title: 'Share File',
    fileUrl: 'https://example.com/path/to/file.pdf',
  });
}
```

In the code above, we are using the `Share.share` function to share a file. You need to provide the URL of the file you want to share.

## Conclusion

In this tutorial, we have learned how to use the Capacitor Sharing package to implement sharing functionality in your Capacitor app. We have explored how to share text and files using the package's functions.

Feel free to explore the Capacitor Sharing package's documentation for more advanced usage and options.

Keep sharing!
