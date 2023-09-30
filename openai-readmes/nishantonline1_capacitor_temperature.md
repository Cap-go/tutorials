# capacitor-temperature

The DeviceTemperature is a Capacitor plugin that provides an easy-to-use interface to access the current temperature of the user's device.

## Install

```bash
npm install capacitor-temperature
npx cap sync
```

## API

<docgen-index>

- [`getTemperature()`](#gettemperature)
- [`addListener('temperatureUpdate', ...)`](#addlistenertemperatureupdate)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getTemperature()

```typescript
getTemperature() => Promise<{ temperature: number; }>
```

**Returns:** <code>Promise&lt;{ temperature: number; }&gt;</code>

---

### addListener('temperatureUpdate', ...)

```typescript
addListener(eventName: 'temperatureUpdate', listenerFunc: (data: { temperature: number; }) => void) => PluginListenerHandle
```

| Param              | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| **`eventName`**    | <code>'temperatureUpdate'</code>                         |
| **`listenerFunc`** | <code>(data: { temperature: number; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
