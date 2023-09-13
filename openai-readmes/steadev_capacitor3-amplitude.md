# capacitor3-amplitude

capacitor3 amplitude plugin

## Install

```bash
npm install capacitor3-amplitude
npx cap sync
```

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`logEvent(...)`](#logevent)
- [`logEventWithProperties(...)`](#logeventwithproperties)
- [`enableCoppaControl(...)`](#enablecoppacontrol)
- [`disableCoppaControl(...)`](#disablecoppacontrol)
- [`regenerateDeviceId(...)`](#regeneratedeviceid)
- [`setDeviceId(...)`](#setdeviceid)
- [`getDeviceId(...)`](#getdeviceid)
- [`setOptOut(...)`](#setoptout)
- [`setLibraryName(...)`](#setlibraryname)
- [`setLibraryVersion(...)`](#setlibraryversion)
- [`trackingSessionEvents(...)`](#trackingsessionevents)
- [`setUseDynamicConfig(...)`](#setusedynamicconfig)
- [`setUserId(...)`](#setuserid)
- [`setServerUrl(...)`](#setserverurl)
- [`logRevenueV2(...)`](#logrevenuev2)
- [`identify(...)`](#identify)
- [`setGroup(...)`](#setgroup)
- [`groupIdentify(...)`](#groupidentify)
- [`setUserProperties(...)`](#setuserproperties)
- [`clearUserProperties(...)`](#clearuserproperties)
- [`uploadEvents(...)`](#uploadevents)
- [`getSessionId(...)`](#getsessionid)
- [`setMinTimeBetweenSessionsMillis(...)`](#setmintimebetweensessionsmillis)
- [`setServerZone(...)`](#setserverzone)
- [`setEventUploadMaxBatchSize(...)`](#seteventuploadmaxbatchsize)
- [`setEventUploadPeriodMillis(...)`](#seteventuploadperiodmillis)
- [`setEventUploadThreshold(...)`](#seteventuploadthreshold)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { instanceName: string; apiKey: string; }) => Promise<void>
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ instanceName: string; apiKey: string; }</code> |

---

### logEvent(...)

```typescript
logEvent(options: { instanceName: string; eventType: string; }) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; eventType: string; }</code> |

---

### logEventWithProperties(...)

```typescript
logEventWithProperties(options: { instanceName: string; eventType: string; eventProperties: PropertiesObject; }) => Promise<void>
```

| Param         | Type                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; eventType: string; eventProperties: <a href="#propertiesobject">PropertiesObject</a>; }</code> |

---

### enableCoppaControl(...)

```typescript
enableCoppaControl(options: { instanceName: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

---

### disableCoppaControl(...)

```typescript
disableCoppaControl(options: { instanceName: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

---

### regenerateDeviceId(...)

```typescript
regenerateDeviceId(options: { instanceName: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

---

### setDeviceId(...)

```typescript
setDeviceId(options: { instanceName: string; deviceId: string; }) => Promise<void>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; deviceId: string; }</code> |

---

### getDeviceId(...)

```typescript
getDeviceId(options: { instanceName: string; }) => Promise<string>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### setOptOut(...)

```typescript
setOptOut(options: { instanceName: string; optOut: boolean; }) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; optOut: boolean; }</code> |

---

### setLibraryName(...)

```typescript
setLibraryName(options: { instanceName: string; libraryName: string; }) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; libraryName: string; }</code> |

---

### setLibraryVersion(...)

```typescript
setLibraryVersion(options: { instanceName: string; libraryVersion: string; }) => Promise<void>
```

| Param         | Type                                                           |
| ------------- | -------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; libraryVersion: string; }</code> |

---

### trackingSessionEvents(...)

```typescript
trackingSessionEvents(options: { instanceName: string; trackingSessionEvents: boolean; }) => Promise<void>
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; trackingSessionEvents: boolean; }</code> |

---

### setUseDynamicConfig(...)

```typescript
setUseDynamicConfig(options: { instanceName: string; useDynamicConfig: boolean; }) => Promise<void>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; useDynamicConfig: boolean; }</code> |

---

### setUserId(...)

```typescript
setUserId(options: { instanceName: string; userId: string | null; }) => Promise<void>
```

| Param         | Type                                                           |
| ------------- | -------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; userId: string \| null; }</code> |

---

### setServerUrl(...)

```typescript
setServerUrl(options: { instanceName: string; serverUrl: string; }) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; serverUrl: string; }</code> |

---

### logRevenueV2(...)

```typescript
logRevenueV2(options: { instanceName: string; userProperties: RevenueProperties; }) => Promise<void>
```

| Param         | Type                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; userProperties: <a href="#revenueproperties">RevenueProperties</a>; }</code> |

---

### identify(...)

```typescript
identify(options: { instanceName: string; userProperties: PropertiesObject; }) => Promise<void>
```

| Param         | Type                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; userProperties: <a href="#propertiesobject">PropertiesObject</a>; }</code> |

---

### setGroup(...)

```typescript
setGroup(options: { instanceName: string; groupType: string; groupName: string | string[]; }) => Promise<void>
```

| Param         | Type                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; groupType: string; groupName: string \| string[]; }</code> |

---

### groupIdentify(...)

```typescript
groupIdentify(options: { instanceName: string; groupType: string; groupName: string | string[]; userProperties: PropertiesObject; }) => Promise<void>
```

| Param         | Type                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; groupType: string; groupName: string \| string[]; userProperties: <a href="#propertiesobject">PropertiesObject</a>; }</code> |

---

### setUserProperties(...)

```typescript
setUserProperties(options: { instanceName: string; userProperties: PropertiesObject; }) => Promise<void>
```

| Param         | Type                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; userProperties: <a href="#propertiesobject">PropertiesObject</a>; }</code> |

---

### clearUserProperties(...)

```typescript
clearUserProperties(options: { instanceName: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

---

### uploadEvents(...)

```typescript
uploadEvents(options: { instanceName: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

---

### getSessionId(...)

```typescript
getSessionId(options: { instanceName: string; }) => Promise<number>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ instanceName: string; }</code> |

**Returns:** <code>Promise&lt;number&gt;</code>

---

### setMinTimeBetweenSessionsMillis(...)

```typescript
setMinTimeBetweenSessionsMillis(options: { instanceName: string; minTimeBetweenSessionsMillis: number; }) => Promise<void>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; minTimeBetweenSessionsMillis: number; }</code> |

---

### setServerZone(...)

```typescript
setServerZone(options: { instanceName: string; serverZone: string; updateServerUrl: boolean; }) => Promise<void>
```

| Param         | Type                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| **`options`** | <code>{ instanceName: string; serverZone: string; updateServerUrl: boolean; }</code> |

---

### setEventUploadMaxBatchSize(...)

```typescript
setEventUploadMaxBatchSize(options: { instanceName: string; eventUploadMaxBatchSize: number; }) => Promise<void>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; eventUploadMaxBatchSize: number; }</code> |

---

### setEventUploadPeriodMillis(...)

```typescript
setEventUploadPeriodMillis(options: { instanceName: string; eventUploadPeriodMillis: number; }) => Promise<void>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; eventUploadPeriodMillis: number; }</code> |

---

### setEventUploadThreshold(...)

```typescript
setEventUploadThreshold(options: { instanceName: string; eventUploadThreshold: number; }) => Promise<void>
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ instanceName: string; eventUploadThreshold: number; }</code> |

---

### Type Aliases

#### PropertiesObject

<code><a href="#record">Record</a>&lt;string, any&gt;</code>

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

#### RevenueProperties

<code>{ price: number; productId?: string; quantity?: number; revenueType?: string; receipt?: string; receiptSignature?: string; eventProperties?: <a href="#propertiesobject">PropertiesObject</a>; }</code>

</docgen-api>
