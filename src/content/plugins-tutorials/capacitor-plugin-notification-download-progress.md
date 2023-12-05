---
title: "Using the capacitor-notification-progressbar Package"
description: "This tutorial will guide you on how to use the capacitor-notification-progressbar package to show download progress in a notification."
created_at: "2021-11-16"
published: true
slug: "capacitor-plugin-notification-download-progress"
---

# Using the capacitor-notification-progressbar Package

The capacitor-notification-progressbar package allows you to show download progress in a notification. This tutorial will guide you through the installation and usage of this package.

## Installation

To install the capacitor-notification-progressbar package, run the following command in your project:

```shell
npm install capacitor-notification-progressbar
```

## Android Setup

1. After installing the package, run the following command to sync your project:

```shell
npx cap sync android
```

2. Locate your MainActivity.java file, usually located at `/android/app/src/main/java/path/to/my/app/MainActivity.java`.

3. Import the plugin path by adding the following line at the top of the file:

```java
import tn.converto.plugins.notification.download.progress.NotificationDownloadProgress;
```

4. Inside the `onCreate` method of the MainActivity class, add the NotificationDownloadProgress plugin class to the list of plugins:

```java
import tn.converto.plugins.notification.download.progress.NotificationDownloadProgress;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(NotificationDownloadProgress.class);
    }});
  }
}
```

## Importing the Plugin

To use the capacitor-notification-progressbar package in your code, import the plugin from the `@capacitor/core` package:

```javascript
import { Plugins } from '@capacitor/core';
const { NotificationDownloadProgress } = Plugins;
```

## Usage

### Creating a Notification

To create a notification, use the `create` method of the NotificationDownloadProgress plugin:

```javascript
NotificationDownloadProgress.create({
  contentTitle: 'Notification content title',
  contentText: 'Notification content text',
  destroyOnDone: false,
});
```

### Updating Progress

To update the progress of the notification, use the `updateProgress` method of the NotificationDownloadProgress plugin:

```javascript
NotificationDownloadProgress.updateProgress({
  progress: 50,
  doneTitle: 'Notification done title',
  doneText: 'Download complete',
});
```

## iOS Setup

Please refer to the official documentation for instructions on how to set up the capacitor-notification-progressbar package on iOS.

## Example

For a complete example, you can refer to the example project in the [capacitor-community/fcm](https://github.com/capacitor-community/fcm/tree/master/example) repository.

## License

The capacitor-notification-progressbar package is licensed under the MIT License.

## Contributors

Special thanks to the contributors of the capacitor-notification-progressbar package. Their efforts made this package possible.