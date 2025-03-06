# capacitor-plugin-audiosession-bluetooth

**This plugin works on iOS only.**

This plugin is a fork of [studiokloek/capacitor-plugin-audiosession](https://github.com/studiokloek/capacitor-plugin-audiosession) (which is a port of [cordova-plugin-audioroute](https://github.com/saghul/cordova-plugin-audioroute)) with additional features for automatic audio device switching. It provides:

- Bluetooth device auto-switching support
- Priority-based output device selection
- Real-time audio route change detection
- Customizable device priority order

## Key Features

- Automatically switches to connected Bluetooth devices
- Configurable device priority (wired > Bluetooth > built-in speaker)
- Handles audio interruptions and route changes
- Supports iOS audio session management

## Usage Example

```typescript
import { AudioSession, AudioSessionPorts } from 'capacitor-plugin-audiosession-bluetooth';

// Configure on app startup
await AudioSession.configure({
  autoSwitchBluetooth: true,
  priorityOrder: [
    AudioSessionPorts.LINE_OUT, // Wired connection
    AudioSessionPorts.HEADPHONES, // Headphone jack
    AudioSessionPorts.BLUETOOTH_A2DP, // Bluetooth audio
    AudioSessionPorts.BLUETOOTH_HFP, // Bluetooth headset
    AudioSessionPorts.BLUETOOTH_LE, // Bluetooth Low Energy
    AudioSessionPorts.AIR_PLAY, // AirPlay
    AudioSessionPorts.BUILT_IN_SPEAKER, // Built-in speaker
  ],
});

// Listen for route changes
AudioSession.addListener('routeChanged', (reason) => {
  console.log('Audio route changed:', reason);
});
```

**Key Features Demonstrated:**

- Automatic device switching based on priority
- Real-time route change monitoring
- Custom priority configuration

## Install

```bash
npm install @studiokloek/capacitor-plugin-audiosession
npx cap sync
```

For now this plugin works only in Capacitor 4.0+.

## API

<docgen-index>

* [`currentOutputs()`](#currentoutputs)
* [`overrideOutput(...)`](#overrideoutput)
* [`addListener('routeChanged', ...)`](#addlistenerroutechanged-)
* [`addListener('interruption', ...)`](#addlistenerinterruption-)
* [`configure(...)`](#configure)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### currentOutputs()

```typescript
currentOutputs() => Promise<AudioSessionPorts[]>
```

**Returns:** <code>Promise&lt;AudioSessionPorts[]&gt;</code>

--------------------


### overrideOutput(...)

```typescript
overrideOutput(type: OutputOverrideType) => Promise<OverrideResult>
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`type`** | <code><a href="#outputoverridetype">OutputOverrideType</a></code> |

**Returns:** <code>Promise&lt;<a href="#overrideresult">OverrideResult</a>&gt;</code>

--------------------


### addListener('routeChanged', ...)

```typescript
addListener(eventName: 'routeChanged', listenerFunc: RouteChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                |
| ------------------ | ------------------------------------------------------------------- |
| **`eventName`**    | <code>'routeChanged'</code>                                         |
| **`listenerFunc`** | <code><a href="#routechangelistener">RouteChangeListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('interruption', ...)

```typescript
addListener(eventName: 'interruption', listenerFunc: InterruptionListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>'interruption'</code>                                           |
| **`listenerFunc`** | <code><a href="#interruptionlistener">InterruptionListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### configure(...)

```typescript
configure(options: AudioSessionOptions) => Promise<void>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#audiosessionoptions">AudioSessionOptions</a></code> |

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### AudioSessionOptions

| Prop                      | Type                             |
| ------------------------- | -------------------------------- |
| **`autoSwitchBluetooth`** | <code>boolean</code>             |
| **`priorityOrder`**       | <code>AudioSessionPorts[]</code> |


### Type Aliases


#### OverrideResult

<code>{ success: boolean; message: string; }</code>


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
