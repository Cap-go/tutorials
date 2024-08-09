# @kduma-autoid/capacitor-sunmi-camera-scanner

Capacitor plugin for interaction with Sunmi Camera-based barcode scanning library

## Install

```bash
npm install @kduma-autoid/capacitor-sunmi-camera-scanner
npx cap sync
```

## API

<docgen-index>

* [`scan(...)`](#scan)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scan(...)

```typescript
scan(options?: ScanParams | undefined) => Promise<{ scans: { type: string; value: string; }[]; }>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#scanparams">ScanParams</a></code> |

**Returns:** <code>Promise&lt;{ scans: { type: string; value: string; }[]; }&gt;</code>

--------------------


### Interfaces


#### ScanParams

| Prop                           | Type                                                | Description                                                                                                                | Default            |
| ------------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **`play_sound`**               | <code>boolean</code>                                | Sound prompt after scan completes                                                                                          | <code>true</code>  |
| **`play_vibrate`**             | <code>boolean</code>                                | Vibrate when scan completes. At present, M1 hardware supports this configuration for vibration, while V1 does not support. | <code>false</code> |
| **`show_setting`**             | <code>boolean</code>                                | Whether to display the Settings button in the upper right corner                                                           | <code>false</code> |
| **`show_album_selector`**      | <code>boolean</code>                                | Whether to display the button "select picture from album"                                                                  | <code>false</code> |
| **`show_flashlight`**          | <code>boolean</code>                                | Whether to display the flashlight                                                                                          | <code>false</code> |
| **`recognize_multiple_codes`** | <code>boolean</code>                                | Recognize multiple QR codes in the image                                                                                   | <code>false</code> |
| **`recognize_inverse_codes`**  | <code>boolean</code>                                | Allow to read the reverse color QR code                                                                                    | <code>false</code> |
| **`scan_mode`**                | <code>boolean</code>                                | Whether cycle mode                                                                                                         | <code>false</code> |
| **`symbologies`**              | <code><a href="#symbologies">Symbologies</a></code> | <a href="#symbologies">Symbologies</a> configuration                                                                       |                    |


#### Symbologies

| Prop                     | Type                 | Description                                     | Default            |
| ------------------------ | -------------------- | ----------------------------------------------- | ------------------ |
| **`ean_8`**              | <code>boolean</code> | Allow to read the EAN-8 barcode                 | <code>false</code> |
| **`upc_e`**              | <code>boolean</code> | Allow to read the UPC-E barcode                 | <code>false</code> |
| **`isbn_10`**            | <code>boolean</code> | Allow to read the ISBN-10 (from EAN-13) barcode | <code>false</code> |
| **`code_11`**            | <code>boolean</code> | Allow to read the CODE-11 barcode               | <code>false</code> |
| **`upc_a`**              | <code>boolean</code> | Allow to read the UPC-A barcode                 | <code>false</code> |
| **`ean_13`**             | <code>boolean</code> | Allow to read the AN-13 barcode                 | <code>false</code> |
| **`isbn_13`**            | <code>boolean</code> | Allow to read the ISBN-13 (from EAN-13) barcode | <code>false</code> |
| **`interleaved_2_of_5`** | <code>boolean</code> | Allow to read the Interleaved 2 of 5 barcode    | <code>false</code> |
| **`code_128`**           | <code>boolean</code> | Allow to read the ECode 128 barcode             | <code>false</code> |
| **`codabar`**            | <code>boolean</code> | Allow to read the Codabar barcode               | <code>false</code> |
| **`code_39`**            | <code>boolean</code> | Allow to read the Code 39 barcode               | <code>false</code> |
| **`code_93`**            | <code>boolean</code> | Allow to read the Code 93 barcode               | <code>false</code> |
| **`databar`**            | <code>boolean</code> | Allow to read the DataBar (RSS-14) barcode      | <code>false</code> |
| **`databar_exp`**        | <code>boolean</code> | Allow to read the DataBar Expanded barcode      | <code>false</code> |
| **`micro_pdf417`**       | <code>boolean</code> | Allow to read the Micro PDF417 barcode          | <code>false</code> |
| **`microqr`**            | <code>boolean</code> | Allow to read the Micro QR Code barcode         | <code>false</code> |
| **`qr_code`**            | <code>boolean</code> | Allow to read the QR code                       | <code>false</code> |
| **`pdf417`**             | <code>boolean</code> | Allow to read the PDF417 barcode                | <code>false</code> |
| **`data_matrix`**        | <code>boolean</code> | Allow to read the DataMatrix code               | <code>false</code> |
| **`aztec`**              | <code>boolean</code> | Allow to read the AZTEC code                    | <code>false</code> |
| **`hanxin`**             | <code>boolean</code> | Allow to read the Hanxin code                   | <code>false</code> |

</docgen-api>
