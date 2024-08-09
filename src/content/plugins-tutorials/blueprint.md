# Using blueprint-nrcc Package

This tutorial will guide you on how to use the blueprint-nrcc package for printing with Bluetooth in your Capacitor app.

## Install

```bash
npm install blueprint-nrcc
npx cap sync
```

### Definitions

- "\n it's a line break"
- "[L] It is used to position the text to the left"
- "[C] It is used to position the text in the center"
- "[R] Used to position the text to the right" 

### How to Use

**The printer must be connected to the device via Bluetooth**

**you must import the library where you want:**

```javascript
import { BlueprintNrcc } from 'blueprint-nrcc'
```

### Example

```javascript
let textToPrint = "[L]\n" +
                "[L] <b>bold text</b>\n\n" +
                "[C] <b>I am a text in the center</b>\n" +
                "[R] I am a text to the right\n" + 
                "[L] I am a text to the left\n" + 
                "[L] <b>inserting text</b>\n";

let dataPrinter = textToPrint;

BlueprintNrcc.blPrint({ value: dataPrinter });
```

### API

- `echo(options: { value: string; }) => Promise<{ value: string; }>`
- `blPrint(options: { value: string; }) => boolean`
- `testingMessage() => boolean`
- `getNotifications() => any`

---

**Frontmatter:**

```yaml
title: "Using blueprint-nrcc Package"
description: "Guide on using blueprint-nrcc for Bluetooth printing in Capacitor apps"
created_at: "2022-01-05"
published: true
slug: blueprint
```