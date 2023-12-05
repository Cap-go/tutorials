---
title: "Using the capacitor_qrcode package"
description: "Learn how to use the capacitor_qrcode package to scan QR codes in your Ionic application"
created_at: "2021-10-25"
published: true
slug: "capacitor_qrcode"
---

# Using the capacitor_qrcode package

The capacitor_qrcode package is a plugin for Capacitor that enables you to scan QR codes in your Ionic application. This package is based on the example provided by Google Vision and has been adapted for use with Capacitor.

## Installation

To install the capacitor_qrcode package, run the following command in your terminal:

```shell
npm i capacitor_qrcode -s
```

## Usage

Once you've installed the package, you can use it in your Ionic application as follows:

1. Import the necessary modules:

```typescript
import 'capacitor_qrcode';
import { Plugins } from '@capacitor/core';

const { QRCodePlugin } = Plugins;
```

2. Implement a function to open the QR code scanner:

```typescript
openQr() {
  QRCodePlugin.getCodeQR().then(res => {
    this.getSiteByCode(res.code);
  }).catch(err => {
    console.error(err);
  });
}
```

3. Call the `openQr` function to open the QR code scanner:

```typescript
this.openQr();
```

When the user scans a QR code, the `getSiteByCode` function will be called with the scanned code as its parameter.

That's it! You can now use the capacitor_qrcode package to scan QR codes in your Ionic application.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to contribute to the development of the capacitor_qrcode package. You can find the repository [here](https://github.com/your/repository/url).