# yagnik-contacts

this plugin will fetch your contacts from your device.

## Install

```bash
npm install yagnik-contacts
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`getContacts(...)`](#getcontacts)

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

### getContacts(...)

```typescript
getContacts(filter: string) => Promise<{ results: any[]; }>
```

| Param        | Type                |
| ------------ | ------------------- |
| **`filter`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ results: any[]; }&gt;</code>

---

</docgen-api>
