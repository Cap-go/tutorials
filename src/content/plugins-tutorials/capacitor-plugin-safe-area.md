---
title: "Using the capacitor-plugin-safe-area Package"
description: "Learn how to utilize the capacitor-plugin-safe-area package to access safe area insets in your Capacitor project."
created_at: "2021-10-27"
published: true
slug: "capacitor-plugin-safe-area"
---

# Using the capacitor-plugin-safe-area Package

The `capacitor-plugin-safe-area` package is a plugin that allows you to access the safe area insets from the native iOS/Android device in your Capacitor project. This can be useful when you want to design your app around the device's physical boundaries and avoid overlapping with system elements.

## Installation

To start using the `capacitor-plugin-safe-area` package, follow these steps:

1. Install the package using npm:

```bash
npm install @capacitor-community/safe-area
```

2. Sync the native files:

```bash
npx cap sync
```

## Configuration

### iOS Configuration

There is no additional configuration required for iOS. The plugin will automatically work once installed.

### Android Configuration

To configure the plugin for Android, you need to register it in your main activity. Open the `MainActivity.java` file in your Android project and add the following code:

```java
import com.getcapacitor.community.safearea.SafeAreaPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(SafeAreaPlugin.class);
    }});
  }
}
```

### Bonus Tip: Full-Screen Mode on Android

If you want to enable full-screen mode on Android (requires API 28+), you can add the following code snippet to your `MainActivity.java` file:

```java
@Override
public void onResume() {
  super.onResume();

  // Requires API 28+
  this.getWindow().getAttributes().layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;

  View decorView = this.getWindow().getDecorView();
}
```

This will enable full-screen mode and make your app utilize the entire screen real estate, including areas with display cutouts.

## Usage

Once the `capacitor-plugin-safe-area` package is installed and configured, you can start using it to access the safe area insets in your project.

In your JavaScript code, import the `SafeArea` plugin:

```javascript
import { Plugins } from '@capacitor/core';

const { SafeArea } = Plugins;
```

### Accessing Safe Area Insets

To retrieve the safe area insets, use the `getSafeAreaInsets` method:

```javascript
const safeAreaInsets = await SafeArea.getSafeAreaInsets();
```

The `getSafeAreaInsets` method returns an object with the following properties:

- `top`: The top inset in pixels.
- `bottom`: The bottom inset in pixels.
- `left`: The left inset in pixels.
- `right`: The right inset in pixels.

You can use these values to adjust your app's layout and ensure that your content remains within the safe area boundaries.

### Example Usage

Here's an example of how you can use the `capacitor-plugin-safe-area` package to adjust the layout based on safe area insets:

```javascript
import { Plugins } from '@capacitor/core';

const { SafeArea } = Plugins;

async function adjustLayout() {
  const safeAreaInsets = await SafeArea.getSafeAreaInsets();

  const { top, bottom, left, right } = safeAreaInsets;

  // Adjust layout based on safe area insets
  document.getElementById('content').style.top = `${top}px`;
  document.getElementById('content').style.bottom = `${bottom}px`;
  document.getElementById('content').style.left = `${left}px`;
  document.getElementById('content').style.right = `${right}px`;
}

adjustLayout();
```

In this example, we use the retrieved safe area insets to adjust the layout of an element with the ID `content`.

## Conclusion

The `capacitor-plugin-safe-area` package allows you to access the safe area insets from the native iOS/Android device in your Capacitor project. By utilizing this plugin, you can ensure that your app's layout respects the device's physical boundaries and prevents overlapping with system elements.

In this tutorial, we covered the installation and configuration process, as well as how to use the plugin to retrieve safe area insets and adjust your app's layout accordingly. Take advantage of this package to enhance the user experience of your Capacitor app on different devices with varying screen sizes and aspect ratios.