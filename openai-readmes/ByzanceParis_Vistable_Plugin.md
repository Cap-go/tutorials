# Vistable_Plugin

Capacitor BLE plugin

## Installation

npm i --save vista-ble

**Example**

```js
// Launch BLE
//
import { Plugins } from '@capacitor/core'
const { VistablePlugin } = Plugins

// into some function
const options = {
  apikey: '83dcb4b4-8d8d-4548-b0f7-86eb3bed11a7',
  name: 'lumisheets', // name of the connecter (ble-${name} for ble, or ${name}.local for wifi)
  connector: 'ble', // can be wifi
}
// console.log(options);
VistablePlugin.initManager(options).then((result) => {})

//TURN ON Light at ID 0, 1 et 2
// WIN sera de la couleur choisie, second & third, blanc
VistablePlugin.turnOn({ win: '0', second: '1', third: '2' })

//TURN OFF
VistablePlugin.turnOff()
```
