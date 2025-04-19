---
title: "Using @capacitor-community/uxcam for Analytics"
description: "Learn how to integrate and use the @capacitor-community/uxcam package for analytics in your Capacitor app."
created_at: "2022-01-05"
published: true
slug: capacitor-uxcam
---

# Using @capacitor-community/uxcam for Analytics

In this tutorial, we will guide you through the process of integrating and using the `@capacitor-community/uxcam` package for analytics in your Capacitor app. 

## Installation

To get started, install the `@capacitor-community/uxcam` package from the npm repository. Run the following command in your project's root directory:

```bash
npm install @capacitor-community/uxcam
```

After installation, update your Capacitor project by executing the following commands:

```bash
ionic cap update
ionic cap copy
ionic cap sync
```

For Android, you also need to add the `UXCam` Maven repository to the build.gradle script of your project. Add the following code snippet to the `repositories` section:

```java
maven {
    url 'https://sdk.uxcam.com/android/'
}
```

Next, register the `UXCam` plugin in your main activity. Open the `MainActivity.java` file and import the `UXCamPlugin` class. Then, add the `UXCamPlugin.class` to the list of plugins in the `init` method. Your code should look like this:

```java
import com.getcapacitor.community.uxcam.UXCamPlugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            // Additional plugins you've installed go here
            // Ex: add(TotallyAwesomePlugin.class);
            add(UXCamPlugin.class);
        }});
    }
}
```

## Configuration

The `@capacitor-community/uxcam` package does not require any additional configuration. You can proceed to use the supported methods for analytics.

## Supported Methods

The `@capacitor-community/uxcam` package provides various methods for analytics. It utilizes `UXCam` for Android and iOS platforms and `FullStory` for Web/PWA. Some of the supported methods include:

- `startWithKey(key: string)`: Starts the UXCam session with the specified API key.
- `stopSession()`: Stops the current UXCam session.
- `tagScreenName(name: string)`: Tags the current screen with a custom name.
- `logEvent(event: string, properties: object)`: Logs a custom event with optional properties.

Refer to the official documentation for a complete list of supported methods and their usage.

## Conclusion

In this tutorial, we have learned how to integrate and use the `@capacitor-community/uxcam` package for analytics in your Capacitor app. We covered the installation process, configuration steps, and the supported methods for analytics. You can now leverage the power of UXCam and FullStory to gain insights into user behavior and improve your app's user experience.