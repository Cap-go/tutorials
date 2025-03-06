---
"title": "How to Use @capacitor-community/barcode-scanner Package",
"description": "A step-by-step tutorial on integrating and using the @capacitor-community/barcode-scanner package for barcode scanning in Capacitor applications.",
"created_at": "2023-10-20",
"published": true,
"slug": "barcode-scanner.git"
---

# Using @capacitor-community/barcode-scanner in Capacitor Apps

In this tutorial, we will walk you through the process of integrating and using the `@capacitor-community/barcode-scanner` package in your Capacitor applications to enable barcode scanning functionality.

## Installation

To get started, you need to install the `@capacitor-community/barcode-scanner` package. Run the following command in your project directory:

```bash
npm install @capacitor-community/barcode-scanner
npx cap sync
```

### iOS

For iOS, ensure you set a usage description in your info.plist file. You can add it directly to the source code as follows:

1. Open the Info.plist (right-click > Open As > Source Code in Xcode).
2. Make the necessary changes inside `<dict></dict>` tags.

## Usage

Now that you have installed the package, you can start using it in your application. Below is an example of how you can implement barcode scanning functionality:

```js
import { Plugins } from '@capacitor/core'
const { MlkitBarcodescanner } = Plugins

export default defineComponent({
  setup() {
    const code = ref(null)
    const scanBarcode = async () => {
      let result = await MlkitBarcodescanner.scanBarcode()
      code.value = result
      console.log(result)
    }

    return {
      code,
      scanBarcode
    }
  }
})
```

This example demonstrates a basic implementation of the `MlkitBarcodescanner` plugin to scan barcodes in your application.

With this tutorial, you should now be able to successfully integrate and use the `@capacitor-community/barcode-scanner` package in your Capacitor applications for efficient barcode scanning functionality.