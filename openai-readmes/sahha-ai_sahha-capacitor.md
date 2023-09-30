# sahha-capacitor

Sahha Cordova Plugin

## Install

```bash
npm install sahha-capacitor
npx cap sync
```

## API

<docgen-index>

- [`configure(...)`](#configure)
- [`authenticate(...)`](#authenticate)
- [`getDemographic()`](#getdemographic)
- [`postDemographic(...)`](#postdemographic)
- [`getSensorStatus()`](#getsensorstatus)
- [`enableSensors()`](#enablesensors)
- [`postSensorData()`](#postsensordata)
- [`analyze(...)`](#analyze)
- [`openAppSettings()`](#openappsettings)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### configure(...)

```typescript
configure(options: { settings: SahhaSettings; }) => Promise<{ success: boolean; }>
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ settings: <a href="#sahhasettings">SahhaSettings</a>; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### authenticate(...)

```typescript
authenticate(options: { appId: string; appSecret: string; externalId: string; }) => Promise<{ success: boolean; }>
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ appId: string; appSecret: string; externalId: string; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### getDemographic()

```typescript
getDemographic() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### postDemographic(...)

```typescript
postDemographic(options: { demographic: SahhaDemographic; }) => Promise<{ success: boolean; }>
```

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code>{ demographic: <a href="#sahhademographic">SahhaDemographic</a>; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### getSensorStatus()

```typescript
getSensorStatus() => Promise<{ status: SahhaSensorStatus; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#sahhasensorstatus">SahhaSensorStatus</a>; }&gt;</code>

---

### enableSensors()

```typescript
enableSensors() => Promise<{ status: SahhaSensorStatus; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#sahhasensorstatus">SahhaSensorStatus</a>; }&gt;</code>

---

### postSensorData()

```typescript
postSensorData() => Promise<{ success: boolean; }>
```

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### analyze(...)

```typescript
analyze(options?: { startDate?: number | undefined; endDate?: number | undefined; } | undefined) => Promise<{ value: string; }>
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ startDate?: number; endDate?: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### openAppSettings()

```typescript
openAppSettings() => Promise<void>
```

---

### Interfaces

#### SahhaSettings

| Prop                       | Type                                                                       |
| -------------------------- | -------------------------------------------------------------------------- |
| **`environment`**          | <code><a href="#sahhaenvironment">SahhaEnvironment</a></code>              |
| **`sensors`**              | <code>SahhaSensor[]</code>                                                 |
| **`notificationSettings`** | <code>{ icon?: string; title?: string; shortDescription?: string; }</code> |

#### SahhaDemographic

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`age`**               | <code>number</code> |
| **`gender`**            | <code>string</code> |
| **`country`**           | <code>string</code> |
| **`birthCountry`**      | <code>string</code> |
| **`ethnicity`**         | <code>string</code> |
| **`occupation`**        | <code>string</code> |
| **`industry`**          | <code>string</code> |
| **`incomeRange`**       | <code>string</code> |
| **`education`**         | <code>string</code> |
| **`relationship`**      | <code>string</code> |
| **`locale`**            | <code>string</code> |
| **`livingArrangement`** | <code>string</code> |

### Enums

#### SahhaEnvironment

| Members           | Value                      |
| ----------------- | -------------------------- |
| **`development`** | <code>'development'</code> |
| **`production`**  | <code>'production'</code>  |

#### SahhaSensor

| Members         | Value                    |
| --------------- | ------------------------ |
| **`sleep`**     | <code>'sleep'</code>     |
| **`pedometer`** | <code>'pedometer'</code> |
| **`device`**    | <code>'device'</code>    |
| **`heart`**     | <code>'heart'</code>     |
| **`blood`**     | <code>'blood'</code>     |

#### SahhaSensorStatus

| Members           | Value          |
| ----------------- | -------------- |
| **`pending`**     | <code>0</code> |
| **`unavailable`** | <code>1</code> |
| **`disabled`**    | <code>2</code> |
| **`enabled`**     | <code>3</code> |

</docgen-api>
