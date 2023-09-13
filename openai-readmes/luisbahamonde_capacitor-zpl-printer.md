# capacitor-zpl-printer

Connects with label printers that use the ZPL language

## Install

```bash
npm install capacitor-zpl-printer
npx cap sync
```

## API

<docgen-index>

- [`print(...)`](#print)
- [`echo(...)`](#echo)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### print(...)

```typescript
print(options: PrintOptions) => Promise<any>
```

send ZPL code to a printer through an IP address and a port to be printed

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#printoptions">PrintOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### Interfaces

#### PrintOptions

| Prop         | Type                | Description                                      |
| ------------ | ------------------- | ------------------------------------------------ |
| **`ip`**     | <code>string</code> | IP address where the printer is located          |
| **`port`**   | <code>number</code> | Port through which the printer is connected      |
| **`zpl`**    | <code>string</code> | ZPL code to be printed                           |
| **`prints`** | <code>number</code> | Number of impressions, by default one is printed |

</docgen-api>
