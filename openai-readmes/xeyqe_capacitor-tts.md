# capacitor-tts

Capacitor tts plugin for Android.

## Install

```bash
npm install capacitor-tts
npx cap sync
```

## API

<docgen-index>

* [`speak(...)`](#speak)
* [`stop()`](#stop)
* [`getSupportedLanguages()`](#getsupportedlanguages)
* [`getSupportedVoices()`](#getsupportedvoices)
* [`getSupportedEngines()`](#getsupportedengines)
* [`switchEngine(...)`](#switchengine)
* [`getMaxSpeechInputLength()`](#getmaxspeechinputlength)
* [`getDefaults()`](#getdefaults)
* [`openInstall()`](#openinstall)
* [`addListener('progressEvent', ...)`](#addlistenerprogressevent)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### speak(...)

```typescript
speak(options: TTSOptions) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#ttsoptions">TTSOptions</a></code> |

--------------------


### stop()

```typescript
stop() => Promise<void>
```

--------------------


### getSupportedLanguages()

```typescript
getSupportedLanguages() => Promise<{ languages: string[]; }>
```

**Returns:** <code>Promise&lt;{ languages: string[]; }&gt;</code>

--------------------


### getSupportedVoices()

```typescript
getSupportedVoices() => Promise<{ voices: SpeechSynthesisVoice[]; }>
```

**Returns:** <code>Promise&lt;{ voices: SpeechSynthesisVoice[]; }&gt;</code>

--------------------


### getSupportedEngines()

```typescript
getSupportedEngines() => Promise<{ engines: SpeechSynthesisEngine[]; }>
```

**Returns:** <code>Promise&lt;{ engines: SpeechSynthesisEngine[]; }&gt;</code>

--------------------


### switchEngine(...)

```typescript
switchEngine(engineName: { engineName: string; }) => Promise<void>
```

| Param            | Type                                 |
| ---------------- | ------------------------------------ |
| **`engineName`** | <code>{ engineName: string; }</code> |

--------------------


### getMaxSpeechInputLength()

```typescript
getMaxSpeechInputLength() => Promise<{ maxSpeechInputLength: number; }>
```

**Returns:** <code>Promise&lt;{ maxSpeechInputLength: number; }&gt;</code>

--------------------


### getDefaults()

```typescript
getDefaults() => Promise<{ audioStreamType: 'DEFAULT_STREAM_TYPE'; engine: string; language: string; pan: number; pitch: number; rate: number; voiceURI: string; volume: number; }>
```

**Returns:** <code>Promise&lt;{ audioStreamType: 'DEFAULT_STREAM_TYPE'; engine: string; language: string; pan: number; pitch: number; rate: number; voiceURI: string; volume: number; }&gt;</code>

--------------------


### openInstall()

```typescript
openInstall() => Promise<void>
```

--------------------


### addListener('progressEvent', ...)

```typescript
addListener(eventName: 'progressEvent', listenerFunc: (obj: { utteranceId: string; start: number; end: number; frame: number; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'progressEvent'</code>                                                                       |
| **`listenerFunc`** | <code>(obj: { utteranceId: string; start: number; end: number; frame: number; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### TTSOptions

| Prop             | Type                                                                                                                                               | Description                                                                                                                                                                                                                            | Default          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| **`text`**       | <code>string</code>                                                                                                                                | The text that will be synthesised when the utterance is spoken.                                                                                                                                                                        |                  |
| **`rate`**       | <code>number</code>                                                                                                                                | The speed at which the utterance will be spoken at.                                                                                                                                                                                    | <code>1.0</code> |
| **`pitch`**      | <code>number</code>                                                                                                                                | The pitch at which the utterance will be spoken at.                                                                                                                                                                                    | <code>1.0</code> |
| **`volume`**     | <code>number</code>                                                                                                                                | The volume that the utterance will be spoken at.                                                                                                                                                                                       | <code>1.0</code> |
| **`pan`**        | <code>number</code>                                                                                                                                | Parameter key to specify how the speech is panned from left to right when speaking text. Pan is specified as a float ranging from -1 to +1 where -1 maps to a hard-left pan, 0 to center (the default behavior), and +1 to hard-right. | <code>0.0</code> |
| **`voiceURI`**   | <code>number</code>                                                                                                                                | The index of the selected voice that will be used to speak the utterance. Possible voices can be queried using `getSupportedVoices`.                                                                                                   |                  |
| **`streamType`** | <code>'STREAM_ALARM' \| 'STREAM_DTMF' \| 'STREAM_MUSIC' \| 'STREAM_NOTIFICATION' \| 'STREAM_RING' \| 'STREAM_SYSTEM' \| 'STREAM_VOICE_CALL'</code> | Parameter key to specify the audio stream type to be used when speaking text or playing back a file. The value should be one of the STREAM_ constants defined in AudioManager.                                                         |                  |


#### SpeechSynthesisVoice

| Prop               | Type                 | Description                                                                                                 |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------- |
| **`default`**      | <code>boolean</code> | Specifies whether the voice is the default voice for the current app (`true`) or not (`false`).             |
| **`lang`**         | <code>string</code>  | BCP 47 language tag indicating the language of the voice.                                                   |
| **`localService`** | <code>boolean</code> | Specifies whether the voice is supplied by a local (`true`) or remote (`false`) speech synthesizer service. |
| **`name`**         | <code>string</code>  | Human-readable name that represents the voice.                                                              |
| **`voiceURI`**     | <code>string</code>  | Type of URI and location of the speech synthesis service for this voice.                                    |


#### SpeechSynthesisEngine

| Prop        | Type                |
| ----------- | ------------------- |
| **`icon`**  | <code>number</code> |
| **`label`** | <code>string</code> |
| **`name`**  | <code>string</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
