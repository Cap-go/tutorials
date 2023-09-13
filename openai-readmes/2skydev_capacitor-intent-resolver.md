# ❗️ Sorry, we are no longer performing maintenance.

We recommend that you do not use this plugin.

If you are looking for an issue related to the intent, please check the official document below
https://capacitorjs.com/docs/plugins/android#presenting-native-screens

<br/>

## Features

When running an external app in the capacitor app, make it executable

> Android requires additional plugin settings in `MainActivity.java` after installation
>
> Please refer to the explanation below

## Installation

`npm`

```bash
$ npm i capacitor-intent-resolver
```

`yarn`

```bash
$ yarn add capacitor-intent-resolver
```

## Capacitor plugin sync

Run the following command after installation

```bash
$ npx cap sync
```

## Android setting

`MainActivity.java`

```java
package com.test.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

// import CapacitorIntentResolver plugin
import com.capacitor.intent.resolver.CapacitorIntentResolver;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);

      add(CapacitorIntentResolver.class); // add CapacitorIntentResolver plugin
    }});
  }
}
```
