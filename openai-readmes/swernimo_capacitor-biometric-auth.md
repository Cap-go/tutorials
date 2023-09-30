# capacitor-biometric-plugin

A capacitor plugin for using biometric features of android and iOS devices. This is a capacitor 4 version of the plugin created by Ariel Henández Musa https://github.com/arielhernandezmusa/capacitor-biometric-auth.

## Install

```bash
npm install capacitor-biometric-plugin
npx cap sync
```

## API

<docgen-index>

- [`isAvailable()`](#isavailable)
- [`verify(...)`](#verify)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isAvailable()

```typescript
isAvailable() => Promise<AvailableOptions>
```

**Returns:** <code>Promise&lt;<a href="#availableoptions">AvailableOptions</a>&gt;</code>

---

### verify(...)

```typescript
verify(options: { reason: string; }) => Promise<VerifyOptions>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ reason: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#verifyoptions">VerifyOptions</a>&gt;</code>

---

### Interfaces

#### AvailableOptions

| Prop         | Type                                            |
| ------------ | ----------------------------------------------- |
| **`has`**    | <code>boolean</code>                            |
| **`status`** | <code><a href="#errorcode">ErrorCode</a></code> |
| **`type`**   | <code>'none' \| 'touch' \| 'face'</code>        |

#### ErrorCode

| Prop              | Type                |
| ----------------- | ------------------- |
| **`error`**       | <code>number</code> |
| **`description`** | <code>string</code> |

#### VerifyOptions

| Prop           | Type                                            |
| -------------- | ----------------------------------------------- |
| **`verified`** | <code>boolean</code>                            |
| **`status`**   | <code><a href="#errorcode">ErrorCode</a></code> |

</docgen-api>
