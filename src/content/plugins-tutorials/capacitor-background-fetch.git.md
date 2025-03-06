---
title: "Capacitor Background Fetch Package Tutorial"
description: "A step-by-step tutorial on how to use the @transistorsoft/capacitor-background-fetch package in your Capacitor project."
created_at: "2022-01-23"
published: true
slug: capacitor-background-fetch

---

# Using Capacitor Background Fetch Package

## Installing the Plugin

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

- Proceed to **Required Setup Guides**

## Setup Guides

### iOS Setup

- [Required Setup](help/INSTALL-IOS.md)

### Android Setup

- [Required Setup](help/INSTALL-ANDROID.md)

## Example

ℹ️ This repo contains its own *Example App*. See [`/example`](./example/README.md)

#### Angular Example:

- See API Docs [**`BackgroundFetch.configure`**](https://transistorsoft.github.io/capacitor-background-fetch/classes/backgroundfetch.html#configure)

```javascript
import { Component } from '@angular/core'

import { BackgroundFetch } from '@transistorsoft/capacitor-background-fetch'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // Initialize in `ngAfterContentInit`
  // ⚠️ DO NOT use `ionViewWillEnter`, as that method won't run when app is launched in the background.
  ngAfterContentInit() {
    this.initBackgroundFetch()
  }

  async initBackgroundFetch() {
    const status = await BackgroundFetch.configure(
      {
        minimumFetchInterval: 15,
      },
      async (taskId) => {
        console.log('[BackgroundFetch] EVENT:', taskId)
        // Perform your work in an awaited Promise
        const result = await this.performYourWorkHere()
        console.log('[BackgroundFetch] work complete:', result)
        // [REQUIRED] Signal to the OS that your work is complete.
        BackgroundFetch.finish(taskId)
      },
      async (taskId) => {
        // The OS has signalled that your remaining background-time has expired.
        // You must immediately complete your work and signal #finish.
        console.log('[BackgroundFetch] TIMEOUT:', taskId)
        // [REQUIRED] Signal to the OS that your work is complete.
        BackgroundFetch.finish(taskId)
      },
    )

    // Checking BackgroundFetch status:
    if (status !== BackgroundFetch.STATUS_AVAILABLE) {
      // Uh-oh: we have a problem:
      if (status === BackgroundFetch.STATUS_DENIED) {
        alert('The user explicitly disabled background behavior for this app or for the whole system.')
      } else if (status === BackgroundFetch.STATUS_RESTRICTED) {
        alert('Background updates are unavailable and the user cannot enable them again.')
      }
    }
  }
```