# capacitor-plugin-applemusic

It is in the development stage. Please do not use it.

## Install

```bash
npm install capacitor-plugin-applemusic
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`configure(...)`](#configure)
- [`isAuthorized()`](#isauthorized)
- [`hasMusicSubscription()`](#hasmusicsubscription)
- [`authorize()`](#authorize)
- [`unauthorize()`](#unauthorize)
- [`setSong(...)`](#setsong)
- [`getLibraryAlbum(...)`](#getlibraryalbum)
- [`getLibraryAlbums(...)`](#getlibraryalbums)
- [`play()`](#play)
- [`stop()`](#stop)
- [`pause()`](#pause)
- [`currentPlaybackDuration()`](#currentplaybackduration)
- [`currentPlaybackTime()`](#currentplaybacktime)
- [`seekToTime(...)`](#seektotime)
- [`setVolume(...)`](#setvolume)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### configure(...)

```typescript
configure(options: { config: MusicKit.Config; }) => Promise<{ result: boolean; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ config: Config; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### isAuthorized()

```typescript
isAuthorized() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### hasMusicSubscription()

```typescript
hasMusicSubscription() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### authorize()

```typescript
authorize() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### unauthorize()

```typescript
unauthorize() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### setSong(...)

```typescript
setSong(options: { songId: string; librarySongId?: string; previewUrl?: string; songTitle?: string; albumTitle?: string; forcePreview?: boolean; }) => Promise<{ result: boolean; librarySongId?: string; albumTitle?: string; }>
```

| Param         | Type                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ songId: string; librarySongId?: string; previewUrl?: string; songTitle?: string; albumTitle?: string; forcePreview?: boolean; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; librarySongId?: string; albumTitle?: string; }&gt;</code>

---

### getLibraryAlbum(...)

```typescript
getLibraryAlbum(options: { id?: string; title?: string; }) => Promise<{ result: boolean; album?: { title: string; id: string; tracks: { title: string; id: string; discNumber: string; trackNumber: string; }[]; }; }>
```

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code>{ id?: string; title?: string; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; album?: { title: string; id: string; tracks: { title: string; id: string; discNumber: string; trackNumber: string; }[]; }; }&gt;</code>

---

### getLibraryAlbums(...)

```typescript
getLibraryAlbums(options: { limit: number; offset: number; }) => Promise<{ result: boolean; albums: { title: string; id: string; artworkUrl?: string; }[]; hasNext: boolean; }>
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ limit: number; offset: number; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; albums: { title: string; id: string; artworkUrl?: string; }[]; hasNext: boolean; }&gt;</code>

---

### play()

```typescript
play() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### stop()

```typescript
stop() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### pause()

```typescript
pause() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### currentPlaybackDuration()

```typescript
currentPlaybackDuration() => Promise<{ result: number; }>
```

**Returns:** <code>Promise&lt;{ result: number; }&gt;</code>

---

### currentPlaybackTime()

```typescript
currentPlaybackTime() => Promise<{ result: number; }>
```

**Returns:** <code>Promise&lt;{ result: number; }&gt;</code>

---

### seekToTime(...)

```typescript
seekToTime(options: { playbackTime: number; }) => Promise<{ result: boolean; }>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ playbackTime: number; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### setVolume(...)

```typescript
setVolume(options: { volume: number; }) => Promise<{ result: boolean; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ volume: number; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### addListener(...)

```typescript
addListener(eventName: 'playbackStateDidChange', listenerFunc: PlaybackStateDidChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`eventName`**    | <code>"playbackStateDidChange"</code>                                                                                                                                    |
| **`listenerFunc`** | <code>(state: { result: "none" \| "loading" \| "playing" \| "paused" \| "stopped" \| "ended" \| "seeking" \| "waiting" \| "stalled" \| "completed"; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener(...)

```typescript
addListener(eventName: 'authorizationStatusDidChange', listenerFunc: AuthorizationStatusDidChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                              |
| ------------------ | ----------------------------------------------------------------- |
| **`eventName`**    | <code>"authorizationStatusDidChange"</code>                       |
| **`listenerFunc`** | <code>(state: { result: AuthorizationStatus; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
