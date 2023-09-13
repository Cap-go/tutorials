# @falconeta/capacitor-plugin-matter

# WORK IN PROGRESS!

plugin that handle the Matter Application protocol

## Make SDK from CHIP repo

by default, plugins use standard Matter SDK (v 1.1.0.1) but if possible to make your custom SDK by connectedhomeip project (https://github.com/project-chip/connectedhomeip)

### Android

1. see `android_building.md` guide under /docs/guides (`Building Android CHIPTool from scripts` step after preconfiguration)
2. compress the content of the folder `examples/android/CHIPTool/app/libs` with `libs.zip` name.
3. upload the zip on your google drive
4. modify or create your custom `post-install.js` script with file ID and the google key

### IOS

1. bootstrap project
2. under `src/darwin/Framework` folder launch `xcodebuild -target "Matter" -sdk iphoneos -configuration Release OTHER_CFLAGS='${inherited} -Wno-unguarded-availability-new'`
3. compress the folder `src/darwin/Framework/build/Release-iphoneos/Matter.framework` with `Matter.framework.zip` name.
4. upload the zip on your google drive
5. modify or create your custom `post-install.js` script with file ID and the google key

## Install

```bash
npm install @falconeta/capacitor-plugin-matter
npx cap sync
```

## API

<docgen-index>

- [`configure(...)`](#configure)
- [`clear()`](#clear)
- [`qrCodeCommissioning(...)`](#qrcodecommissioning)
- [`manualCodeCommissioning(...)`](#manualcodecommissioning)
- [`getCerts()`](#getcerts)
- [`commandOnOff(...)`](#commandonoff)
- [`getEndpoint(...)`](#getendpoint)
- [`getCluster(...)`](#getcluster)
- [`readAttribute(...)`](#readattribute)
- [`subscribeAttribute(...)`](#subscribeattribute)
- [`openCommissioningWindow(...)`](#opencommissioningwindow)
- [`removeFabric(...)`](#removefabric)
- [`removeAllFabric(...)`](#removeallfabric)
- [`addListener(string, ...)`](#addlistenerstring)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### configure(...)

```typescript
configure(options: { deviceControllerKey?: string; caRootCert?: string; fabricId: string; vendorId: number; }) => Promise<void>
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ deviceControllerKey?: string; caRootCert?: string; fabricId: string; vendorId: number; }</code> |

---

### clear()

```typescript
clear() => Promise<void>
```

---

### qrCodeCommissioning(...)

```typescript
qrCodeCommissioning(options: { deviceId: string; qrCodeId: string; ssid: string; ssidPassword: string; }) => Promise<{ deviceType: string; }>
```

| Param         | Type                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| **`options`** | <code>{ deviceId: string; qrCodeId: string; ssid: string; ssidPassword: string; }</code> |

**Returns:** <code>Promise&lt;{ deviceType: string; }&gt;</code>

---

### manualCodeCommissioning(...)

```typescript
manualCodeCommissioning(options: { deviceId: string; manualCode: string; ssid: string; ssidPassword: string; }) => Promise<{ deviceType: string; }>
```

| Param         | Type                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ deviceId: string; manualCode: string; ssid: string; ssidPassword: string; }</code> |

**Returns:** <code>Promise&lt;{ deviceType: string; }&gt;</code>

---

### getCerts()

```typescript
getCerts() => Promise<{ deviceControllerKey: string; caRootCert: string; }>
```

**Returns:** <code>Promise&lt;{ deviceControllerKey: string; caRootCert: string; }&gt;</code>

---

### commandOnOff(...)

```typescript
commandOnOff(options: { deviceId: string; value: boolean; endpointId: number; }) => Promise<void>
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ deviceId: string; value: boolean; endpointId: number; }</code> |

---

### getEndpoint(...)

```typescript
getEndpoint<T>(options: { deviceId: string; endpointId: number; }) => Promise<{ data: T; }>
```

| Param         | Type                                                   |
| ------------- | ------------------------------------------------------ |
| **`options`** | <code>{ deviceId: string; endpointId: number; }</code> |

**Returns:** <code>Promise&lt;{ data: T; }&gt;</code>

---

### getCluster(...)

```typescript
getCluster<T>(options: { deviceId: string; endpointId: number; clusterId: number; }) => Promise<{ data: T; }>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ deviceId: string; endpointId: number; clusterId: number; }</code> |

**Returns:** <code>Promise&lt;{ data: T; }&gt;</code>

---

### readAttribute(...)

```typescript
readAttribute(options: AttributePath) => Promise<{ value: string; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#attributepath">AttributePath</a></code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### subscribeAttribute(...)

```typescript
subscribeAttribute(options: SubscriberOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#subscriberoptions">SubscriberOptions</a></code> |

---

### openCommissioningWindow(...)

```typescript
openCommissioningWindow(options: { deviceId: string; discriminator: number; duration: number; setupPIN: number; }) => Promise<{ manualCode: string; }>
```

| Param         | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ deviceId: string; discriminator: number; duration: number; setupPIN: number; }</code> |

**Returns:** <code>Promise&lt;{ manualCode: string; }&gt;</code>

---

### removeFabric(...)

```typescript
removeFabric(options: { deviceId: string; fabricId: string; }) => Promise<void>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ deviceId: string; fabricId: string; }</code> |

---

### removeAllFabric(...)

```typescript
removeAllFabric(options: { deviceId: string; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ deviceId: string; }</code> |

---

### addListener(string, ...)

```typescript
addListener<T>(eventName: string, listenerFunc: AttributeChangeListener<T>) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------ |
| **`eventName`**    | <code>string</code>                                                                  |
| **`listenerFunc`** | <code><a href="#attributechangelistener">AttributeChangeListener</a>&lt;T&gt;</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### AttributePath

| Prop              | Type                |
| ----------------- | ------------------- |
| **`deviceId`**    | <code>string</code> |
| **`endpointId`**  | <code>number</code> |
| **`clusterId`**   | <code>number</code> |
| **`attributeId`** | <code>number</code> |

#### EventOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`eventName`** | <code>string</code> |
| **`min`**       | <code>number</code> |
| **`max`**       | <code>number</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### SubscriberOptions

<code><a href="#eventoptions">EventOptions</a> & <a href="#attributepath">AttributePath</a></code>

#### AttributeChangeListener

<code>(data: T): void</code>

</docgen-api>
