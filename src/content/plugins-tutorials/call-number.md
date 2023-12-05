---
title: "Using capacitor-call-number package"
description: "This tutorial will guide you on how to use the capacitor-call-number package to call a number in your app."
created_at: "2021-10-20"
published: true
slug: call-number
---

# Using capacitor-call-number package

This tutorial will guide you on how to use the capacitor-call-number package to call a number in your app.

## Installation

To install the capacitor-call-number package, use the following command:

```bash
npm i capacitor-call-number
```

## Usage

1. Import the `CallNumber` module from the capacitor-call-number package:

```javascript
import { CallNumber } from 'capacitor-call-number';
```

2. To initiate a call, use the `call` method of the `CallNumber` module:

```javascript
await CallNumber.call({ number: '111111', bypassAppChooser: false });
```
 
The `call` method takes an object as a parameter with the following properties:

- `number` (required): The phone number to call.
- `bypassAppChooser` (optional): Set this value to `true` if you want to take the user to the default dialer screen. Set it to `false` if you want to directly call the number.

Here's an example of how to use the `call` method:

```javascript
await CallNumber.call({ number: '111111', bypassAppChooser: false });
```

Remember to replace `'111111'` with the actual phone number you want to call.

That's it! You have successfully used the capacitor-call-number package to call a number in your app.

Happy coding!