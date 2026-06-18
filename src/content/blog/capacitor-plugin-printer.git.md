---
"title": "Printing with Capacitor Printer Plugin",
"description": "Learn how to easily print HTML, text, and images in your iOS and Android apps using the @bcyesil/capacitor-plugin-printer package.",
"created_at": "2022-01-19",
"published": true,
"slug": "capacitor-plugin-printer.git"
---

# Printing with Capacitor Printer Plugin

The Capacitor Printer Plugin, `@bcyesil/capacitor-plugin-printer`, is a powerful tool that allows you to print HTML, text, and images in your iOS and Android apps. This tutorial will guide you through the installation, setup, and usage of this package.

### Installation

To get started, install the `@bcyesil/capacitor-plugin-printer` package using npm:

```bash
npm install @bcyesil/capacitor-plugin-printer
npx cap sync
```

### Usage

1. Import the `Printer` module from the `@bcyesil/capacitor-plugin-printer` package in your code:

```typescript
import { Printer } from '@bcyesil/capacitor-plugin-printer';
```

2. Print plain text content:

```typescript
Printer.print({ content: 'Lorem ipsum...' });
```

3. Print HTML content with inline styling:

```typescript
Printer.print({ content: '<h1 style="color:blue;">Hello World</h1>' });
```

4. Print images with HTML:

```typescript
Printer.print({ content: '<img src="https://example.com/image.jpg">' });
```

5. Print Base64-encoded content:

```typescript
// Supports Base64-encoded PDFs and images
Printer.print({ content: 'base64:...'});
```

### Supported Platforms

- Android 5.1+
- iOS 13+

### Additional Features:

- Printing multiple HTML elements
- Printing images with inline CSS styling

By following this tutorial, you can easily integrate the Capacitor Printer Plugin into your app and provide a seamless printing experience for your users.