# capacitor-yooga-zoop-sdk

Encapsulamento via Capacitor para integrar com o Zoop Java SDK.

Todas contribuições são bem vindas, o plugin ainda está em **processo de desenvolvimento** e o objetivo é encapsular o máximo possível e tornar simples e funcional no ambiente híbrido do Ionic

## Installation

```bash
$ npm i --save capacitor-yooga-zoop-sdk
```

## Android configuration

In file `android/app/src/main/java/**/**/MainActivity.java`, add the plugin to the initialization list:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  [...]
  add(com.yooga.zoop.sdk.YoogaZoopSDK.class);
  [...]
}});

```

## Usage

```typescript

import { registerWebPlugin } from '@capacitor/core';
import { YoogaZoopSDK } from 'capacitor-yooga-zoop-sdk';

export class AnyService {

  constructor() {
    window.addEventListener("showMessage", (res: any) => {
      // Messages received from the terminal
    });

    window.addEventListener("paymentSuccessful", (res: any) => {
      //
    });

    try {
      registerWebPlugin(YoogaZoopSDK)
    } catch(err) {
      console.error(err)
    }
  }

  getBluetoothDevices() {
    return Plugins.YoogaZoopSDK.getBluetoothDevices().then(res => {
      console.log(res) // Devices that already has been paired
    }).catch(err => {
      console.error(err)
    })
  }

  executeTransaction() {
    Plugins.YoogaZoopSDK.transaction({}).then(res => {
      console.log(res)
    }).catch(res => {
      console.error(res)
    })
  }

  setBluetooth(bluetooth) {

    let bluetoothObject = {
      name: bluetooth.name,
      uri: "btspp://" + bluetooth.name,
      communication: "Bluetooth",
      persistent: true,
      dateTimeDetected: "2019-08-23 10:06"
    }

    try {
      Plugins.YoogaZoopSDK.setBluetoothDevice(bluetoothObject).then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    } catch(e) {
      console.error(e)
    }
  }
```
