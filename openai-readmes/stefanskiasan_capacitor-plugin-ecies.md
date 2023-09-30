# capacitor-plugin-ecies

Ecies Encryption

## Install

```bash
npm install capacitor-plugin-ecies
npx cap sync
```

## API

<docgen-index>

- [`generateKeys()`](#generatekeys)
- [`encrypt(...)`](#encrypt)
- [`decrypt(...)`](#decrypt)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### generateKeys()

```typescript
generateKeys() => Promise<{ publicKey: string; privateKey: string; }>
```

**Returns:** <code>Promise&lt;{ publicKey: string; privateKey: string; }&gt;</code>

---

### encrypt(...)

```typescript
encrypt(options: { publickey: string; plaintext: string; }) => Promise<{ value: string; }>
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ publickey: string; plaintext: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### decrypt(...)

```typescript
decrypt(options: { privatekey: string; crypttext: string; }) => Promise<{ value: string; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ privatekey: string; crypttext: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
