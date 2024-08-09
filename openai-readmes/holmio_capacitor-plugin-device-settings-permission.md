# capacitor-plugin-device-settings-permission

DeviceSettingsPermission is a Capacitor plugin designed to streamline the process of requesting permissions and accessing device settings. It provides a unified API to request and check permissions across different platforms, and offers a simple way to direct users to their device's settings page. This plugin is intended to enhance user experience by making permission management more efficient and user-friendly.

## Install

```bash
npm install capacitor-plugin-device-settings-permission
npx cap sync
```

## API

<docgen-index>

* [`requestNotificationPermission()`](#requestnotificationpermission)
* [`getNotificationPermission()`](#getnotificationpermission)
* [`openAppSettings(...)`](#openappsettings)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestNotificationPermission()

```typescript
requestNotificationPermission() => Promise<{ permission: NotificationPermissions; }>
```

Request permission to show notifications.

**Returns:** <code>Promise&lt;{ permission: <a href="#notificationpermissions">NotificationPermissions</a>; }&gt;</code>

**Since:** 1.0.0

--------------------


### getNotificationPermission()

```typescript
getNotificationPermission() => Promise<{ permission: NotificationPermissions; }>
```

Check the current notification permission status.

**Returns:** <code>Promise&lt;{ permission: <a href="#notificationpermissions">NotificationPermissions</a>; }&gt;</code>

**Since:** 1.0.0

--------------------


### openAppSettings(...)

```typescript
openAppSettings(type: AppSettingsType) => Promise<void>
```

Open the app settings for the app.

| Param      | Type                                                        | Description                   |
| ---------- | ----------------------------------------------------------- | ----------------------------- |
| **`type`** | <code><a href="#appsettingstype">AppSettingsType</a></code> | The type of settings to open. |

**Since:** 1.0.0

--------------------


### Enums


#### NotificationPermissions

| Members       | Value                  |
| ------------- | ---------------------- |
| **`GRANTED`** | <code>'granted'</code> |
| **`DENIED`**  | <code>'denied'</code>  |


#### AppSettingsType

| Members            | Value                       |
| ------------------ | --------------------------- |
| **`NOTIFICATION`** | <code>'notification'</code> |
| **`LOCATION`**     | <code>'location'</code>     |
| **`TRACING`**      | <code>'tracing'</code>      |
| **`GENERAL`**      | <code>'general'</code>      |

</docgen-api>
