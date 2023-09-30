# capacitor notification download progress plugin

Show download progress in notification

## work in progress

The work for this plugin is in progress (Support Android done) try to support iOS and web (Any help is appretiated)

## Supported platforms

- Android

## Installation

> npm install capacitor-notification-progressbar

## Android

> npx cap sync android

After you install the plugin, locate your MainActivity.java (can be found in /android/app/src/main/java/path/to/my/app/MainActivity.java)

import plugin path

- import tn.converto.plugins.notification.download.progress.NotificationDownloadProgress;

And add Plugin class to init method

- add(NotificationDownloadProgress.class);

### Example

```java
import tn.converto.plugins.notification.download.progress.NotificationDownloadProgress;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(NotificationDownloadProgress.class);
    }});
  }
}
```

## Importing the plugin

```javascript
import { Plugins } from '@capacitor/core'
const { NotificationDownloadProgress } = Plugins
```

## Methods

- Create the notification

```javascript
NotificationDownloadProgress.create({
  contentTitle: 'Notification content title',
  contentText: 'Notification content text',
  destroyOnDone: false,
})
```

## Methods

- Update progress

```javascript
NotificationDownloadProgress.updateProgress({
  progress: 50,
  doneTitle: 'Notification done title',
  doneText: 'Download complete',
})
```
