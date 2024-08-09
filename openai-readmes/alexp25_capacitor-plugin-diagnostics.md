# capacitor-plugin-diagnostics

rewrite of the cordova.plugins.diagnostic

## Install

```bash
npm install capacitor-plugin-diagnostics
npx cap sync
```

## API

<docgen-index>

* [`isFeatureAuthorized(...)`](#isfeatureauthorized)
* [`requestAuthorization(...)`](#requestauthorization)
* [`isGpsLocationEnabled()`](#isgpslocationenabled)
* [`getCurrentBatteryLevel()`](#getcurrentbatterylevel)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isFeatureAuthorized(...)

```typescript
isFeatureAuthorized(options: RequestAuthorizationOptions) => Promise<RequestAuthorizationStatus>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#requestauthorizationoptions">RequestAuthorizationOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#requestauthorizationstatus">RequestAuthorizationStatus</a>&gt;</code>

--------------------


### requestAuthorization(...)

```typescript
requestAuthorization(options: RequestAuthorizationOptions) => Promise<void>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#requestauthorizationoptions">RequestAuthorizationOptions</a></code> |

--------------------


### isGpsLocationEnabled()

```typescript
isGpsLocationEnabled() => Promise<{ enabled: boolean; }>
```

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

--------------------


### getCurrentBatteryLevel()

```typescript
getCurrentBatteryLevel() => Promise<{ level: number; }>
```

**Returns:** <code>Promise&lt;{ level: number; }&gt;</code>

--------------------


### Interfaces


#### RequestAuthorizationStatus

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`authorized`** | <code>boolean</code> |
| **`state`**      | <code>string</code>  |


#### RequestAuthorizationOptions

| Prop          | Type                |
| ------------- | ------------------- |
| **`feature`** | <code>string</code> |
| **`mode`**    | <code>string</code> |

</docgen-api>
