# Abrevva Capacitor Plugin

[![NPM Version](https://img.shields.io/npm/v/%40evva%2Fabrevva-capacitor)](https://www.npmjs.com/package/@evva/abrevva-capacitor)
[![NPM Downloads](https://img.shields.io/npm/dy/%40evva%2Fabrevva-capacitor)](https://www.npmjs.com/package/@evva/abrevva-capacitor)
![NPM Unpacked Size (with version)](https://img.shields.io/npm/unpacked-size/%40evva%2Fabrevva-capacitor/latest)
![GitHub last commit](https://img.shields.io/github/last-commit/evva-sfw/abrevva-capacitor)
[![GitHub branch check runs](https://img.shields.io/github/check-runs/evva-sfw/abrevva-capacitor/main)]([URL](https://github.com/evva-sfw/abrevva-capacitor/actions))
[![EVVA License](https://img.shields.io/badge/license-EVVA_License-yellow.svg?color=fce500&logo=data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgNjQwIDEwMjQiPgo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPgo8L2c+CjxwYXRoIGZpbGw9IiNmY2U1MDAiIGQ9Ik02MjIuNDIzIDUxMS40NDhsLTMzMS43NDYtNDY0LjU1MmgtMjg4LjE1N2wzMjkuODI1IDQ2NC41NTItMzI5LjgyNSA0NjYuNjY0aDI3NS42MTJ6Ij48L3BhdGg+Cjwvc3ZnPgo=)](LICENSE)

The EVVA Abrevva Capacitor Plugin is a collection of tools to work with electronical EVVA access components. It allows for scanning and connecting via BLE.

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)

## Features

- BLE Scanner for EVVA components
- Localize scanned EVVA components
- Disengage scanned EVVA components
- Read / Write data via BLE

## Requirements

- Capacitor >= 5.0.0
- Java 17+ (Android)
- Android SDK (Android)
- Android 10+ (API level 29) (Android)
- Xcode 15.4 (iOS)
- iOS 15.0+ (iOS)

## Installation

### Capacitor 7

```
npm install @evva/abrevva-capacitor
npx cap sync
```

### Capacitor 6

```
npm install @evva/abrevva-capacitor@4.0.1
npx cap sync
```

## Examples

### Initialize and scan for EVVA components

```typescript
import { AbrevvaBLEClient, BleDevice } from "@evva/abrevva-capacitor";

class ExampleClass {
  private devices: BleDevice[];
  
  async startScan(event: any) {
    this.devices = [];
   
    await AbrevvaBLEClient.initialize()
    await AbrevvaBLEClient.startScan({ timeout: 5_000 }, (device: BleDevice) => {
      this.devices.push(device);
    }, (success: boolean) => {
      console.log(`Scan started, success: ${success}`);
    }, (success: boolean) => {
      console.log(`Scan stopped, success: ${success}`);
    });
  }
}
```

### Read EVVA component advertisement

Get the EVVA advertisement data from a scanned EVVA component.

```typescript
const ad = device.advertisementData
console.log(ad?.rssi)
console.log(ad?.isConnectable)

const md = ad?.manufacturerData
console.log(md?.batteryStatus)
console.log(md?.isOnline)
console.log(md?.officeModeEnabled)
console.log(md?.officeModeActive)
// ...
```

There are several properties that can be accessed from the advertisement.

```typescript
export interface BleDeviceAdvertisementData {
  rssi?: number;
  isConnectable?: boolean;
  manufacturerData?: BleDeviceManufacturerData;
}

export interface BleDeviceManufacturerData {
  companyIdentifier?: string;
  version?: number;
  componentType?: "handle" | "escutcheon" | "cylinder" | "wallreader" | "emzy" | "iobox" | "unknown";
  mainFirmwareVersionMajor?: number;
  mainFirmwareVersionMinor?: number;
  mainFirmwareVersionPatch?: number;
  componentHAL?: string;
  batteryStatus?: "battery-full" | "battery-empty";
  mainConstructionMode?: boolean;
  subConstructionMode?: boolean;
  isOnline?: boolean;
  officeModeEnabled?: boolean;
  twoFactorRequired?: boolean;
  officeModeActive?: boolean;
  identifier?: string;
  subFirmwareVersionMajor?: number;
  subFirmwareVersionMinor?: number;
  subFirmwareVersionPatch?: number;
  subComponentIdentifier?: string;
}
```

### Localize EVVA component

With the signalize method you can localize scanned EVVA components. On a successful signalization the component will emit a melody indicating its location.

```typescript
const success = await AbrevvaBLEClient.signalize('deviceId');
```

### Disengage EVVA components

For the component disengage you have to provide access credentials to the EVVA component. Those are generally acquired
in the form of access media metadata from the Xesar software.

```typescript
const status = await AbrevvaBLEClient.disengage(
  'deviceId',
  'mobileId',
  'mobileDeviceKey',
  'mobileGroupId',
  'mediumAccessData',
  false,
);
```

There are several access status types upon attempting the component disengage.

```typescript
export enum DisengageStatusType {
  /// Component
  Authorized = "AUTHORIZED",
  AuthorizedPermanentEngage = "AUTHORIZED_PERMANENT_ENGAGE",
  AuthorizedPermanentDisengage = "AUTHORIZED_PERMANENT_DISENGAGE",
  AuthorizedBatteryLow = "AUTHORIZED_BATTERY_LOW",
  AuthorizedOffline = "AUTHORIZED_OFFLINE",
  Unauthorized = "UNAUTHORIZED",
  UnauthorizedOffline = "UNAUTHORIZED_OFFLINE",
  SignalLocalization = "SIGNAL_LOCALIZATION",
  MediumDefectOnline = "MEDIUM_DEFECT_ONLINE",
  MediumBlacklisted = "MEDIUM_BLACKLISTED",
  Error = "ERROR",

  /// Interface
  UnableToConnect = "UNABLE_TO_CONNECT",
  UnableToSetNotifications = "UNABLE_TO_SET_NOTIFICATIONS",
  UnableToReadChallenge = "UNABLE_TO_READ_CHALLENGE",
  UnableToWriteMDF = "UNABLE_TO_WRITE_MDF",
  AccessCipherError = "ACCESS_CIPHER_ERROR",
  BleAdapterDisabled = "BLE_ADAPTER_DISABLED",
  UnknownDevice = "UNKNOWN_DEVICE",
  UnknownStatusCode = "UNKNOWN_STATUS_CODE",
  Timeout = "TIMEOUT",
}
```

### Coding Identification Media

Use the CodingStation to write or update access data onto an EVVA identification medium.

```typescript
import { AbrevvaCodingStation } from "@evva/abrevva-capacitor";

export class ExampleClass {
  async writeMedium() {
    try {
      await AbrevvaCodingStation.register({
        url: "url",
        clientId: "clientId",
        username: "username",
        password: "password",
      });
      await AbrevvaCodingStation.connect();
      await AbrevvaCodingStation.write();
      await AbrevvaCodingStation.disconnect();
    } catch (e) {
      console.log(`Failed to write medium: ${e}`);
    }
  }
}
```

## API

<docgen-index>

* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Interfaces


#### AbrevvaBLEInterface

| Method                        | Signature                                                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **initialize**                | (options?: <a href="#initializeoptions">InitializeOptions</a> \| undefined) =&gt; Promise&lt;void&gt;                                                                         |
| **isEnabled**                 | () =&gt; Promise&lt;<a href="#booleanresult">BooleanResult</a>&gt;                                                                                                            |
| **isLocationEnabled**         | () =&gt; Promise&lt;<a href="#booleanresult">BooleanResult</a>&gt;                                                                                                            |
| **startEnabledNotifications** | () =&gt; Promise&lt;void&gt;                                                                                                                                                  |
| **stopEnabledNotifications**  | () =&gt; Promise&lt;void&gt;                                                                                                                                                  |
| **openLocationSettings**      | () =&gt; Promise&lt;void&gt;                                                                                                                                                  |
| **openBluetoothSettings**     | () =&gt; Promise&lt;void&gt;                                                                                                                                                  |
| **openAppSettings**           | () =&gt; Promise&lt;void&gt;                                                                                                                                                  |
| **startScan**                 | (options?: <a href="#blescanneroptions">BleScannerOptions</a> \| undefined) =&gt; Promise&lt;void&gt;                                                                         |
| **stopScan**                  | () =&gt; Promise&lt;void&gt;                                                                                                                                                  |
| **addListener**               | (eventName: "onEnabledChanged", listenerFunc: (result: <a href="#booleanresult">BooleanResult</a>) =&gt; void) =&gt; <a href="#pluginlistenerhandle">PluginListenerHandle</a> |
| **addListener**               | (eventName: string, listenerFunc: (event: <a href="#readresult">ReadResult</a>) =&gt; void) =&gt; <a href="#pluginlistenerhandle">PluginListenerHandle</a>                    |
| **addListener**               | (eventName: "onScanResult", listenerFunc: (result: <a href="#bledevice">BleDevice</a>) =&gt; void) =&gt; <a href="#pluginlistenerhandle">PluginListenerHandle</a>             |
| **addListener**               | (eventName: "onScanStart", listenerFunc: (success: <a href="#booleanresult">BooleanResult</a>) =&gt; void) =&gt; <a href="#pluginlistenerhandle">PluginListenerHandle</a>     |
| **addListener**               | (eventName: "onScanStop", listenerFunc: (success: <a href="#booleanresult">BooleanResult</a>) =&gt; void) =&gt; <a href="#pluginlistenerhandle">PluginListenerHandle</a>      |
| **connect**                   | (options: <a href="#deviceidoptions">DeviceIdOptions</a> & <a href="#timeoutoptions">TimeoutOptions</a>) =&gt; Promise&lt;void&gt;                                            |
| **disconnect**                | (options: <a href="#deviceidoptions">DeviceIdOptions</a>) =&gt; Promise&lt;void&gt;                                                                                           |
| **read**                      | (options: <a href="#readoptions">ReadOptions</a> & <a href="#timeoutoptions">TimeoutOptions</a>) =&gt; Promise&lt;<a href="#readresult">ReadResult</a>&gt;                    |
| **write**                     | (options: <a href="#writeoptions">WriteOptions</a> & <a href="#timeoutoptions">TimeoutOptions</a>) =&gt; Promise&lt;void&gt;                                                  |
| **signalize**                 | (options: <a href="#signalizeoptions">SignalizeOptions</a>) =&gt; Promise&lt;void&gt;                                                                                         |
| **disengage**                 | (options: <a href="#disengageoptions">DisengageOptions</a>) =&gt; Promise&lt;<a href="#stringresult">StringResult</a>&gt;                                                     |
| **startNotifications**        | (options: <a href="#readoptions">ReadOptions</a>) =&gt; Promise&lt;void&gt;                                                                                                   |
| **stopNotifications**         | (options: <a href="#readoptions">ReadOptions</a>) =&gt; Promise&lt;void&gt;                                                                                                   |


#### InitializeOptions

| Prop                          | Type                 |
| ----------------------------- | -------------------- |
| **`androidNeverForLocation`** | <code>boolean</code> |


#### BooleanResult

| Prop        | Type                 |
| ----------- | -------------------- |
| **`value`** | <code>boolean</code> |


#### BleScannerOptions

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`macFilter`**       | <code>string</code>  |
| **`allowDuplicates`** | <code>boolean</code> |
| **`timeout`**         | <code>number</code>  |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### ReadResult

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |


#### BleDevice

| Prop                    | Type                                                                              |
| ----------------------- | --------------------------------------------------------------------------------- |
| **`deviceId`**          | <code>string</code>                                                               |
| **`name`**              | <code>string</code>                                                               |
| **`advertisementData`** | <code><a href="#bledeviceadvertisementdata">BleDeviceAdvertisementData</a></code> |


#### BleDeviceAdvertisementData

| Prop                   | Type                                                                            |
| ---------------------- | ------------------------------------------------------------------------------- |
| **`rssi`**             | <code>number</code>                                                             |
| **`isConnectable`**    | <code>boolean</code>                                                            |
| **`manufacturerData`** | <code><a href="#bledevicemanufacturerdata">BleDeviceManufacturerData</a></code> |


#### BleDeviceManufacturerData

| Prop                           | Type                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| **`companyIdentifier`**        | <code>string</code>                                                                                   |
| **`version`**                  | <code>number</code>                                                                                   |
| **`componentType`**            | <code>'handle' \| 'escutcheon' \| 'cylinder' \| 'wallreader' \| 'emzy' \| 'iobox' \| 'unknown'</code> |
| **`mainFirmwareVersionMajor`** | <code>number</code>                                                                                   |
| **`mainFirmwareVersionMinor`** | <code>number</code>                                                                                   |
| **`mainFirmwareVersionPatch`** | <code>number</code>                                                                                   |
| **`componentHAL`**             | <code>string</code>                                                                                   |
| **`batteryStatus`**            | <code>'battery-full' \| 'battery-empty'</code>                                                        |
| **`mainConstructionMode`**     | <code>boolean</code>                                                                                  |
| **`subConstructionMode`**      | <code>boolean</code>                                                                                  |
| **`isOnline`**                 | <code>boolean</code>                                                                                  |
| **`officeModeEnabled`**        | <code>boolean</code>                                                                                  |
| **`twoFactorRequired`**        | <code>boolean</code>                                                                                  |
| **`officeModeActive`**         | <code>boolean</code>                                                                                  |
| **`identifier`**               | <code>string</code>                                                                                   |
| **`subFirmwareVersionMajor`**  | <code>number</code>                                                                                   |
| **`subFirmwareVersionMinor`**  | <code>number</code>                                                                                   |
| **`subFirmwareVersionPatch`**  | <code>number</code>                                                                                   |
| **`subComponentIdentifier`**   | <code>string</code>                                                                                   |


#### DeviceIdOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`deviceId`** | <code>string</code> |


#### TimeoutOptions

| Prop          | Type                |
| ------------- | ------------------- |
| **`timeout`** | <code>number</code> |


#### ReadOptions

| Prop                 | Type                |
| -------------------- | ------------------- |
| **`deviceId`**       | <code>string</code> |
| **`service`**        | <code>string</code> |
| **`characteristic`** | <code>string</code> |


#### WriteOptions

| Prop                 | Type                |
| -------------------- | ------------------- |
| **`deviceId`**       | <code>string</code> |
| **`service`**        | <code>string</code> |
| **`characteristic`** | <code>string</code> |
| **`value`**          | <code>string</code> |


#### SignalizeOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`deviceId`** | <code>string</code> |


#### StringResult

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |


#### DisengageOptions

| Prop                     | Type                 |
| ------------------------ | -------------------- |
| **`deviceId`**           | <code>string</code>  |
| **`mobileId`**           | <code>string</code>  |
| **`mobileDeviceKey`**    | <code>string</code>  |
| **`mobileGroupId`**      | <code>string</code>  |
| **`mediumAccessData`**   | <code>string</code>  |
| **`isPermanentRelease`** | <code>boolean</code> |


#### AbrevvaCryptoInterface

| Method                      | Signature                                                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **encrypt**                 | (options: { key: string; iv: string; adata: string; pt: string; tagLength: number; }) =&gt; Promise&lt;{ cipherText: string; authTag: string; }&gt; |
| **encryptFile**             | (options: { sharedSecret: string; ptPath: string; ctPath: string; }) =&gt; Promise&lt;void&gt;                                                      |
| **decrypt**                 | (options: { key: string; iv: string; adata: string; ct: string; tagLength: number; }) =&gt; Promise&lt;{ plainText: string; authOk: boolean; }&gt;  |
| **decryptFile**             | (options: { sharedSecret: string; ctPath: string; ptPath: string; }) =&gt; Promise&lt;void&gt;                                                      |
| **decryptFileFromURL**      | (options: { sharedSecret: string; url: string; ptPath: string; }) =&gt; Promise&lt;void&gt;                                                         |
| **generateKeyPair**         | () =&gt; Promise&lt;{ privateKey: string; publicKey: string; }&gt;                                                                                  |
| **computeSharedSecret**     | (options: { privateKey: string; peerPublicKey: string; }) =&gt; Promise&lt;{ sharedSecret: string; }&gt;                                            |
| **computeED25519PublicKey** | (options: { privateKey: string; }) =&gt; Promise&lt;{ publicKey: string; }&gt;                                                                      |
| **sign**                    | (options: { privateKey: string; data: string; }) =&gt; Promise&lt;{ signature: string; }&gt;                                                        |
| **verify**                  | (options: { publicKey: string; data: string; signature: string; }) =&gt; Promise&lt;void&gt;                                                        |
| **random**                  | (options: { numBytes: number; }) =&gt; Promise&lt;{ value: string; }&gt;                                                                            |
| **derive**                  | (options: { key: string; salt: string; info: string; length: number; }) =&gt; Promise&lt;{ value: string; }&gt;                                     |


#### AbrevvaCodingStationInterface

| Method         | Signature                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------- |
| **register**   | (options: <a href="#csconnectionoptions">CSConnectionOptions</a>) =&gt; Promise&lt;void&gt; |
| **connect**    | () =&gt; Promise&lt;void&gt;                                                                |
| **disconnect** | () =&gt; Promise&lt;void&gt;                                                                |
| **write**      | () =&gt; Promise&lt;void&gt;                                                                |


#### CSConnectionOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`url`**      | <code>string</code> |
| **`clientId`** | <code>string</code> |
| **`username`** | <code>string</code> |
| **`password`** | <code>string</code> |

</docgen-api>
