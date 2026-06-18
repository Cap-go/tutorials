```md
---
"title": "Printing WebView in Capacitor with capacitor-webview-print",
"description": "This tutorial will guide you on how to use the capacitor-webview-print package to print the content of a WebView in your Capacitor project.",
"created_at": "2022-01-17",
"published": true,
"slug": "capacitor-webview-print.git"
---

# Printing WebView in Capacitor with capacitor-webview-print

This tutorial will show you how to use the `capacitor-webview-print` package to enable printing of the content displayed in a WebView in your Capacitor app.

## Installation

To get started, install the `capacitor-webview-print` package by running the following command in your project directory:

```bash
npm install capacitor-webview-print
npx cap sync
```

## Usage

After installing the package, you can use it as shown in the example below:

```typescript
import { WebviewPrint } from 'capacitor-webview-print';

public async printWebview(fileName: string): Promise<void> {
  await WebviewPrint.print({ name: fileName });
}
```

## API

### `print(options: PrintOptions)`

This function triggers a print event on the WebView. Here is an example of how to use it:

```typescript
WebviewPrint.print({ name: 'myfile.pdf' });
```

### Interfaces

#### `PrintOptions`

- **`name`** (`string`): The name of the file to be printed. This is a required attribute.

```
```