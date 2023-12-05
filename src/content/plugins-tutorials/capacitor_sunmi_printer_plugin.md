---
title: "Tutorial: Using capacitor-plugin-sunmi-printer package"
description: "Learn how to use the capacitor-plugin-sunmi-printer package to print on internal printers of Sunmi POS devices."
created_at: "2022-08-01"
published: true
slug: "capacitor_sunmi_printer_plugin"
---

# Tutorial: Using capacitor-plugin-sunmi-printer package

In this tutorial, you will learn how to use the `capacitor-plugin-sunmi-printer` package to print on the internal printers of Sunmi POS devices. This package provides an adapter for easily integrating printing functionality into your Capacitor app.

## Installation

To get started, you need to install the `capacitor-plugin-sunmi-printer` package. Open your terminal and run the following command:

```bash
npm install @kduma-autoid/capacitor-sunmi-printer
npx cap sync
```

## Configuration

After installing the package, you may need to configure it in your project. By default, the service is automatically bound on load. If you want to disable auto binding, you can modify the plugin configuration in your `capacitor.config.ts` file.

```typescript
/// <reference types="@kduma-autoid/capacitor-sunmi-printer" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.company.app",
  ...
  plugins: {
    SunmiPrinter: {
      bindOnLoad: true
    }
  }
}
export default config;
```

## Usage

To use the `capacitor-plugin-sunmi-printer` package, you need to import the `Sunmi` object from the package.

```typescript
import { Sunmi } from '@bistroo/capacitor-plugin-sunmi'
```

### Start Buffer

Before printing, you can start a buffer for storing the content to be printed. This allows you to add multiple items to the buffer before committing the print job.

```typescript
Sunmi.start()
```

### Adding Text Lines

You can add text lines to the print buffer using the `line` method. The following example adds a line of text to the buffer:

```typescript
Sunmi.line('Hello, World!')
```

### Commit Buffer and Print

After adding the desired content to the buffer, you can commit the buffer and trigger the printing process by calling the `print` method. This method returns a promise that resolves when the print job is completed.

```typescript
await Sunmi.print()
```

### Additional Printing Features

The `capacitor-plugin-sunmi-printer` package provides several additional methods for customizing the printing process:

- `table`: Prints a table with multiple rows.
- `text`: Adds plain text to the print buffer.
- `wrap`: Changes the wrap mode for subsequent text.
- `bold`: Sets the text style to bold.
- `normal`: Sets the text style to normal.
- `align`: Sets the text alignment to left, center, or right.
- `image`: Prints an image.
- `fontSize`: Sets the font size.
- `deviceInfo`: Retrieves the device information.

Refer to the official package documentation for more details on these methods and their usage.

## Conclusion

In this tutorial, you have learned how to use the `capacitor-plugin-sunmi-printer` package to print on the internal printers of Sunmi POS devices. You have also explored various features and customization options provided by the package. Now, you can integrate printing functionality into your Capacitor app with ease.

Happy printing!