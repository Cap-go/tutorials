# ZebraDatawedge Capacitor Plugin

Capacitor Plugin for relaying scan events from Zebra DataWedge on Android devices.

## Install

```bash
npm install zebradatawedge-capacitor-plugin
npx cap sync
```

## Datawedge configuration
Tested with version: 11.3

- [x] Profile Enable
- **Applications**
  - Choose your Capacitor application. * for activity
- **Barcode input**
  - [x] Enabled
  - [x] Hardware Trigger
- **Keystroke output**
  - [ ] Enabled
- **Intent output**
  - [x] Enabled
  - Intent action: com.datawedgecapacitorplugin.ACTION
  - Intent category: *leave blank*
  - Itent delivery: (x) Broadast intent

## Example

```ts
import {ZebraDataWedge, type ZebraDataWedgeScanResult} from 'zebradatawedge-capacitor-plugin'

ZebraDataWedge.addListener('newScanEvent', (scanResult: ZebraDataWedgeScanResult) => {
  console.log('newScanEvent', `Data:${scanResult.data} Type:${scanResult.labelType} From:${scanResult.source}`)
})
```

## API

<docgen-index>



</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->



</docgen-api>
