# capacitor-doze-optimize

White listing an Android application programmatically from battery optimize settings

## Install

```bash
npm install capacitor-doze-optimize
npx cap sync
```

## Example

```typescript
import { DozeOptimize } from 'capacitor-doze-optimize'

initDozeOptimize = async () => {
  // check if battery optimizations is ignoring
  const isIgnoringBatteryOptimizations = await DozeOptimize.isIgnoringBatteryOptimizations()

  // request battery optimizations menu and unrestrict battery optimizations for this app, add to whitelist
  await DozeOptimize.requestOptimizationsMenu()

  // check if data saver is ignoring
  const isDataSaverOn = await DozeOptimize.isIgnoringDataSaver()

  // open setting data saver menu and unrestrict data saver for this app, add to whitelist
  await DozeOptimize.requestDataSaverMenu()
}
```

## API

<docgen-index>

- [`isIgnoringBatteryOptimizations()`](#isignoringbatteryoptimizations)
- [`requestOptimizationsMenu()`](#requestoptimizationsmenu)
- [`isIgnoringDataSaver()`](#isignoringdatasaver)
- [`requestDataSaverMenu()`](#requestdatasavermenu)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isIgnoringBatteryOptimizations()

```typescript
isIgnoringBatteryOptimizations() => Promise<IsIgnoringBatteryOptimizationsResult>
```

**Returns:** <code>Promise&lt;<a href="#isignoringbatteryoptimizationsresult">IsIgnoringBatteryOptimizationsResult</a>&gt;</code>

---

### requestOptimizationsMenu()

```typescript
requestOptimizationsMenu() => Promise<RequestOptimizationsMenuResult>
```

**Returns:** <code>Promise&lt;<a href="#requestoptimizationsmenuresult">RequestOptimizationsMenuResult</a>&gt;</code>

---

### isIgnoringDataSaver()

```typescript
isIgnoringDataSaver() => Promise<IsIgnoringDataSaverResult>
```

**Returns:** <code>Promise&lt;<a href="#isignoringdatasaverresult">IsIgnoringDataSaverResult</a>&gt;</code>

---

### requestDataSaverMenu()

```typescript
requestDataSaverMenu() => Promise<RequestDataSaverMenuResult>
```

**Returns:** <code>Promise&lt;<a href="#requestdatasavermenuresult">RequestDataSaverMenuResult</a>&gt;</code>

---

### Interfaces

#### IsIgnoringBatteryOptimizationsResult

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`isIgnoring`** | <code>boolean</code> |
| **`messages`**   | <code>string</code>  |

#### RequestOptimizationsMenuResult

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`isRequested`** | <code>boolean</code> |
| **`messages`**    | <code>string</code>  |

#### IsIgnoringDataSaverResult

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`isIgnoring`** | <code>boolean</code> |
| **`messages`**   | <code>string</code>  |

#### RequestDataSaverMenuResult

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`isRequested`** | <code>boolean</code> |
| **`messages`**    | <code>string</code>  |

</docgen-api>
