---
"title": "Using capacitor-webview-print Package Tutorial"
"description": "This tutorial will guide you on how to use the capacitor-webview-print plugin in your Capacitor project to print the webview in Web, iOS, and Android platforms."
"created_at": "2021-12-27"
"published": true
"slug": "capacitor-webview-print"
---

# Using capacitor-webview-print Package Tutorial

In this tutorial, we will learn how to utilize the `capacitor-webview-print` Capacitor plugin to print the webview in your project. This plugin supports Web, iOS, and Android platforms.

## Installation

To install the `capacitor-webview-print` package, run the following command:

```bash
npm install capacitor-webview-print
npx cap sync
```

## Usage

You can print the webview by calling the `print()` method provided by the `capacitor-webview-print` plugin.

```typescript
import { WebviewPrint } from 'capacitor-webview-print';

public async printWebview(fileName: string): Promise<void> {
  await WebviewPrint.print({ name: fileName });
}
```

## Platform Support

- Web
- iOS
- Android

## API

The `capacitor-webview-print` plugin provides the following API:

### print(options: PrintOptions)

Trigger a webview print event with the specified options.

- `options`: Object containing the print options.

#### Interfaces

`PrintOptions` interface:

| Prop       | Type                | Description                                                    | Since  |
| ---------- | ------------------- | -------------------------------------------------------------- | -----  |
| `name`     | `string`            | Name of the file to be printed. This is a required attribute.  | 6.0.0  |

```
