# capacitor-native-log

### Installation:

```
npm i -S capacitor-native-log
```

### Usage:

```javascript
import 'capacitor-native-log'
import { Plugins } from '@capacitor/core'

const { CAPNativeLog } = Plugins

CAPNativeLog.log({ level: 'info', message: 'Hello World!' })
```

### Android:

Open the `MainActivity.java` file in your android project, import the library, and `add` the plugin in the `this.init` function.

```java
// ...

import host.mote.capacitornativelog.CAPNativeLog;

// ...

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CAPNativeLog.class);
    }});
```

### Notes:

1. Make sure your XCode scheme does not have the `OS_ACTIVITY_MODE` environment variable set to `disable` (Product > Scheme > Edit Scheme > Arguments > Environment Variables)

2. In Console.app, make sure that the info and debug messages are visible: Action > Include Info Messages / Include Debug Messages

3. If you're still not seeing the messages, try ensuring they're enabled for your app:

```
sudo log config --subsystem your.bundle-id --mode level:debug
```

4. If you want to persist the messages instead of them simply remaining in memory:

```
sudo log config --subsystem your.bundle-id --mode level:debug,persist:debug
```
