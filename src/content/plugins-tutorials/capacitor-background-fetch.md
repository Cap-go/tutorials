---
title: "Using @transistorsoft/capacitor-background-fetch Package"
description: "A tutorial on how to use the @transistorsoft/capacitor-background-fetch package to enable background fetch functionality in Capacitor apps."
created_at: "2021-11-19"
published: true
slug: "capacitor-background-fetch"
---

# Using @transistorsoft/capacitor-background-fetch Package

This tutorial will guide you through the process of using the `@transistorsoft/capacitor-background-fetch` package to enable background fetch functionality in Capacitor apps.

## Prerequisites

Before getting started, ensure that you have the following:

- Capacitor installed in your project
- Basic understanding of TypeScript and Angular

## Installation

To install the package, use either `yarn` or `npm`:

### With yarn

```bash
$ yarn add @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

### With npm

```bash
$ npm install --save @transistorsoft/capacitor-background-fetch
$ npx cap sync
```

## Setup Guides

### iOS Setup

For iOS, there are some additional setup steps required. Please refer to the [iOS Setup Guide](help/INSTALL-IOS.md) for detailed instructions.

### Android Setup

For Android, there are some additional setup steps required. Please refer to the [Android Setup Guide](help/INSTALL-ANDROID.md) for detailed instructions.

## Example

To demonstrate the usage of `@transistorsoft/capacitor-background-fetch`, consider the following Angular example:

```typescript
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
    const status = await BackgroundFetch.configure(
      {
        minimumFetchInterval: 15,
      },
      async (taskId) => {
        console.log('[BackgroundFetch] EVENT:', taskId);
        // Perform your work in an awaited Promise
        const result = await this.performYourWorkHere();
        console.log('[BackgroundFetch] work complete:', result);
        // Signal to the OS that your work is complete
        BackgroundFetch.finish(taskId);
      },
      async (taskId) => {
        console.log('[BackgroundFetch] TIMEOUT:', taskId);
        // Signal to the OS that your work is complete
        BackgroundFetch.finish(taskId);
      }
    );

    // Checking BackgroundFetch status
    if (status !== BackgroundFetch.STATUS_AVAILABLE) {
      if (status === BackgroundFetch.STATUS_DENIED) {
        alert('The user explicitly disabled background behavior for this app or for the whole system.');
      } else if (status === BackgroundFetch.STATUS_RESTRICTED) {
        alert('Background updates are unavailable and the user cannot enable them again.');
      }
    }
  }

  async performYourWorkHere() {
    // Your background fetch work logic goes here
    // Return a promise that resolves when the work is complete
    return new Promise((resolve) => {
      // Simulate some async work
      setTimeout(() => {
        resolve('Work done');
      }, 2000);
    });
  }
}
```

In the above example, the `initBackgroundFetch` method configures the background fetch functionality using `BackgroundFetch.configure`. It takes three parameters:

1. Options: The configuration options for background fetch, such as the minimum fetch interval.
2. Success callback: A function that will be called when a background fetch event occurs.
3. Timeout callback: A function that will be called when the remaining background time has expired.

Inside the success callback, you can perform your desired background fetch work. Make sure to call `BackgroundFetch.finish` to signal to the operating system that your work is complete.

## Conclusion

In this tutorial, we have learned how to use the `@transistorsoft/capacitor-background-fetch` package to enable background fetch functionality in Capacitor apps. By following the installation, setup, and example steps, you should now be able to implement background fetch in your own Capacitor projects. Happy coding!
