# capacitor-play-audio-from-url

This capacitor plugin enables playing audio natively from a remote url, 
on web, android and ios.

## Usage

```typescript
import { PlayAudioFromUrl } from 'capacitor-play-audio-from-url'

PlayAudioFromUrl
    .play({ url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' })
    .then(() => console.log('Audio played'))
    .catch((error) => console.error('Error playing audio (e.g. failed to load)', error));
// or
try {
    await PlayAudioFromUrl.play({url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'})
    console.log('Audio played')
}catch (error) {
    console.error('Error playing audio (e.g. failed to load)', error)
}
```

## Install

```bash
npm install capacitor-play-audio-from-url
npx cap sync
```

## API

<docgen-index>

* [`play(...)`](#play)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### play(...)

```typescript
play(options: PlayOptions) => Promise<void>
```

Plays an audio file from a given URL.
In web mode, to avoid getting audio play rejected by mobile browsers when playing many audios,
the audio sources are cached in an LRU cache with 256 entries.

| Param         | Type                                                | Description                                                                                        |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#playoptions">PlayOptions</a></code> | - The options for playing the audio. Must include a `url` property with the URL of the audio file. |

--------------------


### Interfaces


#### PlayOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>


# Development

To test, it is best to link it to a project using
```bash
npm install <path-to-the-project>
```
Then lots of `npx cap sync`, `npx cap copy` and building the apps for good measure.:)