# @netacoltd/capacitor-system-stats

A Capacitor plugin that provides system-level metrics such as CPU usage, RAM, and disk storage on both Android and iOS devices.

## Install

```bash
npm install @netacoltd/capacitor-system-stats
npx cap sync
```

## API

<docgen-index>

* [`getSystemStats()`](#getsystemstats)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSystemStats()

```typescript
getSystemStats() => Promise<{ cpuUsage: number; totalRAM: number; availableRAM: number; totalStorage: number; availableStorage: number; }>
```

**Returns:** <code>Promise&lt;{ cpuUsage: number; totalRAM: number; availableRAM: number; totalStorage: number; availableStorage: number; }&gt;</code>

--------------------

</docgen-api>
