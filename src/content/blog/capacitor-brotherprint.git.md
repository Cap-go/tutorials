```markdown
---
"title": "Using @rdlabo/capacitor-brotherprint Package",
"description": "Step-by-step tutorial on how to use the @rdlabo/capacitor-brotherprint package in a Capacitor project for printing with Brother printers.",
"created_at": "2023-10-17",
"published": true,
"slug": "capacitor-brotherprint.git"
---

# Using @rdlabo/capacitor-brotherprint Package

Capacitor Brother Print is a native Brother Print SDK implementation for iOS & Android, which allows for printing with Brother printers like QL-820NW and QL-800.

## Installation

To install the package, use the following command:

```bash
npm install @rdlabo/capacitor-brotherprint@git@github.com:rdlabo-team/capacitor-brotherprint.git
```

## Usage

1. Import the necessary modules in your file:

```typescript
import { Plugins } from '@capacitor/core'
const { BrotherPrint } = Plugins
import { BrotherPrintOptions } from '@rdlabo/capacitor-brotherprint'
```

2. Add event listeners for different print outcomes:

```typescript
// Success to print
BrotherPrint.addListener('onPrint', (info) => {
  console.log('onPrint')
})

// Failed to communicate with printer
BrotherPrint.addListener('onPrintError', (info) => {
  console.log('onPrintError')
})

// Failed to communicate with printer
BrotherPrint.addListener('onPrintFailedCommunication', (info) => {
  console.log('onPrintFailedCommunication')
})
```

3. Print an image:

```typescript
BrotherPrint.printImage({
  printerType: 'QL-820NW',
  encodedImage: 'base64 removed mime-type', // base64
} as BrotherPrintOptions)
```

4. Print with Network:

```typescript
const wifi = () =>
  new Promise((resolve) => {
    BrotherPrint.addListener('onIpAddressAvailable', (info) => {
      resolve(info)
    })
  })

const ble = () =>
  new Promise((resolve) => {
    BrotherPrint.addListener('onBLEAvailable', (info) => {
      resolve(info)
    })
  })

Promise.all([wifi(), ble()]).then((values) => {
  console.log(values)
})

BrotherPrint.searchWiFiPrinter()
BrotherPrint.searchBLEPrinter()
```

## Android Configuration

For Android configuration, add the plugin initialization to the MainActivity file:

```java
import jp.rdlabo.capacitor.plugin.brotherprint.BrotherPrint;

this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    ...
    add(BrotherPrint.class);
    ...
}});
```

Download `BrotherPrintLibrary.aar` and include it in your Android project. Refer to the [Brother Mobile SDK guide](https://support.brother.co.jp/j/s/support/html/mobilesdk/guide/getting-started/getting-started-android.html) for more details.

## iOS Configuration

Coming soon...

## Run Demo

To run the demo, follow these steps:

```bash
cd demo/angular
npm install && npm run build
npx cap copy
npx cap open ios
```

This tutorial provides a comprehensive guide on how to integrate and utilize the @rdlabo/capacitor-brotherprint package in your Capacitor project for smooth printing experiences with Brother printers.
```