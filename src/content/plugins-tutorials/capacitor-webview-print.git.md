```markdown
---
"title": "Using capacitor-webview-print Package Tutorial",
"description": "Learn how to utilize the capacitor-webview-print package in your Capacitor app to print webviews.",
"created_at": "2022-01-17",
"published": true,
"slug": "capacitor-webview-print.git"
---

# Using capacitor-webview-print Package Tutorial

In this tutorial, you will learn how to use the capacitor-webview-print package to print webviews in your Capacitor app.

## Installation

To get started, install the capacitor-webview-print package by running the following command in your terminal:

```bash
npm install capacitor-webview-print
npx cap sync
```

## Example

Here is an example demonstrating how to print a webview using the capacitor-webview-print package:

```typescript
import { WebviewPrint } from 'capacitor-webview-print';

public async printWebview(fileName: string): Promise<void> {
  await WebviewPrint.print({ name: fileName });
}
```

## API

The capacitor-webview-print package provides the following API:

### `print(options: PrintOptions) => Promise<void`

This function triggers a webview print event with the specified options.

#### Interfaces

##### PrintOptions

- **`name`: string** - Name of the file to be printed. This is a required attribute.

**Since:** 6.0.0

```

```