# BluetoothLEClient

[![npm version](https://badge.fury.io/js/cap-bluetooth-low-energy-client.svg)](https://badge.fury.io/js/cap-bluetooth-low-energy-client)

A client implementation for interacting with Bluetooth Low Energy peripherals.

Supported platforms

- [x] Web
- [x] Android
- [ ] iOS

## Usage

Install the plugin via npm

```
npm install --save cap-bluetooth-low-energy-client
```

In your capacitor project, make sure to register the Android plugin in
in the projects `MainActivity` as follows

```java
import com.bleclient.plugin.BluetoothLEClient;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(BluetoothLEClient.class);
    }});
  }
}
```

```typescript
import 'cap-bluetooth-low-energy-client'
import { Plugins } from '@capacitor/core'

const { BluetoothLEClient } = Plugins

//...do something with plugin
```

If you just want to use the web implementation of the plugin,
you can import it directly:

```typescript
import { BluetoothLEClient } from 'cap-bluetooth-low-energy-client'

//...do something with the plugin
```

## API Documentation

Interface and type definitions can be found [here](./src/definitions.ts).

### isAvailable

`isAvailable(): Promise<BluetoothGATTAvailabilityResult>`

Check wheter your device supports Bluetooth Low Energy.

_options_ none  
_returns_ `Promise<BluetoothGattAvailabilityResult>`

### isEnabled

`isEnabled(): Promise<BluetoothGATTEnabledResult>`

Check whether or not Bluetooth is enabled on your device.

_options_ none  
_returns_ `Promise<BluetoothGATTEnabledResult>`

### enable

`enable(): Promise<BluetoothGATTEnableResult>`

Enable Bluetooth on your device.

Note: This method is only available for Android devices at the moment.
On other platforms (e.g. Web) the `enable()` method will simply resolve.

_options_ none  
_returns_ `Promise<BluetoothGATTEnableResult>`

### scan

`scan(options: BluetoothGATTScanOptions): Promise<BluetoothGATTScanResults>`

Initiates a Bluetooth scan and returns a list of available devices to pair with.

Note: Filtering for specific service UUIDs does not work for Android at the moment.
For Web usage, in order to be able to interact with a peripheral's services, one has
to use filters when scanning.

_options_ `BluetoothGATTScanOptions`  
_returns_ `Promise<BluetoothGATTScanResults>`

### connect

`connect(options: BluetoothGATTConnectOptions): Promise<BluetoothGATTConnectResult>`

Establish connection to a peripheral's GATTServer.

_options_ `BluetoothGATTConnectOptions`  
_returns_ `Promise<BluetoothGATTConnectResult>`

### disconnect

`disconnect(options: BluetoothGATTDisconnectOptions): Promise<BluetoothGATTDisconnectResult>`

Disconnect from a peripheral's GATTServer.

_options_ `BluetoothGATTDisconnectOptions`  
_returns_ `Promise<BluetoothGATTDisconnectResult>`

### discover

`discover(options: BluetoothGATTServiceDiscoveryOptions): Promise<BluetoothGATTServiceDiscoveryResult>`

Perform service discovery on a given Peripheral.

Note: This method does not need to be called in Browsers, since service
discovery takes place implicitly.

_options_ `BluetoothGATTServiceDiscoveryOptions`  
_returns_ `Promise<BluetoothGATTServiceDiscoveryResult>`

### read

`read(options: BluetoothGATTCharacteristicReadOptions): Promise<BluetoothGATTCharacteristicReadResult>`

Read value of GATT-Characteristic.

_options_ `BluetoothGATTCharacteristicReadOptions`  
_returns_ `Promise<BluetoothGATTCharacteristicReadResult>`

### write

`write(options: BluetoothGATTCharacteristicWriteOptions): Promise<BluetoothGATTCharacteristicWriteResult>`

Write value of GATT-Characteristic.

_options_ `BluetoothGATTCharacteristicWriteOptions`  
_returns_ `Promise<BluetoothGATTCharacteristicWriteResult>`

### readDescriptor

`readDescriptor(options: BluetoothGATTDescriptorReadOptions): Promise<BluetoothGATTDescriptorReadResult>`

Read value of GATT-Descriptor.

_options_ `BluetoothGATTDescriptorReadOptions`  
_returns_ `Promise<BluetoothGATTDescriptorReadResult>`

### writeDescriptor

`writeDescriptor(options: BluetoothGATTDescriptorWriteOptions): Promise<BluetoothGATTDescriptorWriteResult>`

Write value of GATT-Descriptor.

_options_ `BluetoothGATTDescriptorWriteOptions`  
_returns_ `Promise<BluetoothGATTDescriptorWriteResult>`

### enableNotifications

`enableNotifications(options: BluetoothGATTNotificationOptions): Promise<BluetoothGATTEnableNotificationsResult>`

Be notified when the value of a GATT-Characteristic changes.
In order to retrieve the changed value, one has to use an Event Listener.
Thereby, the event name is the `string` representation of a GATT-Characteristic's Hexadecimal UUID.

```typescript
const listener = BluetoothLEClient.addListener(eventName, (data) => {
  const { value } = data
  //Do something with the data
})
```

_options_ `BluetoothGATTNotificationOptions`  
_returns_ `Promise<BluetoothGATTEnableNotificationsResult>`

### disableNotifications

`disableNotifications(options: BluetoothGATTNotificationOptions): Promise<BluetoothGATTDisableNotificationsResult>`

Stops the propagation of value changes.

Additionally, the event listener has to be removed.

```typescript
listener.remove()
```

_options_ `BluetoothGATTNotificationOptions`  
_returns_ `Promise<BluetoothGATTDisableNotificationsResult>`

### getServices

`getServices(options: GetServiceOptions): Promise<GetServiceResult>`

Retrieves a list of available GATT-Services for a given peripheral's GATT-Server.

_options_ `GetServiceOptions`  
_returns_ `Promise<GetServiceResult>`

### getService

`getService(options: GetServiceOptions): Promise<GetServiceResult>`

Retrieves a single GATT-Service, specified by UUID.

_options_ `GetServiceOptions`  
_returns_ `Promise<GetServiceResult>`

### getCharacteristics

`getCharacteristics(options: GetCharacteristicOptions): Promise<GetCharacteristicResult>`

Retrieves a list of available GATT-Characteristics for a given GATT-Service.

_options_ `GetCharacteristicOptions`  
_returns_ `Promise<GetCharacteristicResult>`

### getCharacteristic

`getCharacteristic(options: GetCharacteristicOptions): Promise<GetCharacteristicResult>`

Retrieves a single GATT-Characteristic, specified by UUID.

_options_ `GetCharacteristicOptions`  
_returns_ `Promise<GetCharacteristicResult>`
