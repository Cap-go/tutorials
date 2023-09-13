# How to use

### First build the plugin

```
npm install
npm run build
```

### In the ionic project install it like this (just change path to yours)

```
npm install /{path-to-plugin}/capacitor-sensors
```

### And then

```
ionic capacitor sync android
ionic capacitor sync ios
```

### You can use the Sensors like this

```typescript
import { Sensors, SensorData } from 'sensors'

useEffect(() => {
  Sensors.addListener('magnetometerChange', (res: SensorData) => {
    setMangetometerX(res.x)
    setMangetometerY(res.y)
    setMangetometerZ(res.z)
  })
  Sensors.addListener('gyroscopeChange', (res: SensorData) => {
    setGyroscopeX(res.x)
    setGyroscopeY(res.y)
    setGyroscopeZ(res.z)
  })
  Sensors.addListener('accelerometerChange', (res: SensorData) => {
    setAccelerometerX(res.x)
    setAccelerometerY(res.y)
    setAccelerometerZ(res.z)
  })
}, [])
```

# sensors

Reading motion sensors.

## Install

```bash
npm install sensors
npx cap sync
```

## API

<docgen-index>

- [`addListener('magnetometerChange', ...)`](#addlistenermagnetometerchange)
- [`addListener('accelerometerChange', ...)`](#addlisteneraccelerometerchange)
- [`addListener('gyroscopeChange', ...)`](#addlistenergyroscopechange)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('magnetometerChange', ...)

```typescript
addListener(eventName: 'magnetometerChange', listenerFunc: (magnetometerData: SensorData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens for magnetometer data change.

| Param              | Type                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'magnetometerChange'</code>                                                |
| **`listenerFunc`** | <code>(magnetometerData: <a href="#sensordata">SensorData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('accelerometerChange', ...)

```typescript
addListener(eventName: 'accelerometerChange', listenerFunc: (magnetometerData: SensorData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens for accelerometer data change.

| Param              | Type                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'accelerometerChange'</code>                                               |
| **`listenerFunc`** | <code>(magnetometerData: <a href="#sensordata">SensorData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('gyroscopeChange', ...)

```typescript
addListener(eventName: 'gyroscopeChange', listenerFunc: (magnetometerData: SensorData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens for gyroscope data change.

| Param              | Type                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'gyroscopeChange'</code>                                                   |
| **`listenerFunc`** | <code>(magnetometerData: <a href="#sensordata">SensorData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### SensorData

| Prop    | Type                |
| ------- | ------------------- |
| **`x`** | <code>number</code> |
| **`y`** | <code>number</code> |
| **`z`** | <code>number</code> |

</docgen-api>
