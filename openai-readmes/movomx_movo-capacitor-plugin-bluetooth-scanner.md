# movo-capacitor-plugin-bluetooth-scanner

Capacitor plugin for bluetooth scanning.

Currently only supports Android. You don't need to specify any permission in the AndroidMaifest.xml neither request any permission on the MainActivity.java.

This plugin provides coverage from Android API 28 to 34.

## Install

```bash
npm install movo-capacitor-plugin-bluetooth-scanner
npx cap sync
```

## API

* [`scan(...)`](#scan)
* [`stopScan()`](#stopScan)
* [`onDeviceFound()`](#ondevicefound)
* [`onScanFinished()`](#onscanfinished)

### scan(...)

Starts the bluetooth scanning process. If a previous execution of this method was still working it will be stoped before this one starts.

If the phone bluetooth gets turn off while the scanning process is going it will reject the promise.

To see the devices discovered use the [`onDeviceFound()`](#ondevicefound) and [`onScanFinished()`](#onscanfinished) methods.

```javascript
import { BluetoothScanner } from 'movo-capacitor-plugin-bluetooth-scanner'

BluetoothScanner.scan()
  .then(console.log)
  .catch(console.error)
```

You can provide filters so you will be notified in case of specific bluetooth name or mac address matches:

```javascript
const filters = { filter: ['laptop', 'bob', 'cafebabe'] }

BluetoothScanner.scan(filters)
  .then(console.log)
  .catch(console.error)
```

In case you want to filter by a mac address you can provide the full mac address or just a segment and can be written in any of the next formats: `CA:FE:BA:BE`, `CAFEBABE`, `ca:fe:ba:be` or `cafebabe`.

This filters only helps you to clean your results in the javascript layer, but the android process to get the devices will last long the same with or without filter specified since the native libraries does not offers that feature.

Android developers page says that this process runs around 12 seconds but I have tested in environment with more than 150 devices and takes around 1 minute.


### stopScan()

Stops the current scanning process.


```javascript
import { BluetoothScanner } from 'movo-capacitor-plugin-bluetooth-scanner'

BluetoothScanner.stopScan()
  .then(console.log)
  .catch(console.error)
```


### onDeviceFound()

Gets notified every time a device is found by the scanning process.

```javascript
import { BluetoothScanner } from 'movo-capacitor-plugin-bluetooth-scanner'

BluetoothScanner.onDeviceFound()
  .then(console.log)
  .catch(console.error)

// { bluetooth_name: 'alice_laptop', mac_address: '00:00:00:00:00:00', state: 'unbounded' }
```


### onScanFinished()

Once the scan process finishes this method returns all the devices found.

```javascript
import { BluetoothScanner } from 'movo-capacitor-plugin-bluetooth-scanner'

BluetoothScanner.onScanFinished()
  .then(console.log)
  .catch(console.error)

// {
//   devices: [
//     { bluetooth_name: 'alice_laptop', mac_address: '00:00:00:00:00:00', state: 'unbounded' },
//     { bluetooth_name: 'bob_headphones', mac_address: '00:00:00:00:00:00', state: 'unbounded' }
//   ]
// }
```
