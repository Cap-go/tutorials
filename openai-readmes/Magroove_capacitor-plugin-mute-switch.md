# capacitor-plugin-mute-switch

This package is a Capacitor Plugin based on [SoundSwitch](https://github.com/moshegottlieb/SoundSwitch) and it detects if mute switch is enabled or disabled on iOS devices.

Since there is no native iOS API to detect it, the trick is too play a short sound and measure the amount of time it took for the sound to complete playing, this way we can determine if we are in silent mode or not.

## Install

```bash
npm install capacitor-plugin-mute-switch
npx cap sync
```

## Usage

```typescript
import { MuteSwitch } from 'capacitor-plugin-mute-switch'

MuteSwitch.isMute().then((response) => console.log(response.value))

// Add Listener
const myPluginEventListener = MuteSwitch.addListener('onChange', (response) => {
  console.log('Silente Mode: ', response.isMute)
})

// Remove
myPluginEventListener.remove()
```

## Supported Methods

| Name        | Android | iOS | Web |
| :---------- | :------ | :-- | :-- |
| isMute      | ❌      | ✅  | ❌  |
| addListener | ❌      | ✅  | ❌  |

## License

[MIT](https://github.com/Magroove/capacitor-plugin-mute-switch/blob/main/LICENSE) © [Magroove](https://github.com/Magroove)

---

If you find any bugs or want to contribute to this project, feel free to send us an email:
[julobato](mailto:julianne@magroove.com) or [fafaschiavo](mailto:fabricio@magroove.com)
