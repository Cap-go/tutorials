---
title: "Using @renearias/capacitor-chromecast-sender Package"
description: "A tutorial on how to use the @renearias/capacitor-chromecast-sender package to integrate Chromecast functionality in your Capacitor app."
created_at: "2022-06-20"
published: true
slug: capacitor-chromecast-sender
---

# Using @renearias/capacitor-chromecast-sender Package

In this tutorial, we will learn how to use the `@renearias/capacitor-chromecast-sender` package to add Chromecast functionality to your Capacitor app. The `@renearias/capacitor-chromecast-sender` package provides a set of APIs that allow you to communicate with Chromecast devices and control media playback.

## Prerequisites

Before we begin, make sure you have the following installed:

1. Node.js and npm
2. Capacitor CLI
3. A Capacitor app project set up

## Installation

To install the `@renearias/capacitor-chromecast-sender` package in your Capacitor app, run the following command:

```bash
npm install @renearias/capacitor-chromecast-sender
```

## Android Configuration

### Step 1: Register the Plugin in `MainActivity.java`

Open `android/app/src/main/java/{YOUR_PACKAGE_NAME}/MainActivity.java` and import the `ChromecastSenderPlugin`:

```java
import com.renearias.capacitor.chromecast.sender.ChromecastSenderPlugin;
```

Then add the plugin to the `initialize` method:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // ...

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // ...

      // Add this line
      add(ChromecastSenderPlugin.class);
    }});
  }
}
```

### Step 2: Add the Chromecast Receiver App ID to `strings.xml`

Open `android/app/src/main/res/values/strings.xml` and add the Chromecast Receiver App ID:

```xml
<string name="chromecast_app_id">YOUR_CHROMECAST_APP_ID</string>
```

Replace `YOUR_CHROMECAST_APP_ID` with your Chromecast Receiver App ID.

## iOS Configuration

### Step 1: Register the Plugin in `AppDelegate.swift`

Open `ios/App/AppDelegate.swift` and import the `ChromecastSenderPlugin`:

```swift
import CapacitorChromecastSender
```

Then add the plugin to the `application` method:

```swift
class AppDelegate: UIResponder, UIApplicationDelegate {
  // ...

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // ...

    // Add this line
    add(ChromecastSenderPlugin.self)

    // ...
  }
}
```

## Usage

To use the `@renearias/capacitor-chromecast-sender` package in your app, follow these steps:

1. Import the plugin in your desired file:

```javascript
import { Plugins } from '@capacitor/core';
const { ChromecastSender } = Plugins;
```

2. Use the available methods to interact with Chromecast devices. For example, to discover and connect to available Chromecast devices, you can use the `startDiscovery` method:

```javascript
ChromecastSender.startDiscovery().then(devices => {
  console.log('Discovered devices:', devices);
}).catch(error => {
  console.error('Error starting discovery:', error);
});
```

3. Refer to the plugin's documentation for more information on available methods and their usage.

And that's it! You have successfully integrated the `@renearias/capacitor-chromecast-sender` package into your Capacitor app and can now leverage Chromecast functionality.

## Conclusion

In this tutorial, we learned how to use the `@renearias/capacitor-chromecast-sender` package to add Chromecast functionality to a Capacitor app. We covered the installation process, Android and iOS configuration steps, and demonstrated basic usage of the package's APIs. You can now enhance your app by incorporating Chromecast support and providing a seamless media casting experience for your users.