---
title: "Using @bcyesil/capacitor-plugin-printer"
---

### @bcyesil/capacitor-plugin-printer Tutorial

---
"title": "Capacitor Printer Plugin Tutorial"
"description": "Step-by-step guide on how to use the @bcyesil/capacitor-plugin-printer package to print HTML, text, and images in iOS/Android apps."
"created_at": "2023-11-02"
"published": true
"slug": "capacitor-plugin-printer.git"
---

The "@bcyesil/capacitor-plugin-printer" is a Capacitor plugin designed for printing HTML, plain text, and images in iOS/Android apps. This tutorial will walk you through the installation process, usage examples, and API reference for this powerful printing plugin.

#### Installation

To install the plugin, run the following command in your project directory:

```bash
npm install @bcyesil/capacitor-plugin-printer
npx cap sync
```

#### Usage

After installing, you can start using the plugin by importing it in your project:

```typescript
import { Printer } from '@bcyesil/capacitor-plugin-printer';

Printer.print({ content: 'Lorem ipsum...', name: 'lorem-filename', orientation: 'landscape' })
```

#### Examples

Printing Text:

```typescript
Printer.print({ content: 'Lorem ipsum...' })
```

Printing HTML:

```typescript
Printer.print({ content: '<h1>Lorem</h1>' })
```

Printing Multiple HTML Elements:

```typescript
let contentTest: string = ''

contentTest += '<li style="color:green">Tea</li>'
contentTest += '<li style="font-size:50px">Coffee</li>'
contentTest += '<img src="https://picsum.photos/200">'

Printer.print({ content: contentTest })
```

Printing Images with HTML:

```typescript
Printer.print({ content: '<img src="base64/url/path">' })
```

Printing with Inline CSS:

```typescript
Printer.print({ content: '<b style="color:red">Lorem ipsum</b>' })
```

#### API Reference

The following method is available for printing:

- `print(printOptions: PrintOptions) => Promise<void>`

#### Interfaces

The `PrintOptions` interface defines the properties for printing:

- `content`: HTML content for print
- `name`: Name of the print document
- `orientation`: Orientation of the printing page 

This tutorial provides a detailed guide on using the "@bcyesil/capacitor-plugin-printer" package. Enjoy printing beautiful content in your apps!
```