# capacitor-background-location

this plugins ensures to get the location in background when app is suspended

## Install

```bash
npm install capacitor-background-location
npx cap sync
```

## API

<docgen-index>

- [`setConfig(...)`](#setconfig)
- [`getGpsStatus()`](#getgpsstatus)
- [`start(...)`](#start)
- [`stop()`](#stop)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setConfig(...)

```typescript
setConfig(config: IConfig) => Promise<{}>
```

| Param        | Type                                        |
| ------------ | ------------------------------------------- |
| **`config`** | <code><a href="#iconfig">IConfig</a></code> |

**Returns:** <code>Promise&lt;{}&gt;</code>

---

### getGpsStatus()

```typescript
getGpsStatus() => Promise<IGpsStatus>
```

**Returns:** <code>Promise&lt;<a href="#igpsstatus">IGpsStatus</a>&gt;</code>

---

### start(...)

```typescript
start(options: IStartOptions) => Promise<{}>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#istartoptions">IStartOptions</a></code> |

**Returns:** <code>Promise&lt;{}&gt;</code>

---

### stop()

```typescript
stop() => Promise<{}>
```

**Returns:** <code>Promise&lt;{}&gt;</code>

---

### addListener(...)

```typescript
addListener(eventName: EVENTS.Change, callback: (location: ILocation) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param           | Type                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| **`eventName`** | <code><a href="#events">EVENTS.Change</a></code>                       |
| **`callback`**  | <code>(location: <a href="#ilocation">ILocation</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener(...)

```typescript
addListener(eventName: EVENTS.Error, callback: (err?: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param           | Type                                            |
| --------------- | ----------------------------------------------- |
| **`eventName`** | <code><a href="#events">EVENTS.Error</a></code> |
| **`callback`**  | <code>(err?: any) =&gt; void</code>             |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

---

### Interfaces

#### IConfig

| Prop              | Type                                    |
| ----------------- | --------------------------------------- |
| **`title`**       | <code>string</code>                     |
| **`description`** | <code>string</code>                     |
| **`url`**         | <code>string</code>                     |
| **`headers`**     | <code>{ [key: string]: string; }</code> |
| **`body`**        | <code>{ [key: string]: any; }</code>    |

#### IGpsStatus

| Prop         | Type                 |
| ------------ | -------------------- |
| **`status`** | <code>boolean</code> |

#### IStartOptions

| Prop                   | Type                                                                            |
| ---------------------- | ------------------------------------------------------------------------------- |
| **`interval`**         | <code>number</code>                                                             |
| **`locationPriority`** | <code><a href="#location_priority_android">LOCATION_PRIORITY_ANDROID</a></code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### ILocation

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |
| **`accuracy`**  | <code>number</code> |
| **`altitude`**  | <code>number</code> |
| **`bearing`**   | <code>number</code> |
| **`angle`**     | <code>number</code> |
| **`speed`**     | <code>number</code> |
| **`time`**      | <code>string</code> |

### Enums

#### LOCATION_PRIORITY_ANDROID

| Members                                | Value            |
| -------------------------------------- | ---------------- |
| **`PRIORITY_HIGH_ACCURACY`**           | <code>100</code> |
| **`PRIORITY_BALANCED_POWER_ACCURACY`** | <code>102</code> |
| **`PRIORITY_LOW_POWER`**               | <code>104</code> |
| **`PRIORITY_NO_POWER`**                | <code>105</code> |

#### EVENTS

| Members      | Value                 |
| ------------ | --------------------- |
| **`Change`** | <code>"CHANGE"</code> |
| **`Error`**  | <code>"ERROR"</code>  |

</docgen-api>

<hr style="margin: 3rem 0px;"/>

###

ANDROID

###

```bash
     <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
     <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

And add `xmlns:tools="http://schemas.android.com/tools"` to AndroidManifest.xml

<hr/>
###
IOS
###

```bash

     <key>NSLocationAlwaysUsageDescription</key>
     <string>Description</string>
     <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
     <string>Description</string>
     <key>NSLocationWhenInUseUsageDescription</key>
     <string>Description</string>

```

And enable to `Location update` from `Signing & Capabilities` in xcode
