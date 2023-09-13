<a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
<h2><a href="https://capgo.app/">Check out: Capgo — Instant updates for capacitor</a></h2>
</div>

<h3 align="center">Native Audio</h3>
<p align="center"><strong><code>@capgo/native-audio</code></strong></p>
<p align="center">
  Capacitor plugin for playing sounds.
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" />
  <a href="https://github.com/capgo/native-audio/actions?query=workflow%3A%22Test+and+Build+Plugin%22"><img src="https://img.shields.io/github/workflow/status/@capgo/native-audio/Test%20and%20Build%20Plugin?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/capgo/native-audio"><img src="https://img.shields.io/npm/l/@capgo/native-audio?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capgo/native-audio"><img src="https://img.shields.io/npm/dw/@capgo/native-audio?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capgo/native-audio"><img src="https://img.shields.io/npm/v/@capgo/native-audio?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-6-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

# Capacitor Native Audio Plugin

Capacitor plugin for native audio engine.
Capacitor V5 - ✅ Support!

Click on video to see example 💥

[![YouTube Example](https://img.youtube.com/vi/XpUGlWWtwHs/0.jpg)](https://www.youtube.com/watch?v=XpUGlWWtwHs)

## Maintainers

| Maintainer      | GitHub                              | Social                                  |
| --------------- | ----------------------------------- | --------------------------------------- |
| Martin Donadieu | [riderx](https://github.com/riderx) | [Telegram](https://t.me/martindonadieu) |

Mainteinance Status: Actively Maintained

## Preparation

All audio files must be with the rest of your source files.

First make your sound file end up in your builded code folder, example in folder `BUILDFOLDER/assets/sounds/FILENAME.mp3`
Then use it in preload like that `assets/sounds/FILENAME.mp3`

## Installation

To use npm

```bash
npm install @capgo/native-audio
```

To use yarn

```bash
yarn add @capgo/native-audio
```

Sync native files

```bash
npx cap sync
```

On iOS, Android and Web, no further steps are needed.

## Configuration

No configuration required for this plugin.
<docgen-config>

<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

</docgen-config>

## Supported methods

| Name           | Android | iOS | Web |
| :------------- | :------ | :-- | :-- |
| configure      | ✅      | ✅  | ❌  |
| preload        | ✅      | ✅  | ✅  |
| play           | ✅      | ✅  | ✅  |
| pause          | ✅      | ✅  | ✅  |
| resume         | ✅      | ✅  | ✅  |
| loop           | ✅      | ✅  | ✅  |
| stop           | ✅      | ✅  | ✅  |
| unload         | ✅      | ✅  | ✅  |
| setVolume      | ✅      | ✅  | ✅  |
| getDuration    | ✅      | ✅  | ✅  |
| getCurrentTime | ✅      | ✅  | ✅  |
| isPlaying      | ✅      | ✅  | ✅  |

## Usage

[Example repository](https://github.com/bazuka5801/native-audio-example)

```typescript
import {NativeAudio} from '@capgo/native-audio'


/**
 * This method will load more optimized audio files for background into memory.
 * @param assetPath - relative path of the file or absolute url (file://)
 *        assetId - unique identifier of the file
 *        audioChannelNum - number of audio channels
 *        isUrl - pass true if assetPath is a `file://` url
 * @returns void
 */
NativeAudio.preload({
    assetId: "fire",
    assetPath: "assets/sounds/fire.mp3",
    audioChannelNum: 1,
    isUrl: false
});

/**
 * This method will play the loaded audio file if present in the memory.
 * @param assetId - identifier of the asset
 * @param time - (optional) play with seek. example: 6.0 - start playing track from 6 sec
 * @returns void
 */
NativeAudio.play({
    assetId: 'fire',
    // time: 6.0 - seek time
});

/**
 * This method will loop the audio file for playback.
 * @param assetId - identifier of the asset
 * @returns void
 */
NativeAudio.loop({
  assetId: 'fire',
});


/**
 * This method will stop the audio file if it's currently playing.
 * @param assetId - identifier of the asset
 * @returns void
 */
NativeAudio.stop({
  assetId: 'fire',
});

/**
 * This method will unload the audio file from the memory.
 * @param assetId - identifier of the asset
 * @returns void
 */
NativeAudio.unload({
  assetId: 'fire',
});

/**
 * This method will set the new volume for a audio file.
 * @param assetId - identifier of the asset
 *        volume - numerical value of the volume between 0.1 - 1.0
 * @returns void
 */
NativeAudio.setVolume({
  assetId: 'fire',
  volume: 0.4,
});

/**
 * this method will get the duration of an audio file.
 * only works if channels == 1
 */
NativeAudio.getDuration({
  assetId: 'fire'
})
.then(result => {
  console.log(result.duration);
})

/**
 * this method will get the current time of a playing audio file.
 * only works if channels == 1
 */
NativeAudio.getCurrentTime({
  assetId: 'fire'
});
.then(result => {
  console.log(result.currentTime);
})

/**
 * This method will return false if audio is paused or not loaded.
 * @param assetId - identifier of the asset
 * @returns {isPlaying: boolean}
 */
NativeAudio.isPlaying({
  assetId: 'fire'
})
.then(result => {
  console.log(result.isPlaying);
})
```

## API

<docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### configure(...)

```typescript
configure(options: ConfigureOptions) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#configureoptions">ConfigureOptions</a></code> |

---

### preload(...)

```typescript
preload(options: PreloadOptions) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#preloadoptions">PreloadOptions</a></code> |

---

### play(...)

```typescript
play(options: { assetId: string; time?: number; }) => Promise<void>
```

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ assetId: string; time?: number; }</code> |

---

### pause(...)

```typescript
pause(options: { assetId: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

---

### resume(...)

```typescript
resume(options: { assetId: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

---

### loop(...)

```typescript
loop(options: { assetId: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

---

### stop(...)

```typescript
stop(options: { assetId: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

---

### unload(...)

```typescript
unload(options: { assetId: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

---

### setVolume(...)

```typescript
setVolume(options: { assetId: string; volume: number; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ assetId: string; volume: number; }</code> |

---

### setRate(...)

```typescript
setRate(options: { assetId: string; rate: number; }) => Promise<void>
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ assetId: string; rate: number; }</code> |

---

### getCurrentTime(...)

```typescript
getCurrentTime(options: { assetId: string; }) => Promise<{ currentTime: number; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

**Returns:** <code>Promise&lt;{ currentTime: number; }&gt;</code>

---

### getDuration(...)

```typescript
getDuration(options: { assetId: string; }) => Promise<{ duration: number; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

**Returns:** <code>Promise&lt;{ duration: number; }&gt;</code>

---

### isPlaying(...)

```typescript
isPlaying(options: { assetId: string; }) => Promise<{ isPlaying: boolean; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ assetId: string; }</code> |

**Returns:** <code>Promise&lt;{ isPlaying: boolean; }&gt;</code>

---

### addListener('complete', ...)

```typescript
addListener(eventName: "complete", listenerFunc: CompletedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for complete event

| Param              | Type                                                            |
| ------------------ | --------------------------------------------------------------- |
| **`eventName`**    | <code>'complete'</code>                                         |
| **`listenerFunc`** | <code><a href="#completedlistener">CompletedListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 5.0.0

---

### Interfaces

#### ConfigureOptions

| Prop        | Type                 |
| ----------- | -------------------- |
| **`fade`**  | <code>boolean</code> |
| **`focus`** | <code>boolean</code> |

#### PreloadOptions

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`assetPath`**       | <code>string</code>  |
| **`assetId`**         | <code>string</code>  |
| **`volume`**          | <code>number</code>  |
| **`audioChannelNum`** | <code>number</code>  |
| **`isUrl`**           | <code>boolean</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### CompletedEvent

| Prop          | Type                | Description                | Since |
| ------------- | ------------------- | -------------------------- | ----- |
| **`assetId`** | <code>string</code> | Emit when a play completes | 5.0.0 |

### Type Aliases

#### CompletedListener

<code>(state: <a href="#completedevent">CompletedEvent</a>): void</code>

</docgen-api>
