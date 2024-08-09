```markdown
---
title: Using ZebraDataWedge Capacitor Plugin
description: A guide on integrating the ZebraDataWedge Capacitor Plugin in your Ionic Capacitor project.
created_at: 2022-01-15
published: true
slug: zebradatawedge_capacitor
---

# Using ZebraDataWedge Capacitor Plugin

ZebraDataWedge Capacitor Plugin is designed to relay scan events from Zebra DataWedge on Android devices within your Ionic Capacitor project.

## Installation

```bash
npm install zebradatawedge-capacitor-plugin
npx cap sync
```

## Datawedge Configuration
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
  - Intent delivery: (x) Broadcast intent

## Example

```ts
import {ZebraDataWedge, type ZebraDataWedgeScanResult} from 'zebradatawedge-capacitor-plugin'

ZebraDataWedge.addListener('newScanEvent', (scanResult: ZebraDataWedgeScanResult) => {
  console.log('newScanEvent', `Data:${scanResult.data} Type:${scanResult.labelType} From:${scanResult.source}`)
})
```

## API

You can find more detailed API documentation within the plugin itself.

```
```
