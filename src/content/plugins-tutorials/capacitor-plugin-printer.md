---
title: "Using @bcyesil/capacitor-plugin-printer Package"
description: "A tutorial on how to use the @bcyesil/capacitor-plugin-printer package for printing in iOS and Android apps."
created_at: "2022-10-11"
published: true
slug: "capacitor-plugin-printer"
---

# Using @bcyesil/capacitor-plugin-printer Package

This tutorial will guide you on how to use the @bcyesil/capacitor-plugin-printer package to print HTML content in iOS and Android apps. The @bcyesil/capacitor-plugin-printer package is a Capacitor plugin that supports printing in both platforms.

## Installation

To start using the @bcyesil/capacitor-plugin-printer package, you need to follow these steps:

1. Install the package using npm:
   ```bash
   npm install @bcyesil/capacitor-plugin-printer
   ```

2. Sync the Capacitor project to add the plugin:
   ```bash
   npx cap sync
   ```

## Usage

After installing the @bcyesil/capacitor-plugin-printer package, you can use the `Printer.print()` method to print HTML content. Here is an example of how to use it:

```typescript
import { Printer } from '@bcyesil/capacitor-plugin-printer';

// ...

const content = '<h1>Hello, World!</h1>';

Printer.print({ content })
  .then(() => {
    console.log('Print success');
  })
  .catch((error) => {
    console.error('Print error:', error);
  });
```

In the above example, we import the `Printer` class from the `@bcyesil/capacitor-plugin-printer` package. Then, we define the HTML content we want to print and call the `Printer.print()` method with the `content` parameter. The method returns a Promise that resolves when the printing is successful or rejects with an error if there's an issue with the printing process.

## Supported Platforms

The @bcyesil/capacitor-plugin-printer package supports the following platforms:

- Android 5.1+
- iOS 13+

## Supported Contents

The @bcyesil/capacitor-plugin-printer package supports printing the following types of content:

- HTML (with CSS inline styling)
- Text
- Images (as HTML)

## Examples

Here are some examples of how to use the @bcyesil/capacitor-plugin-printer package for different types of content:

### Printing Text

```typescript
const content = 'Lorem ipsum dolor sit amet';

Printer.print({ content })
  .then(() => {
    console.log('Print success');
  })
  .catch((error) => {
    console.error('Print error:', error);
  });
```

### Printing HTML

```typescript
const content = '<h1>Lorem ipsum</h1>';

Printer.print({ content })
  .then(() => {
    console.log('Print success');
  })
  .catch((error) => {
    console.error('Print error:', error);
  });
```

### Printing Multiple Lines with HTML

```typescript
let content = '';

content += '<li style="color: green;">Tea</li>';
content += '<li style="font-size: 50px;">Coffee</li>';
content += '<img src="https://picsum.photos/200">';

Printer.print({ content })
  .then(() => {
    console.log('Print success');
  })
  .catch((error) => {
    console.error('Print error:', error);
  });
```

### Printing Images with HTML

```typescript
const content = '<img src="base64/url/path">';

Printer.print({ content })
  .then(() => {
    console.log('Print success');
  })
  .catch((error) => {
    console.error('Print error:', error);
  });
```

### Printing HTML with Inline CSS

```typescript
const content = '<b style="color: red;">Lorem ipsum</b>';

Printer.print({ content })
  .then(() => {
    console.log('Print success');
  })
  .catch((error) => {
    console.error('Print error:', error);
  });
```

## Conclusion

In this tutorial, you have learned how to use the @bcyesil/capacitor-plugin-printer package to print HTML content in iOS and Android apps. You have seen how to install the package, use the `Printer.print()` method, and print different types of content. With this knowledge, you can now integrate printing functionality into your Capacitor apps using the @bcyesil/capacitor-plugin-printer package.