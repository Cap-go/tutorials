# wifi-plugin

Manage Wifi Networks on any iOS device

## Install

```bash
npm install wifi-plugin
npx cap sync
```

## API

<docgen-index>

- [`connectWifi(ssid, password, isWEP, once)`](#connect)
- [`list(...)`](#list)
- [`remove(...)`](#remove)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connectWifi(...)

```typescript
connectWifi({ ssid: string, password: string, isWEP: boolean, once: boolean; }) => Promise<{ connected: boolean; }>
```

| Param          | Type                 |
| -------------- | -------------------- |
| **`ssid`**     | <code>string</code>  |
| **`password`** | <code>string</code>  |
| **`isWEP`**    | <code>boolean</code> |
| **`once`**     | <code>boolean</code> |

**Returns:** <code>Promise&lt;{ connected: boolean; }&gt;</code>

---

### list(...)

```typescript
list() => Promise<{ ssids: array; }>
```

**Returns:** <code>Promise&lt;{ ssids: array; }&gt;</code>

---

### remove(...)

```typescript
list() => void
```

**Returns:** void

---

</docgen-api>
