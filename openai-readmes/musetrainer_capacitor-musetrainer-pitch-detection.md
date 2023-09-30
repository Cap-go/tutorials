[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/musetrainer/capacitor-musetrainer-pitch-detection/blob/master/LICENSE)
[![version](https://img.shields.io/npm/v/capacitor-musetrainer-pitch-detection/latest.svg)](https://www.npmjs.com/package/capacitor-musetrainer-pitch-detection)

# capacitor-musetrainer-pitch-detection

Capacitor Pitch Detection plugin, by authors of [MuseTrainer app](https://musetrainer.com).

[Example app](https://github.com/musetrainer/pitch-detector).

## Supports

- [x] iOS
- [ ] Android
- [ ] Web

## Install

```bash
npm install capacitor-musetrainer-pitch-detection
npx cap sync
```

## API

<docgen-index>

- [`addListener('pitchReceive', ...)`](#addlistenerpitchreceive)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('pitchReceive', ...)

```typescript
addListener(eventName: 'pitchReceive', listenerFunc: (pitch: Pitch) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'pitchReceive'</code>                                 |
| **`listenerFunc`** | <code>(pitch: <a href="#pitch">Pitch</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

---

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### PermissionStatus

| Prop             | Type                                                        |
| ---------------- | ----------------------------------------------------------- |
| **`microphone`** | <code><a href="#permissionstate">PermissionState</a></code> |

### Type Aliases

#### Pitch

<code>{ freq: number; amp: number; note: string; noteAlt: string; }</code>

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
