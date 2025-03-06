# Capacitor Read Native Setting

A simple plugin to read a string from Info.plist on iOS and strings.xml on Android

## Supported platforms

- Android
- iOS

## Installation

Current release

```bash
npm install capacitor-read-native-setting
```

## iOS

Run:
```bash
npx cap sync ios
```

## Android

After you install the plugin, locate your MainActivity.java (can be found in /android/app/src/main/java/path/to/my/app/MainActivity.java)

Import the class and add

```java
// import thhe class
import com.ingageco.readnativesetting.CapacitorReadNativeSetting;

// add class inside bridge activity:
add(CapacitorReadNativeSetting.class);
```

Finally, run:
```bash
npx cap sync android
```

## Importing the Plugin

At the top of your file import Capacitor Plugins and this extract this plugin

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorReadNativeSetting } = Plugins;
```

## Methods

- Retrieve a string by key
```javascript
CapacitorReadNativeSetting.read({ key: 'STRING_KEY_NAME'})
.then((res) => {
    // print the value of the setting
    // res.value
});
