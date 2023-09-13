# capacitor-crypto-aes-gcm

Encrypt & Decrypt using AES-GCM 256 on iOS using CryptoKit

## Install

```bash
npm install capacitor-crypto-aes-gcm
npx cap sync
```

## API

<docgen-index>

- [`encrypt(...)`](#encrypt)
- [`decrypt(...)`](#decrypt)
- [`generateSymmetricKey()`](#generatesymmetrickey)
- [`generateIV()`](#generateiv)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### encrypt(...)

```typescript
encrypt(options: { text: string; base64Encoded: string; encodedIV?: string; }) => any
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ text: string; base64Encoded: string; encodedIV?: string; }</code> |

**Returns:** <code>any</code>

---

### decrypt(...)

```typescript
decrypt(options: { text: string; base64Encoded: string; encodedIV?: string; }) => any
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ text: string; base64Encoded: string; encodedIV?: string; }</code> |

**Returns:** <code>any</code>

---

### generateSymmetricKey()

```typescript
generateSymmetricKey() => any
```

**Returns:** <code>any</code>

---

### generateIV()

```typescript
generateIV() => any
```

**Returns:** <code>any</code>

---

</docgen-api>
