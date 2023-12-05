---
title: "Using @kduma-autoid/capacitor-sunmi-printer Package"
description: "A tutorial on how to use the @kduma-autoid/capacitor-sunmi-printer package to print on internal printers of Sunmi POS devices."
created_at: "2022-01-01"
published: true
slug: "capacitor-sunmi-printer"
---

# Using @kduma-autoid/capacitor-sunmi-printer Package

The `@kduma-autoid/capacitor-sunmi-printer` package is an adapter that allows you to print on the internal printers of Sunmi POS devices. In this tutorial, we will learn how to install and configure the package, as well as use its API to perform various printing operations.

## Installation

To install the `@kduma-autoid/capacitor-sunmi-printer` package, run the following command:

```bash
npm install @kduma-autoid/capacitor-sunmi-printer
npx cap sync
```

## Configuration

To configure the package, you can set the `bindOnLoad` option in the `capacitor.config.ts` file. By default, the package will automatically bind to the service on load. If you want to disable this behavior, set `bindOnLoad` to `false` in the plugin configuration:

```typescript
/// <reference types="@kduma-autoid/capacitor-sunmi-printer" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.company.app",
  ...
  plugins: {
    SunmiPrinter: {
      bindOnLoad: false
    }
  }
}
export default config;
```

## API

The `@kduma-autoid/capacitor-sunmi-printer` package provides the following API for printing operations:

### start()

Starts a new print buffer.

```typescript
SunmiPrinter.start();
```

### table(options)

Prints a table with the specified rows.

```typescript
const options = {
  rows: [
    { value: "Name", size: 1, alignment: 0 },
    { value: "Price", size: 1, alignment: 0 },
    { value: "Quantity", size: 1, alignment: 0 },
  ],
};
SunmiPrinter.table(options);
```

### text(options)

Prints a text string.

```typescript
const options = {
  text: "Hello, world!",
};
SunmiPrinter.text(options);
```

### line(options)

Prints a line of text.

```typescript
const options = {
  text: "This is a line of text.",
  wrap: true,
};
SunmiPrinter.line(options);
```

### wrap()

Enables text wrapping for subsequent printing operations.

```typescript
SunmiPrinter.wrap();
```

### bold()

Sets the font style to bold.

```typescript
SunmiPrinter.bold();
```

### normal()

Resets the font style to normal.

```typescript
SunmiPrinter.normal();
```

### align(options)

Aligns the text in the specified direction.

```typescript
const options = {
  direction: "LEFT",
};
SunmiPrinter.align(options);
```

### print()

Commits the print buffer and sends the print command to the printer.

```typescript
await SunmiPrinter.print();
```

### image(options)

Prints an image.

```typescript
const options = {
  image: "path/to/image.png",
};
SunmiPrinter.image(options);
```

### fontSize(options)

Sets the font size.

```typescript
const options = {
  size: 2,
};
SunmiPrinter.fontSize(options);
```

### deviceInfo()

Gets information about the Sunmi POS device.

```typescript
const info = await SunmiPrinter.deviceInfo();
console.log(info.serial_number);
console.log(info.model);
```

### addListener(eventName, listenerFunc)

Adds a listener to listen for printer state events.

```typescript
const handle = await SunmiPrinter.addListener("printer-state", (response) => {
  console.log(response.status);
});
```

## Conclusion

In this tutorial, we learned how to install and configure the `@kduma-autoid/capacitor-sunmi-printer` package. We also explored the various methods provided by the package's API to perform printing operations on Sunmi POS devices.