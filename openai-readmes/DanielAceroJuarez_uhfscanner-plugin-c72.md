# uhfscanner-plugin-c72

UHFScanner Ionic Capacitor Plugin

## Install

```bash
npm install uhfscanner-plugin-c72
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`execute(...)`](#execute)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

**action:** start/stop
**power:** 0-25

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### execute(...)

```typescript
execute(options: { action: string; power: number; }, callback: UHFScanneerCallback) => Promise<CallbackID>
```

| Param          | Type                                                                |
| -------------- | ------------------------------------------------------------------- |
| **`options`**  | <code>{ action: string; power: number; }</code>                     |
| **`callback`** | <code><a href="#uhfscanneercallback">UHFScanneerCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### Type Aliases

#### UHFScanneerCallback

<code>(value: string | null, result: string | null, err?: any): void</code>

#### CallbackID

<code>string</code>

</docgen-api>
