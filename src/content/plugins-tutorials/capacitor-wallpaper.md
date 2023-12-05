---
title: "Using the capacitor-wallpaper Package"
description: "A tutorial on how to use the capacitor-wallpaper package to set wallpapers in Capacitor."
created_at: "2021-10-08"
published: true
slug: "capacitor-wallpaper"
---

# Using the capacitor-wallpaper Package

The `capacitor-wallpaper` package is a plugin for Capacitor that allows you to set wallpapers in your mobile app. This tutorial will guide you through the process of using this package in your Capacitor project.

## Installation

To install the `capacitor-wallpaper` package, run the following command in your project's root directory:

```bash
npm install capacitor-wallpaper
```

The `capacitor-wallpaper` package requires additional setup for both iOS and Android platforms.

### iOS Setup

No further steps are needed for iOS.

### Android Setup

To register the plugin in your main activity, open the `MainActivity.java` file in your Android project and add the following lines:

```java
import com.insoutt.capacitor.wallpaper.Wallpaper;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(Wallpaper.class);
    }});
  }
}
```

## Usage

First, import the `Wallpaper` plugin from the `@capacitor/core` package:

```javascript
import { Plugins } from '@capacitor/core';
const { Wallpaper } = Plugins;
```

### Usage for Android

On Android, there are two ways to set a wallpaper using the `capacitor-wallpaper` package.

1. Using a Base64 Image

You can set a wallpaper using a base64-encoded image. The image can be passed as a base64 string or as a data URL. Here is an example:

```javascript
Wallpaper.setBase64({
  base64: 'base64 image string',
  data: 'data:image/png;base64,'
}).then(() => {
  // Wallpaper set successfully
}).catch((error) => {
  // Failed to set wallpaper
});
```

2. Using an Image Located in `main/res/drawable`

You can also set a wallpaper using an image located in the `main/res/drawable` directory. Here is an example:

```javascript
Wallpaper.setImage({ 
  name: 'image_name'
}).then(() => {
  // Wallpaper set successfully
}).catch((error) => {
  // Failed to set wallpaper
});
```

That's it! You have successfully learned how to use the `capacitor-wallpaper` package to set wallpapers in your Capacitor project.

Remember to refer to the [official documentation](https://github.com/insoutt/capacitor-wallpaper) for more details and advanced usage scenarios.
