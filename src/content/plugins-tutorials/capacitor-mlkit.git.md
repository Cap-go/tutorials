---
"title": "Tutorial on Using @capacitor-mlkit/barcode-scanning Package"
"description": "Explore how to implement barcode scanning using the @capacitor-mlkit/barcode-scanning package in Capacitor."
"created_at": "October 18, 2021"
"published": true
"slug": "capacitor-mlkit.git"
---

# Using @capacitor-mlkit/barcode-scanning Package

In this tutorial, we will cover how to integrate the @capacitor-mlkit/barcode-scanning package into your Capacitor project to enable barcode scanning functionality using ML Kit.

## Installation

To begin, you need to install the @capacitor-mlkit/barcode-scanning package. You can do this by running the following command:

```bash
npm install @capacitor-mlkit/barcode-scanning
```

## Implementation

1. Import the necessary features from Capacitor Core in your code:

```javascript
import { Plugins } from '@capacitor/core'
const { MlkitBarcodescanner } = Plugins
```

2. Set up a function to scan a barcode and handle the result:

```javascript
const code = ref(null)
const scanBarcode = async () => {
  let result = await MlkitBarcodescanner.scanBarcode()
  code.value = result
  console.log(result)
}
```

3. Execute the barcode scanning function when needed in your application:

```javascript
scanBarcode()
```

## Conclusion

With the @capacitor-mlkit/barcode-scanning package, you can easily implement barcode scanning functionality in your Capacitor project using ML Kit vision. This tutorial has provided a step-by-step guide to get you started. Happy coding!
```