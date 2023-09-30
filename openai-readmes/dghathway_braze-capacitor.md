# braze-capacitor

Braze interface for ionic capacitor

## Install

```bash
npm install braze-capacitor
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`initIt(...)`](#initit)
- [`sendJSON(...)`](#sendjson)

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

### initIt(...)

```typescript
initIt(key: string) => Promise<{ results: any[]; }>
```

| Param     | Type                |
| --------- | ------------------- |
| **`key`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

### sendJSON(...)

```typescript
sendJSON(options: { key: string; value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ key: string; value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
