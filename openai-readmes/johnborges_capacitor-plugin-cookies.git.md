<p align="center"><strong><code>capacitor-plugin-cookies</code></strong></p>
<p align="center">
  Capacitor plugin for managing cookies.
</p>

<p align="center">
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/app-icon"><img src="https://img.shields.io/npm/dw/@capacitor-community/app-icon?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/app-icon"><img src="https://img.shields.io/npm/v/@capacitor-community/app-icon?style=flat-square" /></a>
</p>

## Installation

```bash
npm i capacitor-plugin-cookies
npx cap sync
```

## Usage

```javascript
import { Cookies } from 'capacitor-plugin-cookies';

const clearCookies = async () => {
  await Cookies.clear();
}
```

## API

<docgen-index>

* [`clear()`](#clear)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Clears all cookies.

### clear()

```typescript
clear() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>