# peis-ziphelp

Zip operations

## Install

```bash
npm install peis-ziphelp
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`unZip(...)`](#unzip)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### unZip(...)

```typescript
unZip(options: UnzipOptions) => Promise<UnzipResult>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#unzipoptions">UnzipOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#unzipresult">UnzipResult</a>&gt;</code>

---

### Interfaces

#### UnzipResult

| Prop          | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |
| **`uri`**     | <code>string</code> |

#### UnzipOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`source`**      | <code>string</code> |
| **`destination`** | <code>string</code> |
| **`password`**    | <code>string</code> |

</docgen-api>
