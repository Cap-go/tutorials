---
title: "Using Capacitor Background Fetch Plugin"
description: "A tutorial on how to use the @transistorsoft/capacitor-background-fetch package in Capacitor for background fetch in mobile apps."
created_at: "2022-02-25"
published: true
slug: capacitor-background-fetch

---

# Using Capacitor Background Fetch Plugin

This tutorial will guide you on how to use the `@transistorsoft/capacitor-background-fetch` package in Capacitor for enabling background fetch functionality in mobile apps.

## Installing the Plugin

To install the `@transistorsoft/capacitor-background-fetch` package, use either `yarn` or `npm`:

```bash
$ yarn add @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

or

```bash
$ npm install --save @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

Proceed to the [Required Setup Guides](#setup-guides) after installing the plugin.

## Setup Guides

### iOS Setup

Follow the steps for the required iOS setup in the [iOS Setup Guide](help/INSTALL-IOS.md).

### Android Setup

Follow the steps for the required Android setup in the [Android Setup Guide](help/INSTALL-ANDROID.md).

## Example

This repository includes an **Example App**. You can find it in the `/example` directory. 

#### Angular Example

Check the API Docs for the `BackgroundFetch.configure` method [here](https://transistorsoft.github.io/capacitor-background-fetch/classes/backgroundfetch.html#configure).

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
      // Perform your work in an awaited Promise
      const result = await this.performYourWorkHere();
      console.log('[BackgroundFetch] work complete:', result);
      BackgroundFetch.finish(taskId);
    }, async (taskId) => {
      console.log('[BackgroundFetch] TIMEOUT:', taskId);
      BackgroundFetch.finish(taskId);
    });

    if (status !== BackgroundFetch.STATUS_AVAILABLE) {
      if (status === BackgroundFetch.STATUS_DENIED) {
        alert('Background behavior is disabled for this app or system.');
      } else if (status === BackgroundFetch.STATUS_RESTRICTED) {
        alert('Background updates are unavailable and cannot be enabled.');
      }
    }
  }
}
```

In this example, we showcase how to use the `BackgroundFetch.configure` method with Angular for background fetching functionalities.

---

This tutorial will help you integrate background fetch capabilities into your Capacitor mobile app using the `@transistorsoft/capacitor-background-fetch` package.