<p align="center"><a href="https://jbaysolutions.github.io/capacitor-android-hotspot/" target="_blank" rel="noopener noreferrer">
<img width="100" src="https://jbaysolutions.github.io/capacitor-android-hotspot/assets/img/logo.png" alt="Capacitor Android Hotspot"></a></p>

<h1 align="center">Capacitor-Android-Hotspot</h1>

<p align="center">
<a href="https://www.npmjs.com/package/capacitor-android-hotspot">
    <img src="https://img.shields.io/npm/v/capacitor-android-hotspot.svg"/> 
    <img src="https://img.shields.io/npm/dm/capacitor-android-hotspot.svg"/>
</a></p>

<h2 align="center">
<a href="https://jbaysolutions.github.io/capacitor-android-hotspot/" target="_blank">Documentation Website</a>
</h2>

**Current version: 0.0.8**

**NPM release: https://www.npmjs.com/package/capacitor-android-hotspot**

---

**Only for Android .... in case the name of the plugin is not explicit enough**

Capacitor plugin to allow creating a local only hotspot that an application can use to communicate
between co-located devices connected to the created WiFi hotspot.

The network created by this method **WILL NOT HAVE INTERNET ACCESS**. This is an Android _limitation_, or design decision.

Each application can make a single request for the hotspot, but multiple applications could be requesting
the hotspot at the same time. When multiple applications have successfully registered concurrently,
they will be sharing the underlying hotspot.

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
yarn add file:/path/to/capacitor-android-hotspot
```

**Now do Android Plugin integration:**

```java
package com.example.android.project;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

// ----------------- IMPORT THE PLUGIN ----------------------
import com.jbaysolutions.capacitor.hotspot.AndroidHotspotPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);

      // -------------- ADD THE PLUGIN -------------
      add(AndroidHotspotPlugin.class);
    }});
  }
}
```

- Use it on your Capacitor Project:

```javascript
// Import bits
import { Plugins } from '@capacitor/core'
import 'capacitor-android-hotspot'
const { AndroidHotspotPlugin } = Plugins

// and then use the AndroidHotspotPlugin

AndroidHotspotPlugin.hasPermissions()
AndroidHotspotPlugin.requestAndroidPermissions()
AndroidHotspotPlugin.createHotspot()
AndroidHotspotPlugin.stopHotspot()
AndroidHotspotPlugin.getHotspotConfig()
AndroidHotspotPlugin.openLocationSettings()
```
