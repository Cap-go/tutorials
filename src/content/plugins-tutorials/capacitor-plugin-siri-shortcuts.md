---
title: "Using the capacitor-plugin-siri-shortcuts package"
description: "A tutorial on how to use the capacitor-plugin-siri-shortcuts package to add Siri Shortcuts to your Capacitor app."
created_at: "2021-10-15"
published: true
slug: capacitor-plugin-siri-shortcuts
---

# Using the capacitor-plugin-siri-shortcuts package

In this tutorial, we will learn how to use the capacitor-plugin-siri-shortcuts package to add Siri Shortcuts functionality to your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following:

- XCode 10 installed
- iOS 12 platform

If you don't have these prerequisites, you won't be able to use the capacitor-plugin-siri-shortcuts package.

## Installation

First, install the package using npm:

```
npm i @msepena/capacitor-plugin-sirishortcuts
```

## Usage

To use the capacitor-plugin-siri-shortcuts package, follow these steps:

1. Import the necessary modules in your app component file:

```javascript
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { SiriShortcutsPlugin } from "@msepena/capacitor-plugin-sirishortcuts";
```

2. Initialize the app and add a listener for the 'appLaunchBySirishortcuts' event:

```javascript
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

3. Implement the 'donate' function to donate a Siri Shortcut:

```javascript
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
    Toast.show( {text: "successfully donated"});
  }, error => {
    Toast.show( {text: error['message']});
  });
}
```

4. You can now call the 'donate' function to donate a Siri Shortcut whenever you want.

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-siri-shortcuts package to add Siri Shortcuts to your Capacitor app. By following the steps outlined above, you can enhance your app's user experience by allowing users to perform actions using Siri voice commands.

Remember to refer to the official documentation of the capacitor-plugin-siri-shortcuts package for more detailed information and additional features.