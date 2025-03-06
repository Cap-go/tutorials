# capacitor-plugin-security-check

capacitor-plugin-security-check

## Install

```bash
npm install capacitor-plugin-security-check
npx cap sync
```

## API

<docgen-index>

* [`isEmulationDetected()`](#isemulationdetected)
* [`isJailbrokenDetected()`](#isjailbrokendetected)
* [`isReverseEngineeringDetected()`](#isreverseengineeringdetected)
* [`isTampered(...)`](#istampered)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isEmulationDetected()

```typescript
isEmulationDetected() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### isJailbrokenDetected()

```typescript
isJailbrokenDetected() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### isReverseEngineeringDetected()

```typescript
isReverseEngineeringDetected() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### isTampered(...)

```typescript
isTampered(bundle: string) => Promise<{ value: boolean; }>
```

| Param        | Type                |
| ------------ | ------------------- |
| **`bundle`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------

</docgen-api>
