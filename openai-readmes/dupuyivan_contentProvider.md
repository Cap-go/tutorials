# content-provider

Comunication through apps

## Install

```bash
npm install content-provider
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`test(...)`](#test)
- [`getValues()`](#getvalues)
- [`insertValue(...)`](#insertvalue)
- [`deleteValue(...)`](#deletevalue)
- [`updateValue(...)`](#updatevalue)
- [`addListener(string, ...)`](#addlistenerstring)

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

### test(...)

```typescript
test(options: { name: string; }) => Promise<{ result: any; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

**Returns:** <code>Promise&lt;{ result: any; }&gt;</code>

---

### getValues()

```typescript
getValues() => Promise<{ result: any[]; }>
```

**Returns:** <code>Promise&lt;{ result: any[]; }&gt;</code>

---

### insertValue(...)

```typescript
insertValue(options: { name: string; }) => Promise<{ result: any; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

**Returns:** <code>Promise&lt;{ result: any; }&gt;</code>

---

### deleteValue(...)

```typescript
deleteValue(options: { id: string; }) => Promise<{ result: any; }>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

**Returns:** <code>Promise&lt;{ result: any; }&gt;</code>

---

### updateValue(...)

```typescript
updateValue(options: { id: string; name: string; }) => Promise<{ result: any; }>
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ id: string; name: string; }</code> |

**Returns:** <code>Promise&lt;{ result: any; }&gt;</code>

---

### addListener(string, ...)

```typescript
addListener(evtName: string, callback: (a: void) => any) => void
```

| Param          | Type                             |
| -------------- | -------------------------------- |
| **`evtName`**  | <code>string</code>              |
| **`callback`** | <code>(a: void) =&gt; any</code> |

---

</docgen-api>
