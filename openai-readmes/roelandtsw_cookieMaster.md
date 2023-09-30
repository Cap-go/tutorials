# @roelandtsw/cookie-master

The cookie master API is created to clear cookies in electron app (node.js layer)
It is a capacitor plugin

## Install

```bash
npm install @roelandtsw/cookie-master
npx cap sync
```

## Example

```javascript
let oMessage = await CapacitorCustomPlatform.plugins.CookieMaster.clearCookies()
console.log(oMessage)

let oMessage = await CapacitorCustomPlatform.plugins.CookieMaster.getCookies()
console.log(oMessage)
```

## API

<docgen-index>

- [`getCookies()`](#getcookies)
- [`clearCookies()`](#clearcookies)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCookies()

```typescript
getCookies() => Promise<Cookies>
```

Return all cookies from the node.js layer (electron)

**Returns:** <code>Promise&lt;<a href="#cookies">Cookies</a>&gt;</code>

**Since:** 1.0.0

---

### clearCookies()

```typescript
clearCookies() => Promise<Cookies>
```

Clear all cookies on the node.js layer (electron)

**Returns:** <code>Promise&lt;<a href="#cookies">Cookies</a>&gt;</code>

**Since:** 1.0.0

---

### Interfaces

#### Cookies

| Prop    | Type             | Description               | Since |
| ------- | ---------------- | ------------------------- | ----- |
| **`d`** | <code>any</code> | Generic message interface | 1.0.0 |

</docgen-api>
