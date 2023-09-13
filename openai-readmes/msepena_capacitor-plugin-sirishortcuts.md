# Capacitor Siri shortcuts

This plugin adds support for donating and removing Siri Shortcuts.

### Prerequisites

The plugin only works in XCode 10, and on the iOS 12 platform.

### Installing

npm i @msepena/capacitor-plugin-sirishortcuts

### Usage

```

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

 donate() {
    const data = {
      persistentIdentifier: 'open-my-app',
      title: 'Open my app'',
      suggestedInvocationPhrase: 'Open my app'',
      isEligibleForSearch: true,
      userInfo: {deeplink: "home"},
      isEligibleForPrediction: true,
    }
    const { Toast, SiriShortcuts } = Plugins;

    SiriShortcuts.donate(data).then(resp => {
      Toast.show( {text: "successfully donated"});
    }, error => {
      Toast.show( {text: error['message']});
    });


  }
```
