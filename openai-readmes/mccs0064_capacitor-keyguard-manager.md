# capacitor-keyguard-manager

Capacitor plugin to check if device is secure by passcode. On android it calls `Keyguard Manager`. On Ios it calls `deviceOwnerAuthentication`

# Install

`npm install capacitor-keyguard-manager@latest --save`

## Android

Register plugin to main activity (`MainActivity.java`).

```
 this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(KeyguardManagerPlugin.class);
  }});
```

## IOS

No registration required.

# Use

Calling `KeyguardManagerPlugin.isDeviceSecure()` will return a promise that resolves to: <br/>
`{value: true}` or `{value: false}`

```
import { Plugins } from '@capacitor/core';
const { KeyguardManagerPlugin } = Plugins;

const secure = async () => {
  const secure = await KeyguardManagerPlugin.isDeviceSecure(); // Example return value {value: false}
  return secure.value
}
```
