---
"title": "Using capacitor-plugin-siri-shorts Package Tutorial",
"description": "A markdown tutorial on how to use the capacitor-plugin-siri-shorts package for integrating Siri Shortcuts in Capacitor projects.",
"created_at": "2022-01-10",
"published": true,
"slug": "capacitor-plugin-siri-shortcuts.git"
---

# Using capacitor-plugin-siri-shorts Package Tutorial

In this tutorial, we will go through the steps required to integrate Siri Shortcuts in Capacitor projects using the `capacitor-plugin-siri-shorts` package.

## Prerequisites

- XCode 10 or later.
- iOS 12 platform.
- Installed `@msepena/capacitor-plugin-sirishortcuts` package using `npm i @msepena/capacitor-plugin-sirishortcuts`.

## Initializing the Plugin

To begin, add the necessary imports and configurations to your Capacitor project.

```typescript
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { SiriShortcutsPlugin } from "@msepena/capacitor-plugin-sirishortcuts";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const { StatusBar, SplashScreen, Toast, SiriShortcuts } = Plugins;
      SplashScreen.hide();

      SiriShortcuts.addListener('appLaunchBySirishortcuts', (resp) => {
        Toast.show({text: resp['deeplink']});
      });
    });
  }
}
```

## Donation of Siri Shortcuts

You can donate Siri Shortcuts using the `donate()` function. Here's an example of how to donate a Siri Shortcut to your app:

```typescript
donate() {
    const data = {
      persistentIdentifier: 'open-my-app',
      title: 'Open my app',
      suggestedInvocationPhrase: 'Open my app',
      isEligibleForSearch: true,
      userInfo: {deeplink: "home"},
      isEligibleForPrediction: true,
    }
    const { Toast, SiriShortcuts } = Plugins;

    SiriShortcuts.donate(data).then(resp => {
      Toast.show({text: "successfully donated"});
    }, error => {
      Toast.show({text: error['message']});
    });
}
```

By following these steps, you can successfully integrate and donate Siri Shortcuts in your Capacitor project using the `capacitor-plugin-siri-shorts` package.