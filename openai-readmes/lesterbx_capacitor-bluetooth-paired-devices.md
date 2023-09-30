# Capacitor Bluetooth Paired Devices Plugin

A client implementation for fetching the paired bluetooth devices

Supported platforms

- [ ] Web
- [x] Android
- [ ] iOS

## Usage

Install the plugin via npm

```
npm install --save capacitor-bluetooth-paired-devices
```

In your capacitor project, make sure to register the Android plugin in
in the projects `MainActivity` as follows

```java
import com.capacitor.paired.BluetoothPairedDevices;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(BluetoothPairedDevices.class);
        }});
    }
}
```

Use from app

```typescript
import { Plugins } from '@capacitor/core'

const { BluetoothPairedDevices } = Plugins

BluetoothPairedDevices.getPairedDevices().then((result: PairedDevices) => {
  /*
   * {
   *   devices: [{
   *     name: 'device1',
   *     address: '00:00:00:00:01'
   *   }, {
   *     name: 'device2',
   *     address: '00:00:00:00:02'
   *   }]
   * }
   */
})
```
