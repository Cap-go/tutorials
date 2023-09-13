# zebra-printer

connect zebra printer via local IP

## Install

```bash
npm i zebra-printer-label
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`print(...)`](#print)

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

### print(...)

```typescript
print(options: { ip: string; port: number; zpl: string; }) => Promise<{ value: string; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ ip: string; port: number; zpl: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
