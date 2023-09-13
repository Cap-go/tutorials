# capacitor-audio-toggle

Audio Toggle Plugin for VOIP Apps

## Install

```bash
npm install capacitor-audio-toggle
npx cap sync
```

## API

<docgen-index>

- [`setAudioMode(...)`](#setaudiomode)
- [`bluetoothConnected()`](#bluetoothconnected)
- [`addListener('bluetoothConnected', ...)`](#addlistenerbluetoothconnected)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setAudioMode(...)

```typescript
setAudioMode(options: { mode: string; }) => Promise<{ mode: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ mode: string; }</code> |

**Returns:** <code>Promise&lt;{ mode: string; }&gt;</code>

---

### bluetoothConnected()

```typescript
bluetoothConnected() => Promise<{ isBluetooth: boolean; }>
```

**Returns:** <code>Promise&lt;{ isBluetooth: boolean; }&gt;</code>

---

### addListener('bluetoothConnected', ...)

```typescript
addListener(eventName: 'bluetoothConnected', listenerFunc: (bluetoothConnected: boolean) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                  |
| ------------------ | ----------------------------------------------------- |
| **`eventName`**    | <code>'bluetoothConnected'</code>                     |
| **`listenerFunc`** | <code>(bluetoothConnected: boolean) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
