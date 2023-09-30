# @alitajs/barcode

A fast and efficient (QR) barcode scanner for Capacitor

## Install

```bash
npm install @alitajs/barcode
npx cap sync
```

## Example

```js
import { BarcodeScanner } from '@alitajs/barcode'

const startScan = async () => {
  try {
    const permissionStatus = await BarcodeScanner.checkPermission()
    if (permissionStatus.granted) {
      const result = await BarcodeScanner.scanCode()
      console.log(result.hasContent, result.content)
    } else {
      const goSettings = confirm('没有权限，去设置打开')
      goSettings && BarcodeScanner.openAppSettings()
    }
  } catch (error) {
    console.log('error', error)
  }
}
```

## API

<docgen-index>

- [`checkPermission(...)`](#checkpermission)
- [`openAppSettings()`](#openappsettings)
- [`scanCode()`](#scancode)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermission(...)

```typescript
checkPermission(options?: CheckPermissionOptions | undefined) => Promise<CheckPermissionResult>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#checkpermissionoptions">CheckPermissionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#checkpermissionresult">CheckPermissionResult</a>&gt;</code>

---

### openAppSettings()

```typescript
openAppSettings() => Promise<void>
```

---

### scanCode()

```typescript
scanCode() => Promise<ScanResult>
```

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

---

### Interfaces

#### CheckPermissionResult

| Prop             | Type                 | Description                                                                                                                                                | Since |
| ---------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`granted`**    | <code>boolean</code> | When set to `true`, the ermission is granted.                                                                                                              |       |
| **`denied`**     | <code>boolean</code> | When set to `true`, the permission is denied and cannot be prompted for. The `openAppSettings` method should be used to let the user grant the permission. | 1.0.0 |
| **`asked`**      | <code>boolean</code> | When this is set to `true`, the user was just prompted the permission. Ergo: a dialog, asking the user to grant the permission, was shown.                 | 1.0.0 |
| **`neverAsked`** | <code>boolean</code> | When this is set to `true`, the user has never been prompted the permission.                                                                               | 1.0.0 |
| **`restricted`** | <code>boolean</code> | iOS only When this is set to `true`, the permission cannot be requested for some reason.                                                                   | 1.0.0 |
| **`unknown`**    | <code>boolean</code> | iOS only When this is set to `true`, the permission status cannot be retrieved.                                                                            | 1.0.0 |

#### CheckPermissionOptions

| Prop        | Type                 | Description                                                                                                                                                                                                                                                              | Default            | Since |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ----- |
| **`force`** | <code>boolean</code> | If this is set to `true`, the user will be prompted for the permission. The prompt will only show if the permission was not yet granted and also not denied completely yet. For more information see: https://github.com/capacitor-community/barcode-scanner#permissions | <code>false</code> | 1.0.0 |

#### ScanResult

| Prop             | Type                 | Description                                                          | Since |
| ---------------- | -------------------- | -------------------------------------------------------------------- | ----- |
| **`hasContent`** | <code>boolean</code> | This indicates whether or not the scan resulted in readable content. | 1.0.0 |
| **`content`**    | <code>string</code>  | This holds the content of the barcode if available.                  | 1.0.0 |

</docgen-api>

## How to use this plugin in existing native project

### ios

in `Podfile`

```ruby
pod 'AlitajsBarcode'
```

### android

in `build.gradle`

```java
repositories {
  ...
  maven { url 'https://jitpack.io' }
}

dependencies {
  implementation 'com.github.alitajs:alitajs-native-barcode:Tag'
}
```
