---
title: "Using capacitor-android-hotspot"
description: "A tutorial on how to use the capacitor-android-hotspot package to create a local WiFi hotspot in an Android application."
created_at: "2022-02-28"
published: true
slug: "capacitor-android-hotspot"
---

# Using capacitor-android-hotspot

This tutorial will guide you through the process of using the capacitor-android-hotspot package to create a local WiFi hotspot in an Android application.

## Installation

To start, you will need to install the capacitor-android-hotspot package. You can do this by running the following command:

```bash
yarn add capacitor-android-hotspot
```

## Integration with Capacitor Android Project

Once the package is installed, you will need to integrate it into your Capacitor Android project. Follow these steps:

1. Clone the capacitor-android-hotspot repository.

2. Build the package using the `yarn build` command.

3. Add the plugin to your Capacitor Android project by running the following command:

```bash
yarn add file:/path/to/capacitor-android-hotspot
```

4. Open the `MainActivity.java` file in your Capacitor Android project.

5. Import the `AndroidHotspotPlugin` class:

```java
import com.jbaysolutions.capacitor.hotspot.AndroidHotspotPlugin;
```

6. Add the `AndroidHotspotPlugin` class to the `init` method:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(AndroidHotspotPlugin.class);
    }});
  }
}
```

## Usage in Capacitor Project

Now that the capacitor-android-hotspot package is integrated into your Capacitor Android project, you can use it in your Capacitor project.

1. Import the `Plugins` object and the `capacitor-android-hotspot` package:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-android-hotspot';

const { AndroidHotspotPlugin } = Plugins;
```

2. Use the `AndroidHotspotPlugin` object to create a local WiFi hotspot:

```javascript
// Example code for creating a WiFi hotspot
AndroidHotspotPlugin.createHotspot({
  ssid: 'MyHotspot',
  password: 'MyPassword',
  isOpen: false,
}).then(() => {
  console.log('Hotspot created successfully!');
}).catch((error) => {
  console.error('Failed to create hotspot:', error);
});
```

That's it! You have successfully used the capacitor-android-hotspot package to create a local WiFi hotspot in your Android application.

Remember that the network created by this method will not have internet access, as it is a limitation of Android.

For more information, you can refer to the [capacitor-android-hotspot documentation](https://jbaysolutions.github.io/capacitor-android-hotspot/).

I hope this tutorial has been helpful. Happy coding!