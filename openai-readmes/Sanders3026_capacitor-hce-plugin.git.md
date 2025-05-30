# Capacitor HCE plugin

Host Card Emulation (HCE) Plugin for Capacitor / Ionic on Android. This project is ported and reuse code based from https://github.com/agmo-ios-team/flutter_nfc_hce that forked for Flutter HCE Plugin https://pub.dev/packages/flutter_nfc_hce you can follow the introcuction for thier project

## Install

```bash
npm install capacitor-hce-plugin-int
npx cap sync
```

## Limitation
- This plugin only support NFC Type-4 Tag with NDEF message for now

## Android Setup 

1) Add permission to your `AndroidManifest.xml`.
   ````xml
    <uses-permission android:name="android.permission.NFC" />
    <uses-feature android:name="android.hardware.nfc" android:required="true" />
    <uses-feature android:name="android.hardware.nfc.hce" android:required="true" />
    <uses-permission android:name="android.permission.VIBRATE" />
   ````

2) Register service to your `AndroidManifest.xml`.
   ````xml
    <service android:name="com.thanmgan22.plugins.nfchce.KHostApduService"
                 android:exported="true"
                 android:enabled="true"
                 android:permission="android.permission.BIND_NFC_SERVICE">
       <intent-filter>
           <action android:name="android.nfc.cardemulation.action.HOST_APDU_SERVICE"/>
           <category android:name="android.intent.category.DEFAULT"/>
       </intent-filter>
      <meta-data android:name="android.nfc.cardemulation.host_apdu_service"
                 android:resource="@xml/apduservice"/>
    </service>
   ````

3) Add apduservice.xml to your res/xml
    ````xml
    <?xml version="1.0" encoding="utf-8"?>
    <host-apdu-service xmlns:android="http://schemas.android.com/apk/res/android"
                       android:description="@string/servicedesc" android:requireDeviceScreenOn="false" android:requireDeviceUnlock="false">
        <aid-group android:description="@string/aiddescription"  android:category="other" >
            <aid-filter android:name="D2760000850101"/>
        </aid-group>
    </host-apdu-service>
    ````

4) Add strings.xml to your res/values
    ````xml
    <resources>
    <string name="servicedesc">servicedesc</string>
    <string name="aiddescription">aiddescription</string>
    </resources>
    ````
## Ios Setup 
1) Vajag Pieteikties Apple Ios HCE entitelment. Kad piesakās norādīt AID kā D2760000850101
2) Pievienot Apple HCE pie sava projekta Xcode


## Izmantošana

1) Importēt Galveno Module
    ````tsx
   import {NfcEmulation} from 'capacitor-hce-plugin-int';
    ````
2) Izmanto kā parastu component, data parametrā ievada vērtību ko grib emulēt kā nfc tag.
   ````tsx
    <NfcEmulation data="Hello World!"></NfcEmulation>
   ````
3) January pats grib piekļūt visiem API, to var izdarīt importējot HCECapacitorPlugin
    ````tsx
   import { HCECapacitorPlugin } from 'capacitor-hce-plugin-int';
   ````
## API

<docgen-index>

* [`StartIosEmulation(...)`](#startiosemulation)
* [`addListener('sessionInvalidated' | 'nfcDataComplete', ...)`](#addlistenersessioninvalidated--nfcdatacomplete-)
* [`removeListener(...)`](#removelistener)
* [`startNfcHce(...)`](#startnfchce)
* [`stopNfcHce()`](#stopnfchce)
* [`isNfcSupported()`](#isnfcsupported)
* [`isNfcEnabled()`](#isnfcenabled)
* [`isNfcHceSupported()`](#isnfchcesupported)
* [`isSecureNfcEnabled()`](#issecurenfcenabled)
* [`enableApduService(...)`](#enableapduservice)
* [`addListener('onStatusChanged', ...)`](#addlisteneronstatuschanged-)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### StartIosEmulation(...)

```typescript
StartIosEmulation(options: { Data: string; }) => Promise<{ Data: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ Data: string; }</code> |

**Returns:** <code>Promise&lt;{ Data: string; }&gt;</code>

--------------------


### addListener('sessionInvalidated' | 'nfcDataComplete', ...)

```typescript
addListener(eventName: 'sessionInvalidated' | 'nfcDataComplete', listener: (event: any) => void) => Promise<void>
```

| Param           | Type                                                   |
| --------------- | ------------------------------------------------------ |
| **`eventName`** | <code>'sessionInvalidated' \| 'nfcDataComplete'</code> |
| **`listener`**  | <code>(event: any) =&gt; void</code>                   |

--------------------


### removeListener(...)

```typescript
removeListener(eventName: 'sessionInvalidated' | 'nfcDataComplete', listener: (event: any) => void) => Promise<void>
```

| Param           | Type                                                   |
| --------------- | ------------------------------------------------------ |
| **`eventName`** | <code>'sessionInvalidated' \| 'nfcDataComplete'</code> |
| **`listener`**  | <code>(event: any) =&gt; void</code>                   |

--------------------


### startNfcHce(...)

```typescript
startNfcHce(options: { content: string; mimeType?: string; persistMessage?: boolean; }) => Promise<{ success: boolean; }>
```

| Param         | Type                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| **`options`** | <code>{ content: string; mimeType?: string; persistMessage?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### stopNfcHce()

```typescript
stopNfcHce() => Promise<{ success: boolean; }>
```

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### isNfcSupported()

```typescript
isNfcSupported() => Promise<{ supported: boolean; }>
```

**Returns:** <code>Promise&lt;{ supported: boolean; }&gt;</code>

--------------------


### isNfcEnabled()

```typescript
isNfcEnabled() => Promise<{ enabled: boolean; }>
```

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

--------------------


### isNfcHceSupported()

```typescript
isNfcHceSupported() => Promise<{ supported: boolean; }>
```

**Returns:** <code>Promise&lt;{ supported: boolean; }&gt;</code>

--------------------


### isSecureNfcEnabled()

```typescript
isSecureNfcEnabled() => Promise<{ enabled: boolean; }>
```

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

--------------------


### enableApduService(...)

```typescript
enableApduService(options: { enable: boolean; }) => Promise<{ enabled: boolean; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ enable: boolean; }</code> |

**Returns:** <code>Promise&lt;{ enabled: boolean; }&gt;</code>

--------------------


### addListener('onStatusChanged', ...)

```typescript
addListener(eventName: 'onStatusChanged', listenerFunc: (response: { eventName: ReaderStatusType; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onStatusChanged'</code>                                                                       |
| **`listenerFunc`** | <code>(response: { eventName: <a href="#readerstatustype">ReaderStatusType</a>; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### ReaderStatusType

| Members                   | Value                                |
| ------------------------- | ------------------------------------ |
| **`CardEmulatorStarted`** | <code>'card-emulator-started'</code> |
| **`ScanError`**           | <code>'scan-error'</code>            |
| **`ScanCompleted`**       | <code>'scan-completed'</code>        |
| **`CardEmulatorStopped`** | <code>'card-emulator-stopped'</code> |

</docgen-api>
