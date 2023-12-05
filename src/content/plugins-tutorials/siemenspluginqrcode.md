---
title: "Using my-siemens-plugin Package"
description: "A tutorial on how to use the my-siemens-plugin package to detect QR codes in an Ionic application."
created_at: "2022-09-28"
published: true
slug: "siemenspluginqrcode"
---

# Using my-siemens-plugin Package

This tutorial will guide you on how to use the my-siemens-plugin package to detect QR codes in an Ionic application. The my-siemens-plugin package is a Capacitor plugin that adapts the Google Vision QR code detection example to be used with Ionic.

## Installation

To install the my-siemens-plugin package, run the following command:

```bash
npm i my-siemens-plugin -s
```

## Steps

1. Insert the my-siemens-plugin code into the MainActivity.java file in the `onCreate` method:

```java
add(MySiemensPlugin.class);
```

2. Import the my-siemens-plugin package and the necessary dependencies:

```typescript
import 'my-siemens-plugin';
import { Plugins } from '@capacitor/core';

const { MySiemensPlugin } = Plugins;
```

3. Use the `getCodeQR` method to open the QR code scanner and retrieve the scanned code:

```typescript
openQr() {
  MySiemensPlugin.getCodeQR().then(res => {
    this.handleScannedCode(res.code);
  }).catch(err => {
    console.error(err);
  });
}

handleScannedCode(code: string) {
  // Handle the scanned code here
}
```

That's it! You have successfully integrated the my-siemens-plugin package into your Ionic application to detect QR codes. Now you can use the `openQr` method to open the QR code scanner and handle the scanned code.

Happy coding!