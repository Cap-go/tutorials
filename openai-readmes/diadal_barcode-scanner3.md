# @diadal/barcode-scanner

A fast and efficient (QR) barcode scanner for Capacitor

## Install

```bash
npm install @diadal/barcode-scanner
npx cap sync
```

```Vue



import { BarcodeScanner } from '@diadal/barcode-scanner';


function Scaner() {

      window.document.body.classList.add('qrscanner');
      BarcodeScanner.startScan()
        .then((result: ScanResult) => {
          window.document.body.classList.remove('qrscanner');
          console.log('result222cc', result);
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
          window.document.body.classList.remove('qrscanner');
          console.log('error333', error);
        });
    }


```

```scss
.scanner-ui {
  display: none;
}
.scanner-hide {
  visibility: visible;
}

body.qrscanner {
  background-color: transparent;
}
body.qrscanner .scanner-ui {
  display: block;
}
body.qrscanner .scanner-hide {
  visibility: hidden;
}

.ion-content {
  --background: transparent;
}

ion-content {
  --background: transparent;
}
```

## Thansk To [https://github.com/capacitor-community/camera-preview

](camera-preview)

## API

<docgen-index>

- [`startScan(...)`](#startscan)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startScan(...)

```typescript
startScan(data: CameraPreviewOptions | null) => Promise<ScanResult>
```

| Param      | Type                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| **`data`** | <code><a href="#camerapreviewoptions">CameraPreviewOptions</a> \| null</code> |

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

---

### Interfaces

#### ScanResult

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`hasContent`** | <code>boolean</code> |
| **`code`**       | <code>string</code>  |

#### CameraPreviewOptions

| Prop                               | Type                 | Description                                                                                                                                                   |
| ---------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`width`**                        | <code>number</code>  | The preview width in pixels, default window.screen.width (applicable to the android and ios platforms only)                                                   |
| **`height`**                       | <code>number</code>  | The preview height in pixels, default window.screen.height (applicable to the android and ios platforms only)                                                 |
| **`x`**                            | <code>number</code>  | The x origin, default 0 (applicable to the android and ios platforms only)                                                                                    |
| **`y`**                            | <code>number</code>  | The y origin, default 0 (applicable to the android and ios platforms only)                                                                                    |
| **`paddingBottom`**                | <code>number</code>  | The preview bottom padding in pixes. Useful to keep the appropriate preview sizes when orientation changes (applicable to the android and ios platforms only) |
| **`rotateWhenOrientationChanged`** | <code>boolean</code> | Rotate preview when orientation changes (applicable to the ios platforms only; default value is true)                                                         |
| **`position`**                     | <code>string</code>  | Choose the camera to use 'front' or 'rear', default 'front'                                                                                                   |
| **`enableHighResolution`**         | <code>boolean</code> | Defaults to false - iOS only - Activate high resolution image capture so that output images are from the highest resolution possible on the device \*         |

### Type Aliases

#### CameraPosition

<code>'rear' | 'front'</code>

</docgen-api>
