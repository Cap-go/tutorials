---
"title": "Using @bcyesil/capacitor-plugin-printer Package",
"description": "This blog post provides a tutorial on how to use the @bcyesil/capacitor-plugin-printer package for printing HTML, text, and images in iOS/Android apps.",
"created_at": "2022-03-21",
"published": true,
"slug": "capacitor-plugin-printer.git"
---

# Using @bcyesil/capacitor-plugin-printer Package

The `@bcyesil/capacitor-plugin-printer` package is a Capacitor plugin that allows you to print HTML, text, and images in iOS/Android apps. This tutorial will guide you through the installation and usage of this package.

## Installation

To install the `@bcyesil/capacitor-plugin-printer` package, run the following command in your project directory:

```bash
npm install @bcyesil/capacitor-plugin-printer
npx cap sync
```

## Usage

1. **Import the Printer module in your code:**

```typescript
import { Printer } from '@bcyesil/capacitor-plugin-printer';
```

2. **Print Text:**

To print plain text, use the following code snippet:

```typescript
Printer.print({ content: 'Lorem ipsum...' })
```

3. **Print HTML:**

You can print HTML content with inline styling. For example, to print an HTML heading, use:

```typescript
Printer.print({ content: '<h1>Lorem</h1>' })
```

4. **Print Multiple HTML Elements:**

If you want to print multiple HTML elements, you can concatenate them and pass as a string. Here is an example:

```typescript
let contentTest: string = '';
contentTest += '<li style="color:green">Tea</li>';
contentTest += '<li style="font-size:50px">Coffee</li>';
Printer.print({ content: contentTest });
```

5. **Print Images with HTML:**

To print images using HTML, you can include the image source in the HTML content. For example:

```typescript
Printer.print({ content: '<img src="base64/url/path">' })
```

6. **Print Base64 Content:**

Starting from version 0.0.5, you can print Base64-encoded content. Here is an example:

```typescript
Printer.print({ content: 'base64:...' })
```

## Conclusion

In this tutorial, we have covered the installation and basic usage of the `@bcyesil/capacitor-plugin-printer` package. This package provides a convenient way to print HTML, text, and images in your iOS and Android apps. Explore the package further to leverage additional features for printing in your applications.