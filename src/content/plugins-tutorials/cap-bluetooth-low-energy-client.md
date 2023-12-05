---
title: "Using cap-bluetooth-low-energy-client Package"
description:---
title: "A tutorial "Using @wattrainer on how to use the cap/cap-b-bluetooth-low-energy-client packageluetooth-low-energy-client"
description for Bluetooth Low: "A Energy communication."
 tutorial on howcreated_at: to use the "October  @wattr26, ainer/cap2021"
published: true-bluetooth-low-energy-client package
slug: to work with "cap-b Bluetooth Low Energyluetooth-low-energy in your Capacitor app."
-client"
---

# Using capcreated_at: "2022-bluetooth-low-02--energy-client Package14T09:00:00Z"


This tutorial will guide you through the processpublished: true of using the
slug: cap-bluetooth cap-bluetooth-low-energy-client-low-energy-client package to implement Bluetooth Low Energy
---

# Using @w communication in yourattrainer/c Capacitor appap-bluetooth.

## Installation

To get-low-energy-client

In this started, you tutorial, we need to install will explore how the cap-b to use theluetooth-low-energy `@w-client package.attrainer/c Open your projectap-bluetooth's root folder in a terminal-low-energy-client` package to and run the following command:

 work with Bluetooth```bash
 Low Energy (BLE) innpm install cap a Capacitor app. 

-bluetooth-low## Installation

-energy-client
To get started```

##, make sure Importing the you have Capac Package

Nextitor installed in, you need your project. to import the If not, you can install cap-bluetooth-low-energy-client it by running the following command package into your code. Add:

```bash the following import
npm install statement at the @capac top of youritor/cli
 file:

``````

Nextjavascript
import, install the 'cap-b `@wluetooth-low-energyattrainer/c-client';
``ap-bluetooth`

## Example-low-energy-client Usage

Here` package:

 is an example```bash
 usage of thenpm install @wattrainer cap-bluetooth-low-energy-client/cap-b package:

```javascript
importluetooth-low-energy-client
`` { Plugins }`

## Configuration from '@cap

Once installedacitor/core, we need';

const { to configure the BluetoothLowEnergy plugin in our } = Plugins Capacitor project. Open the;

// Scan `capac for BLE devices
BluetoothLowEnergy.startScanitor.config.json` file and();

// Connect add the following to a specific entry in the `plugins` device
Bluetooth section:

```LowEnergy.connectjson
{
({ deviceId:  "plugins 'device_id": {
   _here' });

 "@wattr// Subscribe toainer/cap receive notifications from-bluetooth-low a characteristic
-energy-client":BluetoothLowEnergy {}
  }
.subscribe({ deviceId: 'device}
```

_id_here',## Usage

 serviceUUID:Now that the plugin is installed 'service_uuid_here', characteristic and configured,UUID: ' we can startcharacteristic_uuid using it in_here' });

 our app.// Write data Import the necessary to a characteristic modules from Capac
BluetoothLowitor and theEnergy.write({ deviceId: ' `@wattrainer/cdevice_id_here', serviceUUIDap-bluetooth: 'service-low-energy-client` package in_uuid_here', your JavaScript/ characteristicUUID:TypeScript file 'characteristic:

```javascript
import {_uuid_here', value: ' Plugins } fromHello World' '@capac });
```

itor/core';
This is justimport { Bluetooth a basic exampleLowEnergyClient to get you } from '@wattrainer started. The/cap-bluetooth-low-energy cap-bluetooth-low-energy-client package provides more-client';
`` advanced features and methods for BLE communication. Make sure to refer to the package`

To scan for nearby BLE's documentation for devices, use more details.

 the `startScan` method## Conclusion

:

```javascriptIn this tutorial, we have
const { covered the basics BluetoothLowEnergy of using theClient } = Plugins;

BluetoothLowEnergyClient cap-bluetooth-low-energy-client.startScan(). package for Bluetooth Low Energy communication in a Capacthen((devices) => {
itor app.  console.log You should now(devices);
}).catch(( have a good understanding of howerror) => to integrate BLE {
  console functionality into your.error(error);
 project.

Remember});
```

 to explore theTo connect to complete documentation of a specific device the cap-b, use the `connect`luetooth-low-energy-client package to method:

``` fully leverage itsjavascript
const capabilities. Happy coding! { BluetoothLowEnergyClient } = Plugins;

BluetoothLowEnergyClient.connect(deviceId).then(() => {
  console.log('Connected to device');
}).catch((error) => {
  console.error(error);
});
```

To read the value of a characteristic, use the `readCharacteristicValue` method:

```javascript
const { BluetoothLowEnergyClient } = Plugins;

BluetoothLowEnergyClient.readCharacteristicValue(serviceUUID, characteristicUUID).then((value) => {
  console.log('Characteristic value:', value);
}).catch((error) => {
  console.error(error);
});
```

To write a value to a characteristic, use the `writeCharacteristicValue` method:

```javascript
const { BluetoothLowEnergyClient } = Plugins;

BluetoothLowEnergyClient.writeCharacteristicValue(serviceUUID, characteristicUUID, value).then(() => {
  console.log('Characteristic value written successfully');
}).catch((error) => {
  console.error(error);
});
```

## Conclusion

In this tutorial, we have learned how to use the `@wattrainer/cap-bluetooth-low-energy-client` package to work with Bluetooth Low Energy in a Capacitor app. We covered installation, configuration, and basic usage of the plugin. Now you can start building your own BLE-enabled apps using Capacitor and the `@wattrainer/cap-bluetooth-low-energy-client` package.

Remember to check the official documentation of the package for more advanced features and options. Happy coding!