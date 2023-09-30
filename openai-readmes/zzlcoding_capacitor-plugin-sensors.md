## Capacitor Plugin Sensors

### Support platform

- android

### Install

> npm i --save capacitor-plugin-sensors

### Usage example

```typescript
import { SensorsPlugin, SensorType, Sensor } from 'capacitor-plugin-sensors/dist/esm'

// query sensors by type
SensorsPlugin.get(SensorType.ALL)
  .then((sensors) => {
    // find sensor whos type is SensorType.LIGHT
    let lightSensor: Sensor = null
    for (const sensor of sensors) {
      if (sensor.type == SensorType.LIGHT && lightSensor == null) {
        lightSensor = sensor
      }

      console.log(`get sensor: ${sensor.id}  ${sensor.name}  ${sensor.type}`)
    }

    if (lightSensor != null) {
      // start sensor and listening its values
      SensorsPlugin.start(
        lightSensor,
        (values) => {
          console.log(`get light values: ${values}`)
        },
        (error) => {
          console.error(`get light value error: ${error}`)
        },
      )
    }
  })
  .catch((e) => console.error(e))
```
