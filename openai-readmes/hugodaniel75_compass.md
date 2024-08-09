# capacitor-plugin-compass

Plugin capacitor para obtener la orientación de la brújula

## Install

```bash
npm install capacitor-plugin-compass
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`check()`](#check)
* [`start()`](#start)
* [`stop()`](#stop)
* [`getOrientation(...)`](#getorientation)

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

--------------------


### check()

```typescript
check() => boolean
```

**Returns:** <code>boolean</code>

--------------------


### start()

```typescript
start() => Promise<void>
```

--------------------


### stop()

```typescript
stop() => void
```

--------------------


### getOrientation(...)

```typescript
getOrientation(event: any) => any
```

| Param       | Type             |
| ----------- | ---------------- |
| **`event`** | <code>any</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>

### ios añadir en info.plist
<key>NSLocationWhenInUseUsageDescription</key>
<string>La aplicación necesita acceder a tu ubicación para utilizar la brújula.</string>