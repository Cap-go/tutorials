# capacitor-nordic-dfu

![npm](https://img.shields.io/npm/v/capacitor-nordic-dfu)

Capacitor Plugin is a Wrapper to use [Nordic Semiconductor](http://www.nordicsemi.com/)'s Device Firmware Update (DFU) service to update a Bluetooth LE device.

## Install

```bash
npm install capacitor-nordic-dfu
npx cap sync
```

## iOS

After installation, the following additions should be made to the app's `Info.plist`

- Set [NSBluetoothAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothalwaysusagedescription?language=objc) to a descriptive text, to be shown to the user on first access to the Bluetooth adapter. If this is not defined the app will crash.

## Android

After installation, the following permissions be added to your `AndroidManifest.xml`:

``` xml
<!-- required for API 18 - 30 -->
<uses-permission
    android:name="android.permission.BLUETOOTH"
    android:maxSdkVersion="30" />
<uses-permission
    android:name="android.permission.BLUETOOTH_ADMIN"
    android:maxSdkVersion="30" />

<!-- required for API 23 - 30 -->
<uses-permission-sdk-23
    android:name="android.permission.ACCESS_COARSE_LOCATION"
    android:maxSdkVersion="30" />
<uses-permission-sdk-23
    android:name="android.permission.ACCESS_FINE_LOCATION"
    android:maxSdkVersion="30" />

<!-- API 31+ -->
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
<!-- add android:usesPermissionFlags="neverForLocation" when you can strongly assert that
        your app never derives physical location from Bluetooth scan results. -->
<uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

## API

<docgen-index>

* [`startDFU(...)`](#startdfu)
* [`abortDFU()`](#abortdfu)
* [`addListener('dfuStateDidChange', ...)`](#addlistenerdfustatedidchange)
* [`addListener('dfuProgressDidChange', ...)`](#addlistenerdfuprogressdidchange)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startDFU(...)

```typescript
startDFU(options: StartDFUOptions) => any
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#startdfuoptions">StartDFUOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### abortDFU()

```typescript
abortDFU() => any
```

**Returns:** <code>any</code>

--------------------


### addListener('dfuStateDidChange', ...)

```typescript
addListener(eventName: 'dfuStateDidChange', listenerFunc: (params: { state: string; deviceAddress?: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                         |
| ------------------ | ---------------------------------------------------------------------------- |
| **`eventName`**    | <code>'dfuStateDidChange'</code>                                             |
| **`listenerFunc`** | <code>(params: { state: string; deviceAddress?: string; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### addListener('dfuProgressDidChange', ...)

```typescript
addListener(eventName: 'dfuProgressDidChange', listenerFunc: (params: { percent: number; speed: number; avgSpeed: number; currentPart: number; partsTotal: number; deviceAddress?: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'dfuProgressDidChange'</code>                                                                                                                      |
| **`listenerFunc`** | <code>(params: { percent: number; speed: number; avgSpeed: number; currentPart: number; partsTotal: number; deviceAddress?: string; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### StartDFUOptions

| Prop                                                       | Type                 | Description                        |
| ---------------------------------------------------------- | -------------------- | ---------------------------------- |
| **`filePath`**                                             | <code>string</code>  | Supported Platforms: Android \ iOS |
| **`deviceAddress`**                                        | <code>string</code>  | Supported Platforms: Android \ iOS |
| **`forceDfu`**                                             | <code>boolean</code> | Supported Platforms: Android \ iOS |
| **`enableUnsafeExperimentalButtonlessServiceInSecureDfu`** | <code>boolean</code> | Supported Platforms: Android \ iOS |
| **`forceScanningForNewAddressInLegacyDfu`**                | <code>boolean</code> | Supported Platforms: Android       |
| **`disableResume`**                                        | <code>boolean</code> | Supported Platforms: Android \ iOS |
| **`foreground`**                                           | <code>boolean</code> | Supported Platforms: Android       |
| **`disableNotification`**                                  | <code>boolean</code> | Supported Platforms: Android       |
| **`dataObjectPreparationDelay`**                           | <code>number</code>  | Supported Platforms: Android       |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>

## Thanks

- [Android-DFU-Library](https://github.com/NordicSemiconductor/Android-DFU-Library)
- [IOS-DFU-Library](https://github.com/NordicSemiconductor/IOS-DFU-Library)
- [Capacitorjs](https://capacitorjs.com/)
