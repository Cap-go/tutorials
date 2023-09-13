# jwplayer-capacitor

Integration of JWPlayer Web and Mobile SDKs with Capacitor

## Install

```bash
npm install jwplayer-capacitor
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`initialize(...)`](#initialize)
- [`create(...)`](#create)
- [`remove()`](#remove)
- [`getPosition()`](#getposition)
- [`seek(...)`](#seek)
- [`addButton(...)`](#addbutton)
- [`addCuePoints(...)`](#addcuepoints)
- [`playlistItem(...)`](#playlistitem)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

---

### initialize(...)

```typescript
initialize(options: { webLicenseKey?: string; androidLicenseKey?: string; iosLicenseKey?: string; googleCastId?: string; debug?: boolean; }) => any
```

| Param         | Type                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ webLicenseKey?: string; androidLicenseKey?: string; iosLicenseKey?: string; googleCastId?: string; debug?: boolean; }</code> |

**Returns:** <code>any</code>

---

### create(...)

```typescript
create(options: { webConfiguration?: { container: string; properties?: any; }; nativeConfiguration?: JWPlayerNativeConfiguration; advertisingConfig?: JWPlayerAd; }) => any
```

| Param         | Type                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ webConfiguration?: { container: string; properties?: any; }; nativeConfiguration?: <a href="#jwplayernativeconfiguration">JWPlayerNativeConfiguration</a>; advertisingConfig?: <a href="#jwplayerad">JWPlayerAd</a>; }</code> |

**Returns:** <code>any</code>

---

### remove()

```typescript
remove() => any
```

**Returns:** <code>any</code>

---

### getPosition()

```typescript
getPosition() => any
```

**Returns:** <code>any</code>

---

### seek(...)

```typescript
seek(options: { position: number; }) => any
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ position: number; }</code> |

**Returns:** <code>any</code>

---

### addButton(...)

```typescript
addButton(img: string, tooltip: string, callback: () => void, id: string, btnClass: string) => void
```

| Param          | Type                       |
| -------------- | -------------------------- |
| **`img`**      | <code>string</code>        |
| **`tooltip`**  | <code>string</code>        |
| **`callback`** | <code>() =&gt; void</code> |
| **`id`**       | <code>string</code>        |
| **`btnClass`** | <code>string</code>        |

---

### addCuePoints(...)

```typescript
addCuePoints(options: { cuePoints: JWPlayerCuePoint[]; }) => void
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ cuePoints: {}; }</code> |

---

### playlistItem(...)

```typescript
playlistItem(options: { index: number; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ index: number; }</code> |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(eventName: 'playerEvent', listenerFunc: EventChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for events in player

| Param              | Type                                           |
| ------------------ | ---------------------------------------------- |
| **`eventName`**    | <code>"playerEvent"</code>                     |
| **`listenerFunc`** | <code>(event: JWPlayerEvent) =&gt; void</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### addListener(...)

```typescript
addListener(eventName: 'fullScreenPlayerEvent', listenerFunc: EventChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                           |
| ------------------ | ---------------------------------------------- |
| **`eventName`**    | <code>"fullScreenPlayerEvent"</code>           |
| **`listenerFunc`** | <code>(event: JWPlayerEvent) =&gt; void</code> |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(eventName: 'readyPlayerEvent', listenerFunc: EventChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                           |
| ------------------ | ---------------------------------------------- |
| **`eventName`**    | <code>"readyPlayerEvent"</code>                |
| **`listenerFunc`** | <code>(event: JWPlayerEvent) =&gt; void</code> |

**Returns:** <code>any</code>

---

### removeAllListeners()

```typescript
removeAllListeners() => any
```

Remove all listeners (including the network status changes) for this plugin.

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### Interfaces

#### JWPlayerNativeConfiguration

| Prop                             | Type                 |
| -------------------------------- | -------------------- |
| **`width`**                      | <code>number</code>  |
| **`height`**                     | <code>number</code>  |
| **`x`**                          | <code>number</code>  |
| **`y`**                          | <code>number</code>  |
| **`googleCastId`**               | <code>string</code>  |
| **`front`**                      | <code>boolean</code> |
| **`autostart`**                  | <code>boolean</code> |
| **`forceFullScreenOnLandscape`** | <code>boolean</code> |
| **`forceFullScreen`**            | <code>boolean</code> |
| **`playlist`**                   | <code>{}</code>      |

#### JWPlayerAd

| Prop           | Type                |
| -------------- | ------------------- |
| **`type`**     | <code>string</code> |
| **`schedule`** | <code>{}</code>     |

#### JWPlayerAdSchedule

| Prop        | Type                |
| ----------- | ------------------- |
| **`url`**   | <code>string</code> |
| **`begin`** | <code>number</code> |

#### JWPlayerCuePoint

| Prop        | Type                |
| ----------- | ------------------- |
| **`type`**  | <code>string</code> |
| **`text`**  | <code>string</code> |
| **`begin`** | <code>number</code> |

#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
