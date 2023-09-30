# capacitor-sys-cpu

Capacitor plugin for obtaining system CPU utilization.

## Install

```bash
npm install capacitor-sys-cpu
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`getCpuInfo()`](#getcpuinfo)
- [`getOnlineCpus()`](#getonlinecpus)
- [`getZoneTemp(...)`](#getzonetemp)
- [Interfaces](#interfaces)

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

### getCpuInfo()

```typescript
getCpuInfo() => Promise<CpuInfo>
```

**Returns:** <code>Promise&lt;<a href="#cpuinfo">CpuInfo</a>&gt;</code>

---

### getOnlineCpus()

```typescript
getOnlineCpus() => Promise<OnlineInfo>
```

**Returns:** <code>Promise&lt;<a href="#onlineinfo">OnlineInfo</a>&gt;</code>

---

### getZoneTemp(...)

```typescript
getZoneTemp(options: { zone: Number; }) => Promise<{ temp: number; }>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ zone: <a href="#number">Number</a>; }</code> |

**Returns:** <code>Promise&lt;{ temp: number; }&gt;</code>

---

### Interfaces

#### CpuInfo

| Prop       | Type                |
| ---------- | ------------------- |
| **`load`** | <code>number</code> |

#### OnlineInfo

| Prop         | Type                |
| ------------ | ------------------- |
| **`online`** | <code>string</code> |

#### Number

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

| Method            | Signature                                           | Description                                                                                                                       |
| ----------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **toString**      | (radix?: number \| undefined) =&gt; string          | Returns a string representation of an object.                                                                                     |
| **toFixed**       | (fractionDigits?: number \| undefined) =&gt; string | Returns a string representing a number in fixed-point notation.                                                                   |
| **toExponential** | (fractionDigits?: number \| undefined) =&gt; string | Returns a string containing a number represented in exponential notation.                                                         |
| **toPrecision**   | (precision?: number \| undefined) =&gt; string      | Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. |
| **valueOf**       | () =&gt; number                                     | Returns the primitive value of the specified object.                                                                              |

</docgen-api>
