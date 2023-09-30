# health-data

Capacitor Plugin to Retrieve User's Device Step Count on Android

## Install

```bash
npm install health-data
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`getSteps()`](#getsteps)
- [`checkPermission(...)`](#checkpermission)
- [`openAppSettings()`](#openappsettings)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Plugin for accessing health data and step counters.

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

Echoes back the provided value.

| Param         | Type                            | Description           |
| ------------- | ------------------------------- | --------------------- |
| **`options`** | <code>{ value: string; }</code> | - The options object. |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### getSteps()

```typescript
getSteps() => Promise<{ name: string; count: number; }>
```

Retrieves the step count value from the step counter sensor since it was started.
Returns null if the necessary permissions have not been granted.
Once the permissions are granted, subsequent calls will return the correct step count value.
If the device doesn't have a step counter sensor, it won't return anything, but a message indicating that the sensor is not available will be logged to the console.

**Returns:** <code>Promise&lt;{ name: string; count: number; }&gt;</code>

---

### checkPermission(...)

```typescript
checkPermission(options?: CheckPermissionOptions | undefined) => Promise<CheckPermissionResult>
```

Checks the status of the permission and requests it for the first time if it hasn't been granted.
The permission status remains unchanged once it has been granted for the rest of the application usage.

| Param         | Type                                                                      | Description           |
| ------------- | ------------------------------------------------------------------------- | --------------------- |
| **`options`** | <code><a href="#checkpermissionoptions">CheckPermissionOptions</a></code> | - The options object. |

**Returns:** <code>Promise&lt;<a href="#checkpermissionresult">CheckPermissionResult</a>&gt;</code>

---

### openAppSettings()

```typescript
openAppSettings() => Promise<void>
```

Opens the app settings screen for the current app.

---

### Interfaces

#### CheckPermissionResult

| Prop             | Type                 | Description                                                                                                                                                | Since |
| ---------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`granted`**    | <code>boolean</code> | When set to `true`, the permission is granted.                                                                                                             |       |
| **`denied`**     | <code>boolean</code> | When set to `true`, the permission is denied and cannot be prompted for. The `openAppSettings` method should be used to let the user grant the permission. | 0.0.1 |
| **`asked`**      | <code>boolean</code> | When this is set to `true`, the user was just prompted the permission. Ergo: a dialog, asking the user to grant the permission, was shown.                 | 0.0.1 |
| **`neverAsked`** | <code>boolean</code> | When this is set to `true`, the user has never been prompted the permission.                                                                               | 0.0.1 |
| **`restricted`** | <code>boolean</code> | iOS only When this is set to `true`, the permission cannot be requested for some reason.                                                                   | 0.0.1 |
| **`unknown`**    | <code>boolean</code> | iOS only When this is set to `true`, the permission status cannot be retrieved.                                                                            | 0.0.1 |

#### CheckPermissionOptions

| Prop        | Type                 | Description                                                                                                                                                                 | Default            | Since |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----- |
| **`force`** | <code>boolean</code> | If this is set to `true`, the user will be prompted for the permission. The prompt will only show if the permission was not yet granted and also not denied completely yet. | <code>false</code> | 0.0.1 |

</docgen-api>
