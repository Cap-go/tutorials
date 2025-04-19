---
"title": "Using Capacitor Sensors Package"
"description": "A markdown tutorial on how to use the @danyalwe/capacitor-sensors package in your Ionic Android project to access sensor data like magnetometer, gyroscope, and accelerometer."
"created_at": "2022-01-10"
"published": true
"slug": "capacitor-sensors.git"
---

## How to Use Capacitor Sensors Package

### Installation

```bash
npm install @danyalwe/capacitor-sensors --save
npx cap sync
```

### In your Ionic Android project, add the following code to make Capacitor aware of the plugins

```java
import com.danyalwe.sensors.Sensors;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(Sensors.class);
    }});
  }
}
```

### How to Use the Sensors

```tsx
import { Plugins } from '@capacitor/core'
import { SensorData, Sensors } from 'sensors'

useEffect(() => {
  Plugins.Sensors.addListener('magnetometerChange', (res: SensorData) => {
    setMagnetometerX(res.x)
    setMagnetometerY(res.y)
    setMagnetometerZ(res.z)
  })
  Plugins.Sensors.addListener('gyroscopeChange', (res: SensorData) => {
    setGyroscopeX(res.x)
    setGyroscopeY(res.y)
    setGyroscopeZ(res.z)
  })
  Plugins.Sensors.addListener('accelerometerChange', (res: SensorData) => {
    setAccelerometerX(res.x)
    setAccelerometerY(res.y)
    setAccelerometerZ(res.z)
  })

  return () => {
    Plugins.Sensors.removeAllListeners()
  }
}, [])
```

This tutorial provides you with the necessary information to start using the Capacitor Sensors Package in your Ionic Android project.