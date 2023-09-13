# capacitor-ably

Capacitor

## Install

```bash
npm install capacitor-ably
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`registerDevice(...)`](#registerdevice)
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

### registerDevice(...)

```typescript
registerDevice(options: AblyDeviceOptions) => Promise<{ value: string; }>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#ablydeviceoptions">AblyDeviceOptions</a></code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### Interfaces

#### AblyDeviceOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`apiKey`**      | <code>string</code> |
| **`deviceToken`** | <code>string</code> |

</docgen-api>
