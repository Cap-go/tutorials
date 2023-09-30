[![npm version](https://badge.fury.io/js/cap-sensing-kit.svg)](https://badge.fury.io/js/cap-sensing-kit)

## Installation

Install the package via npm

`npm install --save cap-sensing-kit`

In your capacitor project, make sure to register the Android plugin in in the projects MainActivity as follows

```
import com.sensingkit.plugin.SensingKit;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(SensingKit.class);
    }});
  }
}
```

In your application, use the plugin as described below

```typescript
import 'cap-sensing-kit'
import { Plugins } from '@capacitor/core'

const { SensingKit } = Plugins

//...do something with the plugin
```

If you just want to use the web implementation, you can import the plugin directly

```typescript
import { SensingKit } from 'cap-sensing-kit'
//...do something with the plugin
```

## Availability

The web implementation of this plugin uses the [Generic Sensor API](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)
which is not implemented in many Browsers by now.

| SensorType                  |            Web             |         Android         | iOS | Description                                                                                                                                   |
| --------------------------- | :------------------------: | :---------------------: | :-: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| AMBIENT_LIGHT               | <ul><li> [x] \* </li></ul> | <ul><li> [x] </li></ul> |     | Measures the ambient light level (illumination) in lx.                                                                                        |
| AMBIENT_PRESSURE            |                            | <ul><li> [x] </li></ul> |     | Measures the ambient air pressure in hPa or mbar.                                                                                             |
| AMBIENT_TEMPERATURE         |                            | <ul><li> [x] </li></ul> |     | Measures the ambient room temperature in degrees Celsius (°C).                                                                                |
| RELATIVE_HUMIDITY           |                            | <ul><li> [x] </li></ul> |     | Measures the relative ambient humidity in percent (%).                                                                                        |
| ACCELEROMETER               | <ul><li> [x] \* </li></ul> | <ul><li> [x] </li></ul> |     | Measures the acceleration force in m/s2 that is applied to a device on all three physical axes (x, y, and z), including the force of gravity. |
| GRAVITY                     |                            | <ul><li> [x] </li></ul> |     | Measures the force of gravity in m/s2 that is applied to a device on all three physical axes (x, y, z).                                       |
| GYROSCOPE                   | <ul><li> [x] \* </li></ul> | <ul><li> [x] </li></ul> |     | Measures a device's rate of rotation in rad/s around each of the three physical axes (x, y, and z).                                           |
| LINEAR_ACCELERATION         | <ul><li> [x] \* </li></ul> | <ul><li> [x] </li></ul> |     | Measures the acceleration force in m/s2 that is applied to a device on all three physical axes (x, y, and z), excluding the force of gravity. |
| ROTATION_VECTOR             |                            | <ul><li> [x] </li></ul> |     | Measures the orientation of a device by providing the three elements of the device's rotation vector.                                         |
| GAME_ROTATION_VECTOR        |                            | <ul><li> [x] </li></ul> |     |                                                                                                                                               |
| GEOMAGNETIC_ROTATION_VECTOR |                            | <ul><li> [x] </li></ul> |     |                                                                                                                                               |
| MAGENTIC_FIELD              | <ul><li> [x] \* </li></ul> | <ul><li> [x] </li></ul> |     | Measures the ambient geomagnetic field for all three physical axes (x, y, z) in μT.                                                           |
| PROXIMITY                   |                            | <ul><li> [x] </li></ul> |     | Measures the proximity of an object in cm relative to the view screen of a device.                                                            |
| ABSOLUTE_ORIENTATION        | <ul><li> [x] \* </li></ul> |                         |     |                                                                                                                                               |
| RELATIVE_ORIENTATION        | <ul><li> [x] \* </li></ul> |                         |     |                                                                                                                                               |

\* requires `chrome://flags/#enable-generic-sensor-extra-classes` to be enabled

## Usage

Below, an example of working with a mobile device's ambient light sensor

```typescript
import "cap-sensing-kit";
import {Plugins} from "@capacitor/core";
import {SensorType, sensorChangedEventName} from "cap-sensing-kit";
const {SensingKit} = Plugins;

const name = SensorType.AMBIENT_LIGHT;

const {isAvailable} = await SensingKit.isSensorAvailable({name});
const {isActive} = await SensingKit.isSensorActive({name});

if(isAvailable && !isActive){
    await SensingKit.start({name});
}

const event = sensorChangedEventName(name);
const listener = SensingKit.addListener(event, (data) => {

    //Do something ... for example:
    const {value} = data;
    console.log(`Ambient light level changed...illuminance is ${value} lx`);
};

//...

await SensingKit.stop({name});
listener.remove()
```

## API Documentation

Following, an overview over the available `SensorKit` methods

### isSensorAvailable

`isSensorAvailable(options: {name: string}): Promise<{isAvailable: boolean}>`
Checks whether a specific sensor is available on the device.
_Note_: _Since it is not possible to check whether a specific sensor is available
or not within a web browser without trying to start it, the web implementation
simply checks if the corresponding sensor API (e.g. AmbientLightSensor API) is available._

### isSensorActive

`isSensorActive(options: {name: string}): Promise<{isActive: boolean}>`
Checks whether a specific sensor was already started through the plugin.

### start

`start(options: {name: string, frequency?: number}): Promise<void>`
Starts the propagation of sensor events for the specified sensor.
With the `frequency` property, the sampling rate (in _Hz_) of the sensor can be
specified (if supported). `frequency` defaults to the maximum sampling rate (specified by browser specific Sensor API implementation) for a sensor,
in the web implementation. For Android it defaults to SENSOR*DELAY_NORMAL (5 \_Hz*).
_Note_: _Frequency is only a suggested value_

### stop

`stop(options: {name: string}): Promise<void>`
Stops the propagation of sensor events for the specified sensor.
