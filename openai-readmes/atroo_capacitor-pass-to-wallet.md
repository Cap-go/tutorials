# capacitor-pass-to-wallet

Allow to add .pkpass file to Apple Wallet

## Install

```bash
npm install @atroo/capacitor-pass-to-wallet
npx cap sync
```

## API

<docgen-index>

- [`addToWallet(...)`](#addtowallet)
- [`addMultipleToWallet(...)`](#addmultipletowallet)
- [`passExists(...)`](#passexists)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addToWallet(...)

```typescript
addToWallet(options: { base64: string; }) => Promise<{ value: string; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ base64: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### addMultipleToWallet(...)

```typescript
addMultipleToWallet(options: { base64: string[]; }) => Promise<{ value: string; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ base64: string[]; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### passExists(...)

```typescript
passExists(options: { base64: string; }) => Promise<{ passExists: boolean; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ base64: string; }</code> |

**Returns:** <code>Promise&lt;{ passExists: boolean; }&gt;</code>

---

</docgen-api>
