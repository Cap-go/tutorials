<p align="center"><a href="https://jbaysolutions.github.io/capacitor-android-bluetoothmanager/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://jbaysolutions.github.io/capacitor-android-bluetoothmanager/assets/img/logo.png" alt="Capacitor Android Bluetoothmanager"></a></p>

<h1 align="center">Capacitor-Android-BluetoothManager</h1>

<p align="center">
<a href="https://www.npmjs.com/package/capacitor-android-bluetoothmanager">
    <img src="https://img.shields.io/npm/v/capacitor-android-bluetoothmanager.svg"/> 
    <img src="https://img.shields.io/npm/dm/capacitor-android-bluetoothmanager.svg"/>
</a></p>

<h2 align="center">
<a href="https://jbaysolutions.github.io/capacitor-android-bluetoothmanager/" target="_blank">Documentation Website</a>
</h2>

**Current version: 0.0.5**

**NPM release: https://www.npmjs.com/package/capacitor-android-bluetoothmanager**

---

**Only for Android .... in case the name of the plugin is not explicit enough**

Capacitor plugin to allow access to the underlying Bluetooth Manager, if one exists

**This is a work in progress for an internal project**

## How to use this

If you want to use the official version that is published on npm :

```
yarn add capacitor-android-hotspot
```

If you want to use a clone of this repository:

- Git clone this code

- Build it using : `yarn build`

- Add the plugin to your Capacitor Android Project

```
yarn add file:/path/to/capacitor-android-bluetoothmanager
```

**Now do Android Plugin integration:**

```java
package com.example.android.project;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

// ----------------- IMPORT THE PLUGIN ----------------------
import com.jbaysolutions.capacitor.bluetooth.capacitorandroidbluetoothmanager.BluetoothManagerPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);

      // -------------- ADD THE PLUGIN -------------
      add(BluetoothManagerPlugin.class);
    }});
  }
}
```

- Use it on your Capacitor Project:

```javascript
// Import bits
import { Plugins } from '@capacitor/core'
import 'capacitor-android-bluetoothmanager'
const { BluetoothManagerPlugin } = Plugins

// and then use the BluetoothManagerPlugin
```

## Methods

### initialize()

Definition: `initialize(): Promise<void>;`

This is the first method you must call on your code. What this does :

- If you don't have the permissions, a request to the user is made
- We try to get a BluetoothAdapter if there is Blurtooth Support
- We start listening for BT events.

```
BluetoothManagerPlugin.initialize()
  .then(() => {
    console.log('Initialized !')

  })
  .catch(() => {
    console.log('Dont have permissions to work with Bluetooth')

  })
```

### hasBluetoothSupport()

Definition: `hasBluetoothSupport(): Promise<{ hwSupport: boolean }>;`

```
BluetoothManagerPlugin.hasBluetoothSupport()
    .then(answer => {
        if (answer.hwSupport) {
            // YES WE HAVE SUPPORT
        } else {
            // NO WE DONT HAVE SUPPORT
        }
    })
```

### isBluetoothEnabled()

Definition: `isBluetoothEnabled(): Promise<{ enabled: boolean }>;`

Error can be thrown if the adaptor is not inited, which can happen in one of two conditions :

- initialize() was not called
- the device doesn't have BT support. IF initialize was called, you can use `hasBluetoothSupport` to check this.

```
BluetoothManagerPlugin.isBluetoothEnabled()
    .then(result => {
        console.log('Is bluetooth enabled? ' + result.enabled);
    })
    .catch(error => {
        console.log('Error : ' + JSON.stringify(error))
    })
```

### enableBluetooth()

Definition: `enableBluetooth(): Promise<void>;`

**THIS METHOD IS ASYNC!**

Error can be thrown if :

- Was not initialized
- Already Enabled
- Already busy disabling or enabling BT

```
BluetoothManagerPlugin.enableBluetooth()
    .then(()) => {
        console.log('Called, and no error happened');
    })
    .catch(error => {
        console.log('Error : ' + JSON.stringify(error))
    })
```

### disableBluetooth()

Definition: `disableBluetooth(): Promise<void>;`

**THIS METHOD IS ASYNC!**

Error can be thrown if :

- Was not initialized
- Already Disabled
- Already busy disabling or enabling BT

```
BluetoothManagerPlugin.disableBluetooth()
    .then(()) => {
        console.log('Called, and no error happened');
    })
    .catch(error => {
        console.log('Error : ' + JSON.stringify(error))
    })
```

### getName()

Definition: `getName(): Promise<{ name: string }>;`

```
BluetoothManagerPlugin.getName()
    .then((result) => {
        console.log(' The name is  : ' + result.name)
    })
    .catch(error => {
        console.log(' Hw support failure : ' + JSON.stringify(error))
    })
```

### setDeviceName()

Definition: `setDeviceName(deviceName: string): Promise<void>;`

Errors can be thrown if :

- BT adapter was not inited.
- BT adapter is in a state that does not allow for this change
- the new provided name is null .... you can't set name to null, ok?

```
BluetoothManagerPlugin.setDeviceName({
      deviceName: 'NEW_NAME_HERE'
    })
    .then(() => {
        console.log(' Name Changed !')
    })
    .catch(error => {
        console.log(' Failed for Reason: ' + JSON.stringify(error))
    })
```

## Listening to Events

When state changes happen on the BT adapter the Plugin notifies Listeners with `BluetoothManagerPluginEvent`

To listen to these events you must add a listener to it:

```
    var bluetoothEventListener = Plugins.BluetoothManagerPlugin.addListener(
        'BluetoothManagerPluginEvent',
        (result) => {

            console.log('BluetoothManagerPluginEvent : ' + JSON.stringify(result))

            if (result.eventType === 'STATE_TURNING_ON') {

            } else if (result.eventType === 'STATE_TURNING_OFF') {

            } else if (result.eventType === 'STATE_ON') {

            } else if (result.eventType === 'STATE_OFF') {

            }
        }
    )
```

Remember to unregister it when you leave and don't need to be listening anymore:

```
    this.bluetoothEventListener.remove()
```

##
