# mp3-hls-streaming

Stream remote HLS and MP3 streams on iOS and Android.

## Install

```bash
npm install mp3-hls-streaming
npx cap sync
```

## API

<docgen-index>

* [`play(...)`](#play)
* [`pause()`](#pause)
* [`resume()`](#resume)
* [`seekTo(...)`](#seekto)
* [`stop()`](#stop)
* [`setPlaybackRate(...)`](#setplaybackrate)
* [`addListener('error' | 'play' | 'pause' | 'stop' | 'timeUpdate' | 'buffering', ...)`](#addlistenererror--play--pause--stop--timeupdate--buffering-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### play(...)

```typescript
play(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------


### pause()

```typescript
pause() => Promise<void>
```

--------------------


### resume()

```typescript
resume() => Promise<void>
```

--------------------


### seekTo(...)

```typescript
seekTo(options: { position: number; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ position: number; }</code> |

--------------------


### stop()

```typescript
stop() => Promise<void>
```

--------------------


### setPlaybackRate(...)

```typescript
setPlaybackRate(options: { rate: number; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ rate: number; }</code> |

--------------------


### addListener('error' | 'play' | 'pause' | 'stop' | 'timeUpdate' | 'buffering', ...)

```typescript
addListener(eventName: 'play' | 'pause' | 'stop' | 'timeUpdate' | 'buffering' | 'error', listenerFunc: (data: RemoteStreamerEventData) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'error' \| 'play' \| 'pause' \| 'stop' \| 'timeUpdate' \| 'buffering'</code>             |
| **`listenerFunc`** | <code>(data: <a href="#remotestreamereventdata">RemoteStreamerEventData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### PlayEvent

| Prop       | Type                |
| ---------- | ------------------- |
| **`type`** | <code>'play'</code> |


#### PauseEvent

| Prop       | Type                 |
| ---------- | -------------------- |
| **`type`** | <code>'pause'</code> |


#### StopEvent

| Prop       | Type                |
| ---------- | ------------------- |
| **`type`** | <code>'stop'</code> |


#### TimeUpdateEvent

| Prop              | Type                      |
| ----------------- | ------------------------- |
| **`type`**        | <code>'timeUpdate'</code> |
| **`currentTime`** | <code>number</code>       |


#### BufferingEvent

| Prop              | Type                     |
| ----------------- | ------------------------ |
| **`type`**        | <code>'buffering'</code> |
| **`isBuffering`** | <code>boolean</code>     |


#### ErrorEvent

| Prop          | Type                 |
| ------------- | -------------------- |
| **`type`**    | <code>'error'</code> |
| **`message`** | <code>string</code>  |


### Type Aliases


#### RemoteStreamerEventData

<code><a href="#playevent">PlayEvent</a> | <a href="#pauseevent">PauseEvent</a> | <a href="#stopevent">StopEvent</a> | <a href="#timeupdateevent">TimeUpdateEvent</a> | <a href="#bufferingevent">BufferingEvent</a> | <a href="#errorevent">ErrorEvent</a></code>

</docgen-api>
