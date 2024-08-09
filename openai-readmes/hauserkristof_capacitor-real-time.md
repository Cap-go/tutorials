# capacitor-real-time

This Capacitor plugin provides real time for mobiles which cannot be modified by the user.

## Install

```bash
npm install capacitor-real-time
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getUptime()`](#getuptime)
* [`getGnssTime()`](#getgnsstime)
* [`getNetworkTime()`](#getnetworktime)
* [`getTrueTime()`](#gettruetime)

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


### getUptime()

```typescript
getUptime() => Promise<{ uptime: number; }>
```

**Returns:** <code>Promise&lt;{ uptime: number; }&gt;</code>

--------------------


### getGnssTime()

```typescript
getGnssTime() => Promise<{ gnssTime: number | null; }>
```

**Returns:** <code>Promise&lt;{ gnssTime: number | null; }&gt;</code>

--------------------


### getNetworkTime()

```typescript
getNetworkTime() => Promise<{ networkTime: number | null; }>
```

**Returns:** <code>Promise&lt;{ networkTime: number | null; }&gt;</code>

--------------------


### getTrueTime()

```typescript
getTrueTime() => Promise<{ trueTime: number | null; }>
```

**Returns:** <code>Promise&lt;{ trueTime: number | null; }&gt;</code>

--------------------

</docgen-api>
