# Capacitor Modbus

Modbus client for Android with Capacitor 4.x

## Install

```bash
npm install capacitor-modbus
npx cap sync
```

## API

<docgen-index>

- [`setIpAddress(...)`](#setipaddress)
- [`setPort(...)`](#setport)
- [`connect()`](#connect)
- [`connectTo(...)`](#connectto)
- [`disconnect()`](#disconnect)
- [`isConnected()`](#isconnected)
- [`readHoldingRegisters(...)`](#readholdingregisters)
- [`convertRegistersToFloat(...)`](#convertregisterstofloat)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setIpAddress(...)

```typescript
setIpAddress(options: { ip: string; }) => Promise<void>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ ip: string; }</code> |

---

### setPort(...)

```typescript
setPort(options: { port: number; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ port: number; }</code> |

---

### connect()

```typescript
connect() => Promise<void>
```

---

### connectTo(...)

```typescript
connectTo(options: { ip: string; port: number; }) => Promise<void>
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ ip: string; port: number; }</code> |

---

### disconnect()

```typescript
disconnect() => Promise<void>
```

---

### isConnected()

```typescript
isConnected() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### readHoldingRegisters(...)

```typescript
readHoldingRegisters(options: { start: number; count: number; }) => Promise<{ result: number[]; }>
```

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ start: number; count: number; }</code> |

**Returns:** <code>Promise&lt;{ result: number[]; }&gt;</code>

---

### convertRegistersToFloat(...)

```typescript
convertRegistersToFloat(options: { registers: number[]; order: 0 | 1; }) => Promise<{ result: number; }>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ registers: number[]; order: 0 \| 1; }</code> |

**Returns:** <code>Promise&lt;{ result: number; }&gt;</code>

---

</docgen-api>
  
## Sources
- https://github.com/dhakerShiv/cordova-plugin-modbus-tcp
- https://capacitorjs.com/docs/plugins/workflow
