---
title: "Using Capacitor Background Fetch Plugin"
description: "A step-by-step tutorial on how to use the @transistorsoft/capacitor-background-fetch package in a Capacitor project to enable background fetch functionality."
created_at: "2022-01-25"
published: true
slug: capacitor-background-fetch.git
---

# Using Capacitor Background Fetch Plugin

This tutorial will guide you through the process of integrating and using the @transistorsoft/capacitor-background-fetch package in a Capacitor project. The package enables background fetch functionality, allowing your application to fetch data in the background even when the app is not actively running.

## Installation

You can install the Capacitor Background Fetch plugin using either `yarn` or `npm`. Run one of the following commands based on your preferred package manager:

### With `yarn`

```bash
$ yarn add @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

### With `npm`

```bash
$ npm install --save @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

After installing the plugin, proceed to the required setup guides for iOS and Android platforms.

## Setup Guides

### iOS Setup

Follow the [iOS Setup Guide](help/INSTALL-IOS.md) to configure the required settings for iOS.

### Android Setup

Follow the [Android Setup Guide](help/INSTALL-ANDROID.md) to configure the required settings for Android.

## Implementation Example

Here is an example implementation using Angular and the `BackgroundFetch.configure` method from the plugin:

```javascript
import { Component } from '@angular/core';
import { BackgroundFetch } from '@transistorsoft/capacitor-background-fetch';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  ngAfterContentInit() {
    this.initBackgroundFetch();
  }

  async initBackgroundFetch() {
    const status = await BackgroundFetch.configure({
      minimumFetchInterval: 15
    }, async (taskId) => {
      console.log('[BackgroundFetch] EVENT:', taskId);
      // Perform your background work here
      // Ensure to call BackgroundFetch.finish(taskId) when work is completed
    });

    if (status !== BackgroundFetch.STATUS_AVAILABLE) {
      // Handle status scenarios (denied or restricted)
    }
  }
}
```

In the example above, replace `performYourWorkHere()` with the actual work you want to perform in the background. Remember to call `BackgroundFetch.finish(taskId)` to signal to the operating system that the work is complete.

By following this tutorial, you will be able to incorporate background fetch functionality into your Capacitor project using the @transistorsoft/capacitor-background-fetch plugin.