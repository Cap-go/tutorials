# Capacitor Mlkit Barcode Scanner

A plugin to scan barcode with Mlkit vision and CameraX

Note: Warning! package in development

### Teams

- chris
- franckysolo
- nicolas

## Install

### Android

### Ios

### Use

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
