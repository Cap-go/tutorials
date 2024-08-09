```markdown
---
"title": "How to Use capacitorjs-printer Package Tutorial",
"description": "Learn how to use the capacitorjs-printer package to print HTML format values in iOS and Android apps.",
"created_at": "2022-03-24",
"published": true,
"slug": "capacitorjs-printer"
---

# How to Use capacitorjs-printer Package Tutorial

The `capacitorjs-printer` package is a Capacitor plugin that allows you to print HTML format values in iOS and Android apps. Follow the steps below to learn how to use this package in your app.

## Install

To install the `capacitorjs-printer` package, run the following commands:

```bash
npm install @bcyesil/capacitor-plugin-printer
npx cap sync
```

## Usage

Import the `Printer` class from `@bcyesil/capacitor-plugin-printer` and use the `print` method to print content. Here's an example:

```typescript
import { Printer } from '@bcyesil/capacitor-plugin-printer';

Printer.print({ content: 'Lorem ipsum...', name: 'lorem-filename', orientation: 'landscape' })
```

## Examples

You can print text, HTML content, images, and use inline CSS with the `capacitorjs-printer` package. Here are some examples:

- Print Text:

```typescript
Printer.print({ content: 'Lorem ipsum...' })
```

- Print HTML Content:

```typescript
Printer.print({ content: '<h1>Lorem</h1>' })
```

- Print Multiple Lines:

```typescript
let contentTest: string = ''

contentTest += '<li style="color:green">Tea</li>'
contentTest += '<li style="font-size:50px">Coffee</li>'
contentTest += '<img src="https://picsum.photos/200">'

Printer.print({ content: contentTest })
```

- Print Images with HTML:

```typescript
Printer.print({ content: '<img src="base64/url/path">' })
```

- Print with Inline CSS:

```typescript
Printer.print({ content: '<b style="color:red">Lorem ipsum</b>' })
```

Now you know how to use the `capacitorjs-printer` package to print content in your Capacitor app!
```