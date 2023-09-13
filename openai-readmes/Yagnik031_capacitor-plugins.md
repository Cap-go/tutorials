# yagnik-flashlight

this is flash light plugin

## Install

```bash
npm install yagnik-flashlight
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`isAvailable()`](#isavailable)
- [`switchOn(...)`](#switchon)
- [`switchOff()`](#switchoff)
- [`isSwitchedOn()`](#isswitchedon)

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

### isAvailable()

```typescript
isAvailable() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

### switchOn(...)

```typescript
switchOn(options: { intensity?: number; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ intensity?: number; }</code> |

---

### switchOff()

```typescript
switchOff() => Promise<void>
```

---

### isSwitchedOn()

```typescript
isSwitchedOn() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

</docgen-api>
