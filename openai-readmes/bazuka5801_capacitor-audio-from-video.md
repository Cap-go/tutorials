# capacitor-audio-from-video

Exctract Audio from Video file

## Install

```bash
npm install capacitor-audio-from-video
npx cap sync
```

## API

<docgen-index>

* [`extractAudio(...)`](#extractaudio)
* [`compressVideo(...)`](#compressvideo)
* [`addListener('compressProgress', ...)`](#addlistenercompressprogress)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### extractAudio(...)

```typescript
extractAudio(options: { path: string; outputPath: string; includeData?: boolean; }) => Promise<{ path: string; dataUrl?: string; }>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ path: string; outputPath: string; includeData?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ path: string; dataUrl?: string; }&gt;</code>

--------------------


### compressVideo(...)

```typescript
compressVideo(options: { path: string; outputPath: string; width: number; height: number; bitrate: number; }) => Promise<{ path: string; }>
```

| Param         | Type                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ path: string; outputPath: string; width: number; height: number; bitrate: number; }</code> |

**Returns:** <code>Promise&lt;{ path: string; }&gt;</code>

--------------------


### addListener('compressProgress', ...)

```typescript
addListener(eventName: 'compressProgress', listenerFunc: (event: { progress: number; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                   |
| ------------------ | ------------------------------------------------------ |
| **`eventName`**    | <code>'compressProgress'</code>                        |
| **`listenerFunc`** | <code>(event: { progress: number; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
