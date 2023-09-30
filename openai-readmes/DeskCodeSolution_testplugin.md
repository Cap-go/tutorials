# testplugin

testing

## Install

```bash
npm install @deskcode/testplugin
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`askPermission()`](#askpermission)

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

### askPermission()

```typescript
askPermission() => Promise<{ results: any; }>
```

**Returns:** <code>Promise&lt;{ results: any; }&gt;</code>

---

</docgen-api>
