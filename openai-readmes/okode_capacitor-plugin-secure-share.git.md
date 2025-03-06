# capacitor-plugin-secure-share

Capacitor Secure Share Plugin

## Install

```bash
npm install @okode/capacitor-plugin-secure-share
npx cap sync
```

## API

<docgen-index>

* [`save(...)`](#save)
* [`retrieve()`](#retrieve)
* [`retrieveFrom(...)`](#retrievefrom)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### save(...)

```typescript
save(data: Record<string, string>) => Promise<void>
```

| Param      | Type                                                            | Description                                       |
| ---------- | --------------------------------------------------------------- | ------------------------------------------------- |
| **`data`** | <code><a href="#record">Record</a>&lt;string, string&gt;</code> | string to string map holding the data to be saved |

--------------------


### retrieve()

```typescript
retrieve() => Promise<Record<string, string>>
```

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

--------------------


### retrieveFrom(...)

```typescript
retrieveFrom(data: { packageName: string; }) => Promise<Record<string, string>>
```

| Param      | Type                                  |
| ---------- | ------------------------------------- |
| **`data`** | <code>{ packageName: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#record">Record</a>&lt;string, string&gt;&gt;</code>

--------------------


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{
  [P in K]: T;
}</code>

</docgen-api>

## CHANGELOG

- 1.2.0 ... Capacitor 5
- 1.1.0 ... Capacitor 4