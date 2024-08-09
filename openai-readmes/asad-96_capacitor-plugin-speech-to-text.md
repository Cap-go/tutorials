# capacitor-plugin-speech-to-text

capacitor-plugin-speech-to-text

## Install

```bash
npm install capacitor-plugin-speech-to-text
npx cap sync
```

## API

<docgen-index>

* [`hasPermission()`](#haspermission)
* [`initialize()`](#initialize)
* [`locales()`](#locales)
* [`stop()`](#stop)
* [`cancel()`](#cancel)
* [`listen(...)`](#listen)
* [`addListener('textRecognition', ...)`](#addlistenertextrecognition)
* [`addListener('notifyStatus', ...)`](#addlistenernotifystatus)
* [`addListener('notifyError', ...)`](#addlistenernotifyerror)
* [`addListener('soundLevelChange', ...)`](#addlistenersoundlevelchange)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### hasPermission()

```typescript
hasPermission() => Promise<{ permission: boolean; }>
```

**Returns:** <code>Promise&lt;{ permission: boolean; }&gt;</code>

--------------------


### initialize()

```typescript
initialize() => Promise<{ available: boolean; }>
```

**Returns:** <code>Promise&lt;{ available: boolean; }&gt;</code>

--------------------


### locales()

```typescript
locales() => Promise<{ languages: any[]; }>
```

**Returns:** <code>Promise&lt;{ languages: any[]; }&gt;</code>

--------------------


### stop()

```typescript
stop() => Promise<{ stopped: boolean; }>
```

**Returns:** <code>Promise&lt;{ stopped: boolean; }&gt;</code>

--------------------


### cancel()

```typescript
cancel() => Promise<{ cancelled: boolean; }>
```

**Returns:** <code>Promise&lt;{ cancelled: boolean; }&gt;</code>

--------------------


### listen(...)

```typescript
listen(options: SpeechParams) => Promise<{ listening: boolean; }>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#speechparams">SpeechParams</a></code> |

**Returns:** <code>Promise&lt;{ listening: boolean; }&gt;</code>

--------------------


### addListener('textRecognition', ...)

```typescript
addListener(eventName: "textRecognition", listenerFunc: (data: { speechString: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called on textRecognition and result received

Provides textRecognition result.

| Param              | Type                                                      |
| ------------------ | --------------------------------------------------------- |
| **`eventName`**    | <code>'textRecognition'</code>                            |
| **`listenerFunc`** | <code>(data: { speechString: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 0.0.1

--------------------


### addListener('notifyStatus', ...)

```typescript
addListener(eventName: "notifyStatus", listenerFunc: (data: { status: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when status changes and result received

Provides speech recognition status.

| Param              | Type                                                |
| ------------------ | --------------------------------------------------- |
| **`eventName`**    | <code>'notifyStatus'</code>                         |
| **`listenerFunc`** | <code>(data: { status: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 0.0.1

--------------------


### addListener('notifyError', ...)

```typescript
addListener(eventName: "notifyError", listenerFunc: (data: { error: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when there is an error and result received

Provides speech recognition error.

| Param              | Type                                               |
| ------------------ | -------------------------------------------------- |
| **`eventName`**    | <code>'notifyError'</code>                         |
| **`listenerFunc`** | <code>(data: { error: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 0.0.1

--------------------


### addListener('soundLevelChange', ...)

```typescript
addListener(eventName: "soundLevelChange", listenerFunc: (data: { soundLevel: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when sound level changes and result received

Provides sound level change.

| Param              | Type                                                    |
| ------------------ | ------------------------------------------------------- |
| **`eventName`**    | <code>'soundLevelChange'</code>                         |
| **`listenerFunc`** | <code>(data: { soundLevel: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 0.0.1

--------------------


### Interfaces


#### SpeechParams

| Prop                 | Type                                              |
| -------------------- | ------------------------------------------------- |
| **`onDevice`**       | <code>boolean</code>                              |
| **`partialResults`** | <code>boolean</code>                              |
| **`sampleRate`**     | <code>number</code>                               |
| **`listenMode`**     | <code><a href="#listenmode">ListenMode</a></code> |
| **`localeStr`**      | <code>string</code>                               |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### ListenMode

| Members             |
| ------------------- |
| **`devcieDefault`** |
| **`dictation`**     |
| **`search`**        |
| **`confirmation`**  |

</docgen-api>
