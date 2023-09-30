# capacitor-android-battery-settings

Configure Android battery optimisation settings

## Install

```bash
npm install capacitor-android-battery-settings
npx cap sync
```

Add the following to your `AndroidManifest.xml` above the `<application>` tag.

```xml
<uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />
```

## API

<docgen-index>

- [`isBatteryOptimizationEnabled()`](#isbatteryoptimizationenabled)
- [`requestBatteryOptimizationDisabled()`](#requestbatteryoptimizationdisabled)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isBatteryOptimizationEnabled()

```typescript
isBatteryOptimizationEnabled() => Promise<{ isUnrestricted: boolean; }>
```

**Returns:** <code>Promise&lt;{ isUnrestricted: boolean; }&gt;</code>

---

### requestBatteryOptimizationDisabled()

```typescript
requestBatteryOptimizationDisabled() => Promise<void>
```

---

</docgen-api>
