# 🗣 Capacitor Text-To-Speech

## Platform

- Android

## Installation

```console
npm i capacitor-tts
```

## Getting Start

```typescript
import { TextToSpeech, Local } from 'capacitor-tts'

const tts = new TextToSpeech({
  local: Local.US,
  rate: 1.0,
  pitch: 1.0,
})

tts
  .speak({ text: 'Text to speech' })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
```

## API

#### Class

```typescript
TextToSpeech
```

#### Methods

Open Installed text to speech activity

```typescript
openInstallTts(): Promise<{value: null}>;
```

Check available languages default **Local.US**

```typescript
checkLanguage(): Promise<{values: string[]}>;
```

Set voice pitch default **1.0**

```typescript
setPitch(options: { pitch: number }): Promise<{ value: boolean }>;
```

Set talking speed default **1.0**

```typescript
setSpeechRate(options: { rate: number }): Promise<{ value: boolean }>;
```

Speak from text

```typescript
speak(options: { text: string }): Promise<{ value: boolean }>;
```

Stop text to speech engine

```typescript
stop(): Promise<{ value: boolean }>;
```

#### Types

```typescript
export interface TTSOptions {
  local: Local

  rate?: number

  pitch?: number
}
```

#### Enums

```typescript
export enum Local {
  US = 0,
  UK = 1,
  FRANCE = 2,
}
```

## Contributing

- 🌟 Star this repository
- 📋 Open issue for feature requests

## Roadmap

- [Capacitor Plugins](https://capacitor.ionicframework.com/docs/plugins/)

- [IOS](https://capacitor.ionicframework.com/docs/plugins/ios/)

- [Android](https://capacitor.ionicframework.com/docs/plugins/android/)

## License

Capacitor TextToSpeech is [MIT licensed](./LICENSE).
