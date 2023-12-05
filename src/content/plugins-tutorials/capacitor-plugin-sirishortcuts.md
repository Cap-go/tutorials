---
title: "Using @msepena/capacitor-plugin-sirishortcuts Package"
description: "A tutorial on how to use the @msepena/capacitor-plugin-sirishortcuts package to add Siri Shortcuts support to your Capacitor project."
created_at: "2022-01-19"
published: true
slug: capacitor-plugin-sirishortcuts
---

# Using @msepena/capacitor-plugin-sirishortcuts Package

The "@msepena/capacitor-plugin-sirishortcuts" package allows you to easily add support for Siri Shortcuts in your Capacitor project. Siri Shortcuts enable users to perform specific actions in your app using voice commands or by creating custom shortcuts. In this tutorial, we will guide you through the process of installing and using this package in your project.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- XCode 10 or higher
- iOS 12 or higher
- Capacitor v2 or higher

## Installation

To install the "@msepena/capacitor-plugin-sirishortcuts" package, open your terminal and navigate to your project's root directory. Run the following command:

```
npm i @msepena/capacitor-plugin-sirishortcuts
```

## Usage

1. Import the required modules and plugins in your app's component file:

```typescript
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { SiriShortcutsPlugin } from "@msepena/capacitor-plugin-sirishortcuts";
```

2. Initialize the plugin in your `initializeApp` method:

```typescript
initializeApp() {
  this.platform.ready().then(() => {
    const { StatusBar, SplashScreen, Toast, SiriShortcuts } = Plugins;
    SplashScreen.hide();

    // Add listener for app launch by Siri Shortcuts
    SiriShortcuts.addListener('appLaunchBySirishortcuts', (resp) => {
      Toast.show({text: resp['deeplink']});
    });
  });
}
```

3. Create a method to donate a Siri Shortcut:

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
    Toast.show({text: "Successfully donated"});
  }, error => {
    Toast.show({text: error['message']});
  });
}
```

4. Use the `donate` method wherever you want to donate a Siri Shortcut:

```html
<button (click)="donate()">Donate Siri Shortcut</button>
```

That's it! You have successfully installed and used the "@msepena/capacitor-plugin-sirishortcuts" package in your Capacitor project. Now you can add Siri Shortcuts to enhance user experience and provide convenient shortcuts to your app's features.

Remember to handle the Siri Shortcut invocation in your app's code by listening to the "appLaunchBySirishortcuts" event.

For more information and advanced usage, refer to the official documentation of the [@msepena/capacitor-plugin-sirishortcuts](https://www.npmjs.com/package/@msepena/capacitor-plugin-sirishortcuts) package.

Enjoy building amazing Siri Shortcut-enabled apps with Capacitor!