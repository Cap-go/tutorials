---
title: "Using capacitor-native-log Package"
description: "This tutorial will guide you on how to use the capacitor-native-log package to log messages in your Capacitor app."
created_at: "2022-10-20"
published: true
slug: "capacitor-native-log"
---

# Using capacitor-native-log Package

The `capacitor-native-log` package is a useful tool for logging messages in your Capacitor app. This tutorial will guide you through the installation and usage of this package.

## Installation

To get started, you need to install the `capacitor-native-log` package. Open your project's terminal and run the following command:

```bash
npm i -S capacitor-native-log
```

## Usage

Once the package is installed, you can start using it in your code. Here's an example of how to import and use the `CAPNativeLog.log` method:

```javascript
import 'capacitor-native-log';
import { Plugins } from '@capacitor/core';

const { CAPNativeLog } = Plugins;

CAPNativeLog.log({ level: 'info', message: 'Hello World!' });
```

In the above code, we import the `capacitor-native-log` package and the `Plugins` module from `@capacitor/core`. Then, we call the `CAPNativeLog.log` method with the desired log level and message.

### Android Configuration

For Android, you need to make some changes to the `MainActivity.java` file in your Android project. Follow these steps:

1. Open the `MainActivity.java` file.

2. Import the `CAPNativeLog` library by adding the following line at the top of the file:

```java
import host.mote.capacitornativelog.CAPNativeLog;
```

3. In the `this.init` function, add the `CAPNativeLog` plugin to the list of plugins. The code should look like this:

```java
// ...

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CAPNativeLog.class);
    }});

// ...
```

With these configuration changes, the `capacitor-native-log` package should now be ready to use in your Android project.

## Notes

Here are some additional notes and troubleshooting tips for using the `capacitor-native-log` package:

1. **XCode Environment Variable**: Make sure your XCode scheme does not have the `OS_ACTIVITY_MODE` environment variable set to `disable`. To check and update this setting, go to `Product > Scheme > Edit Scheme > Arguments > Environment Variables`.

2. **Console.app Settings**: In Console.app, make sure that the info and debug messages are visible. You can enable them by going to `Action > Include Info Messages / Include Debug Messages`.

3. **Troubleshooting Logging**: If you are not seeing the log messages, you can try ensuring they are enabled for your app by running the following command in the terminal:

```bash
sudo log config --subsystem your.bundle-id --mode level:debug
```

Replace `your.bundle-id` with the actual bundle ID of your app.

4. **Persistent Logging**: By default, log messages remain in memory only. If you want to persist the messages, you can run the following command:

```bash
sudo log config --subsystem your.bundle-id --mode level:debug,persist:debug
```

Again, replace `your.bundle-id` with the actual bundle ID of your app.

That's it! You have successfully learned how to install and use the `capacitor-native-log` package in your Capacitor app. Happy logging!