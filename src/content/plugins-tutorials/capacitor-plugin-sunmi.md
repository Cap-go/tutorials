---
title: "Using the Capacitor Plugin Sunmi"
description: "A tutorial on how to use the @bistroo/capacitor-plugin-sunmi package in your Capacitor project"
created_at: "2022-01-12"
published: true
slug: capacitor-plugin-sunmi
---

# Using the Capacitor Plugin Sunmi

This tutorial will guide you through the process of using the `@bistroo/capacitor-plugin-sunmi` package in your Capacitor project. This plugin allows you to interact with Sunmi devices and provides functionality related to printing and NFC.

## Installation

To get started, you need to install the `@bistroo/capacitor-plugin-sunmi` package. Open your terminal and run the following command:

```bash
pnpm add -D @bistroo/capacitor-plugin-sunmi
```

## Basic Usage

### Starting the Buffer

Before sending any commands to the Sunmi device, you need to start the buffer. This is done using the `start()` method from the `Sunmi` object:

```typescript
import { Sunmi } from '@bistroo/capacitor-plugin-sunmi'

// Start the buffer
Sunmi.start()
```

### Sending Text

To add text to the buffer, you can use the `text()` method. Provide the text content as a parameter:

```typescript
Sunmi.text({ text: 'Hello, world!' })
```

### Adding a Line

You can add a line to the buffer using the `line()` method. This can be helpful for separating sections or providing visual breaks in the printed output. Specify the text of the line as a parameter:

```typescript
Sunmi.line({ text: '-------------------', wrap: true })
```

### Printing the Buffer

Once you have added all the desired content to the buffer, you can print it using the `print()` method:

```typescript
await Sunmi.print()
```

## Additional Functionality

The `@bistroo/capacitor-plugin-sunmi` package provides several other methods and options for interacting with Sunmi devices. Some of the notable ones include:

- `table()`: Allows you to print tabular data by providing an array of rows with values, sizes, and alignments.
- `image()`: Prints an image from a specified URL or file path.
- `fontSize()`: Sets the font size for the printed content.
- `align()`: Specifies the alignment of the text ('LEFT', 'CENTER', or 'RIGHT').

For detailed information about these methods and their usage, refer to the official documentation of the package.

## Conclusion

In this tutorial, you learned how to use the `@bistroo/capacitor-plugin-sunmi` package to interact with Sunmi devices in your Capacitor project. You explored the basic usage of the plugin, including starting the buffer, adding text and lines, and printing the buffer. Additionally, you discovered some of the other functionality provided by the package.

Now, you can utilize the Sunmi plugin to enhance your app's capabilities by incorporating printing and NFC functionalities specific to Sunmi devices. Happy coding!