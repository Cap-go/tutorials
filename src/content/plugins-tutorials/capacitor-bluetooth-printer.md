---
title: "Using @kduma-autoid/capacitor-bluetooth-printer"
description: "This tutorial will guide you on how to use the @kduma-autoid/capacitor-bluetooth-printer package to handle POS printers via Bluetooth in your Capacitor project."
created_at: "2022-10-20"
published: true
slug: capacitor-bluetooth-printer
---

# Using @kduma-autoid/capacitor-bluetooth-printer

In this tutorial, we will learn how to use the @kduma-autoid/capacitor-bluetooth-printer package to handle POS printers via Bluetooth in your Capacitor project. 

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- A Bluetooth-supported POS printer

## Installation

To install the @kduma-autoid/capacitor-bluetooth-printer package, we need to follow these steps:

1. Open your terminal or command prompt.

2. Navigate to your Capacitor project's root directory.

3. Run the following command to install the package:

```shell
npm install @kduma-autoid/capacitor-bluetooth-printer
```

## Usage

Once the package is installed, we can now start using it in our project. 

1. Import the package in your JavaScript or TypeScript file:

```javascript
import '@kduma-autoid/capacitor-bluetooth-printer';
import { Plugins } from '@capacitor/core';
```

2. Use the `Plugins` object to access the `BluetoothPrinter` plugin:

```javascript
const { BluetoothPrinter } = Plugins;
```

3. Connect to the Bluetooth printer by calling the `connect` method:

```javascript
BluetoothPrinter.connect({ address: 'YOUR_BLUETOOTH_ADDRESS' });
```

Make sure to replace `YOUR_BLUETOOTH_ADDRESS` with the actual address of your Bluetooth printer.

4. Print a string using the `print` method:

```javascript
BluetoothPrinter.print({ text: 'Hello, World!' });
```

You can customize the text that will be printed by replacing `'Hello, World!'` with your desired string.

5. Disconnect from the Bluetooth printer by calling the `disconnect` method:

```javascript
BluetoothPrinter.disconnect();
```

Your Capacitor project is now capable of handling POS printers via Bluetooth using the @kduma-autoid/capacitor-bluetooth-printer package. 

## Conclusion

In this tutorial, we have learned how to install and use the @kduma-autoid/capacitor-bluetooth-printer package to handle POS printers via Bluetooth in your Capacitor project. Now you can easily integrate Bluetooth printing functionality into your application. Happy coding!
