---
"title": "How to Use capacitor-call-number Package",
"description": "Learn how to use the capacitor-call-number package to make calls in your Capacitor project.",
"created_at": "2022-02-22",
"published": true,
"slug": "call-number.git"
---

# capacitor-call-number Package Tutorial

The `capacitor-call-number` package allows you to easily make phone calls from your Capacitor project. Follow the steps below to integrate and use this package in your application.

### Installation

Ensure you have installed the capacitor-call-number package by running the following npm command:

```bash
npm i capacitor-call-number
```

### Usage

Import the `CallNumber` module from `capacitor-call-number` in your project:

```javascript
import { CallNumber } from 'capacitor-call-number';
```

To make a call using the `CallNumber` module, use the following code snippet:

```javascript
await CallNumber.call({ number: '111111', bypassAppChooser: false });
```

- Setting `bypassAppChooser` to `true` will take you to the default dialer screen before making the call.
- Setting `bypassAppChooser` to `false` will directly initiate the call to the specified number.

Start integrating the `capacitor-call-number` package into your project today and enable call functionality seamlessly.