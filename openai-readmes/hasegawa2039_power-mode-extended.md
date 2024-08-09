# capacitor-power-mode-extended

The [`power-mode`](https://github.com/AdlerJS/power-mode) Capacitor plugin is forked. In addition to detecting power-saving mode, it can be used to go to the battery settings screen.

## Install

You need @capacitor/core@^6.0.0

```bash
npm install capacitor-power-mode-extended
npx cap sync
```

## Usage
```js
import { registerPlugin } from '@capacitor/core'

export const PowerMode = registerPlugin("PowerModeExtended");

// Returns the status of power saving mode
PowerMode.lowPowerMode()
.then(data => {
    // It is displayed as { lowPowerModeEnabled: true/false }
    console.log(data)
})

// Open the battery settings window.
// ※iOS does not recommend going directly to the battery settings screen, so jump to the settings home screen.
PowerMode.openPowerSettings()
```

## API

<docgen-index>

* [`lowPowerModeEnabled()`](#lowpowermodeenabled)
* [`openPowerSettings()`](#openpowersettings)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### lowPowerModeEnabled()

```typescript
lowPowerModeEnabled() => Promise<{ lowPowerModeEnabled: boolean; }>
```

**Returns:** <code>Promise&lt;{ lowPowerModeEnabled: boolean; }&gt;</code>

--------------------


### openPowerSettings()

```typescript
openPowerSettings() => Promise<void>
```

--------------------

</docgen-api>

## Acknowledgements

I would like to express my sincere gratitude to the original authors and contributors of this project. Your hard work and dedication have made it possible for me to build upon your efforts. Thank you for your valuable contributions to the open-source community.

## License

This project is a fork of [power-mode](https://github.com/AdlerJS/power-mode), originally created by AdlerJS. The code in this repository is licensed under the MIT License, as per the original project.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.