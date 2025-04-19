---
"title": "Using capacitor-plugin-siri-shorts Package Tutorial"
"description": "This blog tutorial will guide you on how to use the capacitor-plugin-siri-shorts package to add support for donating and removing Siri Shortcuts in your Capacitor app."
"created_at": "2022-01-25"
"published": true
"slug": "capacitor-plugin-siri-shortcuts-git"
---

# Using capacitor-plugin-siri-shorts Package Tutorial

This tutorial will show you how to utilize the `capacitor-plugin-siri-shorts` package to integrate Siri Shortcuts functionality into your Capacitor app.

### Installation

First, install the `capacitor-plugin-siri-shorts` package by running the following command:

```bash
npm i @msepena/capacitor-plugin-sirishortcuts
```

### Prerequisites

Ensure that you are using XCode 10 and targeting the iOS 12 platform.

### Usage

1. Import the necessary dependencies in your app component:

```typescript
import { Plugins } from '@capacitor/core';
import { SiriShortcutsPlugin } from "@msepena/capacitor-plugin-sirishortcuts";
```

2. Initialize the Siri Shortcuts plugin in your app component:

```typescript
initializeApp() {
  this.platform.ready().then(() => {
    const { StatusBar, SplashScreen, Toast, SiriShortcuts } = Plugins;
    SplashScreen.hide();

    SiriShortcuts.addListener('appLaunchBySirishortcuts', (resp) => {
      Toast.show({text: resp['deeplink']});
    });
  });
}
```

3. Implement the donation of a Siri Shortcut by calling the `donate` method:

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
    Toast.show( {text: "successfully donated"});
  }, error => {
    Toast.show( {text: error['message']});
  });
}
```

4. Make sure to handle the appropriate listeners and responses in your app component for the Siri Shortcut functionality to work correctly.

By following these steps, you can successfully integrate Siri Shortcuts functionality using the `capacitor-plugin-siri-shorts` package in your Capacitor app.