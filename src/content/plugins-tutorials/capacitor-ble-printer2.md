```md
---
"title": "How to Use Capacitor-BLE-Printer2 for Printing via Bluetooth",
"description": "This tutorial will guide you on how to use the Capacitor-BLE-Printer2 package to print via Bluetooth.",
"created_at": "2023-10-12",
"published": true,
"slug": "capacitor-ble-printer2"
---

## Getting Started

To start using the `Capacitor-BLE-Printer2` package, you first need to install it to your Capacitor project. Follow the installation steps below.

### Installation

```bash
npm install capacitor-ble-printer2
npx cap sync
```

Ensure that the necessary permissions and dependencies are set up correctly in your project before proceeding.

## Usage

1. **Import the Printer Library**

Import the printer functionality in the file where you want to use it:

```typescript
import { BLEPrinter } from 'capacitor-ble-printer2';
```

2. **Prepare Text to Print**

Create the text you want to send to the printer. Use the following format for positioning:

- `\n`: Line break
- `[L]`: Text positioned to the left
- `[C]`: Text positioned in the center
- `[R]`: Text positioned to the right

Example:

```typescript
let textToPrint = "[L]\n" +
                  "[L] <b>Bold text</b>\n\n" +
                  "[C] <b>Centered text</b>\n" +
                  "[R] Right-aligned text\n" +     
                  "[L] Left-aligned text\n" +
                  "[L] <b>Inserting text</b>\n";

let dataPrinter = textToPrint;
```

3. **Send Data to Printer**

Use the `BLEPrinter` API to send the information to the printer:

```typescript
BLEPrinter.print({ value: dataPrinter });
```

This will trigger the printer to receive the data and produce the desired output.
```