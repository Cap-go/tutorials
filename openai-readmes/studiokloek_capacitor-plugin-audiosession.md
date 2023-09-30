# @studiokloek/capacitor-plugin-audiosession

**This plugin works on iOS only.**

This plugin is a port of <https://github.com/saghul/cordova-plugin-audioroute> and allows iOS applications to get notified about audio session interruptions and route changes (for example when a headset is connected). To query and override the audio device in use is also supported.

## Install

```bash
npm install @studiokloek/capacitor-plugin-audiosession
npx cap sync
```

For now this plugin works only in Capacitor 4.0+.

## API

<docgen-index>

- [`currentOutputs()`](#currentoutputs)
- [`overrideOutput(...)`](#overrideoutput)
- [`addListener('routeChanged', ...)`](#addlistenerroutechanged)
- [`addListener('interruption', ...)`](#addlistenerinterruption)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### currentOutputs()

```typescript
currentOutputs() => Promise<AudioSessionPorts[]>
```

**Returns:** <code>Promise&lt;AudioSessionPorts[]&gt;</code>

---

### overrideOutput(...)

```typescript
overrideOutput(type: OutputOverrideType) => Promise<OverrideResult>
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`type`** | <code><a href="#outputoverridetype">OutputOverrideType</a></code> |

**Returns:** <code>Promise&lt;<a href="#overrideresult">OverrideResult</a>&gt;</code>

---

### addListener('routeChanged', ...)

```typescript
addListener(eventName: 'routeChanged', listenerFunc: RouteChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                |
| ------------------ | ------------------------------------------------------------------- |
| **`eventName`**    | <code>'routeChanged'</code>                                         |
| **`listenerFunc`** | <code><a href="#routechangelistener">RouteChangeListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('interruption', ...)

```typescript
addListener(eventName: 'interruption', listenerFunc: InterruptionListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>'interruption'</code>                                           |
| **`listenerFunc`** | <code><a href="#interruptionlistener">InterruptionListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### OverrideResult

<code>{ success: boolean; message: string; }</code>

#### OutputOverrideType

<code>'default' | 'speaker'</code>

#### RouteChangeListener

<code>(reason: <a href="#routechangereasons">RouteChangeReasons</a>): void</code>

#### InterruptionListener

<code>(type: <a href="#interruptiontypes">InterruptionTypes</a>): void</code>

### Enums

#### AudioSessionPorts

| Members                 | Value                           |
| ----------------------- | ------------------------------- |
| **`AIR_PLAY`**          | <code>'airplay'</code>          |
| **`BLUETOOTH_LE`**      | <code>'bluetooth-le'</code>     |
| **`BLUETOOTH_HFP`**     | <code>'bluetooth-hfp'</code>    |
| **`BLUETOOTH_A2DP`**    | <code>'bluetooth-a2dp'</code>   |
| **`BUILT_IN_SPEAKER`**  | <code>'builtin-speaker'</code>  |
| **`BUILT_IN_RECEIVER`** | <code>'builtin-receiver'</code> |
| **`HDMI`**              | <code>'hdmi'</code>             |
| **`HEADPHONES`**        | <code>'headphones'</code>       |
| **`LINE_OUT`**          | <code>'line-out'</code>         |

#### RouteChangeReasons

| Members                              | Value                                         |
| ------------------------------------ | --------------------------------------------- |
| **`NEW_DEVICE_AVAILABLE`**           | <code>'new-device-available'</code>           |
| **`OLD_DEVICE_UNAVAILABLE`**         | <code>'old-device-unavailable'</code>         |
| **`CATEGORY_CHANGE`**                | <code>'category-change'</code>                |
| **`OVERRIDE`**                       | <code>'override'</code>                       |
| **`WAKE_FROM_SLEEP`**                | <code>'wake-from-sleep'</code>                |
| **`NO_SUITABLE_ROUTE_FOR_CATEGORY`** | <code>'no-suitable-route-for-category'</code> |
| **`ROUTE_CONFIGURATION_CHANGE`**     | <code>'route-config-change'</code>            |
| **`UNKNOWN`**                        | <code>'unknown'</code>                        |

#### InterruptionTypes

| Members     | Value                |
| ----------- | -------------------- |
| **`BEGAN`** | <code>'began'</code> |
| **`ENDED`** | <code>'ended'</code> |

</docgen-api>

## License

MIT

## Author

Martijn Swart <https://studiokloek.nl>

Based on work from: Saúl Ibarra Corretgé <saghul@gmail.com>
