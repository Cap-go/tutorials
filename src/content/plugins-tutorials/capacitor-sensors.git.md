```markdown
---
"title": "How to Use @danyalwe/capacitor-sensors Package",
"description": "This tutorial provides a step-by-step guide on how to use the @danyalwe/capacitor-sensors package in your Ionic Android project.",
"created_at": "2023-10-14",
"published": true,
"slug": "capacitor-sensors.git"
---

# How to use

### Installation

```
npm install @danyalwe/capacitor-sensors --save
npx cap sync
```

### In your Ionic Android project, add this code to make Capacitor aware of the plugins

```java
import com.danyalwe.sensors.Sensors;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(Sensors.class);
    }});
  }
}
```

### You can use the Sensors like this

```tsx
import { Plugins } from '@capacitor/core';
import { SensorData, Sensors } from 'sensors';

useEffect(() => {
  Plugins.Sensors.addListener('magnetometerChange', (res: SensorData) => {
    setMangetometerX(res.x);
    setMangetometerY(res.y);
    setMangetometerZ(res.z);
  });
  Plugins.Sensors.addListener('gyroscopeChange', (res: SensorData) => {
    setGyroscopeX(res.x);
    setGyroscopeY(res.y);
    setGyroscopeZ(res.z);
  });
  Plugins.Sensors.addListener('accelerometerChange', (res: SensorData) => {
    setAccelerometerX(res.x);
    setAccelerometerY(res.y);
    setAccelerometerZ(res.z);
  });

  return () => {
    Plugins.Sensors.removeAllListeners();
  };
}, []);
```
```  