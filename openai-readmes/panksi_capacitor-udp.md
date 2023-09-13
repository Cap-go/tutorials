# capacitor-udp

NOT WORKING PROTOTYPE! UDP Plugin for CapacitorJS inspired by the UDP Plugin of https://github.com/unitree-czk/capacitor-udp. General Idea behind this repo is to implement this plugin in such a way that it can be imported to Capacitor V3s.+ since Plugins import method is depricated.

## Install

```bash
npm install @panksi/capacitor-udp
npx cap sync
```

## API

<docgen-index>

- [`create(...)`](#create)
- [`bind(...)`](#bind)
- [`send(...)`](#send)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### create(...)

```typescript
create(options?: { properties?: { name?: string | undefined; bufferSize?: number | undefined; } | undefined; } | undefined) => any
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ properties?: { name?: string; bufferSize?: number; }; }</code> |

**Returns:** <code>any</code>

---

### bind(...)

```typescript
bind(options: { socketId: number; address: string; port: number; }) => any
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; port: number; }</code> |

**Returns:** <code>any</code>

---

### send(...)

```typescript
send(options: { socketId: number; address: string; port: number; buffer: string; }) => any
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ socketId: number; address: string; port: number; buffer: string; }</code> |

**Returns:** <code>any</code>

---

</docgen-api>
