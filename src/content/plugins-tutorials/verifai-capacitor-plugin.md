---
title: "Using the Verifai Capacitor Plugin"
description: "Learn how to integrate and use the Verifai Capacitor Plugin for advanced barcode scanning in your Ionic apps."
created_at: "2022-02-14"
published: true
slug: "verifai-capacitor-plugin"
---

# Using the Verifai Capacitor Plugin

In this tutorial, we will explore how to integrate and use the Verifai Capacitor Plugin in your Ionic applications. The Verifai Capacitor Plugin provides advanced barcode scanning capabilities, making it easier to implement barcode scanning in your apps.

## Getting Started

To begin, make sure you have the following pre-requisites installed:

- Node.js and npm
- Capacitor CLI
- Ionic CLI (optional)

## Installation

To install the Verifai Capacitor Plugin, run the following command in your project directory:

```bash
npm install verifai-capacitor-plugin
```

## Configuration

After installing the plugin, you need to configure it by adding your Verifai API key. You can obtain an API key by signing up on the Verifai website.

Open your `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "VerifaiPlugin": {
      "api_key": "YOUR_VERIFAI_API_KEY"
    }
  }
}
```

Make sure to replace `YOUR_VERIFAI_API_KEY` with your actual API key.

## Usage

Now that the plugin is installed and configured, you can start using it in your Ionic app. Import the `verifai-capacitor-plugin` package and use the provided methods for barcode scanning.

Here's an example of how to scan a barcode using the Verifai Capacitor Plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { VerifaiPlugin } = Plugins;

const scanBarcode = async () => {
  try {
    const result = await VerifaiPlugin.scanBarcode();
    console.log('Scanned barcode:', result.barcode);
  } catch (error) {
    console.error('Barcode scanning failed:', error);
  }
};
```

In this example, we import the `VerifaiPlugin` from the `@capacitor/core` package and use the `scanBarcode` method to initiate the barcode scanning process. The result of the scan is logged to the console.

You can customize the behavior of the barcode scanner by passing additional options to the `scanBarcode` method. Refer to the Verifai Capacitor Plugin's documentation for more information on available options.

## Conclusion

In this tutorial, you learned how to integrate and use the Verifai Capacitor Plugin in your Ionic applications. The Verifai Capacitor Plugin provides powerful barcode scanning capabilities, making it easier to implement barcode scanning functionality in your apps. You also learned how to configure the plugin and use it to scan barcodes.

To delve deeper into the Verifai Capacitor Plugin's features and explore advanced topics, refer to the official documentation and API reference.

Happy coding!