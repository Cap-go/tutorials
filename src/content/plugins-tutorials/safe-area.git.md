---
"title": "Using @capacitor-community/safe-area Package Tutorial",
"description": "A complete guide on how to use the @capacitor-community/safe-area package in your web project.",
"created_at": "2024-11-13",
"published": true,
"slug": "safe-area-git"
---

# Safe Area Package Tutorial

This tutorial will guide you through the steps of using the `@capacitor-community/safe-area` package in your web project. The package allows you to expose the safe area insets from the native iOS/Android device.

## Installation

Soon(TM) - As long as the official repo isn't published this serves as a placeholder.

## Configuration

### iOS Configuration
iOS configuration details will be added here once available.

### Android Configuration
To configure the package for Android, follow these steps:
1. Register the plugin in your main activity by adding the following code snippet:
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

### Bonus Tip: Full-Screen Mode for Android
To enable full-screen mode in Android (Requires Android 28+), add the following code snippet to your main activity:
```java
@Override
public void onResume() {
  super.onResume();

  // Requires API 28+
  this.getWindow().getAttributes().layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;

  View decorView = this.getWindow().getDecorView();
}
```

## Additional Configuration

You can also customize the safe area settings in your `capacitor.config.json` or `capacitor.config.ts` file as shown below:

In `capacitor.config.json`:
```json
{
  "plugins": {
    "SafeArea": {
      "enabled": true,
      "customColorsForSystemBars": true,
      "statusBarColor": '#000000',
      "statusBarContent": 'light',
      "navigationBarColor": '#000000',
      "navigationBarContent": 'light',
      "offset": 0
    }
  }
}
```

In `capacitor.config.ts`:
```ts
/// <reference types="@capacitor-community/safe-area" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: '#000000',
      statusBarContent: 'light',
      navigationBarColor: '#000000',
      navigationBarContent: 'light',
      offset: 0,
    },
  },
};

export default config;
```