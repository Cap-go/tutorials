# capacitor-zebra-printer

Capacitor plugin to send ZPL messages directly to Zebra printers via TCP/IP. It is a combination of [ionic-zebra-printer](https://github.com/levidousseaux/ionic-zebra-printer) android implementation and [ionic-zebra-label-printer](https://bitbucket.org/JoJo-Bear/ionic-zebra-label-printer/) iOS implementation.

###### Fork changes:

- Add fetch timeout
- Fix android connection problems
- Add [iOS implementation](https://bitbucket.org/JoJo-Bear/ionic-zebra-label-printer/)

## Install

```bash
yarn add capacitor-zebra-printer
```

or

```bash
npm install capacitor-zebra-printer
```

and finally

```bash
npx cap sync
```

## How to use

```typescript
import { CapacitorZebraPrinter } from 'capacitor-zebra-printer'

const printUtils = {
  printZpl: async ({ zpl, ip, port }: { zpl: string; ip: string; port: number }) => {
    return await CapacitorZebraPrinter.print({
      ip,
      port,
      zpl,
    }).then((res) => {
      return res && res.value == 'success'
    })
  },
}

export default printUtils
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`print(...)`](#print)
- [Type Aliases](#type-aliases)

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
print(options: PrintOptions) => Promise<{ value: string; }>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#printoptions">PrintOptions</a></code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### Type Aliases

#### PrintOptions

<code>{ ip: string; port: number; zpl: string }</code>

</docgen-api>
