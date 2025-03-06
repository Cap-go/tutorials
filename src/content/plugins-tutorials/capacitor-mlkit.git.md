```markdown
---
"title": "Using @capacitor-mlkit/barcode-scanning Package Tutorial"
"summary": "This blog post will guide you through using the @capacitor-mlkit/barcode-scanning package to scan barcodes using ML Kit."
"created_at": "2022-04-03"
"published": true
"slug": "capacitor-mlkit.git"
---

# Using @capacitor-mlkit/barcode-scanning Package Tutorial

In this tutorial, we will learn how to use the `@capacitor-mlkit/barcode-scanning` package to scan barcodes with ML Kit.

## Installation

To get started, first install the `@capacitor-mlkit/barcode-scanning` package in your Capacitor project.

## Usage

After installing the package, you can use the following code snippet to scan barcodes:

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
      scanBarcode,
    }
  },
})
```

## Conclusion

That's it! You have successfully learned how to use the `@capacitor-mlkit/barcode-scanning` package to scan barcodes using ML Kit in your Capacitor project. Happy coding!
```