# capacitor-plugin-useragent

Allows you to change your User-Agent for HTTP requests.

## Install

```bash
npm install capacitor-plugin-useragent
npx cap sync
```

## API

<docgen-index>

* [`set(...)`](#set)
* [`get()`](#get)
* [`reset()`](#reset)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### set(...)

```typescript
set(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### get()

```typescript
get() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### reset()

```typescript
reset() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
